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
          "BARF Guides — Build A Ring Farm Tools, Codes, Calculator & Tier List",
      },
      {
        name: "description",
        content:
          "Build A Ring Farm guides — profit calculator, active codes, seed tier list, pets, mutations, and Update 4 info for Roblox BARF.",
      },
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
