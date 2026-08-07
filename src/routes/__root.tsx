import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PillButton } from "../components/PillButton";
import { Eyebrow } from "../components/Eyebrow";
import { useGsapFoundation } from "../lib/gsap";

function NotFoundComponent() {
  return (
    <div className="surface-midnight flex min-h-[80svh] items-center justify-center px-6 pt-24">
      <div className="max-w-md text-center">
        <Eyebrow centered>404</Eyebrow>
        <h1 className="display-h2 mt-6 text-bone">Page not found</h1>
        <p className="text-dim mt-4">
          The page you are looking for has moved or no longer exists.
        </p>
        <div className="mt-9 flex justify-center">
          <PillButton to="/">Return home</PillButton>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="surface-midnight flex min-h-[80svh] items-center justify-center px-6 pt-24">
      <div className="max-w-md text-center">
        <h1 className="display-h2 text-bone">This page didn't load</h1>
        <p className="text-dim mt-4">
          Something went wrong on our end. Try again or return home.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PillButton
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </PillButton>
          <PillButton to="/" variant="dark-secondary">
            Go home
          </PillButton>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#05080f" },
      { title: "CGE Corporate — Assets Holding Company" },
      {
        name: "description",
        content:
          "CGE Corporate is an assets holding company that owns and stewards a portfolio of operating businesses for the long term. Discipline, stewardship, and the long view.",
      },
      { name: "author", content: "CGE Corporate" },
      { property: "og:site_name", content: "CGE Corporate" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "CGE Corporate — Assets Holding Company" },
      {
        property: "og:description",
        content:
          "An assets holding company that owns and stewards a portfolio of operating businesses for the long term.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CGE Corporate — Assets Holding Company" },
      { name: "description", content: "CGE Corporate builds and stewards a portfolio of operating businesses with a focus on long-term value." },
      { property: "og:description", content: "CGE Corporate builds and stewards a portfolio of operating businesses with a focus on long-term value." },
      { name: "twitter:description", content: "CGE Corporate builds and stewards a portfolio of operating businesses with a focus on long-term value." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5bec8f80-6430-4ecb-b394-514fb04d3262/id-preview-8d505bae--117cec8e-fba8-454c-b91c-51125e823647.lovable.app-1781551451748.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5bec8f80-6430-4ecb-b394-514fb04d3262/id-preview-8d505bae--117cec8e-fba8-454c-b91c-51125e823647.lovable.app-1781551451748.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CGE Corporate",
          description: "An assets holding company.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useGsapFoundation();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      {/* Required: nested routes render here. */}
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
