import "./globals.css"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import { ShapesProvider } from "@electric-sql/react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <div className="App">
      <header className="">
        <img src="/logo.svg" className="mx-auto" alt="logo" />
      </header>
      <ShapesProvider>
          <Outlet />
      </ShapesProvider>
    </div>
  )
}
