import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Our Services | Awail Al-Naqd",
  },
  description:
    "Secure corporate international transfer and commercial foreign exchange services from Benghazi, Libya.",
  openGraph: {
    title: "Our Services | Awail Al-Naqd",
    description:
      "Secure corporate international transfer and commercial foreign exchange services from Benghazi, Libya.",
    type: "website",
  },
};

type ServiceSection = {
  title: string;
  image: string;
  alt: string;
  paragraphs: [string, string, string];
  featureHeading: string;
  features: string[];
  closing: string;
};

type ServiceTheme = {
  panelGradient: string;
  border: string;
  kicker: string;
  dot: string;
  marker: string;
  imageOverlay: string;
};

const serviceThemes: ServiceTheme[] = [
  {
    panelGradient: "from-blue-50/80 via-white to-cyan-50/70",
    border: "border-blue-200/70",
    kicker: "text-blue-700",
    dot: "bg-blue-600",
    marker: "marker:text-blue-600",
    imageOverlay: "from-blue-900/35 via-transparent to-cyan-900/30",
  },
  {
    panelGradient: "from-cyan-50/80 via-white to-emerald-50/70",
    border: "border-cyan-200/70",
    kicker: "text-cyan-700",
    dot: "bg-cyan-600",
    marker: "marker:text-cyan-600",
    imageOverlay: "from-cyan-900/35 via-transparent to-emerald-900/30",
  },
  {
    panelGradient: "from-emerald-50/80 via-white to-blue-50/70",
    border: "border-emerald-200/70",
    kicker: "text-emerald-700",
    dot: "bg-emerald-600",
    marker: "marker:text-emerald-600",
    imageOverlay: "from-emerald-900/35 via-transparent to-blue-900/30",
  },
];

const serviceSections: ServiceSection[] = [
  {
    title: "Local Currency Exchange",
    image: "/images/localcurrencyExchange.jpg",
    alt: "Local currency exchange in Benghazi with transparent rates",
    paragraphs: [
      "We provide reliable local currency exchange services for major international currencies with competitive and transparent pricing. Our rates are regularly updated in line with market conditions to ensure fair and accurate transactions for our clients.",
      "At Awail Al-Naqd, we prioritize clarity and compliance in every transaction. Clients receive full rate confirmation before completing any exchange, ensuring transparency and confidence throughout the process.",
      "All transactions are conducted in accordance with internal compliance procedures, including customer verification and documentation requirements, to ensure secure and lawful currency exchange operations.",
    ],
    featureHeading: "Our Local Currency Exchange Services Include:",
    features: [
      "Buying and selling major global currencies",
      "Transparent rate confirmation before processing",
      "Secure and documented transactions",
      "Professional customer support assistance",
      "Compliance with applicable financial regulations",
    ],
    closing:
      "Our goal is to deliver efficient, secure, and client-focused currency exchange services for individuals and businesses in Benghazi and surrounding areas.",
  },
  {
    title: "International Transfers",
    image: "/images/InternationalMoney.png",
    alt: "Secure international bank transfer processing",
    paragraphs: [
      "Awail Al-Naqd facilitates secure international bank-to-bank transfers through recognized financial channels. We ensure reliable processing and transparent rate confirmation for every transaction.",
      "Our international transfer services are designed to provide clarity, efficiency, and peace of mind. Clients receive confirmed exchange rates and full transaction details before processing begins.",
      "All cross-border transfers are conducted in accordance with internal compliance procedures, including identity verification and documentation review, to ensure lawful and secure remittance operations.",
    ],
    featureHeading: "Our International Transfer Services Include:",
    features: [
      "Secure bank-to-bank transfers",
      "Transparent exchange rate confirmation",
      "Documented and traceable transactions",
      "Support for personal and business transfers",
      "Compliance with applicable financial regulations",
    ],
    closing:
      "We are committed to delivering reliable and compliant international remittance services for individuals and corporate clients.",
  },
  {
    title: "Medical Transfers",
    image: "/images/medical-trasfer.jpeg",
    alt: "International medical transfer payment to hospital",
    paragraphs: [
      "Awail Al-Naqd provides reliable international transfer services for medical treatment payments abroad. We facilitate secure remittances to hospitals, clinics, and licensed medical institutions worldwide.",
      "We understand the importance of timely medical payments. Our team ensures efficient processing and clear rate confirmation to support urgent healthcare-related transfers.",
      "All medical transfers are processed in accordance with internal compliance procedures, including documentation verification and identity confirmation, to ensure secure and lawful transactions.",
    ],
    featureHeading: "Our Medical Transfer Services Include:",
    features: [
      "Direct payments to hospitals and medical institutions",
      "Transparent exchange rate confirmation",
      "Secure and documented transactions",
      "Assistance with required documentation",
      "Compliance with applicable financial regulations",
    ],
    closing:
      "We are committed to supporting individuals and families with dependable and compliant financial solutions for medical needs abroad.",
  },
  {
    title: "Study Abroad Transfers",
    image: "/images/StudyAbroad.png",
    alt: "International tuition fee and student transfer services",
    paragraphs: [
      "Awail Al-Naqd provides secure international transfer services for tuition fees and student living expenses. We facilitate payments to recognized universities, colleges, and educational institutions worldwide.",
      "Our study abroad transfer solutions ensure transparent exchange rate confirmation and clear transaction details prior to processing, allowing students and families to plan with confidence.",
      "All education-related transfers are processed in accordance with internal compliance procedures, including verification of documentation and client identification, to ensure secure and lawful remittance operations.",
    ],
    featureHeading: "Our Study Abroad Transfer Services Include:",
    features: [
      "Tuition fee payments to international universities",
      "Living expense transfers for students abroad",
      "Transparent exchange rate confirmation",
      "Secure and documented transactions",
      "Compliance with applicable financial regulations",
    ],
    closing:
      "We are committed to supporting students and families with dependable and compliant financial transfer solutions for international education.",
  },
  {
    title: "Tourism Transfers",
    image: "/images/TourismTrasfer.png",
    alt: "Foreign exchange and travel-related money transfer services",
    paragraphs: [
      "Awail Al-Naqd provides secure foreign exchange and international transfer services for travel and tourism purposes. We facilitate reliable currency exchange and remittances to support international travel needs.",
      "Our tourism transfer services ensure transparent exchange rate confirmation and clear transaction details prior to processing, allowing clients to travel with financial confidence.",
      "All travel-related transfers are conducted in accordance with internal compliance procedures, including identity verification and documentation review, to ensure secure and lawful transactions.",
    ],
    featureHeading: "Our Tourism Transfer Services Include:",
    features: [
      "Foreign currency exchange for travel purposes",
      "International remittances for tourism",
      "Transparent exchange rate confirmation",
      "Secure and documented transactions",
      "Compliance with applicable financial regulations",
    ],
    closing:
      "We are committed to providing dependable and compliant financial solutions to support international travel and tourism needs.",
  },
  {
    title: "Corporate Transfers",
    image: "/images/Corporatetrasnfer.png",
    alt: "Corporate international transfer and commercial foreign exchange services",
    paragraphs: [
      "Awail Al-Naqd provides secure corporate transfer solutions for businesses requiring international supplier payments and commercial foreign exchange services. We support structured and compliant cross-border transactions for business operations.",
      "Our corporate services are designed to facilitate efficient payment processing, transparent exchange rate confirmation, and reliable remittance solutions for commercial activities.",
      "All corporate transfers are processed in accordance with internal compliance procedures, including company verification, documentation review, and transaction monitoring, to ensure secure and lawful commercial operations.",
    ],
    featureHeading: "Our Corporate Transfer Services Include:",
    features: [
      "International supplier and vendor payments",
      "Commercial foreign exchange services",
      "Transparent exchange rate confirmation",
      "Secure and traceable transactions",
      "Compliance with applicable financial regulations",
    ],
    closing:
      "We are committed to providing dependable and compliant financial transfer solutions to support business growth and international trade activities.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-cyan-50/70 to-blue-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(19,95,150,0.17),transparent_38%),radial-gradient(circle_at_88%_10%,rgba(15,157,116,0.15),transparent_34%)]" />
        <div className="section-shell relative">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Professional Financial Solutions
          </p>
          <h1 className="animate-fade-up animation-delay-100 mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Awail Al-Naqd delivers secure and efficient transfer services for individuals,
            families, students, medical needs, travelers, and corporate operations.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)] opacity-0 animate-fadeIn">
            <Image
              src="/images/comprehensiveMoneytrasfer.webp"
              alt="Awail Al-Naqd service overview banner"
              width={1200}
              height={700}
              sizes="100vw"
              className="aspect-[16/9] h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {serviceSections.map((service, index) => {
        const reversed = index % 2 === 1;
        const theme = serviceThemes[index % serviceThemes.length];
        const sectionBg = index % 2 === 0 ? "bg-white/45" : "bg-slate-50/80";

        return (
          <section key={service.title} className={sectionBg}>
            <div className="section-shell">
              <div className={`rounded-3xl bg-gradient-to-br ${theme.panelGradient} p-4 sm:p-6 md:p-8`}>
                <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-10">
                  <article
                    className={`${reversed ? "md:order-2" : ""} opacity-0 animate-fade-up`}
                    style={{ animationDelay: "0.08s" }}
                  >
                    <div className={`surface-card h-full border ${theme.border} bg-white/95 p-5 sm:p-7`}>
                      <div className="inline-flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${theme.dot}`} />
                        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.kicker}`}>
                          Service {index + 1}
                        </p>
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {service.paragraphs[0]}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {service.paragraphs[1]}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {service.paragraphs[2]}
                      </p>

                      <p className={`mt-6 text-sm font-semibold ${theme.kicker}`}>
                        {service.featureHeading}
                      </p>
                      <ul
                        className={`mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 sm:text-base ${theme.marker}`}
                      >
                        {service.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <p className="mt-6 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {service.closing}
                      </p>
                    </div>
                  </article>

                  <div
                    className={`${reversed ? "md:order-1" : ""} opacity-0 animate-fade-up`}
                    style={{ animationDelay: "0.16s" }}
                  >
                    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.15)] sm:min-h-[380px] md:min-h-0">
                      <div
                        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${theme.imageOverlay}`}
                      />
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                        <p className="text-sm font-semibold text-white sm:text-base">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
