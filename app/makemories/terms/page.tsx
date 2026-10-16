import type { Metadata } from "next";
import LegalDocument from "../LegalDocument";

const PAGE_URL = "https://www.leadthewaywithai.com/makemories/terms";
const TITLE = "MakeMories Beta Terms of Use";
const DESCRIPTION =
  "The terms for using the MakeMories iOS app beta, operated by Lead The Way With AI LLC.";

// The MakeMories iOS app links to this exact path; do not move or rename it.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function MakeMoriesTerms() {
  return <LegalDocument file="terms-of-use.md" />;
}
