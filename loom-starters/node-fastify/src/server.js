import fastifyModule from "fastify";
import routes from "./routes";

const fastify = fastifyModule({
  logger: true,
});

// register routes
fastify.register(routes);

// start server
const start = async () => {
  try {
    await fastify.listen({
      port: 3000,
      host: "0.0.0.0", // important for WebContainers
    });

    console.log("🚀 Server running at http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();