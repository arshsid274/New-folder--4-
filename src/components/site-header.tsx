"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <Link
          className="flex min-w-0 max-w-[calc(100%-5rem)] items-center gap-2.5 sm:max-w-none sm:gap-3"
          href="/"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo-mark.svg"
            alt={`${siteConfig.companyName} logo`}
            width={38}
            height={38}
            priority
            className="shrink-0"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-semibold tracking-tight text-slate-900 sm:text-sm">
              {siteConfig.companyName}
            </p>
            <p className="hidden text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cyan-700 sm:block">
              Money Exchange
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = isRouteActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-cyan-50 text-cyan-800"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/get-a-quote" className="primary-btn">
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-5 pt-4 sm:px-6 lg:hidden"
        >
          <nav className="flex flex-col gap-2">
            {mainNav.map((item) => {
              const active = isRouteActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-cyan-50 text-cyan-800"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/get-a-quote"
              onClick={() => setMobileOpen(false)}
              className="primary-btn mt-2"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
