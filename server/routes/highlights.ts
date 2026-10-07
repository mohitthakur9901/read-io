import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { Errors } from '../lib/errors.js';

export default async function highlightsRoutes(fastify: FastifyInstance) {
  fastify.get('/api/books/:bookId/highlights', async (request, _reply) => {
    const paramsSchema = z.object({ bookId: z.string() });
    const { bookId } = paramsSchema.parse(request.params);

    const highlights = await prisma.highlight.findMany({
      where: { bookId },
    });

    return { data: highlights, meta: { total: highlights.length } };
  });

  fastify.post('/api/books/:bookId/highlights', async (request, reply) => {
    const paramsSchema = z.object({ bookId: z.string() });
    const { bookId } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      text: z.string(),
      color: z.string().optional(),
      page: z.number().optional(),
      position: z.any().optional(),
      userId: z.string().optional(),
    });

    const data = bodySchema.parse(request.body);

    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) throw Errors.NotFound('Book');
    const userId = data.userId || book.userId;

    const highlight = await prisma.highlight.create({
      data: {
        bookId,
        userId,
        text: data.text,
        color: data.color,
        page: data.page,
        position: data.position ?? {},
      },
    });

    return reply.status(201).send({ data: highlight });
  });
}
