import fs from "node:fs";
import path from "node:path";

export type Presenter = { name: string; company?: string | null; linkedin?: string | null };

// Only link to personal LinkedIn profile addresses, whatever the catalog holds.
export function linkedinUrl(presenter: Presenter) {
  const url = presenter.linkedin ?? "";
  return url.startsWith("https://www.linkedin.com/in/") ? url : null;
}

export type Talk = {
  id: string;
  title: string;
  description: string;
  presenters: Presenter[];
  topics: string[];
  format: string;
  whyWatch: string;
};

export type Catalog = { access?: string; talks: Talk[] };

const DIR = path.join(process.cwd(), "content", "agntcon-mcpcon-na-2026-talks");

// catalog.json is the reviewed, public catalog and is the only one that may be
// committed. catalog.private.json is the full local preview (unlisted
// recordings) and is gitignored, so a deployed build never contains it.
export function loadCatalog(): Catalog | null {
  for (const name of ["catalog.json", "catalog.private.json"]) {
    const file = path.join(DIR, name);
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, "utf8")) as Catalog;
    }
  }
  return null;
}

export function isPrivatePreview(catalog: Catalog | null) {
  return catalog?.access === "private-preview";
}
