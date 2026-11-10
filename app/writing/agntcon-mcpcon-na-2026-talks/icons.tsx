// Small stroke icons so topics and formats are recognisable at a glance.
// Each entry is one or more SVG path strings on a 24x24 grid.
const USERS = [
  "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  "M17 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  "M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6",
  "M15.5 14.6c3-.4 6.5 1.4 6.5 5.4",
];

const ICONS: Record<string, string[]> = {
  // Topics
  MCP: ["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0V8z", "M12 18v4"],
  "Security & Guardrails": ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z", "M9 12l2 2 4-4"],
  "Infrastructure & Deployment": ["M4 4h16v6H4z", "M4 14h16v6H4z", "M8 7h.01", "M8 17h.01"],
  "Interoperability & Standards": ["M4 8h16l-4-4", "M20 16H4l4 4"],
  "Governance & Compliance": ["M9 3h6v4H9z", "M9 5H5v16h14V5h-4", "M9 14l2 2 4-4"],
  "Identity & Access": ["M7.5 21a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z", "M21 2l-9.6 9.6", "M15.5 7.5l3 3L22 7l-3-3"],
  "Enterprise Adoption": ["M5 21V4h9v17", "M14 9h5v12", "M3 21h18", "M8 8h3", "M8 12h3", "M8 16h3"],
  "Open Source": [
    "M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M18 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M6 7v10",
    "M18 10v1a4 4 0 0 1-4 4H6",
  ],
  "Agent Orchestration": [
    "M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M12 7v5",
    "M12 12l-5.6 5.4",
    "M12 12l5.6 5.4",
  ],
  "Reliability & Durability": ["M20 12a8 8 0 1 1-2.3-5.6", "M20 4v4h-4"],
  "Coding Agents": ["M8 7l-5 5 5 5", "M16 7l5 5-5 5", "M14 4l-4 16"],
  "Evals & Testing": ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M8 12l3 3 5-6"],
  "Context, Memory & Retrieval": [
    "M4 5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z",
    "M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5",
    "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  ],
  "Agent Interfaces": ["M3 5h18v14H3z", "M3 9h18", "M6.5 7h.01"],
  "Human-Agent Collaboration": USERS,
  "Observability & Operations": ["M3 12h4l3-8 4 16 3-8h4"],
  General: ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 13h7v7h-7z"],
  "Commerce & Payments": ["M2 6h20v12H2z", "M2 10h20", "M6 15h4"],
  "Cost & Performance": ["M4 18a9 9 0 1 1 16 0", "M12 14l4-5"],
  "AI Strategy": ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M15.5 8.5l-2 5-5 2 2-5 5-2z"],
  "Model Engineering": [
    "M7 7h10v10H7z",
    "M10 3v4", "M14 3v4", "M10 17v4", "M14 17v4",
    "M3 10h4", "M3 14h4", "M17 10h4", "M17 14h4",
  ],
  // Formats
  Talk: ["M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z", "M6 11a6 6 0 0 0 12 0", "M12 17v4"],
  "Live Demo": ["M3 4h18v12H3z", "M10 7.5l5 2.5-5 2.5z", "M8 20h8"],
  Keynote: ["M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.9l-5.4 2.9 1.1-6.1L3.2 9.4l6.1-.8z"],
  Workshop: ["M4 20l8.5-8.5", "M12.5 11.5A4 4 0 0 0 18 6l-2.5 2.5-2-2L16 4a4 4 0 0 0-3.5 7.5z"],
  "Case Study": ["M6 3h8l4 4v14H6z", "M14 3v4h4", "M9 12h6", "M9 16h6"],
  Panel: USERS,
  "Conference Session": ["M4 6h16v14H4z", "M4 10h16", "M8 3v4", "M16 3v4"],
};

const FALLBACK = ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 12h.01"];

export default function LabelIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {(ICONS[name] ?? FALLBACK).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
