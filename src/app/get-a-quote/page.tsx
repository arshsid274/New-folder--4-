import type { Metadata } from "next";
import Image from "next/image";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: {
    absolute: "Request a Quote | Awail Al-Naqd",
  },
  description: "Submit your transfer request and receive competitive exchange rates.",
  openGraph: {
    title: "Request a Quote | Awail Al-Naqd",
    description: "Submit your transfer request and receive competitive exchange rates.",
    type: "website",
  },
};

export default function GetQuotePage() {
  return (
    <main>
      <section className="section-shell">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
          <article className="opacity-0 animate-fadeIn">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Quote Request
            </p>
            <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Request a Currency Exchange or Transfer Quote
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Share your transaction details and our team will provide a competitive rate with the
              required processing steps.
            </p>
            <Image
              src="/images/comprehensiveMoneytrasfer.webp"
              alt="Request transfer quote from Awail Al-Naqd"
              width={800}
              height={600}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="mt-8 aspect-[4/3] h-auto w-full rounded-xl object-cover shadow-md"
            />
          </article>
          <div className="rounded-xl bg-white p-1.5 shadow-md sm:p-2">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}

