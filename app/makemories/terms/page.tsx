import type { Metadata } from "next";
import LegalDocument from "../LegalDocument";

const PAGE_URL = "https://www.leadthewaywithai.com/makemories/terms";
const TITLE = "Makemories Beta Terms of Use";
const DESCRIPTION =
  "The terms for using the Makemories iOS app beta, operated by Lead The Way With AI LLC.";

// The Makemories iOS app links to this exact path; do not move or rename it.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function MakemoriesTerms() {
  return <LegalDocument file="terms-of-use.md" />;
}
