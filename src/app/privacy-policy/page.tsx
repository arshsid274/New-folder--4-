import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Awail Al-Naqd",
  },
  description:
    "Read how Awail Al-Naqd collects, uses, protects, and processes personal data in accordance with legal and compliance requirements.",
  openGraph: {
    title: "Privacy Policy | Awail Al-Naqd",
    description:
      "Read how Awail Al-Naqd collects, uses, protects, and processes personal data in accordance with legal and compliance requirements.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="section-shell">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Awail Al-Naqd is committed to protecting personal information and maintaining client trust.
        </p>
      </section>

      <section className="bg-gray-50">
        <div className="section-shell">
          <article className="space-y-6 rounded-xl bg-white p-4 text-gray-700 leading-relaxed shadow-md sm:p-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Data Collection</h2>
              <p className="mt-3">
                We collect personal and transaction-related information required to provide currency
                exchange and remittance services, including identification, contact details, and
                transfer instructions.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Use of Personal Data</h2>
              <p className="mt-3">
                Personal data is used to process transactions, verify identity, support customer
                service, maintain records, and deliver secure financial operations.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Legal Compliance</h2>
              <p className="mt-3">
                Data may be processed to comply with applicable legal, regulatory, AML, and KYC
                obligations in Libya and relevant international transfer corridors.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Data Security</h2>
              <p className="mt-3">
                We apply appropriate administrative and technical controls to safeguard data against
                unauthorized access, loss, misuse, or disclosure.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Client Confidentiality</h2>
              <p className="mt-3">
                Client information is treated as confidential and shared only with authorized parties
                involved in transaction execution or legal compliance.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

