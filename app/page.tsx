"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RepoCard from "@/components/RepoCard";

interface EventItem {
  id: string;
  name: string;
  slug: string;
  startedAt: string;
  endedAt: string;
  timezone: string;
  isOnline: boolean;
  posterUrl: string | null;
}

const proofPoints = [
  "AI Engineer @ Lead The Way with AI",
  "AI Engineer @ KaiCare.ai",
  "Data Scientist @ IVP",
  "Data Scientist @ BP",
  "75th Ranger Regiment Veteran",
  "MLOps Community Chapter Lead",
];

const timeline = [
  {
    era: "2025 - 2026",
    role: "AI Engineer",
    company: "KaiCare.ai",
    focus: "Deploying agentic workflows, MCP tooling, and compliance-aware systems.",
    principle: "Building agentic systems that survive messy data and real clinical operations.",
    description: "Designing and shipping remote patient monitoring (RPM), chronic care (CCM), therapeutic monitoring (RTM), and principal care (PCM) clinical AI systems. Architecting agentic workflows and Model Context Protocol (MCP) orchestration layers optimized for safety, compliance, and strict clinical correctness.",
  },
  {
    era: "2022 - 2023",
    role: "Data Scientist",
    company: "IVP (Growth Equity Venture Capital)",
    focus: "Venture investment metrics and growth portfolio analytics.",
    principle: "Leveraging analytics to separate secular technology trends from temporary hype.",
    description: "Led investment analytics and technical due diligence for 100+ portfolio companies, building custom peer benchmarking algorithms to assess performance. Integrated generative AI technologies (GPT-3.5/4), deploying investor email assistants that improved operational productivity by 20%.",
  },
  {
    era: "2017 - 2022",
    role: "Data Scientist",
    company: "BPX Energy (bp subsidiary)",
    focus: "Advanced analytics and machine learning for energy operations.",
    principle: "Designing data pipelines that drive physical asset efficiency and environmental accountability.",
    description: "Promoted from Analyst to Data Scientist in 10 months. Automated greenhouse gas emissions database pipelines using Python, saving 300 manual hours annually. Built a custom NLP classifier using Python and Transformers to analyze historical incident reports, enhancing enterprise safety protocols.",
  },
  {
    era: "2011 - 2017",
    role: "Military Leader",
    company: "United States Army (75th Ranger Regiment)",
    focus: "Distribution management, tactical sustainment, and logistics analysis.",
    principle: "Grounding execution in strict process control, team ownership, and calm under load.",
    description: "Logistics leader and project manager leading teams of up to 28 members across multiple continents. Directed processes utilizing Lean Six Sigma to increase production throughput by 22% and designed early mobile performance appraisal tools.",
  }
];

const repos = [
  {
    name: "Search Arena",
    url: "https://huggingface.co/spaces/LeoWalker/SearchArena",
    description:
      "A deployed HuggingFace comparison interface built to evaluate and benchmark search engine results and retrieval ranking models. Created June 2024.",
    image: "/search_arena.png",
  },
  {
    name: "Resume & Job Description Parsers",
    url: "https://huggingface.co/spaces/LeoWalker/ResumeParser",
    description:
      "A dual-space deployment comprising an intelligent resume parser and a targeted job description formatter built to optimize candidate matchmaking. Created January 2024.",
    image: "/resume_parser.png",
  },
  {
    name: "First Principles Thinking Skills",
    url: "https://github.com/leoalord/first-principles-thinking-skills",
    description:
      "Chained agentic skills and system prompts engineered to drive structured first-principles reasoning inside tools like Cursor, Claude Code, and Codex CLI.",
    image: "/thinking_skills.png",
  },
  {
    name: "LLM Composition Patterns",
    url: "https://github.com/leoalord/llm-composition-patterns",
    description:
      "A robust Python codebase demonstrating structural design patterns for cascading, parallelizing, and deterministic evaluating complex LLM calls in production.",
  },
];

const services = [
  {
    title: "Engineering",
    body: "Designing and shipping production-grade AI systems. Specializing in modular agentic workflows, custom Model Context Protocol (MCP) integrations, robust NLP pipelines, and HIPAA-compliant clinical AI architectures.",
    cta: "Inquire about engineering",
  },
  {
    title: "Workshops & Training",
    body: "Intense, code-forward training sessions for engineering teams. Hands-on modules covering LLM composition patterns, agent tool calling, deterministic evaluation frameworks, and MLOps best practices.",
    cta: "Book a workshop",
  },
  {
    title: "Advisory & Tech Diligence",
    body: "Providing strategic guidance on AI roadmaps, scaling large-scale analytics (drawing on BP experience), and rigorous technical due diligence for venture capital and private equity investors (drawing on IVP experience).",
    cta: "Request advisory",
  },
];

const focusAreas = [
  "Model agnostic agentic workflows",
  "MCP",
  "Clinical AI",
  "LLM systems",
  "Recommendation systems",
  "Forecasting",
  "Advanced analytics",
  "Observability and evaluations",
];

const topics = [
  "Clinical AI & HIPAA-Grade Safety",
  "Practical Agent Workflows (MCP)",
  "Heavy Asset Energy Analytics",
  "VC & PE Technical Due Diligence",
  "Logistics Leadership (75th Rangers)",
  "Deterministic LLM Evaluations",
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompanyLogo({ company, className }: { company: string; className?: string }) {
  let src = "";
  let alt = "";
  if (company.includes("KaiCare")) {
    src = "/logos/kaicare.png";
    alt = "KaiCare.ai logo";
  } else if (company.includes("IVP")) {
    src = "/logos/ivp.png";
    alt = "IVP logo";
  } else if (company.includes("BP")) {
    src = "/logos/bp.png";
    alt = "BP logo";
  } else if (company.includes("Army") || company.includes("Ranger")) {
    src = "/logos/rangers.jpg";
    alt = "75th Ranger Regiment Distinctive Unit Insignia";
  }

  if (!src) return null;
  return (
    <img src={src} alt={alt} className={`max-h-8 max-w-10 object-contain rounded-md ${className ?? ""}`} />
  );
}

function EducationLogo({ institution, className }: { institution: string; className?: string }) {
  let src = "";
  let alt = "";
  if (institution.includes("Denver")) {
    src = "/logos/du.png";
    alt = "University of Denver logo";
  } else if (institution.includes("Virginia")) {
    src = "/logos/vmi.png";
    alt = "Virginia Military Institute logo";
  }

  if (!src) return null;
  return (
    <img src={src} alt={alt} className={`max-h-8 max-w-10 object-contain rounded-md ${className ?? ""}`} />
  );
}

export default function Home() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [eventsLoading, setEventsLoading] = useState<boolean>(true);
  const [showAllEvents, setShowAllEvents] = useState<boolean>(false);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/events");
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        }
      } catch (err) {
        console.error("Failed to load events:", err);
      } finally {
        setEventsLoading(false);
      }
    }
    loadEvents();
  }, []);

  return (
    <div className="space-y-32 py-16 sm:py-24">
      {/* Home / Hero */}
      <section id="home" className="grain relative overflow-hidden scroll-mt-28">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sage-500/40 bg-sage-500/10 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-sage-500">
                <span className="h-1.5 w-1.5 rounded-full bg-sage-400 animate-pulse" />
                AI Engineer · Operator · Builder
              </p>
              <h1 className="max-w-4xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-4xl lg:text-5xl">
                I build <span className="bg-gradient-to-r from-sage-400 to-slateblue-400 bg-clip-text text-transparent font-semibold">effective AI systems</span> engineered for critical operations.
              </h1>
              <p className="mt-6 max-w-3xl font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-fg/90">
                I build, teach, and write about practical AI systems: agentic workflows, MCP/tooling, data pipelines, and clinical AI. Formerly AI Engineer at KaiCare.ai.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slateblue-500 px-6 py-3.5 text-sm font-semibold text-charcoal-base shadow-sm transition-all hover:bg-slateblue-600 hover:-translate-y-0.5"
                >
                  See my work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-all hover:border-terracotta-500/60 hover:text-terracotta-500 hover:-translate-y-0.5"
                >
                  Read my story
                </Link>
              </div>
            </div>

            {/* Headshot column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sage-500/20 via-transparent to-terracotta-500/15 blur-2xl pointer-events-none" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-surface/40 p-2 shadow-xl shadow-black/10">
                  <img
                    src="/headshot.jpg"
                    alt="Leo Walker, AI engineer, in front of Colorado mountains"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section aria-label="Background and credibility" className="mx-auto max-w-content px-5 sm:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center sm:gap-x-10">
          {proofPoints.map((point, i) => (
            <li
              key={point}
              className="flex items-center gap-x-6 sm:gap-x-10"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden h-1.5 w-1.5 rounded-full bg-terracotta-500/50 sm:inline-block"
                />
              )}
              <span
                className={`text-sm font-semibold uppercase tracking-widest ${
                  i === 0 ? "text-sage-500" : "text-muted"
                }`}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services & Value (#1 Section) */}
      <section id="services" aria-labelledby="services-heading" className="scroll-mt-28 mx-auto max-w-content px-5 sm:px-8">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-500">
            Offering &amp; Value
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            AI engineering, workshops, and advisory built for momentum.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-fg/85">
            I partner with tech leaders, enterprise teams, and venture investors to design, validate, and scale practical AI and analytical systems. No hype: just rigorous engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl border p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-fg">
                  {service.title}
                </h3>
                <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-fg/85">
                  {service.body}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-line/25">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-terracotta-500 hover:text-terracotta-600 transition-colors"
                >
                  {service.cta} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Focus areas */}
        <div className="mt-12">
          <ul className="flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-sage-500/40 bg-sage-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sage-500"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected Work (Work) */}
      <section id="work" aria-labelledby="work-heading" className="scroll-mt-28 mx-auto max-w-content px-5 sm:px-8">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-500">
            Work
          </p>
          <h2
            id="work-heading"
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            What I&apos;ve built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg/75">
            Open-source repositories, agent skills, and deployed AI spaces built to solve practical workflow and data parsing challenges.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {repos.map((repo) => (
            <RepoCard key={repo.name} {...repo} />
          ))}
        </div>
      </section>

      {/* Writing & Speaking (Writing) */}
      <section id="writing" aria-labelledby="writing-heading" className="scroll-mt-28 mx-auto max-w-content px-5 sm:px-8">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-500">
            Writing &amp; talks
          </p>
          <h2
            id="writing-heading"
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Ideas worth sharing
          </h2>
          <p className="mt-4 max-w-prose font-sans text-base sm:text-lg leading-relaxed text-fg/75">
            Notes, essays, and speaking engagements on AI, NLP, energy analytics, investment diligence, and the operational road from the military to building software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Writing — Drafts & Working Papers */}
          <div className="glass-card rounded-2xl border p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-widest text-sage-500">
                Drafts &amp; working papers
              </p>
              <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-fg">
                Active writing projects
              </h3>
              <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-fg/75">
                Summaries, guides, and strategic frameworks under active drafting:
              </p>
              
              <div className="mt-6 space-y-6">
                <div className="border-l-2 border-line/40 pl-4 py-1 hover:border-sage-500/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sage-500 bg-sage-500/10 px-2 py-0.5 rounded">Drafting</span>
                    <span className="font-mono text-xs text-muted">8 min read</span>
                  </div>
                  <h4 className="mt-2 font-display text-base font-semibold text-fg">
                    Safety by Design: Architecting HIPAA-Grade Clinical AI Systems
                  </h4>
                  <p className="mt-1 text-sm text-fg/70">
                    A deep dive into deploying CCM, RPM, and PCM agents with deterministic audit trails and Zero-Trust medical data parsing.
                  </p>
                </div>

                <div className="border-l-2 border-line/40 pl-4 py-1 hover:border-sage-500/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sage-500 bg-sage-500/10 px-2 py-0.5 rounded">In Review</span>
                    <span className="font-mono text-xs text-muted">12 min read</span>
                  </div>
                  <h4 className="mt-2 font-display text-base font-semibold text-fg">
                    Model Context Protocol (MCP): The New Standard for Agent Workflows
                  </h4>
                  <p className="mt-1 text-sm text-fg/70">
                    Why the standard API boundary is shifting from simple JSON payloads to semantic context orchestration layers.
                  </p>
                </div>

                <div className="border-l-2 border-line/40 pl-4 py-1 hover:border-slateblue-500/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted bg-surface px-2 py-0.5 rounded">Planned</span>
                    <span className="font-mono text-xs text-muted">15 min read</span>
                  </div>
                  <h4 className="mt-2 font-display text-base font-semibold text-fg">
                    Heavy Asset Energy Analytics: Lessons from physical pipelines
                  </h4>
                  <p className="mt-1 text-sm text-fg/70">
                    Operational principles learned automating emissions ETL at BPX Energy and translating physical events to transformer-based safety indexes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Talk series */}
          <div className="glass-card rounded-2xl border p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-slateblue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-slateblue-500/40 bg-slateblue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slateblue-500">
                  MLOps Community · Chapter Lead
                </p>
                
                <a
                  href="/api/events/rss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10 px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-500 transition-all hover:scale-102"
                  title="Subscribe to RSS Feed"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 0 1 .75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75C17.25 11.64 12.36 6.75 6.25 6.75h-.75a.75.75 0 0 1-.75-.75V4.5Zm0 6.75a.75.75 0 0 1 .75-.75h.75c4.556 0 8.25 3.694 8.25 8.25v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75c0-2.899-2.351-5.25-5.25-5.25h-.75a.75.75 0 0 1-.75-.75v-.75Zm0 6.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                  </svg>
                  RSS Feed
                </a>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-semibold text-fg">
                Coding Agents Lunch &amp; Learn
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-fg/75">
                Co-hosting a recurring technical series with the MLOps Community focusing on the practical engineering of coding agents, tool-calling mechanisms, and Model Context Protocol (MCP) integrations.
              </p>

              {/* Dynamic Events List */}
              <div className="mt-6 space-y-4">
                {eventsLoading ? (
                  // Loading skeletons
                  [1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="animate-pulse flex items-start gap-4 border-l-2 border-line/30 pl-4 py-1.5">
                      <div className="flex-1 space-y-2 py-0.5">
                        <div className="h-3 w-1/4 bg-surface-2 rounded animate-pulse" />
                        <div className="h-4 w-3/4 bg-surface rounded animate-pulse" />
                      </div>
                    </div>
                  ))
                ) : events.length === 0 ? (
                  <p className="text-sm text-muted">No sessions found.</p>
                ) : (
                  (showAllEvents ? events : events.slice(0, 5)).map((e) => {
                    const eventDate = new Date(e.startedAt);
                    const isUpcoming = eventDate > new Date();
                    
                    const formattedDate = eventDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                    
                    const displayName = e.name
                      .replace(/^Coding Agents\s*(Lunch & Learn|Lunch and Learn)?\s*[\-–:,]?\s*/i, "")
                      .trim() || e.name;

                    return (
                      <div 
                        key={e.id} 
                        className="group/item border-l-2 border-line/40 pl-4 py-1.5 hover:border-terracotta-500/60 transition-colors flex items-start justify-between gap-4"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs text-muted">{formattedDate}</span>
                            {isUpcoming && (
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-sage-500 bg-sage-500/10 px-1.5 py-0.5 rounded animate-pulse">
                                Upcoming
                              </span>
                            )}
                          </div>
                          <h4 className="mt-1 font-display text-sm font-semibold text-fg group-hover/item:text-terracotta-500 transition-colors truncate">
                            <a 
                              href={`https://home.mlops.community/public/events/${e.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="focus:outline-none"
                            >
                              {displayName}
                            </a>
                          </h4>
                        </div>
                        
                        <a 
                          href={`https://home.mlops.community/public/events/${e.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-fg transition-colors shrink-0 mt-0.5"
                          title="View event details"
                        >
                          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                            <path
                              d="M6 14 14 6m0 0H7m7 0v7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-line/10 flex flex-wrap items-center justify-between gap-4">
              {!eventsLoading && events.length > 5 && (
                <button
                  onClick={() => setShowAllEvents(!showAllEvents)}
                  className="text-xs font-bold uppercase tracking-wider text-muted hover:text-fg transition-colors focus:outline-none"
                >
                  {showAllEvents ? "Show Less" : `Show All Sessions (${events.length})`}
                </button>
              )}
              
              <a
                href="https://home.mlops.community/home/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta-500 hover:text-terracotta-600 transition-colors"
              >
                See MLOps Community events
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path
                    d="M6 14 14 6m0 0H7m7 0v7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Link to About/Story Page */}
      <section className="mx-auto max-w-content px-5 sm:px-8">
        <div className="glass-card rounded-2xl border p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-fg">
              Operational Leadership &amp; History
            </h3>
            <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed text-fg/75">
              From logistics leadership in the 75th Ranger Regiment to advanced due diligence at IVP and analytics at BP. Read my full journey and credentials.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-fg transition-all hover:border-terracotta-500/60 hover:text-terracotta-500 whitespace-nowrap shrink-0"
          >
            Read my story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 mx-auto max-w-content px-5 sm:px-8">
        {/* Primary CTA */}
        <div className="glass-card rounded-2xl border p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-sage-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-slateblue-500/8 rounded-full blur-3xl pointer-events-none" />

          <h2 id="contact-heading" className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-fg">
            Start a conversation
          </h2>
          <p className="mt-4 max-w-prose font-sans text-sm sm:text-base leading-relaxed text-fg/75">
            If you are looking for clinical AI expertise, rigorous technical diligence, or engineering mentorship, get in touch today.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:leo@leadthewaywithai.com"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-slateblue-500 px-6 py-3.5 text-sm font-semibold text-charcoal-base transition-all hover:bg-slateblue-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="m3 6 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email leo@leadthewaywithai.com
            </a>
            <a
              href="https://www.linkedin.com/in/leowalker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-all hover:border-slateblue-500/60 hover:text-slateblue-500 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M4.98 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.5 8.25h3v8.25h-3V8.25Zm5 0h2.87v1.13h.04c.4-.72 1.38-1.48 2.84-1.48 3.04 0 3.6 1.9 3.6 4.38v4.22h-3v-3.74c0-.9-.02-2.05-1.27-2.05-1.27 0-1.46.97-1.46 1.98v3.81h-3V8.25Z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
          <p className="mt-5 text-xs text-muted">
            Typically responding within 24 hours. For high-stakes consulting or technical due diligence requests, email directly.
          </p>
        </div>
      </section>
    </div>
  );
}
