import { Chip, Section } from "./Section";
import { achievements, certifications, education, links, projects, skills } from "./data";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function BelowFold() {
  return (
    <>
      <Section id="about" eyebrow="01 — About" title="Engineering with intent.">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m a final-year B.E. Computer Engineering student at Datta Meghe College of Engineering (2023–2027). I enjoy
              turning real workflows into dependable full-stack applications.
            </p>
            <p>
              My core stack is React on the front end and Spring Boot with JPA, Spring Security and JWT on the back end,
              backed by MySQL or PostgreSQL. I’m strengthening my DSA practice on LeetCode alongside project work.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              ["Degree", "B.E. Computer"],
              ["Graduating", "2027"],
              ["Based in", "Thane, India"],
              ["Focus", "Full-stack"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border bg-card p-4">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="projects" eyebrow="02 — Projects" title="Selected work.">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-card">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s}><Chip>{s}</Chip></li>
                ))}
              </ul>
              <a href={links.github} {...ext} className="mt-6 text-sm font-semibold text-primary hover:underline">
                View on GitHub profile →
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="03 — Skills" title="Toolkit.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="rounded-2xl border bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i}><Chip>{i}</Chip></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="resume" eyebrow="04 — Resume" title="Education & milestones.">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-display text-xl">Education</h3>
            <ol className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-primary pl-4">
                  <p className="font-semibold">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.detail}</p>
                  <p className="font-mono text-xs text-primary">{e.years}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-display text-xl">Achievements</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {achievements.map((a) => <li key={a}>— {a}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-display text-xl">Certifications</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {certifications.map((c) => <li key={c}>— {c}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={links.resume} className="bg-gradient-accent rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card">
            Download resume (PDF)
          </a>
          <p className="text-sm text-muted-foreground">PDF coming soon — request a copy by email in the meantime.</p>
        </div>
      </Section>

      <Section id="contact" eyebrow="05 — Contact" title="Let’s build something.">
        <p className="max-w-xl text-lg text-muted-foreground">
          Open to internships, collaborations and entry-level software roles. The fastest way to reach me is email.
        </p>
        <a href={links.email} className="mt-8 inline-block font-display text-3xl text-gradient underline-offset-8 hover:underline sm:text-5xl">
          gauravbalade@gmail.com
        </a>
        <ul className="mt-10 flex flex-wrap gap-3">
          {[
            ["GitHub", links.github],
            ["LeetCode", links.leetcode],
            ["LinkedIn", links.linkedin],
          ].map(([l, h]) => (
            <li key={l}>
              <a href={h} {...ext} className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary">
                {l} ↗
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Gaurav Balade. Built with React.
        </div>
      </footer>
    </>
  );
}
