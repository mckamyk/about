import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./app.css";
import Starfield from "./components/starfield.client";
import { ClientOnly } from "remix-utils/client-only";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-gray-950"
      style={{ backgroundColor: "rgb(3 7 18)" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />

        <ClientOnly>{() => <Starfield />}</ClientOnly>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
