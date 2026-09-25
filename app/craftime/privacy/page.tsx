import type { Metadata } from "next";
import LegalDocument from "../LegalDocument";

// The CraftiMe iOS app links to this exact path; do not move or rename it.
export const metadata: Metadata = {
  title: { absolute: "CraftiMe Privacy Notice" },
};

export default function CraftiMePrivacy() {
  return <LegalDocument file="privacy-notice.md" />;
}
