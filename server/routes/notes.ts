import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { Errors } from '../lib/errors.js';

export default async function notesRoutes(fastify: FastifyInstance) {
  fastify.get('/api/books/:bookId/notes', async (request, _reply) => {
    const paramsSchema = z.object({ bookId: z.string() });
    const { bookId } = paramsSchema.parse(request.params);

    const notes = await prisma.note.findMany({
      where: { bookId },
    });

    return { data: notes, meta: { total: notes.length } };
  });

  fastify.post('/api/books/:bookId/notes', async (request, reply) => {
    const paramsSchema = z.object({ bookId: z.string() });
    const { bookId } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      content: z.string(),
      highlightId: z.string().optional(),
      userId: z.string().optional(),
    });

    const data = bodySchema.parse(request.body);
    
    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) throw Errors.NotFound('Book');
    const userId = data.userId || book.userId;

    const note = await prisma.note.create({
      data: {
        bookId,
        userId,
        content: data.content,
        highlightId: data.highlightId,
      },
    });

    return reply.status(201).send({ data: note });
  });
}
