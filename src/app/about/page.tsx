import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "About Awail Al-Naqd",
  },
  description: "Learn about Awail Al-Naqd, a trusted currency exchange company in Benghazi, Libya.",
  openGraph: {
    title: "About Awail Al-Naqd",
    description:
      "Learn about Awail Al-Naqd, a trusted currency exchange company in Benghazi, Libya.",
    type: "website",
  },
};

const values = ["Integrity", "Transparency", "Security", "Compliance", "Customer Focus"];

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{label}</p>
      <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm text-gray-600 sm:text-base">{description}</p>
    </header>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="section-shell opacity-0 animate-fadeIn">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <article>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              About Awail Al-Naqd
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Awail Al-Naqd is a professional currency exchange and international remittance company
              based in Benghazi, Libya. We provide secure and compliant foreign exchange services
              for individuals and businesses.
            </p>
          </article>
          <Image
            src="/images/about.png"
            alt="Awail Al-Naqd office in Benghazi"
            width={800}
            height={600}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="aspect-[4/3] h-auto w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-shell">
          <SectionHeader
            label="Purpose"
            title="Mission and Vision"
            description="Our direction is grounded in secure operations and trusted service delivery."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl sm:p-6">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Mission</h2>
              <p className="mt-3 text-gray-600">
                To deliver safe, efficient, and transparent currency exchange and international
                transfers.
              </p>
            </article>
            <article className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl sm:p-6">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Vision</h2>
              <p className="mt-3 text-gray-600">
                To be a trusted financial partner in Libya and the region.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          label="Core Values"
          title="How We Operate"
          description="Every transaction is managed with professionalism and accountability."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <article
              key={value}
              className="rounded-xl bg-white p-5 text-center shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fadeIn sm:p-6"
            >
              <h2 className="text-lg font-bold text-slate-900">{value}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

