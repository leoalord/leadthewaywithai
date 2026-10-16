import type { Metadata } from "next";
import LegalDocument from "../LegalDocument";

const PAGE_URL = "https://www.leadthewaywithai.com/makemories/privacy";
const TITLE = "MakeMories Privacy Notice";
const DESCRIPTION =
  "How Lead The Way With AI LLC handles information when you use the MakeMories iOS app.";

// The MakeMories iOS app links to this exact path; do not move or rename it.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function MakeMoriesPrivacy() {
  return <LegalDocument file="privacy-notice.md" />;
}
