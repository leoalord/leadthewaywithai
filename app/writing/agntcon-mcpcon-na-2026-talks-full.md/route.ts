import { markdownResponse } from "../agntcon-mcpcon-na-2026-talks/markdown";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(true);
}
