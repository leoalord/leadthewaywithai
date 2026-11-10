import { isPrivatePreview, linkedinUrl, loadCatalog } from "./catalog";

const PAGE_URL = "https://www.leadthewaywithai.com/writing/aaif-talk-directory";

// Plain-text version of the directory, meant to be handed to an AI agent.
export function directoryMarkdown({ full }: { full: boolean }) {
  const catalog = loadCatalog();
  const talks = catalog?.talks ?? [];
  const lines = [
    "# AGNTCon + MCPCon North America 2026: Talk Directory",
    "",
    `Source: ${PAGE_URL}`,
    "",
  ];

  if (!talks.length) {
    lines.push("The catalog is still being reviewed. Talks will be listed here once it is cleared for publishing.");
    return lines.join("\n") + "\n";
  }

  if (isPrivatePreview(catalog)) {
    lines.push("Private review copy. It includes unlisted recordings and is not for redistribution.", "");
  }
  lines.push(
    `${talks.length} conference recordings, one section per talk. Use it to decide what to watch.`,
    "",
    "- \"Why watch\" notes and topic tags are editorial aids written for AI engineers.",
    "- Most presenter names link to the LinkedIn profile the speaker gave the conference schedule; a few were found by search and checked by hand.",
    "- Presenter and company credits follow the saved video or conference listing, which may differ from who appeared on stage.",
    full
      ? "- Publisher descriptions are quoted from YouTube."
      : `- This version leaves out the publisher descriptions. The full version is at ${PAGE_URL}-full.md`,
    "",
  );

  for (const talk of talks) {
    const presenters = talk.presenters
      .map((p) => {
        const url = linkedinUrl(p);
        const name = url ? `[${p.name}](${url})` : p.name;
        return p.company ? `${name} (${p.company})` : name;
      })
      .join("; ");
    lines.push(
      `## ${talk.title}`,
      "",
      `- Watch: https://www.youtube.com/watch?v=${talk.id}`,
      `- Presenters: ${presenters || "not listed"}`,
      `- Format: ${talk.format}`,
      `- Topics: ${talk.topics.join("; ")}`,
      `- Why watch: ${talk.whyWatch}`,
      "",
    );
    if (full && talk.description.trim()) {
      lines.push(
        "Publisher description:",
        "",
        ...talk.description.trim().split(/\r?\n/).map((line) => (line ? `> ${line}` : ">")),
        "",
      );
    }
  }
  return lines.join("\n");
}

export function markdownResponse(full: boolean) {
  const headers: Record<string, string> = { "Content-Type": "text/markdown; charset=utf-8" };
  // Keep the text copies out of search results; the HTML page is the canonical one.
  headers["X-Robots-Tag"] = "noindex";
  return new Response(directoryMarkdown({ full }), { headers });
}
