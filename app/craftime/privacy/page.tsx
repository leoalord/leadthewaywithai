import type { Metadata } from "next";

// Placeholder: the CraftiMe iOS app links to this exact path. Replace with the
// final Privacy Notice in place; do not move or rename the route.
export const metadata: Metadata = {
  title: "CraftiMe Privacy Notice",
  robots: { index: false },
};

export default function CraftiMePrivacy() {
  return (
    <section className="mx-auto max-w-prose px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-4xl">
        CraftiMe Privacy Notice
      </h1>
      <p className="mt-6 font-sans text-base leading-relaxed text-fg/90 sm:text-lg">
        CraftiMe is in private testing. The Privacy Notice for the CraftiMe beta
        is being finalized and will be published at this address before the
        beta opens.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-fg/90 sm:text-lg">
        Questions:{" "}
        <a
          href="mailto:support@ltww.ai"
          className="font-semibold text-terracotta-500 underline underline-offset-4 transition-colors hover:text-terracotta-600"
        >
          support@ltww.ai
        </a>
      </p>
    </section>
  );
}
