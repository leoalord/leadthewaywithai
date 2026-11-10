# AGNTCon + MCPCon North America 2026 talk catalog

Data for `/writing/agntcon-mcpcon-na-2026-talks` (see `app/writing/agntcon-mcpcon-na-2026-talks/`).

| File | Committed | What it is |
|---|---|---|
| `catalog.json` | Yes, once reviewed | The public catalog. Only rows cleared for public listing. Set `"access": "public"`. |
| `catalog.private.json` | No (gitignored) | The full local preview from the research engine, including unlisted recordings. |

The page uses `catalog.json` when it exists and falls back to `catalog.private.json`. With neither file (a deployed build before the public catalog is committed) it shows a "still being reviewed" notice.

While the loaded catalog says `"access": "private-preview"`, the page shows a "Private review" badge and tells search engines not to index it.

Shape: `{ "access": "...", "talks": [{ "id", "title", "description", "presenters": [{ "name", "company", "linkedin" (optional) }], "topics": [], "format", "whyWatch" }] }`. `id` is the YouTube video ID; watch links are built from it.

To refresh the private preview from the research engine, convert its generated `artifacts/agntcon-mcpcon-na-2026-talks/dist/catalog.js` (strip the `globalThis.AAIF_CATALOG = ` prefix and trailing `;`) into `catalog.private.json`.
