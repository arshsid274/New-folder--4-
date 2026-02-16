import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(19,95,150,0.14),transparent_36%),radial-gradient(circle_at_85%_10%,rgba(15,157,116,0.13),transparent_34%)]" />
      <div className="section-shell relative py-14 md:py-16">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up animation-delay-100 mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up animation-delay-200 mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-8 animate-fade-up animation-delay-300">{actions}</div> : null}
      </div>
    </section>
  );
}
