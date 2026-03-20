import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import type { Plugin } from "vite"
import { defineConfig } from "vite"
import { handleApplicationRequest } from "./server/applicationHandler"

const INTERNAL_URL_BASE = "https://internal.invalid"

type ApiMiddleware = (
  request: Parameters<typeof handleApplicationRequest>[0],
  response: Parameters<typeof handleApplicationRequest>[1],
  next: (error?: Error) => void,
) => void | Promise<void>

type MiddlewareStack = {
  use: (handler: ApiMiddleware) => unknown
}

function applicationApiPlugin(): Plugin {
  const applyMiddleware = (middlewares: MiddlewareStack) => {
    middlewares.use(async (request, response, next) => {
      const requestUrl = request.url

      if (!requestUrl) {
        next()
        return
      }

      const pathname = new URL(requestUrl, INTERNAL_URL_BASE).pathname

      if (pathname !== "/api/application") {
        next()
        return
      }

      try {
        await handleApplicationRequest(request, response)
      } catch (error) {
        next(error instanceof Error ? error : new Error("Unknown API error"))
      }
    })
  }

  return {
    name: "application-api",
    configureServer(server) {
      applyMiddleware(server.middlewares)
    },
    configurePreviewServer(server) {
      applyMiddleware(server.middlewares)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), applicationApiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})
