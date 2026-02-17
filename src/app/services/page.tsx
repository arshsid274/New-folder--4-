import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  GraduationCap,
  Heart,
  Plane,
  Send,
  Shield,
  TrendingUp,
} from "lucide-react";
import { AchievementValue } from "@/components/achievement-value";

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

function AnimatedCurrency() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        <circle cx="100" cy="100" r="60" fill="#0891b2" fillOpacity="0.1" />
        <path
          d="M100 60 L100 140 M70 100 L130 100"
          stroke="#0891b2"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <circle
          cx="100"
          cy="100"
          r="70"
          stroke="#0891b2"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-spin-slow"
        />
      </g>
    </svg>
  );
}

function AnimatedTransfer() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float-delayed">
        <rect x="20" y="80" width="60" height="40" rx="8" fill="#06b6d4" fillOpacity="0.2" />
        <rect x="120" y="80" width="60" height="40" rx="8" fill="#06b6d4" fillOpacity="0.2" />
        <path
          d="M85 100 L115 100"
          stroke="#06b6d4"
          strokeWidth="3"
          strokeDasharray="5 5"
          className="animate-dash"
        />
        <circle cx="115" cy="100" r="5" fill="#06b6d4" className="animate-ping" />
      </g>
    </svg>
  );
}

function AnimatedMedical() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        <circle cx="100" cy="100" r="50" fill="#10b981" fillOpacity="0.1" />
        <path d="M100 70 L100 130 M70 100 L130 100" stroke="#10b981" strokeWidth="8" strokeLinecap="round" />
        <circle
          cx="100"
          cy="100"
          r="65"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="3 3"
          className="animate-spin-slow"
        />
      </g>
    </svg>
  );
}

function AnimatedEducation() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float-delayed">
        <polygon points="100,60 40,100 100,120 160,100" fill="#0891b2" fillOpacity="0.2" />
        <polygon points="100,60 40,100 100,120 160,100" stroke="#0891b2" strokeWidth="2" />
        <rect x="90" y="120" width="20" height="40" fill="#0891b2" fillOpacity="0.3" />
        <circle cx="100" cy="50" r="3" fill="#0891b2" className="animate-ping" />
      </g>
    </svg>
  );
}

function AnimatedTourism() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        <path d="M100 50 Q70 80 100 110 Q130 80 100 50" fill="#10b981" fillOpacity="0.2" />
        <circle cx="100" cy="90" r="15" fill="#10b981" fillOpacity="0.3" />
        <path d="M40 150 Q100 120 160 150" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
      </g>
    </svg>
  );
}

function AnimatedCorporate() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float-delayed">
        <rect x="60" y="60" width="80" height="90" fill="#0891b2" fillOpacity="0.1" />
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={75 + col * 20}
              y={75 + row * 25}
              width="10"
              height="15"
              fill="#0891b2"
              fillOpacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: `${(row + col) * 0.1}s` }}
            />
          )),
        )}
      </g>
    </svg>
  );
}

type ServiceSection = {
  title: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  animated: () => ReactElement;
  gradient: string;
  panelGradient: string;
  border: string;
  kicker: string;
  marker: string;
  imageOverlay: string;
  stats: Array<{ label: string; value: string }>;
  paragraphs: [string, string, string];
  featureHeading: string;
  features: string[];
  closing: string;
};

const serviceSections: ServiceSection[] = [
  {
    title: "Local Currency Exchange",
    image: "/images/service-local.jpg?v=20260217r3",
    alt: "Local currency exchange in Benghazi with transparent rates",
    icon: Banknote,
    animated: AnimatedCurrency,
    gradient: "from-blue-500 to-cyan-500",
    panelGradient: "from-blue-50/80 via-white to-cyan-50/70",
    border: "border-blue-200/70",
    kicker: "text-blue-700",
    marker: "marker:text-blue-600",
    imageOverlay: "from-blue-900/35 via-transparent to-cyan-900/30",
    stats: [
      { label: "Currencies", value: "20+" },
      { label: "Rate Updates", value: "Live" },
      { label: "Processing", value: "Instant" },
    ],
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
    image: "/images/service-international.jpg?v=20260217r3",
    alt: "Secure international bank transfer processing",
    icon: Send,
    animated: AnimatedTransfer,
    gradient: "from-cyan-500 to-blue-500",
    panelGradient: "from-cyan-50/80 via-white to-blue-50/70",
    border: "border-cyan-200/70",
    kicker: "text-cyan-700",
    marker: "marker:text-cyan-600",
    imageOverlay: "from-cyan-900/35 via-transparent to-blue-900/30",
    stats: [
      { label: "Countries", value: "150+" },
      { label: "Security", value: "Bank-grade" },
      { label: "Tracking", value: "Real-time" },
    ],
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
    image: "/images/service-medical.jpg?v=20260217r3",
    alt: "International medical transfer payment to hospital",
    icon: Heart,
    animated: AnimatedMedical,
    gradient: "from-emerald-500 to-teal-500",
    panelGradient: "from-emerald-50/80 via-white to-teal-50/70",
    border: "border-emerald-200/70",
    kicker: "text-emerald-700",
    marker: "marker:text-emerald-600",
    imageOverlay: "from-emerald-900/35 via-transparent to-teal-900/30",
    stats: [
      { label: "Institutions", value: "500+" },
      { label: "Processing", value: "Priority" },
      { label: "Support", value: "24/7" },
    ],
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
    image: "/images/service-study.jpg?v=20260217r3",
    alt: "International tuition fee and student transfer services",
    icon: GraduationCap,
    animated: AnimatedEducation,
    gradient: "from-blue-500 to-indigo-500",
    panelGradient: "from-blue-50/80 via-white to-indigo-50/70",
    border: "border-indigo-200/70",
    kicker: "text-indigo-700",
    marker: "marker:text-indigo-600",
    imageOverlay: "from-indigo-900/35 via-transparent to-blue-900/30",
    stats: [
      { label: "Universities", value: "1000+" },
      { label: "Students", value: "5000+" },
      { label: "Success", value: "99.9%" },
    ],
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
    image: "/images/service-tourism.jpg?v=20260217r3",
    alt: "Foreign exchange and travel-related money transfer services",
    icon: Plane,
    animated: AnimatedTourism,
    gradient: "from-teal-500 to-emerald-500",
    panelGradient: "from-teal-50/80 via-white to-emerald-50/70",
    border: "border-teal-200/70",
    kicker: "text-teal-700",
    marker: "marker:text-teal-600",
    imageOverlay: "from-teal-900/35 via-transparent to-emerald-900/30",
    stats: [
      { label: "Destinations", value: "200+" },
      { label: "Convenience", value: "High" },
      { label: "Rates", value: "Competitive" },
    ],
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
    image: "/images/service-corporate.jpg?v=20260217r3",
    alt: "Corporate international transfer and commercial foreign exchange services",
    icon: Building2,
    animated: AnimatedCorporate,
    gradient: "from-slate-600 to-blue-600",
    panelGradient: "from-slate-50/80 via-white to-blue-50/70",
    border: "border-slate-200/80",
    kicker: "text-slate-700",
    marker: "marker:text-slate-600",
    imageOverlay: "from-slate-900/40 via-transparent to-blue-900/30",
    stats: [
      { label: "Businesses", value: "300+" },
      { label: "Volume", value: "High" },
      { label: "Efficiency", value: "100%" },
    ],
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

function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite; }
        .animate-dash { animation: dash 1s linear infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; transform-origin: center; }
      `}</style>

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-cyan-50/70 to-blue-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(19,95,150,0.17),transparent_38%),radial-gradient(circle_at_88%_10%,rgba(15,157,116,0.15),transparent_34%)]" />
        <div className="section-shell relative">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Professional Financial Solutions
          </p>
          <h1 className="animate-fade-up animation-delay-100 mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-[2.6rem]">
            Comprehensive Transfer Services
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
            Awail Al-Naqd delivers secure and efficient financial solutions for individuals,
            families, students, and businesses across the globe.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { icon: Shield, label: "Secure & Compliant" },
              { icon: Globe, label: "Global Reach" },
              { icon: Clock, label: "Fast Processing" },
              { icon: TrendingUp, label: "Best Rates" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-md">
                <item.icon className="mx-auto mb-2 h-6 w-6 text-cyan-600" />
                <p className="text-xs font-medium text-slate-700 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)] opacity-0 animate-fadeIn">
            <Image
              src="/images/service-banner.jpg"
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

      <section className="section-shell">
        {serviceSections.map((service, index) => {
          const reversed = index % 2 === 1;
          const Icon = service.icon;
          const Animated = service.animated;

          return (
            <article key={service.title} className={`mb-10 ${index === serviceSections.length - 1 ? "mb-0" : ""}`}>
              <div className={`rounded-3xl border border-slate-200/80 bg-gradient-to-br ${service.panelGradient} p-4 shadow-xl sm:p-5 md:p-6`}>
                <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
                  <div className={`${reversed ? "md:order-2" : ""} opacity-0 animate-fade-up`} style={{ animationDelay: "0.08s" }}>
                    <div className={`surface-card h-full border ${service.border} bg-white/95 p-4 sm:p-6`}>
                      <div className="inline-flex items-center gap-2">
                        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${service.kicker}`}>
                          Service {index + 1}
                        </p>
                      </div>

                      <h2 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">{service.title}</h2>

                      <p className="mt-4 text-sm leading-relaxed text-slate-700">{service.paragraphs[0]}</p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-700">{service.paragraphs[1]}</p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-700">{service.paragraphs[2]}</p>

                      <div className="mt-5 grid grid-cols-3 gap-2.5">
                        {service.stats.map((stat) => (
                          <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-2.5 text-center shadow-sm">
                            <p className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-base font-bold text-transparent sm:text-lg`}>
                              <AchievementValue value={stat.value} />
                            </p>
                            <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <p className={`mt-6 text-sm font-semibold ${service.kicker}`}>{service.featureHeading}</p>
                      <ul className={`mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 sm:text-base ${service.marker}`}>
                        {service.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <p className="mt-6 text-sm leading-relaxed text-slate-700 sm:text-base">{service.closing}</p>
                    </div>
                  </div>

                  <div className={`${reversed ? "md:order-1" : ""} opacity-0 animate-fade-up`} style={{ animationDelay: "0.16s" }}>
                    <div className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.15)] sm:min-h-[350px] md:min-h-0">
                      <div className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${service.imageOverlay}`} />
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute right-4 top-4 z-20 h-24 w-24 rounded-xl border border-white/60 bg-white/85 p-2 shadow-lg backdrop-blur-sm sm:h-28 sm:w-28">
                        <Animated />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                        <p className="text-sm font-semibold text-white sm:text-base">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-14">
        <div className="section-shell py-0">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Why Choose Awail Al-Naqd?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Trusted by thousands for reliable, secure, and compliant financial services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Shield}
              title="Secure & Compliant"
              description="All transactions follow strict compliance procedures and financial regulations."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Transparent Pricing"
              description="Clear rate confirmation before processing with no hidden charges."
            />
            <FeatureCard
              icon={Clock}
              title="Fast Processing"
              description="Efficient handling of transfers with timely updates for each stage."
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-7 text-center shadow-2xl sm:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-50">
            Experience professional financial services tailored to your needs. Contact us today.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
