import Link from "next/link";
import {
  Award,
  ChevronRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
  Twitter,
  Users,
} from "lucide-react";
import { legalNav, mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { AchievementValue } from "@/components/achievement-value";
import { siteConfig } from "@/lib/site";

type SocialLink = {
  icon: typeof Facebook;
  href: string;
  label: string;
};

const stats = [
  { icon: Users, value: "10,000+", label: "Clients" },
  { icon: Globe, value: "150+", label: "Countries" },
  { icon: Award, value: "15+", label: "Years" },
  { icon: TrendingUp, value: "99.9%", label: "Success" },
];

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function AnimatedLogoMark() {
  return (
    <svg className="h-full w-full" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <g className="animate-float">
        <circle cx="20" cy="20" r="16" fill="#0891b2" fillOpacity="0.2" />
        <circle cx="20" cy="20" r="16" stroke="#06b6d4" strokeWidth="2" />
        <path d="M20 12 L20 28 M12 20 L28 20" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="20" stroke="#0891b2" strokeWidth="1" strokeDasharray="3 3" className="animate-spin-slow" opacity="0.3" />
      </g>
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const footerLegal = [...legalNav, { href: "/compliance", label: "Compliance" }];
  const panelClass = "rounded-2xl border border-slate-700/65 bg-slate-900/35 p-5 backdrop-blur-sm";

  return (
    <footer className="relative overflow-hidden border-t border-slate-700/70 bg-[linear-gradient(140deg,#071523_0%,#0c2033_55%,#0a1d2e_100%)] text-slate-200">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; transform-origin: center; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="section-shell relative py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-7">
          <div className={`${panelClass} space-y-6 lg:col-span-2`}>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="h-10 w-10">
                <AnimatedLogoMark />
              </div>
              <span className="text-xl font-bold text-white">{siteConfig.companyName}</span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Trusted currency exchange and remittance support with compliance-first operations.
              Serving individuals and businesses with secure, transparent processing.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <article key={stat.label} className="rounded-lg border border-slate-700/80 bg-slate-950/45 px-3 py-2 text-center">
                    <Icon className="mx-auto h-4 w-4 text-cyan-200" />
                    <p className="mt-1 text-sm font-bold text-white">
                      <AchievementValue value={stat.value} />
                    </p>
                    <p className="text-[11px] text-slate-300">{stat.label}</p>
                  </article>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/45 px-3 py-2">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">AML/KYC Compliant</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/45 px-3 py-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-xs font-semibold text-slate-200">Licensed & Regulated</span>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-950/45 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-gradient-to-br hover:from-sky-500 hover:to-cyan-400 hover:text-white"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={panelClass}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <ChevronRight className="h-4 w-4" />
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link className="group inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-100" href={item.href}>
                    <span className="h-1 w-1 rounded-full bg-cyan-300 opacity-0 transition group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={panelClass}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <ChevronRight className="h-4 w-4" />
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id} className="flex items-center gap-2 text-slate-300">
                  <span className="h-1 w-1 rounded-full bg-blue-300" />
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div className={panelClass}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <ChevronRight className="h-4 w-4" />
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="break-words">{siteConfig.addressLine}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="break-words">{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="break-words">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="break-words">License: {siteConfig.licenseId}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-8 border-t border-slate-700/70 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
            <p className="text-center md:text-left">
              © {currentYear} {siteConfig.companyName}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
              {footerLegal.map((item, index) => (
                <div key={item.href} className="inline-flex items-center">
                  <Link href={item.href} className="transition hover:text-cyan-100">
                    {item.label}
                  </Link>
                  {index < footerLegal.length - 1 ? <span className="mx-2 text-slate-700">|</span> : null}
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-50" />
    </footer>
  );
}
