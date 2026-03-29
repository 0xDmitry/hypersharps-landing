import type { IncomingMessage, ServerResponse } from "node:http"
import { handleApplicationRequest } from "../server/applicationHandler.js"

export default async function handler(
  request: IncomingMessage & { body?: unknown },
  response: ServerResponse<IncomingMessage>,
) {
  await handleApplicationRequest(request, response)
}
