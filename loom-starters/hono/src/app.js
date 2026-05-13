import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { errorHandler } from './middleware/errorHandler.js';
import { userRoutes } from './routes/users.js';

export const app = new Hono();

// Middleware
app.use('*', cors());
app.use('*', logger());

// Health check
app.get('/', (c) => {
  return c.json({ status: 'ok', message: 'Hono API is running 🚀' });
});

// Routes
app.route('/api/users', userRoutes);

// Error handler
app.onError(errorHandler);

// 404 handler
app.notFound((c) => {
  return c.json({ success: false, error: `Route ${c.req.path} not found` }, 404);
});
