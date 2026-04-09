async function routes(fastify, options) {
  // root route
  fastify.get("/", async (request, reply) => {
    return {
      message: "Hello from Fastify 🚀",
    };
  });

  // health check
  fastify.get("/ping", async () => {
    return { pong: true };
  });
}

export default routes;