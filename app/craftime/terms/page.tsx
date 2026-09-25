import type { Metadata } from "next";
import LegalDocument from "../LegalDocument";

// The CraftiMe iOS app links to this exact path; do not move or rename it.
export const metadata: Metadata = {
  title: { absolute: "CraftiMe Beta Terms of Use" },
};

export default function CraftiMeTerms() {
  return <LegalDocument file="terms-of-use.md" />;
}
