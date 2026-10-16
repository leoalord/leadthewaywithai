import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import styles from "./legal.module.css";

// content/makemories/*.md are verbatim copies of docs/legal/terms-of-use.md and
// docs/privacy/privacy-notice.md in leoalord/crafti-me-ai at these commits.
// Publish a new version by replacing the file and updating its commit.
export const SOURCE_COMMITS = {
  "terms-of-use.md": "ee61d22915442b0c3244694f7516d727385bd069",
  "privacy-notice.md": "ee61d22915442b0c3244694f7516d727385bd069",
} as const;

type LegalFile = keyof typeof SOURCE_COMMITS;

function renderLegalMarkdown(file: LegalFile): string {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content", "makemories", file),
    "utf8",
  );
  if (source.includes("[PUBLICATION DATE]")) {
    throw new Error(`${file}: the effective date placeholder is not filled in`);
  }
  return marked.parse(source, { async: false, gfm: true });
}

export default function LegalDocument({ file }: { file: LegalFile }) {
  return (
    <article
      className={`${styles.doc} mx-auto max-w-prose px-5 py-16 sm:px-8 sm:py-24`}
      dangerouslySetInnerHTML={{ __html: renderLegalMarkdown(file) }}
    />
  );
}
