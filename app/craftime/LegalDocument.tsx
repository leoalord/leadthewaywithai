import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import styles from "./legal.module.css";

// content/craftime/*.md are verbatim copies of docs/legal/terms-of-use.md and
// docs/privacy/privacy-notice.md in leoalord/crafti-me-ai at these commits.
// Publish a new version by replacing the file and updating its commit.
export const SOURCE_COMMITS = {
  "terms-of-use.md": "1cefa4d75fb575111e51bcd8b274b4438c4dbb99",
  "privacy-notice.md": "9dabc691b422e5a4b8af6e3288c1d91c57d44489",
} as const;

type LegalFile = keyof typeof SOURCE_COMMITS;

// Fills the placeholder in sources that predate the effective date being
// written into the Markdown itself.
export const PUBLICATION_DATE = "September 25, 2026";

const PLACEHOLDER = "[PUBLICATION DATE]";

function renderLegalMarkdown(file: LegalFile): string {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content", "craftime", file),
    "utf8",
  );
  const count = source.split(PLACEHOLDER).length - 1;
  if (count > 1) {
    throw new Error(`${file}: expected at most one ${PLACEHOLDER}, found ${count}`);
  }
  return marked.parse(source.replace(PLACEHOLDER, PUBLICATION_DATE), {
    async: false,
    gfm: true,
  });
}

export default function LegalDocument({ file }: { file: LegalFile }) {
  return (
    <article
      className={`${styles.doc} mx-auto max-w-prose px-5 py-16 sm:px-8 sm:py-24`}
      dangerouslySetInnerHTML={{ __html: renderLegalMarkdown(file) }}
    />
  );
}
