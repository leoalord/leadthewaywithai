import { markdownResponse } from "../aaif-talk-directory/markdown";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(true);
}
