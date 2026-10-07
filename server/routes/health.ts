import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma.js';

export default async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/health', async () => {
    return { status: 'ok' };
  });

  fastify.get('/health/db', async (request, reply) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { status: 'ok', db: 'connected' };
    } catch (error) {
      request.log.error(error, 'Database connection failed');
      return reply.status(500).send({ status: 'error', db: 'disconnected' });
    }
  });
}
