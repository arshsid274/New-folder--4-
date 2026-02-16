import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Awail Al-Naqd",
  },
  description:
    "Review the terms and conditions governing Awail Al-Naqd currency exchange and transfer services.",
  openGraph: {
    title: "Terms & Conditions | Awail Al-Naqd",
    description:
      "Review the terms and conditions governing Awail Al-Naqd currency exchange and transfer services.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main>
      <section className="section-shell">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
          These terms define the conditions for using Awail Al-Naqd services.
        </p>
      </section>

      <section className="bg-gray-50">
        <div className="section-shell">
          <article className="space-y-6 rounded-xl bg-white p-4 text-gray-700 leading-relaxed shadow-md sm:p-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Service Eligibility</h2>
              <p className="mt-3">
                Services are available only to clients who provide valid information and meet
                applicable legal and compliance requirements.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Rate Confirmation Policy
              </h2>
              <p className="mt-3">
                Exchange rates are confirmed at the time of agreement and may vary based on market
                movement, amount, and transfer destination.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Compliance Requirements</h2>
              <p className="mt-3">
                Awail Al-Naqd may request identity, source-of-funds, and transaction documentation
                before processing any exchange or remittance request.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Limitation of Liability</h2>
              <p className="mt-3">
                Awail Al-Naqd is not liable for delays or failures caused by banking networks,
                regulatory restrictions, or external parties outside operational control.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Governing Law</h2>
              <p className="mt-3">
                These terms are governed by applicable laws and regulations of Libya.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

