import Footer from "@/features/home/components/footer";
import Header from "@/features/home/components/header";
import React from "react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    template: "Loom - Editor ",
    default: "Loom - Code Editor For VibeCoding",
  },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />

            {/* Content Section With Grid */}
            <div className="relative">
                {/* Grid Background */}
                <div
                    className={cn(
                        "absolute inset-0 -z-10",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />

                {/* Radial Mask */}
                <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

                <main className="relative z-20 w-full">
                    {children}
                </main>
            </div>

            {/* Footer WITHOUT grid */}
            <Footer />
        </>
    );
}
