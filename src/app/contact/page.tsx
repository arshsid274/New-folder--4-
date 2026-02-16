import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Awail Al-Naqd",
  },
  description:
    "Get in touch with Awail Al-Naqd in Benghazi, Libya for currency exchange support, transfer assistance, and compliance guidance.",
  openGraph: {
    title: "Contact Awail Al-Naqd",
    description:
      "Get in touch with Awail Al-Naqd in Benghazi, Libya for currency exchange support, transfer assistance, and compliance guidance.",
    type: "website",
  },
};

type ContactMethod = {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color: string;
  actionLabel: string;
  href: string;
};

type QuickAction = {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
};

const businessHours = "Sunday - Thursday: 9:00 AM - 4:00 PM | Friday & Saturday: Closed";

const contactMethods: ContactMethod[] = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: siteConfig.addressLine,
    description: "Meet our team in person for exchange, transfer, and documentation support.",
    color: "from-blue-500 to-cyan-500",
    actionLabel: "Get Directions",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.addressLine)}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: siteConfig.phone,
    description: "Speak directly with our team for service and status guidance.",
    color: "from-cyan-500 to-teal-500",
    actionLabel: "Call Now",
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@awail-alnaqd.com",
    description: "Send your request details and receive a clear follow-up.",
    color: "from-teal-500 to-emerald-500",
    actionLabel: "Send Email",
    href: "mailto:info@awail-alnaqd.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Sunday - Thursday",
    description: "9:00 AM - 4:00 PM | Friday and Saturday: Closed",
    color: "from-emerald-500 to-green-500",
    actionLabel: "View Schedule",
    href: "#business-hours",
  },
];

const quickActions: QuickAction[] = [
  { icon: MessageCircle, label: "Request a Quote", description: "Get competitive rates", href: "/get-a-quote" },
  { icon: Headphones, label: "Customer Support", description: "Talk to our team", href: "/contact" },
  { icon: Calendar, label: "Schedule Visit", description: "Plan an office appointment", href: "/contact#business-hours" },
  { icon: Globe, label: "FAQs", description: "Find quick answers", href: "/terms-and-conditions" },
];

const reasons = [
  "15+ years of trusted service",
  "Competitive exchange rates",
  "Secure and compliant operations",
  "Professional customer support",
];

function AnimatedContact() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g className="animate-float">
        <rect x="60" y="40" width="80" height="120" rx="12" fill="#0891b2" fillOpacity="0.1" stroke="#0891b2" strokeWidth="2.5" />
        <circle cx="100" cy="155" r="5" fill="#0891b2" />
        <line x1="75" y1="50" x2="125" y2="50" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <g className="animate-pulse">
          <rect x="70" y="70" width="50" height="25" rx="8" fill="#06b6d4" fillOpacity="0.3" />
          <rect x="80" y="100" width="50" height="25" rx="8" fill="#0891b2" fillOpacity="0.4" />
        </g>
        <circle cx="130" cy="50" r="6" fill="#10b981" className="animate-ping" />
        <circle cx="130" cy="50" r="4" fill="#10b981" />
      </g>
      <g className="animate-pulse-slow">
        <circle cx="100" cy="100" r="75" stroke="#0891b2" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
      </g>
    </svg>
  );
}

function AnimatedLocation() {
  return (
    <svg className="h-full w-full" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <g className="animate-float-delayed">
        <path
          d="M60 20 C45 20 35 30 35 45 C35 65 60 95 60 95 C60 95 85 65 85 45 C85 30 75 20 60 20 Z"
          fill="#0891b2"
          fillOpacity="0.15"
          stroke="#0891b2"
          strokeWidth="2.5"
        />
        <circle cx="60" cy="45" r="10" fill="#10b981" className="animate-pulse" />
        <circle cx="60" cy="45" r="15" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="2 2" className="animate-ping" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function ContactPage() {
  const mapAddress = encodeURIComponent(siteConfig.addressLine);

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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-cyan-50/65 to-blue-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="section-shell relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                <MessageCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Get in Touch</span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                Contact Awail Al-Naqd
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Reach out to our team for currency exchange support, transfer assistance, and
                compliance guidance. We support personal and corporate requirements with responsive
                service from first inquiry to final transaction support.
              </p>

              <div className="mt-7 space-y-3">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-slate-700">{reason}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-4">
              <div className="relative h-[220px] overflow-hidden rounded-2xl sm:h-[280px]">
                <Image
                  src="/images/contact-office.jpg"
                  alt="Awail Al-Naqd customer service office"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>

              <div className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 sm:grid-cols-[130px_1fr] sm:p-5">
                <div className="mx-auto h-24 w-24 sm:h-full sm:w-full">
                  <AnimatedContact />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-slate-900">Responsive Support Team</h2>
                  <p className="text-sm text-slate-600">
                    Contact us by phone, email, or office visit and our team will guide you through
                    service selection, required documents, and next steps.
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Contact Information</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Multiple Ways to Reach Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Choose your preferred communication channel for exchange support, transfer assistance,
              and compliance-related questions.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <article
                  key={method.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                  <div className="relative flex h-full flex-col">
                    <span
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} text-white`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.17em] text-blue-700">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-base font-bold text-slate-900">{method.value}</p>
                    <p className="mt-2 flex-grow text-sm text-slate-600">{method.description}</p>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`mt-5 inline-flex items-center text-sm font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}
                    >
                      {method.actionLabel}
                      <ArrowRight className="ml-1 h-4 w-4 text-slate-500" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="section-shell">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <header className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-sm text-blue-100">
                  Share your request details and our team will follow up with guidance and next
                  actions.
                </p>
              </header>
              <form className="space-y-5 p-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="+218 XXX XXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="transfer">Transfer Support</option>
                    <option value="compliance">Compliance Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </article>

            <div className="space-y-6">
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
                  <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">
                    <Navigation className="h-5 w-5 text-blue-600" />
                    Find Us on the Map
                  </h2>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-700"
                  >
                    Get Directions
                  </a>
                </header>
                <iframe
                  title={`${siteConfig.addressLine} map`}
                  src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[260px] w-full border-0 sm:h-[340px] lg:h-[390px]"
                />
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>
                <div className="mt-4 space-y-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <Link
                        key={action.label}
                        href={action.href}
                        className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white transition-transform group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="flex-grow">
                          <span className="block font-semibold text-slate-900">{action.label}</span>
                          <span className="text-xs text-slate-600">{action.description}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
                      </Link>
                    );
                  })}
                </div>
              </article>

              <article
                id="business-hours"
                data-gsap-from="left"
                className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white shadow-lg lg:-ml-14 xl:-ml-20"
              >
                <Building2 className="h-8 w-8" />
                <h3 className="mt-4 text-xl font-bold">Visit Our Office</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  We welcome walk-in visits during business hours for exchange support and transfer
                  consultation.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{businessHours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{siteConfig.addressLine}</span>
                  </p>
                </div>
                <div className="mt-5 h-16 w-16">
                  <AnimatedLocation />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Have Questions Before Contacting?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Review service and policy details for quick answers on requirements, processing flow,
            and documentation expectations.
          </p>
          <div className="mt-8">
            <Link
              href="/terms-and-conditions"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
