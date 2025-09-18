import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import { useState } from "react"
import { createContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export const BaseContext = createContext()

export default function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <html lang="en" data-bs-theme={theme} className="bg-dark-subtle">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="bg-dark-subtle">
        <main className="container-fluid p-0">
          <BaseContext.Provider value={{ theme, setTheme }}>
            <Outlet />
          </BaseContext.Provider>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}