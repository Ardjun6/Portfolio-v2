"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MousePointer2,
  Play,
  Sparkles,
} from "lucide-react"
import { CursorFollower } from "@/components/cursor-follower"

const PROJECTS = [
  {
    name: "NoteFlow",
    line: "Markdown notes, planning, and FlowMode for focused study sessions.",
    href: "https://noteflow.ardjun6.nl",
    tags: ["Next.js", "React", "Docker"],
    accent: "from-[#00d4ff] to-[#f7ff62]",
  },
  {
    name: "BTM Car Crew",
    line: "A community platform for events, crew profiles, and car culture media.",
    href: "https://btmcarcrew.eu",
    tags: ["Next.js", "Community", "Hostinger"],
    accent: "from-[#ff3d81] to-[#ffd166]",
  },
  {
    name: "Portfolio v2",
    line: "A personal site built to move fast, deploy cleanly, and show the work.",
    href: "https://ardjun6.nl",
    tags: ["Tailwind", "Docker", "Design"],
    accent: "from-[#91f5ad] to-[#5f6cff]",
  },
]

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Docker",
  "GitHub Actions",
  "WordPress",
  "Machine Learning",
  "Data Science",
  "AI",
  "UX",
]

const MOMENTS = [
  {
    icon: BriefcaseBusiness,
    label: "Work",
    title: "Software Developer",
    detail: "Buro CITE, civil engineering web apps and internal tools.",
    meta: "2025",
  },
  {
    icon: GraduationCap,
    label: "Study",
    title: "Applied Data Science & AI",
    detail: "The Hague University of Applied Sciences.",
    meta: "2025-2029",
  },
  {
    icon: Sparkles,
    label: "Proof",
    title: "Certified Builder",
    detail: "GitHub Professional, Docker Foundations, Actions, and Copilot.",
    meta: "6 certs",
  },
]

const SECTIONS = ["Intro", "Story", "Work", "Stack", "Contact"]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0)
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reel-section]"))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(Number(visible.target.dataset.index ?? 0))
        }
      },
      { threshold: [0.45, 0.65, 0.85] },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080908] text-[#f8f5eb]">
      <CursorFollower />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(115deg,rgba(0,212,255,0.18),transparent_28%),linear-gradient(245deg,rgba(255,61,129,0.16),transparent_30%),linear-gradient(180deg,#080908_0%,#101313_44%,#080908_100%)]" />
      <div className="noise-layer" />

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 text-sm backdrop-blur-xl">
          <a href="#intro" className="flex items-center gap-2 font-bold tracking-wide" data-interactive>
            <span className="grid size-8 place-items-center rounded-full bg-[#f8f5eb] text-[#080908]">A</span>
            Ardjun
          </a>
          <div className="hidden items-center gap-5 text-xs text-white/65 md:flex">
            {SECTIONS.map((section, index) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={activeSection === index ? "text-white" : "transition-colors hover:text-white"}
                data-interactive
              >
                {section}
              </a>
            ))}
          </div>
          <a
            href="mailto:ardjundebitewarie@outlook.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#f8f5eb] px-4 py-2 text-xs font-bold text-[#080908] transition-transform hover:scale-105"
            data-interactive
          >
            <Mail className="size-4" />
            Hire me
          </a>
        </div>
      </nav>

      <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        {SECTIONS.map((section, index) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            aria-label={section}
            className={`h-9 w-1.5 rounded-full transition-all ${
              activeSection === index ? "bg-[#f8f5eb]" : "bg-white/20 hover:bg-white/45"
            }`}
            data-interactive
          />
        ))}
      </aside>

      <section
        id="intro"
        data-reel-section
        data-index="0"
        className="reel-section grid min-h-screen place-items-center px-4 pb-14 pt-28"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.78fr]">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="size-2 rounded-full bg-[#91f5ad]" />
              Available for freelance
            </div>
            <h1 className="max-w-4xl text-[clamp(4rem,13vw,10.5rem)] font-black uppercase leading-[0.82] tracking-normal">
              Build.
              <span className="block text-[#00d4ff]">Ship.</span>
              <span className="block text-[#ff3d81]">Repeat.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              I am Ardjun Debi Tewarie, a full stack developer and Applied Data Science & AI
              student in The Hague. I build websites, dashboards, and useful digital tools for
              real businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="reel-button bg-[#f8f5eb] text-[#080908]" data-interactive>
                <Play className="size-4 fill-current" />
                See work
              </a>
              <a href="#contact" className="reel-button border border-white/15 bg-white/10" data-interactive>
                <MousePointer2 className="size-4" />
                Contact
              </a>
            </div>
          </div>

          <div className="reel-phone mx-auto w-full max-w-[390px]">
            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-xs backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#ff3d81]" />
              Portfolio reel
            </div>
            <img
              src="./public/ardjun-headshot.png"
              alt="Ardjun Debi Tewarie"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent p-5 pt-28">
              <div className="mb-3 flex items-center gap-2 text-xs text-white/70">
                <MapPin className="size-4" />
                The Hague, Netherlands
              </div>
              <div className="text-3xl font-black leading-none">Ardjun Debi Tewarie</div>
              <div className="mt-3 text-sm text-white/70">Full Stack Developer / AI Student</div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        data-reel-section
        data-index="1"
        className="reel-section flex min-h-screen items-center px-4 py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="kicker">The story</p>
            <h2 className="section-title">Developer with an AI track.</h2>
          </div>
          <div className="grid gap-4">
            {MOMENTS.map((moment) => (
              <article key={moment.title} className="reel-row">
                <div className="grid size-12 place-items-center rounded-full bg-white text-[#080908]">
                  <moment.icon className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/45">
                    <span>{moment.label}</span>
                    <span>{moment.meta}</span>
                  </div>
                  <h3 className="mt-1 text-xl font-black">{moment.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">{moment.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        data-reel-section
        data-index="2"
        className="reel-section flex min-h-screen items-center px-4 py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="kicker">Selected work</p>
              <h2 className="section-title">Live projects with motion.</h2>
            </div>
            <a
              href="https://github.com/Ardjun6"
              target="_blank"
              rel="noopener noreferrer"
              className="reel-button w-fit border border-white/15 bg-white/10"
              data-interactive
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-tile group"
                data-interactive
              >
                <div className={`project-shine bg-gradient-to-br ${project.accent}`} />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-black text-black/50">0{index + 1}</span>
                    <ArrowUpRight className="size-6 text-black/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#080908]">{project.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/70">{project.line}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-black/10 px-3 py-1 text-xs font-bold text-black/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stack"
        data-reel-section
        data-index="3"
        className="reel-section flex min-h-screen items-center px-4 py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr_1fr]">
          <div>
            <p className="kicker">Stack</p>
            <h2 className="section-title">Code, data, deployment.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              I connect frontend craft with pragmatic deployment and a growing AI/data science
              foundation.
            </p>
          </div>
          <div className="skill-marquee" aria-label="Skills">
            {SKILLS.map((skill, index) => (
              <span key={skill} className={index % 3 === 0 ? "is-hot" : index % 3 === 1 ? "is-cool" : ""}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-reel-section
        data-index="4"
        className="reel-section flex min-h-screen items-center px-4 py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="kicker">Contact</p>
            <h2 className="section-title">Have a project? Send it.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Open to freelance websites, business tools, collaborations, and internships where
              development meets data and AI.
            </p>
          </div>
          <div className="contact-stack">
            <a href="mailto:ardjundebitewarie@outlook.com" className="contact-link" data-interactive>
              <Mail className="size-5" />
              <span>ardjundebitewarie@outlook.com</span>
              <ArrowUpRight className="ml-auto size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ardjun-debi-tewarie-05340b2a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              data-interactive
            >
              <Linkedin className="size-5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="ml-auto size-5" />
            </a>
            <a
              href="https://github.com/Ardjun6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              data-interactive
            >
              <Github className="size-5" />
              <span>GitHub</span>
              <ArrowUpRight className="ml-auto size-5" />
            </a>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/45">
              <Layers3 className="size-4" />
              <span>{year} Ardjun Debi Tewarie</span>
              <Code2 className="size-4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}