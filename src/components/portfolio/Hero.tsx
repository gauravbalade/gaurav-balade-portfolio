import { links } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
        <p className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Thane / Mumbai, India</p>
        <h1 className="fade-up mt-6 font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Gaurav <span className="text-gradient italic">Balade</span>
        </h1>
        <p className="fade-up mt-6 text-lg font-semibold sm:text-xl">Computer Engineering Student • Full-Stack Developer</p>
        <p className="fade-up mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build useful web applications with React, Spring Boot, REST APIs and relational databases — focused on clean
          architecture, secure APIs and interfaces people enjoy using.
        </p>
        <div className="fade-up mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="bg-gradient-accent rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5">
            View projects
          </a>
          <a href={links.email} className="rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
