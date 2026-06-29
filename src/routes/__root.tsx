import {
  Outlet,
  Scripts,
  createRootRoute,
  HeadContent,
} from "@tanstack/react-router";
import appCss from "@/app/globals.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as React from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      // MOBILE ADAPTED
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Bridger: WESTERN Wiki - Stands, Guns & Beginner Guide",
      },
      {
        name: "description",
        content:
          "Bridger Western guides for Roblox players: beginner route, codes, Stands, guns, horses, cards, progression, events, and Update 1.5.",
      },
      { name: "theme-color", content: "#020617" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="font-sans">{children}</div>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-emerald-400 focus:px-4 focus:py-2 focus:font-black focus:text-slate-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
