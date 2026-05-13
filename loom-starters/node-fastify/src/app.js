import Fastify from 'fastify';
import cors from '@fastify/cors';
import { userRoutes } from './routes/users.js';

export async function buildApp() {
  const app = Fastify({
    logger: process.env.NODE_ENV === 'development',
  });

  // Plugins
  await app.register(cors, { origin: true });

  // Health check
  app.get('/', async () => {
    return { status: 'ok', message: 'Fastify API is running 🚀' };
  });

  // Routes
  await app.register(userRoutes, { prefix: '/api/users' });

  return app;
}
