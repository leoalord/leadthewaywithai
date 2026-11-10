import type { Metadata } from "next";
import Link from "next/link";
import { isPrivatePreview, loadCatalog } from "./catalog";
import TalkDirectory from "./TalkDirectory";

const PAGE_URL = "https://www.leadthewaywithai.com/writing/agntcon-mcpcon-na-2026-talks";
const TITLE = "AGNTCon + MCPCon North America 2026 Talk Directory";
const DESCRIPTION =
  "Find an AGNTCon + MCPCon North America 2026 talk by topic, presenter, or company, with a note on why it might be worth an AI engineer's time.";

const catalog = loadCatalog();
const isPrivate = isPrivatePreview(catalog);
// Stay out of search results until a reviewed public catalog is in place.
const indexable = Boolean(catalog) && !isPrivate;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
  robots: { index: indexable, follow: indexable },
};

export default function AaifTalkDirectoryPage() {
  // Feature keynotes first while preserving playlist order within each group.
  const talks = [...(catalog?.talks ?? [])].sort(
    (a, b) => Number(b.format === "Keynote") - Number(a.format === "Keynote"),
  );

  return (
    <div className="mx-auto max-w-content px-5 2xl:max-w-[96rem] pb-8 pt-12 sm:px-8 sm:pt-16">
      <header className="max-w-prose">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sage-500">
          <Link href="/#writing" className="transition-colors hover:text-terracotta-500">
            Writing &amp; talks
          </Link>
          <span className="mx-2 text-muted" aria-hidden="true">
            /
          </span>
          Talk directory
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-5xl">
          AGNTCon + MCPCon
          <span className="mt-1.5 block text-lg font-medium text-terracotta-500 sm:text-xl">
            North America 2026
          </span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-fg/75">
          Find a talk by topic, presenter, or company. See what it covers and
          why it might be worth your time as an AI engineer.
        </p>
        {talks.length > 0 && (
          <p className="mt-4 text-base leading-relaxed text-fg/75">
            Asking an agent what to watch? Give it the{" "}
            <a
              href="/writing/agntcon-mcpcon-na-2026-talks.md"
              className="font-medium text-slateblue-500 underline underline-offset-4 transition-colors hover:text-terracotta-500"
            >
              plain-text version
            </a>{" "}
            or the{" "}
            <a
              href="/writing/agntcon-mcpcon-na-2026-talks-full.md"
              className="font-medium text-slateblue-500 underline underline-offset-4 transition-colors hover:text-terracotta-500"
            >
              version with full descriptions
            </a>
            .
          </p>
        )}
        {isPrivate && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slateblue-500/40 bg-slateblue-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-slateblue-500">
            Private review · Includes unlisted recordings
          </p>
        )}
      </header>

      {talks.length > 0 ? (
        <TalkDirectory talks={talks} />
      ) : (
        <p className="mt-12 max-w-prose rounded-2xl border border-line bg-surface/60 p-8 text-fg/75">
          The catalog is still being reviewed. The directory will appear here
          once the talk list is cleared for publishing.
        </p>
      )}

      <p className="mt-12 max-w-prose text-sm leading-relaxed text-muted">
        Descriptions come from YouTube. Presenter and company credits follow
        the saved video or conference listing, which may differ from who
        appeared on stage. Most presenter names link to the LinkedIn profile
        the speaker gave the conference schedule; a few were found by search
        and checked by hand. Topic tags and watch notes are editorial aids.
      </p>
    </div>
  );
}
