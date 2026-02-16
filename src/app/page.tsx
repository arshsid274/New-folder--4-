import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  CheckCircle2,
  FileCheck,
  Globe,
  GraduationCap,
  Heart,
  Plane,
  Send,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AchievementValue } from "@/components/achievement-value";

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

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: typeof Banknote;
  gradient: string;
  badgeGradient: string;
  features: string[];
};

const services: ServiceCard[] = [
  {
    title: "Local Currency Exchange",
    description:
      "Competitive rates for buying and selling international currencies with transparent pricing.",
    image: "/images/localcurrencyExchange.jpg",
    alt: "Local currency exchange desk at Awail Al-Naqd",
    icon: Banknote,
    gradient: "from-blue-600/80 via-cyan-500/50 to-transparent",
    badgeGradient: "from-blue-600 to-cyan-500",
    features: ["Live rates", "Major currencies", "Instant processing"],
  },
  {
    title: "International Money Transfers",
    description:
      "Secure worldwide bank-to-bank transfers through recognized channels with full clarity.",
    image: "/images/international-money.jpg",
    alt: "International money transfer services",
    icon: Send,
    gradient: "from-cyan-600/80 via-blue-500/50 to-transparent",
    badgeGradient: "from-cyan-600 to-blue-500",
    features: ["150+ countries", "Bank-grade security", "Fast delivery"],
  },
  {
    title: "Medical Transfers",
    description: "Fast and reliable transfers to hospitals and medical institutions abroad.",
    image: "/images/medical-transfer.jpg",
    alt: "Medical transfer support for hospitals abroad",
    icon: Heart,
    gradient: "from-emerald-700/75 via-teal-500/45 to-transparent",
    badgeGradient: "from-emerald-600 to-teal-500",
    features: ["Priority support", "Hospital direct", "Documentation help"],
  },
  {
    title: "Study Abroad Transfers",
    description: "Tuition and student expense transfers to universities worldwide.",
    image: "/images/study-abroad.jpg",
    alt: "Study abroad tuition transfer support",
    icon: GraduationCap,
    gradient: "from-indigo-700/75 via-blue-500/45 to-transparent",
    badgeGradient: "from-indigo-600 to-blue-500",
    features: ["Tuition payments", "Living expenses", "Student support"],
  },
  {
    title: "Tourism Transfers",
    description: "Foreign currency exchange and travel remittances for international trips.",
    image: "/images/tourism-transfer.jpg",
    alt: "Tourism remittance and foreign exchange",
    icon: Plane,
    gradient: "from-teal-700/75 via-emerald-500/45 to-transparent",
    badgeGradient: "from-teal-600 to-emerald-500",
    features: ["Travel FX", "Quick exchange", "Transparent rates"],
  },
  {
    title: "Corporate Transfers",
    description: "Business payments and commercial FX solutions for growing companies.",
    image: "/images/corporate-transfer.jpg",
    alt: "Corporate transfer and FX services",
    icon: Building2,
    gradient: "from-slate-700/80 via-blue-600/45 to-transparent",
    badgeGradient: "from-slate-700 to-blue-600",
    features: ["Supplier payments", "Corporate rates", "Traceable transfers"],
  },
];

const strengths = [
  {
    title: "Competitive and Transparent Rates",
    description: "Clear confirmation before processing and fair pricing aligned to market conditions.",
    icon: TrendingUp,
  },
  {
    title: "Secure Transaction Processing",
    description: "Bank-grade controls for operational reliability and transaction integrity.",
    icon: Shield,
  },
  {
    title: "AML and KYC Compliant",
    description: "Every transaction follows internal verification and documentation standards.",
    icon: FileCheck,
  },
  {
    title: "Dedicated Customer Support",
    description: "Our team guides personal and corporate clients throughout each transfer.",
    icon: Users,
  },
  {
    title: "Professional and Reliable Service",
    description: "Trusted support for medical, study, tourism, and business payment needs.",
    icon: Award,
  },
];

function SubmitRequestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10"
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
      className="h-10 w-10"
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
      className="h-10 w-10"
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
    title: "Submit your request",
    description: "Share your transfer requirement through our quote form or direct contact channels.",
    icon: SubmitRequestIcon,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Receive rate confirmation",
    description: "Get transparent rate and fee confirmation before transaction execution.",
    icon: SecureConfirmationIcon,
    gradient: "from-cyan-600 to-teal-500",
  },
  {
    title: "Complete transfer processing",
    description: "Submit required documents and our team processes your transfer securely.",
    icon: TransferProcessingIcon,
    gradient: "from-teal-600 to-emerald-500",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Clients Served", color: "text-blue-700" },
  { icon: Globe, value: "150+", label: "Countries", color: "text-cyan-700" },
  { icon: Award, value: "15+", label: "Years Experience", color: "text-emerald-700" },
  { icon: Zap, value: "99.9%", label: "Success Rate", color: "text-teal-700" },
];

const testimonials = [
  {
    name: "Ahmed M.",
    role: "Medical Transfer Client",
    quote:
      "Fast and reliable service for my medical treatment abroad. Their team handled everything clearly.",
  },
  {
    name: "Sarah K.",
    role: "Student",
    quote:
      "Tuition transfer was smooth and transparent. I received full details before processing started.",
  },
  {
    name: "Ibrahim R.",
    role: "Business Owner",
    quote:
      "Professional support for our supplier payments. We trust them for every international transfer.",
  },
];

function AnimatedHero() {
  return (
    <svg className="h-full w-full" viewBox="0 0 420 280" fill="none" aria-hidden="true">
      <g className="animate-float">
        <circle cx="70" cy="64" r="24" fill="#0891b2" fillOpacity="0.14" />
        <text x="70" y="72" textAnchor="middle" fontSize="22" fill="#0e7490" fontWeight="700">
          $
        </text>
      </g>

      <g className="animate-float-delayed">
        <circle cx="350" cy="88" r="22" fill="#10b981" fillOpacity="0.14" />
        <text x="350" y="96" textAnchor="middle" fontSize="20" fill="#059669" fontWeight="700">
          EUR
        </text>
      </g>

      <g className="animate-float" style={{ animationDelay: "0.7s" }}>
        <circle cx="210" cy="48" r="20" fill="#06b6d4" fillOpacity="0.14" />
        <text x="210" y="56" textAnchor="middle" fontSize="18" fill="#0891b2" fontWeight="700">
          GBP
        </text>
      </g>

      <path
        d="M86 164 Q208 120 330 164"
        stroke="#0891b2"
        strokeWidth="3"
        strokeDasharray="8 6"
        className="animate-dash-slow"
      />
      <path
        d="M72 206 Q210 178 346 206"
        stroke="#10b981"
        strokeWidth="3"
        strokeDasharray="8 6"
        className="animate-dash-slow"
        style={{ animationDelay: "0.4s" }}
      />

      <circle cx="210" cy="184" r="54" stroke="#0284c7" strokeWidth="2" opacity="0.25" />
      <ellipse cx="210" cy="184" rx="54" ry="24" stroke="#06b6d4" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="210" cy="184" rx="24" ry="54" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes dash-slow {
          to { stroke-dashoffset: -28; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-dash-slow { animation: dash-slow 2.2s linear infinite; }
      `}</style>

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-cyan-50/65 to-blue-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(6,182,212,0.17),transparent_42%),radial-gradient(circle_at_82%_72%,rgba(16,185,129,0.11),transparent_42%)]" />
        <div className="section-shell relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Trusted Financial Services
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                Trusted Currency Exchange and International Transfer Services
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Awail Al-Naqd is a licensed exchange and transfer provider in Benghazi, Libya. We
                support medical payments, study abroad tuition, tourism remittances, and corporate
                transfers through secure, transparent, and compliance-first processing.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/get-a-quote" className="primary-btn w-full rounded-xl px-7 sm:w-auto">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="secondary-btn w-full rounded-xl px-7 sm:w-auto">
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat) => (
                  <article
                    key={stat.label}
                    className="rounded-xl border border-slate-200/80 bg-white/90 p-3 text-center shadow-sm sm:p-4"
                  >
                    <stat.icon className={`mx-auto h-5 w-5 ${stat.color} sm:h-6 sm:w-6`} />
                    <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                      <AchievementValue value={stat.value} />
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">{stat.label}</p>
                  </article>
                ))}
              </div>
            </article>

            <div className="relative animate-fade-up animation-delay-200">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-cyan-500/15 blur-2xl" />

              <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl sm:p-4">
                <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[360px]">
                  <Image
                    src="/images/main-hero.jpg"
                    alt="Currency exchange services"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    Global Exchange Network
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
                  <div className="h-28 w-full sm:h-32">
                    <AnimatedHero />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Exchange and Transfer Solutions"
            description="From local currency exchange to cross-border remittance support, our team handles personal and business transfer requirements with clear documentation and reliable execution."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`} />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.badgeGradient} text-white shadow-lg`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>

                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="section-shell">
          <SectionHeader
            label="Why Choose Us"
            title="Built on Trust, Security, and Compliance"
            description="Every transfer follows structured controls, transparent rate confirmation, and dedicated support from request to completion."
          />

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="relative order-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl lg:order-1 sm:p-4">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[360px]">
                <Image
                  src="/images/support-desk.jpg"
                  alt="Professional financial service support"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </article>

            <div className="order-1 space-y-4 lg:order-2">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md transition-all duration-300 hover:-translate-x-1 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <SectionHeader
            label="How It Works"
            title="Simple and Efficient Process"
            description="Submit your request, confirm the rate, and complete secure processing with guided support at each step."
          />

          <div className="relative grid gap-5 md:grid-cols-3">
            <div className="absolute left-12 right-12 top-12 hidden h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-30 md:block" />
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <span
                    className={`absolute -left-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-sm font-bold text-white shadow-lg`}
                  >
                    {index + 1}
                  </span>
                  <div className="text-cyan-700">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="section-shell py-0">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
              Trusted by individuals, families, students, and businesses for reliable financial service.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${item.name}-${index}`} aria-hidden="true" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-blue-50">&quot;{item.quote}&quot;</p>
                <p className="mt-5 text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-blue-200">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-center shadow-2xl sm:p-10 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.2),transparent_46%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-blue-50 sm:text-lg">
                Experience professional currency exchange and international transfer services tailored to your needs.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Get a Quote Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

