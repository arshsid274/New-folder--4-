import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Compliance & Regulatory Commitment | Awail Al-Naqd",
  },
  description: "Learn about our AML and KYC compliance standards.",
  openGraph: {
    title: "Compliance & Regulatory Commitment | Awail Al-Naqd",
    description: "Learn about our AML and KYC compliance standards.",
    type: "website",
  },
};

const controls = [
  "Identity verification procedures",
  "Transaction monitoring",
  "Risk management controls",
  "Data protection standards",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-emerald-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 7" />
    </svg>
  );
}

export default function CompliancePage() {
  return (
    <main>
      <section className="section-shell">
        <div className="grid items-center gap-8 opacity-0 animate-fadeIn md:grid-cols-2 md:gap-10">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Compliance Framework
            </p>
            <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Compliance & Regulatory Commitment
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Awail Al-Naqd follows strict Anti-Money Laundering (AML) and Know Your Customer (KYC)
              procedures to ensure lawful and secure transactions.
            </p>
          </article>
          <Image
            src="/images/compliance-security.svg"
            alt="Compliance security controls at Awail Al-Naqd"
            width={800}
            height={600}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="aspect-[4/3] h-auto w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Control Standards
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {controls.map((item) => (
              <article
                key={item}
                className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-gray-700">{item}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

