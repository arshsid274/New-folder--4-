import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Awail Al-Naqd | Currency Exchange & International Transfers in Benghazi",
  },
  description:
    "Awail Al-Naqd provides secure currency exchange and international money transfers in Benghazi, Libya. Medical, study abroad, tourism and corporate transfers.",
  openGraph: {
    title: "Awail Al-Naqd | Currency Exchange & International Transfers in Benghazi",
    description:
      "Awail Al-Naqd provides secure currency exchange and international money transfers in Benghazi, Libya. Medical, study abroad, tourism and corporate transfers.",
    type: "website",
  },
};

const services = [
  {
    title: "Local Currency Exchange",
    description: "Competitive rates for buying and selling international currencies.",
    image: "/images/localcurrencyExchange.jpg",
    alt: "Local currency exchange desk at Awail Al-Naqd",
  },
  {
    title: "International Money Transfers",
    description: "Secure worldwide bank-to-bank transfers.",
    image: "/images/InternationalMoney.png",
    alt: "International money transfer services",
  },
  {
    title: "Medical Transfers",
    description: "Fast and reliable transfers to hospitals abroad.",
    image: "/images/medical-trasfer.jpeg",
    alt: "Medical transfer support for hospitals abroad",
  },
  {
    title: "Study Abroad Transfers",
    description: "Tuition and student expense transfers worldwide.",
    image: "/images/StudyAbroad.png",
    alt: "Study abroad tuition transfer support",
  },
  {
    title: "Tourism Transfers",
    description: "Foreign currency exchange and travel remittances.",
    image: "/images/TourismTrasfer.png",
    alt: "Tourism remittance and foreign exchange",
  },
  {
    title: "Corporate Transfers",
    description: "Business payments and commercial FX solutions.",
    image: "/images/Corporatetrasnfer.png",
    alt: "Corporate transfer and FX services",
  },
];

const strengths = [
  "Competitive and transparent rates",
  "Secure transaction processing",
  "AML & KYC compliant",
  "Dedicated customer support",
  "Professional and reliable service",
];

function SubmitRequestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
      />
    </svg>
  );
}

function SecureConfirmationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function TransferProcessingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
    </svg>
  );
}

const steps = [
  {
    label: "Submit your request",
    icon: SubmitRequestIcon,
  },
  {
    label: "Receive rate confirmation",
    icon: SecureConfirmationIcon,
  },
  {
    label: "Complete documentation and transfer processing",
    icon: TransferProcessingIcon,
  },
];

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

export default function HomePage() {
  return (
    <main>
      <section className="section-shell">
        <div className="grid items-center gap-8 opacity-0 animate-fadeIn md:grid-cols-2 md:gap-10">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Trusted Financial Services
            </p>
            <h1 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Trusted Currency Exchange & International Money Transfer Services
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Awail Al-Naqd provides secure, transparent, and reliable currency exchange services
              from Benghazi, Libya for medical, education abroad, tourism and business transfers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/get-a-quote"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 sm:w-auto"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-lg border border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition-all duration-300 ease-in-out hover:bg-blue-50 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </article>

          <Image
            src="/images/main2.png"
            alt="Currency exchange services"
            width={800}
            height={600}
            sizes="(max-width: 767px) 100vw, 50vw"
            priority
            className="aspect-[4/3] h-auto w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-shell">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Exchange and Transfer Solutions"
            description="Awail Al-Naqd provides professional support across personal and business transfer requirements."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fadeIn sm:p-6"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="h-44 w-full rounded-xl object-cover shadow-md sm:h-48"
                />
                <h3 className="mt-5 text-lg font-semibold text-slate-900 sm:text-xl">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          label="Why Choose Us"
          title="Built on Trust, Security, and Compliance"
          description="Our team delivers reliable service quality for every transfer category."
        />
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <ul className="space-y-4">
            {strengths.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-white px-5 py-4 text-gray-700 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                {item}
              </li>
            ))}
          </ul>
          <Image
            src="/images/comprehensiveMoneytrasfer.webp"
            alt="Professional financial service support"
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
            label="How It Works"
            title="Simple and Efficient Process"
            description="Get started quickly with our three-step transaction workflow."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-md opacity-0 animate-fadeIn sm:p-5">
            <Image
              src="/images/how-it-works.svg"
              alt="How it works process illustration"
              width={1600}
              height={340}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.label}
                  className="rounded-lg bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="rounded-md bg-blue-50 p-2 text-blue-700">
                      <Icon />
                    </span>
                    <p>
                      {index + 1}. {step.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

