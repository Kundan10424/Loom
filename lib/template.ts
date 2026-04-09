// /features/templates/paths.ts

import { Templates } from "@prisma/client";

// /features/templates/paths.ts

export const templatePaths: Record<Templates, string> = {
  // Frontend
  [Templates.REACTJS]: "/loom-starters/react",
  [Templates.REACT_VITE]: "/loom-starters/bolt-vite-react-ts",
  [Templates.NEXTJS]: "/loom-starters/nextjs",
  [Templates.VUE_VITE]: "/loom-starters/vue",
  [Templates.NUXT]: "/loom-starters/gsap-nuxt",
  [Templates.ANGULAR]: "/loom-starters/angular",
  [Templates.SVELTE]: "/loom-starters/gsap-svelte",
  [Templates.ASTRO]: "/loom-starters/astro-shadcn",

  // Backend
  [Templates.NODE_EXPRESS]: "/loom-starters/express-simple",
  [Templates.NODE_FASTIFY]: "/loom-starters/node-fastify",
  [Templates.NODE_HONO]: "/loom-starters/hono-nodejs-starter",
  [Templates.NODE_NEST]: "#",

  // FullStack
  [Templates.MERN]: "#",
  [Templates.MEAN]: "#",
  [Templates.T3_STACK]: "#",
  [Templates.NEXT_PRISMA]: "#",

  // Languages
  [Templates.PYTHON]: "#",
  [Templates.JAVA]: "#",
  [Templates.GO]: "#",
  [Templates.RUST]: "#",
  [Templates.CPP]: "#",
  [Templates.C]: "#",
  [Templates.CSHARP]: "#",
  [Templates.PHP]: "#",
  [Templates.RUBY]: "#",

  // Dev / Runtime
  [Templates.DOCKER_NODE]: "#",
  [Templates.DOCKER_PYTHON]: "#",
  [Templates.TYPESCRIPT_NODE]: "/loom-starters/typescript",
  [Templates.BUN_APP]: "#",
  [Templates.DENO_APP]: "#",
};
