"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Presenter, Talk } from "./catalog";
import LabelIcon from "./icons";

function fold(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort();
}

// Mirrors linkedinUrl in catalog.ts, which cannot be imported into client code.
function profileUrl(presenter: Presenter) {
  const url = presenter.linkedin ?? "";
  return url.startsWith("https://www.linkedin.com/in/") ? url : null;
}

const fieldLabel =
  "font-mono text-xs font-semibold uppercase tracking-widest text-muted 2xl:text-[13px]";
const control =
  "h-11 w-full min-w-0 rounded-lg border border-line bg-surface px-3 font-display text-base text-fg placeholder:text-muted transition-colors hover:border-slateblue-500/50 focus-visible:border-terracotta-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500";

export default function TalkDirectory({ talks }: { talks: Talk[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const topics = useMemo(() => unique(talks.flatMap((t) => t.topics)), [talks]);
  const formats = useMemo(() => unique(talks.map((t) => t.format)), [talks]);
  const indexed = useMemo(
    () =>
      talks.map((talk) => ({
        talk,
        text: fold(
          [
            talk.title,
            talk.description,
            talk.whyWatch,
            talk.format,
            ...talk.topics,
            ...talk.presenters.flatMap((p) => [p.name, p.company ?? ""]),
          ].join(" "),
        ),
      })),
    [talks],
  );

  // Restore filters from the URL so shared links open on the same view.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const match = (options: string[], key: string) => {
      const wanted = fold(params.get(key) ?? "");
      return options.find((option) => fold(option) === wanted) ?? "";
    };
    setQuery(params.get("q") ?? "");
    setTopic(match(topics, "topic"));
    setFormat(match(formats, "format"));
    setReady(true);
  }, [topics, formats]);

  useEffect(() => {
    if (!ready) return;
    const url = new URL(window.location.href);
    const entries: [string, string][] = [
      ["q", query.trim()],
      ["topic", topic],
      ["format", format],
    ];
    for (const [key, value] of entries) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", url);
  }, [ready, query, topic, format]);

  const matching = useMemo(() => {
    const terms = fold(query).trim().split(/\s+/).filter(Boolean);
    return indexed
      .filter(
        ({ talk, text }) =>
          (!topic || talk.topics.includes(topic)) &&
          (!format || talk.format === format) &&
          terms.every((term) => text.includes(term)),
      )
      .map(({ talk }) => talk);
  }, [indexed, query, topic, format]);

  const filtered = Boolean(query.trim() || topic || format);

  function clear() {
    setQuery("");
    setTopic("");
    setFormat("");
    searchRef.current?.focus();
  }

  return (
    <div className="mt-10 grid gap-x-8 gap-y-6 lg:grid-cols-[15rem_minmax(0,1fr)] 2xl:grid-cols-[17rem_minmax(0,1fr)] 2xl:gap-x-10">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <section
          aria-label="Search and filters"
          className="grid grid-cols-2 gap-4 rounded-xl border border-line bg-surface/60 p-4 lg:grid-cols-1"
        >
          <label className="col-span-2 grid gap-1.5 lg:col-span-1">
            <span className={fieldLabel}>Search talks</span>
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="MCP, evals, a name"
              autoComplete="off"
              className={control}
            />
          </label>
          <label className="grid min-w-0 gap-1.5">
            <span className={fieldLabel}>Topic</span>
            <select value={topic} onChange={(e) => setTopic(e.target.value)} className={control}>
              <option value="">All topics</option>
              {topics.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label className="grid min-w-0 gap-1.5">
            <span className={fieldLabel}>Format</span>
            <select value={format} onChange={(e) => setFormat(e.target.value)} className={control}>
              <option value="">All formats</option>
              {formats.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <div className="col-span-2 flex items-center justify-between gap-3 lg:col-span-1">
            <p role="status" className="text-base text-fg/80">
              {matching.length ? (
                <>
                  <span className="font-display font-semibold text-fg">{matching.length}</span> of{" "}
                  {talks.length} talks
                </>
              ) : (
                "No talks match"
              )}
            </p>
            {filtered && (
              <button
                type="button"
                onClick={clear}
                className="font-display text-sm font-medium text-terracotta-500 underline-offset-4 hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </section>
      </aside>

      <div>
        {matching.length === 0 && (
          <p className="rounded-xl border border-line bg-surface/60 p-6 text-fg/80">
            No talks match. Try changing your search or clearing the filters.
          </p>
        )}
        <ul className="grid gap-5 2xl:gap-6">
          {matching.map((talk) => {
            const isOpen = Boolean(open[talk.id]);
            const panelId = `description-${talk.id}`;
            return (
              <li key={talk.id}>
                <article className="grid gap-x-8 gap-y-5 rounded-2xl border border-line bg-surface/60 p-6 sm:p-7 xl:grid-cols-[minmax(0,1fr)_17rem] 2xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:gap-x-10 2xl:p-9">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-sage-500 2xl:text-sm">
                      <LabelIcon name={talk.format} className="h-4 w-4 2xl:h-[18px] 2xl:w-[18px]" />
                      {talk.format}
                    </p>
                    <h2 className="mt-2.5 font-display text-xl font-semibold leading-snug text-fg sm:text-2xl 2xl:text-[1.75rem]">
                      <a
                        href={`https://www.youtube.com/watch?v=${encodeURIComponent(talk.id)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-terracotta-500"
                      >
                        {talk.title}
                        <span className="ml-1.5 text-base text-terracotta-500" aria-hidden="true">
                          ↗
                        </span>
                        <span className="sr-only"> (opens YouTube in a new tab)</span>
                      </a>
                    </h2>
                    <p className="mt-2 text-base leading-normal text-muted sm:text-[17px] 2xl:text-lg">
                      {talk.presenters.length
                        ? talk.presenters.map((p, i) => (
                            <span key={`${p.name}-${p.company ?? ""}`}>
                              {i > 0 && <span aria-hidden="true">{"  ·  "}</span>}
                              {profileUrl(p) ? (
                                <a
                                  href={profileUrl(p)!}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-fg/90 underline decoration-slateblue-500/60 decoration-1 underline-offset-4 transition-colors hover:text-terracotta-500 hover:decoration-terracotta-500"
                                >
                                  {p.name}
                                  <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                                </a>
                              ) : (
                                <span className="text-fg/90">{p.name}</span>
                              )}
                              {p.company && `, ${p.company}`}
                            </span>
                          ))
                        : "Presenter details unavailable"}
                    </p>

                    <div className="mt-5 border-l-2 border-terracotta-500/70 pl-4">
                      <p className={fieldLabel}>Why watch</p>
                      <p className="mt-1.5 text-lg leading-[1.6] text-fg sm:text-[19px] 2xl:text-[1.3125rem]">{talk.whyWatch}</p>
                    </div>

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-label={`${isOpen ? "Hide" : "Read"} publisher description for ${talk.title}`}
                      onClick={() => setOpen((prev) => ({ ...prev, [talk.id]: !isOpen }))}
                      className="mt-5 font-display text-sm font-medium text-slateblue-500 2xl:text-base underline-offset-4 transition-colors hover:text-terracotta-500 hover:underline"
                    >
                      {isOpen ? "Hide full description" : "Read full description"}
                      <span aria-hidden="true"> {isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div id={panelId} className="mt-4 border-t border-line pt-5">
                        <p className={fieldLabel}>Publisher description</p>
                        <p className="mt-3 whitespace-pre-wrap break-words text-[17px] leading-[1.7] text-fg/85 2xl:text-lg 2xl:leading-[1.7]">
                          {talk.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="xl:border-l xl:border-line xl:pl-6 2xl:pl-8">
                    <p className={fieldLabel}>Topics</p>
                    <ul className="mt-2.5 flex flex-wrap gap-2 xl:flex-col xl:items-start 2xl:gap-2.5">
                      {talk.topics.map((label) => {
                        const active = label === topic;
                        return (
                          <li key={label}>
                            <button
                              type="button"
                              aria-label={active ? `Remove ${label} filter` : `Filter by ${label}`}
                              aria-pressed={active}
                              onClick={() => setTopic(active ? "" : label)}
                              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border py-1.5 pl-2.5 pr-3.5 font-display text-sm font-medium leading-snug transition-colors 2xl:text-base ${
                                active
                                  ? "border-terracotta-500 bg-terracotta-500/15 text-terracotta-500"
                                  : "border-line bg-surface-2 text-fg/85 hover:border-slateblue-500/60 hover:text-fg"
                              }`}
                            >
                              <LabelIcon
                                name={label}
                                className={`h-4 w-4 shrink-0 2xl:h-[18px] 2xl:w-[18px] ${active ? "" : "text-slateblue-400"}`}
                              />
                              {label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
