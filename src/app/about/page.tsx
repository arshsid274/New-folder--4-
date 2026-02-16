import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  CheckCircle2,
  Clock,
  Eye,
  FileCheck,
  Globe,
  Lock,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { AchievementValue } from "@/components/achievement-value";
import { MilestonesTimeline } from "@/components/milestones-timeline";

export const metadata: Metadata = {
  title: {
    absolute: "About Awail Al-Naqd",
  },
  description:
    "Learn about Awail Al-Naqd, a trusted currency exchange and international remittance company in Benghazi, Libya.",
  openGraph: {
    title: "About Awail Al-Naqd",
    description:
      "Learn about Awail Al-Naqd, a trusted currency exchange and international remittance company in Benghazi, Libya.",
    type: "website",
  },
};

function AnimatedTarget() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        {[70, 55, 40, 25].map((radius, idx) => (
          <circle
            key={radius}
            cx="100"
            cy="100"
            r={radius}
            stroke="#0891b2"
            strokeWidth="2"
            fill={idx === 3 ? "#0891b2" : "none"}
            fillOpacity={idx === 3 ? "0.3" : "0"}
            className={idx % 2 === 0 ? "animate-pulse" : ""}
            style={{ animationDelay: `${idx * 0.15}s` }}
          />
        ))}
        <path
          d="M100 30 L100 50 M100 150 L100 170 M30 100 L50 100 M150 100 L170 100"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function AnimatedGrowth() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float-delayed">
        <path
          d="M40 140 L70 110 L100 130 L130 80 L160 60"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M40 140 L70 110 L100 130 L130 80 L160 60 L160 140 L40 140"
          fill="#10b981"
          fillOpacity="0.1"
        />
        {[40, 70, 100, 130, 160].map((x, idx) => (
          <circle
            key={x}
            cx={x}
            cy={[140, 110, 130, 80, 60][idx]}
            r="4"
            fill="#10b981"
            className="animate-ping"
            style={{ animationDelay: `${idx * 0.1}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

type ValueItem = {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
};

const values: ValueItem[] = [
  {
    name: "Integrity",
    icon: Shield,
    description: "We operate with honesty and strong moral principles in every transaction.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Transparency",
    icon: Eye,
    description: "Clear communication and full disclosure of rates and service terms.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "Security",
    icon: Lock,
    description: "Bank-grade safeguards protect each transaction and client data flow.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Compliance",
    icon: FileCheck,
    description: "Strict adherence to applicable financial regulations and internal controls.",
    color: "from-emerald-500 to-green-500",
  },
  {
    name: "Customer Focus",
    icon: Users,
    description: "Dedicated support and personalized service for every client requirement.",
    color: "from-blue-500 to-indigo-500",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Clients Served" },
  { icon: Globe, value: "150+", label: "Countries" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "99.9%", label: "Success Rate" },
];

const milestones = [
  { year: "2008", title: "Foundation", description: "Awail Al-Naqd established in Benghazi." },
  { year: "2012", title: "Expansion", description: "Introduced international transfer services." },
  { year: "2016", title: "Digital Growth", description: "Enhanced digital transaction workflows." },
  { year: "2020", title: "Recognition", description: "Became a trusted financial brand in Libya." },
  { year: "2024", title: "Innovation", description: "Advanced compliance systems fully implemented." },
];

const teamPillars = [
  {
    role: "Leadership",
    description: "Experienced executives guiding strategy, governance, and operational excellence.",
  },
  {
    role: "Compliance",
    description: "Dedicated specialists ensuring regulatory adherence and risk controls.",
  },
  {
    role: "Operations",
    description: "Skilled professionals managing high-quality transfer execution.",
  },
  {
    role: "Support",
    description: "Responsive client service team focused on reliability and clarity.",
  },
];

export default function AboutPage() {
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
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes draw {
          from { stroke-dasharray: 0 100; }
          to { stroke-dasharray: 100 0; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; transform-origin: center; }
        .animate-draw { animation: draw 2s ease-in-out infinite; }
      `}</style>

      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_35%)]" />
        <div className="section-shell relative">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">Trusted Since 2008</span>
              </div>
              <h1 className="font-benton text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
                About Awail Al-Naqd
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                Awail Al-Naqd is a professional currency exchange and international remittance
                company based in Benghazi, Libya. We provide secure and compliant foreign exchange
                services for individuals and businesses.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">{siteConfig.addressLine}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">15+ Years of Service</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">{siteConfig.phone}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 opacity-10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
                <Image
                  src="/images/about.png"
                  alt="Awail Al-Naqd office in Benghazi"
                  width={1000}
                  height={750}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                  priority
                />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-center">
                      <stat.icon className="mx-auto mb-2 h-6 w-6 text-cyan-600" />
                      <p className="text-xl font-bold text-slate-900">
                        <AchievementValue value={stat.value} />
                      </p>
                      <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Purpose</p>
            <h2 className="font-benton text-3xl font-bold text-slate-900 md:text-4xl">Mission and Vision</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Our direction is grounded in secure operations and trusted service delivery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0">
                    <AnimatedTarget />
                  </div>
                  <div>
                    <h3 className="font-benton text-2xl font-bold text-slate-900">Mission</h3>
                    <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  </div>
                </div>
                <p className="mb-5 leading-relaxed text-slate-600">
                  To deliver safe, efficient, and transparent currency exchange and international
                  transfers.
                </p>
                <ul className="space-y-3">
                  {["Secure transactions", "Competitive rates", "Excellent service"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0">
                    <AnimatedGrowth />
                  </div>
                  <div>
                    <h3 className="font-benton text-2xl font-bold text-slate-900">Vision</h3>
                    <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                  </div>
                </div>
                <p className="mb-5 leading-relaxed text-slate-600">
                  To be a trusted financial partner in Libya and the region.
                </p>
                <ul className="space-y-3">
                  {["Regional leadership", "Innovation focus", "Customer trust"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Core Values</p>
            <h2 className="font-benton text-3xl font-bold text-slate-900 md:text-4xl">How We Operate</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Every transaction is managed with professionalism and accountability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.name} className="group relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`} />
                  <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-benton text-lg font-bold text-slate-900">{value.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Our Journey</p>
            <h2 className="font-benton text-3xl font-bold text-slate-900 md:text-4xl">Milestones and Growth</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Building trust through consistent excellence over the years.
            </p>
          </div>

          <MilestonesTimeline milestones={milestones} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="section-shell py-0">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Why Choose Us</p>
            <h2 className="font-benton text-3xl font-bold text-white md:text-4xl">Trusted by Thousands</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Experience the difference of working with a dedicated financial partner.
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamPillars.map((pillar) => (
              <article key={pillar.role} className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-benton text-lg font-bold text-white">{pillar.role}</h3>
                <p className="mt-2 text-sm text-blue-100">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {["AML & KYC Governance", "Documented Audit Trail", "Dedicated Client Support", "Regulatory-first Operations"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/20">
                    <Shield className="h-4 w-4 text-cyan-100" />
                  </span>
                  <p className="text-sm font-medium text-blue-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-center shadow-2xl sm:p-12">
            <h2 className="font-benton text-3xl font-bold text-white md:text-4xl">Ready to Experience Excellence?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-50">
              Join thousands of satisfied clients who trust Awail Al-Naqd for secure and compliant financial services.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started Today
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
