import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { Errors } from '../lib/errors.js';

export default async function booksRoutes(fastify: FastifyInstance) {
  fastify.get('/api/books', async (_request, _reply) => {
    const books = await prisma.book.findMany();
    return { data: books, meta: { total: books.length } };
  });

  fastify.get('/api/books/:id', async (request, _reply) => {
    const paramsSchema = z.object({ id: z.string() });
    const { id } = paramsSchema.parse(request.params);

    const book = await prisma.book.findUnique({
      where: { id },
    });

    if (!book) throw Errors.NotFound('Book');
    return { data: book };
  });

  fastify.post('/api/books', async (request, reply) => {
    const bodySchema = z.object({
      title: z.string(),
      author: z.string().optional(),
      fileType: z.enum(['PDF', 'EPUB']),
      description: z.string().optional(),
      fileUrl: z.string().optional(),
      userId: z.string().optional(), 
    });

    const data = bodySchema.parse(request.body);

    let userId = data.userId;
    if (!userId) {
      let user = await prisma.user.findFirst();
      if (!user) {
        user = await prisma.user.create({
          data: { email: 'dev@example.com', name: 'Dev User' },
        });
      }
      userId = user.id;
    }

    const book = await prisma.book.create({
      data: {
        ...data,
        userId,
      },
    });

    return reply.status(201).send({ data: book });
  });
}
