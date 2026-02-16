import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Calculator,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { AchievementValue } from "@/components/achievement-value";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Request a Quote | Awail Al-Naqd",
  },
  description:
    "Submit your transfer request and receive competitive, transparent exchange rates with secure processing.",
  openGraph: {
    title: "Request a Quote | Awail Al-Naqd",
    description:
      "Submit your transfer request and receive competitive, transparent exchange rates with secure processing.",
    type: "website",
  },
};

type Indicator = {
  icon: LucideIcon;
  label: string;
  description: string;
};

const trustIndicators: Indicator[] = [
  { icon: Shield, label: "Secure Processing", description: "Compliance-first handling of every request" },
  { icon: Clock, label: "Fast Response", description: "Quote review and follow-up within 24 hours" },
  { icon: CheckCircle2, label: "Transparent Pricing", description: "Clear rate and fee confirmation before processing" },
  { icon: Lock, label: "Data Protected", description: "Controlled access and secure client data practices" },
];

const quoteFeatures: Indicator[] = [
  { icon: TrendingUp, label: "Competitive Rates", description: "Market-aligned pricing for exchange and transfer needs" },
  { icon: Globe, label: "Global Coverage", description: "Support for medical, study, tourism, and business corridors" },
  { icon: Zap, label: "Efficient Processing", description: "Structured review workflow with clear requirements" },
  { icon: Award, label: "Trusted Service", description: "15+ years supporting personal and corporate clients" },
];

const processSteps = [
  { number: "1", title: "Fill Form", description: "Provide service type, amount, and destination details." },
  { number: "2", title: "Get Quote", description: "Receive a competitive rate and required document list." },
  { number: "3", title: "Confirm", description: "Approve the quote and complete compliance checks." },
  { number: "4", title: "Transfer", description: "We process the transaction securely and efficiently." },
];

const trustStats = [
  { value: "10,000+", label: "Clients Served" },
  { value: "150+", label: "Countries" },
  { value: "99.9%", label: "Success Rate" },
];

function AnimatedQuote() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        <rect
          x="40"
          y="50"
          width="120"
          height="100"
          rx="12"
          fill="#0891b2"
          fillOpacity="0.1"
          stroke="#0891b2"
          strokeWidth="2"
        />
        <line x1="60" y1="75" x2="140" y2="75" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="95" x2="120" y2="95" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="115" x2="130" y2="115" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <circle cx="150" cy="140" r="8" fill="#10b981" className="animate-ping" />
        <path d="M145 140 L148 143 L155 136" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="animate-pulse-slow">
        <circle cx="100" cy="100" r="85" stroke="#0891b2" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
      </g>
    </svg>
  );
}

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="section-shell relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="animate-fade-up">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                <Calculator className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Quote Request</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
                Request a Currency Exchange or Transfer Quote
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Share your transaction details and our team will provide a tailored quote with
                transparent rates, processing requirements, and compliance guidance before you
                proceed.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {trustIndicators.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.label}
                      className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <h2 className="text-sm font-semibold text-slate-900">{item.label}</h2>
                          <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-4">
              <div className="relative h-[240px] overflow-hidden rounded-2xl sm:h-[300px]">
                <Image
                  src="/images/hero-exchange.jpg"
                  alt="Request transfer quote from Awail Al-Naqd"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
              </div>

              <div className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50 p-4 sm:grid-cols-[140px_1fr] sm:p-5">
                <div className="mx-auto h-28 w-28 sm:h-full sm:w-full">
                  <AnimatedQuote />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-slate-900">Efficient and Transparent Quote Handling</h2>
                  <p className="text-sm text-slate-600">
                    Every request is reviewed to confirm service eligibility, required documents,
                    and accurate pricing based on your transfer context.
                  </p>
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Compliance-first processing
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-10">
          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900">Why Request a Quote?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Quote requests help you understand exact rates, required documentation, and expected
                processing flow for your specific transaction type before commitment.
              </p>
              <div className="mt-5 space-y-4">
                {quoteFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.label} className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">{feature.label}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-6 text-white shadow-lg">
              <h2 className="text-xl font-bold">How It Works</h2>
              <div className="mt-4 space-y-3">
                {processSteps.map((step) => (
                  <div key={step.number} className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-bold">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-blue-100">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Need Help?</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>{siteConfig.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{siteConfig.addressLine}</span>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:sticky lg:top-8">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <header className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <h2 className="text-2xl font-bold">Get Your Quote</h2>
                <p className="mt-2 text-sm text-blue-100">
                  Complete the form below and our team will review your request shortly.
                </p>
              </header>
              <QuoteForm embedded />
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-14">
        <div className="section-shell py-0 text-center">
          <div className="mb-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Trusted by <AchievementValue value="10,000+" /> Clients
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-blue-100">
            Join clients who rely on Awail Al-Naqd for secure currency exchange and international
            transfer support.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {trustStats.map((item) => (
              <article key={item.label} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">
                  <AchievementValue value={item.value} />
                </p>
                <p className="mt-1 text-sm text-blue-100">{item.label}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

