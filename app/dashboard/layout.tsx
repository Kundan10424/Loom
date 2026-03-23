import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlayground } from "@/features/dashboard/actions";
import DashboardSidebar from "@/features/dashboard/components/dashboard-component";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const playgroundData = await getAllPlayground()
  
const technologyIconMap: Record<string, string> = {
  // React ecosystem
  REACTJS: "Zap",
  REACT_VITE: "Zap",

  // Next ecosystem
  NEXTJS: "Rocket",

  // Vue ecosystem
  VUE_VITE: "Leaf",
  NUXT: "Leaf",

  // Angular
  ANGULAR: "Triangle",

  // Modern frameworks
  SVELTE: "Flame",
  ASTRO: "Star",

  // Node backend frameworks
  NODE_EXPRESS: "Server",
  NODE_FASTIFY: "Gauge",
  NODE_HONO: "Cloud",
  NODE_NEST: "Layers",

  // Fullstack stacks
  MERN: "Layers",
  MEAN: "Layers",
  T3_STACK: "Boxes",
  NEXT_PRISMA: "Database",

  // Languages
  PYTHON: "Terminal",
  JAVA: "Coffee",
  GO: "Wind",
  RUST: "Settings",
  CPP: "Code",
  C: "Code",
  CSHARP: "Code",
  PHP: "Server",
  RUBY: "Gem",

  // Runtime / tooling
  DOCKER_NODE: "Container",
  DOCKER_PYTHON: "Container",
  TYPESCRIPT_NODE: "FileCode",
  BUN_APP: "Package",
  DENO_APP: "Globe"
}

const formattedPlaygroundData =
  playgroundData?.map((playground) => ({
    id: playground.id,
    name: playground.title,
    starred: playground.starmarks?.[0]?.isMarked ?? false,
    icon: technologyIconMap[playground.template] || "Code2",
  })) || [];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        <DashboardSidebar initialPlaygroundData={formattedPlaygroundData} />
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </SidebarProvider>
  );
}
