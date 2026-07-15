"use client";

import Link from "next/link";

const timeline = [
  {
    era: "2024 - Present",
    role: "AI Engineer & Founder",
    company: "Lead The Way with AI",
    focus: "Consulting, workshops, and writing on practical AI systems.",
    principle: "Practical AI over hype: shipping and teaching systems teams can actually run.",
    description: "Independent AI engineering and consulting since 2024. Building agentic workflows and MCP tooling for clients, running hands-on training for engineering teams, providing technical due diligence for investors, and co-hosting the MLOps Community Coding Agents series. Consulting work with KaiCare.ai grew into a full-time engagement from 2025 to 2026.",
  },
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
    description: "Automated greenhouse gas emissions database pipelines using Python, saving 300 manual hours annually. Built a custom NLP classifier using Python and Transformers to analyze historical incident reports, enhancing enterprise safety protocols.",
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
  if (company.includes("Lead The Way")) {
    src = "/icon.svg";
    alt = "Lead The Way with AI logo";
  } else if (company.includes("KaiCare")) {
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

export default function About() {
  return (
    <div className="space-y-32 py-16 sm:py-24">
      {/* About Hero & Profile */}
      <section id="story" className="grain relative overflow-hidden scroll-mt-28">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Text column */}
            <div className="lg:col-span-7">
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sage-500/40 bg-sage-500/10 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-sage-500">
                The Operator
              </p>
              <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-4xl lg:text-5xl">
                Precision, pattern recognition, <span className="bg-gradient-to-r from-sage-400 to-slateblue-400 bg-clip-text text-transparent font-semibold">practical systems</span>.
              </h1>
              <p className="mt-6 font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-fg/90">
                I’m Leo Walker. I build AI systems that turn complexity into momentum. 
                My background spans machine learning engineering, growth equity due diligence, heavy-industry energy analytics, and tactical leadership as a Ranger veteran.
              </p>
              <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-fg/80">
                Whether automating emissions pipelines at BP, benchmark-analyzing growth portfolios at IVP, or shipping HIPAA-compliant agentic systems at KaiCare.ai, I anchor my engineering in strict process control, structured reasoning, and reliability under load.
              </p>
            </div>
            
            {/* Image column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-surface/40 p-2 shadow-xl shadow-black/10">
                {/* Visual frame decoration */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-base/60 via-transparent to-transparent z-10 opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-30" />
                
                {/* Headshot Photo */}
                <img 
                  src="/headshot.jpg" 
                  alt="Leo Walker Headshot" 
                  className="w-full h-full rounded-xl object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey (Timeline) */}
      <section
        id="journey"
        aria-labelledby="journey-heading"
        className="scroll-mt-28 mx-auto max-w-content px-5 sm:px-8"
      >
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-500">
            The Journey
          </p>
          <h2
            id="journey-heading"
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl leading-tight"
          >
            A timeline of execution.
          </h2>
        </div>

        <div className="mt-16 relative border-l border-line/30 ml-3 md:ml-6 space-y-16">
          {timeline.map((step) => (
            <div
              key={step.company}
              className="relative pl-8 sm:pl-12 group reveal"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] md:-left-[10px] top-2 h-4.5 w-4.5 rounded-full border border-line bg-bg group-hover:border-terracotta-500 transition-colors duration-300" />
              
              <div className="max-w-4xl">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-terracotta-500 block mb-3 md:hidden">
                  {step.era} · {step.focus}
                </span>
                
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface border border-line/50 text-fg shadow-sm group-hover:border-terracotta-500/40 group-hover:shadow-terracotta-500/5 transition-all duration-300">
                    <CompanyLogo company={step.company} className="max-h-8 max-w-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-fg leading-tight">
                      {step.role} <span className="text-muted font-normal">at {step.company}</span>
                    </h3>
                    <span className="hidden font-mono text-xs font-semibold uppercase tracking-widest text-muted md:block mt-1">
                      {step.era} · {step.focus}
                    </span>
                  </div>
                </div>

                {/* Operating Principle block */}
                <div className="mt-4 inline-block border-l-2 border-sage-500/50 pl-4 py-0.5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sage-500 block">
                    Operating Principle
                  </span>
                  <p className="mt-1 text-base sm:text-lg font-medium text-fg/90 italic">
                    &ldquo;{step.principle}&rdquo;
                  </p>
                </div>

                <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-fg/85">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Credentials */}
      <section id="academics" aria-labelledby="academics-heading" className="scroll-mt-28 mx-auto max-w-content px-5 sm:px-8">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-500">
            Education
          </p>
          <h2 id="academics-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl">
            Academic Foundation
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl border p-8 sm:p-10 group transition-all duration-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface border border-line/50 text-fg shadow-sm group-hover:border-terracotta-500/40 group-hover:shadow-terracotta-500/5 transition-all duration-300">
                <EducationLogo institution="University of Denver" className="max-h-8 max-w-10" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-terracotta-500 block">
                  MS · Data Science
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-fg mt-0.5">
                  University of Denver
                </h3>
              </div>
            </div>
            <p className="font-mono text-xs text-muted">Graduated 2023 · GPA 3.8</p>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-fg/85">
              Rigorous advanced study covering Python software development, databases, parallel computing, algorithms, and deep machine learning pipelines.
            </p>
          </div>

          <div className="glass-card rounded-2xl border p-8 sm:p-10 group transition-all duration-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface border border-line/50 text-fg shadow-sm group-hover:border-terracotta-500/40 group-hover:shadow-terracotta-500/5 transition-all duration-300">
                <EducationLogo institution="Virginia Military Institute" className="max-h-8 max-w-10" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-terracotta-500 block">
                  BS · Electrical &amp; Computer Engineering
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-fg mt-0.5">
                  Virginia Military Institute
                </h3>
              </div>
            </div>
            <p className="font-mono text-xs text-muted">Graduated 2011</p>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-fg/85">
              Foundational engineering degree focusing on computer systems architecture, electronics design, digital signal processing, mathematics, and calculus.
            </p>
          </div>
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
