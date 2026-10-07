import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { Errors } from '../lib/errors.js';

export default async function readingRoutes(fastify: FastifyInstance) {
  fastify.get('/api/books/:bookId/progress', async (request, _reply) => {
    const paramsSchema = z.object({ bookId: z.string() });
    const { bookId } = paramsSchema.parse(request.params);

    const progress = await prisma.readingProgress.findFirst({
      where: { bookId },
    });

    if (!progress) throw Errors.NotFound('Reading Progress');
    return { data: progress };
  });

  fastify.put('/api/books/:bookId/progress', async (request, _reply) => {
    const paramsSchema = z.object({ bookId: z.string() });
    const { bookId } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      currentPage: z.number().optional(),
      currentChapter: z.number().optional(),
      progress: z.number().optional(),
      userId: z.string().optional(),
    });

    const data = bodySchema.parse(request.body);

    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) throw Errors.NotFound('Book');

    let userId = data.userId || book.userId;

    const progress = await prisma.readingProgress.upsert({
      where: {
        userId_bookId: {
          userId,
          bookId,
        },
      },
      update: {
        currentPage: data.currentPage,
        currentChapter: data.currentChapter,
        progress: data.progress,
        lastReadAt: new Date(),
      },
      create: {
        userId,
        bookId,
        currentPage: data.currentPage,
        currentChapter: data.currentChapter,
        progress: data.progress ?? 0,
      },
    });

    return { data: progress };
  });
}
