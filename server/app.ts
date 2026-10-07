import fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import { errorHandler } from './middleware/error-handler.js';

import healthRoutes from './routes/health.js';
import booksRoutes from './routes/books.js';
import readingRoutes from './routes/reading.js';
import highlightsRoutes from './routes/highlights.js';
import notesRoutes from './routes/notes.js';

export async function buildApp() {
  const app = fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: true,
  });
  await app.register(helmet, {
    global: true,
  });
  await app.register(sensible);

  app.setErrorHandler(errorHandler);

  await app.register(healthRoutes);
  await app.register(booksRoutes);
  await app.register(readingRoutes);
  await app.register(highlightsRoutes);
  await app.register(notesRoutes);

  return app;
}
