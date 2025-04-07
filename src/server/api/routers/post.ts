import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { posts } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";

export const postsRouter = createTRPCRouter({
  // Get all posts
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.posts.findMany({
      orderBy: desc(posts.createdAt),
    });
  }),

  // Get single post by id
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.posts.findFirst({
        where: eq(posts.id, input.id),
      });
    }),

  // Create new post
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(256),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id,
      });
    }),

  // Update post
  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1).max(256),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .update(posts)
        .set({
          name: input.name,
          updatedAt: new Date(),
        })
        .where(eq(posts.id, input.id));
    }),

  // Delete post
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.delete(posts).where(eq(posts.id, input.id));
    }),
});
