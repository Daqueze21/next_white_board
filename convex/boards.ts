import { v } from 'convex/values';
import { query } from './_generated/server';

export const getBoards = query({
  args: { organizationId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Unauthorized user');
    }

    const boards = await ctx.db
      .query('boards')
      .withIndex('by_organization', (q)=>
        q.eq('organizationId', args.organizationId)
      )
      .order('desc')
      .collect();

    return boards;
  },
});
