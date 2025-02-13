import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

const images = [
  '/placeholders/1.svg',
  '/placeholders/2.svg',
  '/placeholders/3.svg',
  '/placeholders/4.svg',
  '/placeholders/5.svg',
  '/placeholders/6.svg',
  '/placeholders/7.svg',
  '/placeholders/8.svg',
  '/placeholders/9.svg',
  '/placeholders/10.svg',
];

export const createBoard = mutation({
  args: {
    title: v.string(),
    organizationId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Unauthorized user');
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert('boards', {
      title: args.title,
      organizationId: args.organizationId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});

export const removeBoard = mutation({
  args: {
    id: v.id('boards'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Unauthorized user');
    }

    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query('userFavorites')
      .withIndex('by_user_board', (q) =>
        q.eq('userId', userId).eq('boardId', args.id)
      )
      .unique();

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id);
    }

    await ctx.db.delete(args.id);
  },
});

export const updateBoard = mutation({
  args: {
    id: v.id('boards'),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const title = args.title.trim();

    if (!identity) {
      throw new Error('Unauthorized user');
    }

    if (!title) {
      throw new Error('Title is required');
    }

    if (title.length > 50) {
      throw new Error('Title cannot be longer than 50 characters');
    }

    const board = await ctx.db.patch(args.id, {
      title: title,
    });

    return board;
  },
});

export const favorite = mutation({
  args: {
    id: v.id('boards'),
    organizationId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Unauthorized user');
    }

    const board = await ctx.db.get(args.id);

    if (!board) {
      throw new Error('Board not found');
    }

    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query('userFavorites')
      .withIndex('by_user_board', (q) =>
        q.eq('userId', userId).eq('boardId', board._id)
      )
      .unique();

    if (existingFavorite) {
      throw new Error('Board already in favorites');
    }

    await ctx.db.insert('userFavorites', {
      userId,
      boardId: board._id,
      organizationId: args.organizationId,
    });

    return board;
  },
});

export const unfavorite = mutation({
  args: {
    id: v.id('boards'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Unauthorized user');
    }

    const board = await ctx.db.get(args.id);

    if (!board) {
      throw new Error('Board not found');
    }

    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query('userFavorites')
      .withIndex('by_user_board_organization', (q) =>
        q
          .eq('userId', userId)
          .eq('boardId', board._id)
          .eq('organizationId', board.organizationId)
      )
      .unique();

    if (!existingFavorite) {
      throw new Error('Favorite board not found');
    }

    await ctx.db.delete(existingFavorite._id);

    return board;
  },
});

export const getBoard  = query({
  args:  {id: v.id('boards')},
  handler: async (ctx, args) => {
    const board = ctx.db.get(args.id);

    return board
  }
})