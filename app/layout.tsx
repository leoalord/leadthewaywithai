import type { Metadata } from "next";
import { Poppins, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://leadthewaywithai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leo Walker - AI Engineer & Operator | Lead The Way with AI",
    template: "%s | Lead The Way with AI",
  },
  description:
    "Leo Walker builds AI systems that turn complexity into momentum. AI engineer and Ranger-shaped operator with a data-science background, now applying practical systems to healthcare and beyond.",
  keywords: [
    "AI engineer",
    "AI systems",
    "data science",
    "NLP",
    "agentic workflows",
    "MLOps",
    "healthcare AI",
    "Leo Walker",
    "75th Ranger Regiment",
    "LTWwAI",
  ],
  authors: [{ name: "Leo Walker" }],
  openGraph: {
    title: "Leo Walker - AI Engineer & Operator",
    description:
      "I build AI systems that turn complexity into momentum. Ranger-shaped operator, data scientist, and builder of practical AI.",
    url: SITE_URL,
    siteName: "Lead The Way with AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Walker - AI Engineer & Operator",
    description:
      "I build AI systems that turn complexity into momentum. Ranger-shaped operator, data scientist, and builder of practical AI.",
  },
  robots: { index: true, follow: true },
};

// Prevent theme flash: apply stored theme before paint. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
