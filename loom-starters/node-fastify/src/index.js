import 'dotenv/config';
import { buildApp } from './app.js';

const PORT = process.env.PORT || 3000;

const app = await buildApp();

app.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Fastify server running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV}`);
});
