import { Outlet, Scripts, createRootRoute, HeadContent } from "@tanstack/react-router";
import appCss from "@/app/globals.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-ML9ZCCR4X7",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ML9ZCCR4X7');`,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="font-sans" id="root">
      <HeadContent />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Scripts />
    </div>
  );
}
