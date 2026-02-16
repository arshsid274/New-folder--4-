import Image from "next/image";
import Link from "next/link";
import { legalNav, mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-mark.svg"
                alt={`${siteConfig.companyName} logo`}
                width={34}
                height={34}
              />
              <span className="text-base font-semibold text-white">{siteConfig.companyName}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              Trusted currency exchange and remittance support with compliance-first operations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-300 transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Core Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.id} className="text-slate-300">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="break-words">{siteConfig.phone}</li>
              <li className="break-words">{siteConfig.email}</li>
              <li className="break-words">{siteConfig.addressLine}</li>
              <li className="break-words">License: {siteConfig.licenseId}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">2026 Awail Al-Naqd. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
