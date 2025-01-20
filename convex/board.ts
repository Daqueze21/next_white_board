import { mutation } from './_generated/server';
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

    // TODO: check to delete favorite

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
