import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bell,
  CheckCircle2,
  Database,
  Eye,
  FileCheck,
  FileSearch,
  Layers,
  Lock,
  Scale,
  Shield,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { AchievementValue } from "@/components/achievement-value";

export const metadata: Metadata = {
  title: {
    absolute: "Compliance & Regulatory Commitment | Awail Al-Naqd",
  },
  description:
    "Learn how Awail Al-Naqd applies AML and KYC controls, transaction monitoring, and data protection standards for secure and lawful operations.",
  openGraph: {
    title: "Compliance & Regulatory Commitment | Awail Al-Naqd",
    description:
      "Learn how Awail Al-Naqd applies AML and KYC controls, transaction monitoring, and data protection standards for secure and lawful operations.",
    type: "website",
  },
};

type ComplianceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: string;
};

type FrameworkCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const controlStandards: ComplianceCard[] = [
  {
    icon: UserCheck,
    title: "Identity Verification Procedures",
    description:
      "Comprehensive KYC procedures are applied to validate customer identity and reduce fraud risk.",
    details: [
      "Government-issued identification checks",
      "Customer profile and purpose verification",
      "Enhanced due diligence for high-risk cases",
      "Documented onboarding and review process",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Transaction Monitoring",
    description:
      "Transactions are reviewed through risk-based monitoring to identify unusual patterns early.",
    details: [
      "Ongoing transaction behavior checks",
      "Threshold-based review alerts",
      "Screening against risk indicators",
      "Escalation and internal compliance review",
    ],
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Scale,
    title: "Risk Management Controls",
    description:
      "We maintain layered controls to assess, mitigate, and report operational and compliance risk.",
    details: [
      "Risk-based compliance framework",
      "Control testing and periodic review",
      "Audit trail and evidence retention",
      "Policy updates aligned with regulations",
    ],
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Data Protection Standards",
    description:
      "Customer and transaction information is protected through strict access and security controls.",
    details: [
      "Secure data handling practices",
      "Access controls and authorization layers",
      "Protected record storage and retention",
      "Privacy-focused internal procedures",
    ],
    color: "from-emerald-500 to-green-500",
  },
];

const frameworks: FrameworkCard[] = [
  {
    icon: Shield,
    title: "AML Compliance",
    description: "Anti-Money Laundering procedures guided by international compliance expectations.",
    points: [
      "Sanctions and screening checks",
      "Suspicious activity escalation",
      "Risk-based customer review",
      "Documented investigation workflow",
    ],
  },
  {
    icon: FileCheck,
    title: "KYC Standards",
    description: "Know Your Customer controls for onboarding and relationship management.",
    points: [
      "Customer identity confirmation",
      "Purpose and activity assessment",
      "Ongoing profile monitoring",
      "Structured documentation records",
    ],
  },
  {
    icon: Database,
    title: "Record Keeping",
    description: "Comprehensive retention of transaction and compliance documentation.",
    points: [
      "Customer file maintenance",
      "Transfer and review logs",
      "Internal audit trail support",
      "Regulatory-ready records",
    ],
  },
  {
    icon: Bell,
    title: "Reporting Obligations",
    description: "Timely and structured reporting aligned with regulatory requirements.",
    points: [
      "High-risk case reporting",
      "Threshold event escalation",
      "Cross-border review obligations",
      "Internal compliance notification flow",
    ],
  },
];

const commitments = [
  { icon: Award, text: "Adherence to international AML and CFT standards" },
  { icon: Users, text: "Regular staff training on compliance controls and updates" },
  { icon: TrendingUp, text: "Continuous improvement of monitoring and review systems" },
  { icon: FileSearch, text: "Periodic internal assessments and control verification" },
  { icon: Layers, text: "Multi-layer security and customer verification process" },
  { icon: CheckCircle2, text: "Transparent operational procedures for client confidence" },
];

const stats = [
  { value: "100%", label: "Compliance Focus", icon: CheckCircle2 },
  { value: "24/7", label: "Monitoring", icon: Eye },
  { value: "15+", label: "Years Trusted", icon: Award },
  { value: "Layered", label: "Control Model", icon: Shield },
];

function AnimatedShield() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <g className="animate-float">
        <path
          d="M100 30 L150 50 L150 100 Q150 145 100 170 Q50 145 50 100 L50 50 Z"
          fill="url(#shield-grad)"
          fillOpacity="0.15"
        />
        <path
          d="M100 30 L150 50 L150 100 Q150 145 100 170 Q50 145 50 100 L50 50 Z"
          stroke="#0891b2"
          strokeWidth="2.5"
        />
        <path
          d="M75 100 L92 117 L125 75"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />
        <circle
          cx="100"
          cy="100"
          r="70"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-spin-slow"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

function AnimatedCompliance() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float-delayed">
        <rect
          x="50"
          y="40"
          width="100"
          height="120"
          rx="8"
          fill="#0891b2"
          fillOpacity="0.1"
          stroke="#0891b2"
          strokeWidth="2"
        />
        <line x1="70" y1="65" x2="130" y2="65" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="70" y1="85" x2="110" y2="85" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="105" x2="125" y2="105" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <circle cx="130" cy="135" r="10" fill="#10b981" className="animate-pulse" />
        <path d="M125 135 L128 138 L135 131" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function AnimatedMonitoring() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        <circle cx="100" cy="100" r="50" fill="#0891b2" fillOpacity="0.1" />
        <circle cx="100" cy="100" r="50" stroke="#0891b2" strokeWidth="2" />
        <circle cx="100" cy="100" r="30" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 3" className="animate-pulse" />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="60"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-rotate"
          style={{ transformOrigin: "100px 100px" }}
        />
        <circle cx="100" cy="100" r="5" fill="#10b981" />
      </g>
    </svg>
  );
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes draw {
          from { stroke-dasharray: 0 100; }
          to { stroke-dasharray: 100 0; }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes rotate {
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3.5s ease-in-out infinite; }
        .animate-draw { animation: draw 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; transform-origin: center; }
        .animate-rotate { animation: rotate 3s linear infinite; }
      `}</style>

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-cyan-50/70 to-blue-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.12),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_40%)]" />
        <div className="section-shell relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="animate-fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Compliance Framework</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                Compliance and Regulatory Commitment
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Awail Al-Naqd applies strict Anti-Money Laundering (AML) and Know Your Customer
                (KYC) controls to ensure lawful, secure, and transparent financial operations for
                every exchange and international transfer request.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <article key={stat.label} className="rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm">
                      <Icon className="h-5 w-5 text-blue-600" />
                      <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                        <AchievementValue value={stat.value} />
                      </p>
                      <p className="text-xs text-slate-600">{stat.label}</p>
                    </article>
                  );
                })}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-4">
              <div className="relative h-[250px] overflow-hidden rounded-2xl sm:h-[310px]">
                <Image
                  src="/images/compliance-security.jpg"
                  alt="Compliance security controls at Awail Al-Naqd"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>
              <div className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-4 sm:grid-cols-[130px_1fr] sm:p-5">
                <div className="mx-auto h-28 w-28 sm:h-full sm:w-full">
                  <AnimatedShield />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-slate-900">Security-first Oversight</h2>
                  <p className="text-sm text-slate-600">
                    Every transaction is processed under documented controls designed to protect
                    clients and meet regulatory obligations.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <header className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Core Controls</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Control Standards and Procedures
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Multi-layered compliance controls protect onboarding, transaction review, execution,
              and post-processing documentation.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {controlStandards.map((control) => {
              const Icon = control.icon;

              return (
                <article
                  key={control.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-7"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${control.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                  <div className="relative">
                    <span
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${control.color} text-white`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{control.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {control.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {control.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          {detail}
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
          <header className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Regulatory Framework</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Compliance Frameworks We Follow
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Structured standards aligned with risk-aware financial operations and regulatory
              reporting responsibilities.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {frameworks.map((framework) => {
              const Icon = framework.icon;

              return (
                <article
                  key={framework.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{framework.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{framework.description}</p>
                  <ul className="mt-4 space-y-2">
                    {framework.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-slate-700 sm:text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
              <article className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
                <div className="h-28 w-full">
                  <AnimatedCompliance />
                </div>
              </article>
              <article className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-emerald-50 p-5">
                <div className="h-28 w-full">
                  <AnimatedMonitoring />
                </div>
              </article>
            </div>

            <article className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Our Commitment</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Dedicated to Compliance Excellence
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                We maintain continuous oversight, control enhancements, and documented procedures to
                support secure and lawful client transactions across personal and corporate services.
              </p>

              <div className="mt-6 space-y-3">
                {commitments.map((commitment) => {
                  const Icon = commitment.icon;

                  return (
                    <article
                      key={commitment.text}
                      className="flex items-start gap-3 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-transparent px-4 py-3"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="pt-1 text-sm text-slate-700 sm:text-base">{commitment.text}</p>
                    </article>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="section-shell py-0">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur-sm sm:p-8">
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <Shield className="h-7 w-7" />
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Your Security Is Our Priority</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Every transfer undergoes layered compliance checks to support transaction safety,
              lawful processing, and strong customer protection standards from request intake to
              final settlement.
            </p>
            <p className="mt-5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm leading-relaxed text-blue-50">
              <AlertTriangle className="mr-2 inline h-4 w-4 text-yellow-400" />
              We actively prevent financial crime through monitoring controls, staff oversight, and
              documented compliance workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <article className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-center shadow-2xl sm:p-10 md:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Questions About Our Compliance Standards?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-blue-50 sm:text-lg">
              Our team is available to clarify procedures, documentation requirements, and internal
              compliance controls.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Contact Compliance Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

