"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Globe, Mail, ExternalLink, ChevronDown, Briefcase, GraduationCap, Award } from "lucide-react"
import { CursorFollower } from "@/components/cursor-follower"
import { SkillConstellation } from "@/components/skill-constellation"
import { Typewriter } from "@/components/typewriter"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeIn } from "@/components/fade-in"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const PHRASES = [
  "Full Stack Developer",
  "Applied Data Science & AI Student",
  "Building Websites for Businesses",
  "Machine Learning Enthusiast",
]

const PROJECTS = [
  {
    id: "noteflow",
    name: "NoteFlow",
    description: "A markdown-first workspace for notes, knowledge and planning. Features FlowMode - a combined notebook and calendar for productivity.",
    tags: ["Next.js", "React", "Docker", "Hostinger"],
    liveUrl: "https://noteflow.ardjun6.nl",
    githubUrl: "https://github.com/Ardjun6",
    icon: "NF",
  },
  {
    id: "btm",
    name: "BTM Car Crew",
    description: "A full car community platform bringing car enthusiasts together. Event listings, crew profiles, and a gallery.",
    tags: ["Next.js", "React", "Docker", "Community", "Hostinger"],
    liveUrl: "https://btmcarcrew.eu",
    githubUrl: "https://github.com/Ardjun6",
    icon: "BTM",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    description: "My personal portfolio website showcasing my work and skills. Deployed using Docker for containerized hosting.",
    tags: ["Next.js", "Docker", "Tailwind CSS"],
    liveUrl: "https://ardjun6.nl",
    githubUrl: "https://github.com/Ardjun6",
    icon: "AD",
  },
]

const CERTIFICATIONS = [
  "GitHub Professional Certificate",
  "Docker Foundations Certificate",
  "GitHub Actions",
  "GitHub Copilot",
]

export default function Portfolio() {
  const [navVisible, setNavVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const navTimer = setTimeout(() => setNavVisible(true), 300)
    const heroTimer = setTimeout(() => setHeroVisible(true), 500)
    return () => {
      clearTimeout(navTimer)
      clearTimeout(heroTimer)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorFollower />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 transition-all duration-700 ease-out ${
          navVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between px-6 py-2">
            <a href="#" className="text-lg font-bold tracking-widest gradient-text" data-interactive>
              ADT
            </a>
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <li 
                  key={link.href}
                  className="transition-all duration-500"
                  style={{ 
                    transitionDelay: `${i * 50 + 300}ms`,
                    opacity: navVisible ? 1 : 0,
                    transform: navVisible ? "translateY(0)" : "translateY(-10px)"
                  }}
                >
                  <a
                    href={link.href}
                    data-interactive
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:ardjundebitewarie@outlook.com"
              data-interactive
              className="px-5 py-2 text-sm rounded-full bg-primary/25 border border-primary/30 text-primary hover:bg-primary/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Hire me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Available badge */}
        <div 
          className={`flex items-center gap-2 px-4 py-2 mb-8 rounded-full text-sm border border-green-500/20 bg-green-500/10 text-green-400 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for freelance work
        </div>

        {/* Photo with spinning ring */}
        <div 
          className={`relative w-32 h-32 mb-8 transition-all duration-700 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #7c3aed, #be185d, #22d3ee, #a78bfa, #7c3aed)",
              animation: "spin 4s linear infinite",
            }}
          />
          <div className="absolute inset-[3px] rounded-full bg-background overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/121283909?v=4"
              alt="Ardjun Debi Tewarie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Location */}
        <p 
          className={`text-sm text-muted-foreground mb-2 tracking-wide transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          The Hague, Netherlands
        </p>

        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none tracking-tight transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Ardjun
          </span>
          <br />
          <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Debi Tewarie
          </span>
        </h1>

        {/* Typewriter role */}
        <p 
          className={`text-lg text-muted-foreground mb-10 h-7 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Typewriter phrases={PHRASES} />
        </p>

        {/* CTA buttons */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href="#projects"
            data-interactive
            className="px-8 py-4 rounded-full text-sm font-medium text-primary-foreground bg-gradient-to-r from-violet-600 to-pink-600 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View my work
          </a>
          <a
            href="#contact"
            data-interactive
            className="px-8 py-4 rounded-full text-sm font-medium glass hover:bg-white/10 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="text-[10px] tracking-[4px] uppercase">scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-4">
        <div className="mx-auto max-w-4xl w-full">
          <FadeIn>
            <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 mb-4 block">
              About me
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h2>
          </FadeIn>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <FadeIn delay={200}>
              <p className="text-lg">
                Hi, I&apos;m <strong className="text-foreground">Ardjun Debi-Tewarie</strong>, a 19-year-old Full Stack Developer 
                based in <strong className="text-foreground">The Hague, Netherlands</strong>.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p>
                I&apos;m currently studying <strong className="text-foreground">Applied Data Science &amp; Artificial Intelligence</strong> at 
                The Hague University of Applied Sciences (2025-2029). My studies focus on Machine Learning, AI, and Deep Learning - 
                building the foundation to create intelligent, data-driven systems.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <p>
                Alongside my studies, I worked as a <strong className="text-foreground">Software Developer at Buro CITE</strong>, 
                a civil engineering company where I built and maintained web applications. I took projects from concept to deployment, 
                ensuring they were functional, scalable, and efficient. I used Docker and WordPress, and learned to document my work 
                professionally. I also developed strong communication skills through meetings, learned how to present my ideas effectively, 
                and took full ownership of my projects with proper documentation and proof of work.
              </p>
            </FadeIn>

            <FadeIn delay={500}>
              <p>
                I&apos;m a collaborative problem-solver committed to delivering high-quality, innovative solutions. 
                I&apos;m eager to apply my development skills today while building the intelligent applications of tomorrow.
              </p>
            </FadeIn>
          </div>

          {/* Quick stats */}
          <FadeIn delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { value: <AnimatedCounter target={7} suffix="+ mo" />, label: "Work Experience" },
                { value: <AnimatedCounter target={3} suffix="+" />, label: "Live Projects" },
                { value: <AnimatedCounter target={6} suffix="" />, label: "Certifications" },
                { value: <span className="gradient-text">Y1</span>, label: "DS & AI Student" },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Social links */}
          <FadeIn delay={700}>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { href: "https://github.com/Ardjun6", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/ardjun-debi-tewarie-05340b2a9/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://ardjun6.nl", icon: Globe, label: "ardjun6.nl" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-interactive
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="relative z-10 py-24 px-4">
        <div className="mx-auto max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <FadeIn direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 block">Career</span>
                    <h2 className="text-xl font-bold">Experience</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">Software Developer</h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-white/5">2025</span>
                    </div>
                    <p className="text-sm text-primary mb-2">Buro CITE - Civil Engineering</p>
                    <p className="text-sm text-muted-foreground">
                      Building and maintaining web applications for a civil engineering company. 
                      Working on user experience improvements and internal tools.
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-2">The Hague, Netherlands</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Education */}
            <FadeIn direction="right" delay={200}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 block">Learning</span>
                    <h2 className="text-xl font-bold">Education</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">Applied Data Science &amp; AI</h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-white/5">2025-2029</span>
                    </div>
                    <p className="text-sm text-primary mb-2">The Hague University of Applied Sciences</p>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Applied Science focusing on Machine Learning, Artificial Intelligence, 
                      Data Science, and Deep Learning.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">Media Development</h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-white/5">2022-2025</span>
                    </div>
                    <p className="text-sm text-primary mb-2">Grafisch Lyceum Rotterdam</p>
                    <p className="text-sm text-muted-foreground">
                      MBO education in creative and digital media development.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Certifications */}
          <FadeIn delay={400}>
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 block">Verified</span>
                  <h2 className="text-xl font-bold">Certifications</h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert, i) => (
                  <span
                    key={cert}
                    className="px-4 py-2 text-sm rounded-full border border-green-500/20 bg-green-500/5 text-green-400 hover:bg-green-500/10 hover:border-green-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-default"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 px-4">
        <div className="mx-auto max-w-4xl w-full">
          <FadeIn>
            <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 mb-4 block">
              What I work with
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills &amp; Tools</h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <SkillConstellation />
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-4">
        <div className="mx-auto max-w-4xl w-full">
          <FadeIn>
            <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 mb-4 block">
              What I&apos;ve shipped
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
          </FadeIn>

          <div className="space-y-6">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 150 + 200}>
                <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-bold text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      {project.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:border-white/20 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-interactive
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                          Live Site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-interactive
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/10 hover:border-white/20 hover:bg-white/[0.02] hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-4">
        <div className="mx-auto max-w-xl w-full">
          <FadeIn>
            <div className="p-10 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
              <span className="text-[11px] tracking-[4px] uppercase text-muted-foreground/50 mb-4 block">
                Let&apos;s connect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s build something together
              </h2>
              <p className="text-muted-foreground mb-8">
                Open to freelance work, collaborations, and interesting projects.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:ardjundebitewarie@outlook.com"
                  data-interactive
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.02] hover:-translate-y-1 transition-all duration-300 text-left group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                    <div className="text-sm font-medium">ardjundebitewarie@outlook.com</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all duration-300" />
                </a>

                <a
                  href="https://github.com/Ardjun6"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-interactive
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 text-left group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-0.5">GitHub</div>
                    <div className="text-sm font-medium">github.com/Ardjun6</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all duration-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ardjun-debi-tewarie-05340b2a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-interactive
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.02] hover:-translate-y-1 transition-all duration-300 text-left group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-0.5">LinkedIn</div>
                    <div className="text-sm font-medium">Ardjun Debi - Tewarie</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <FadeIn>
        <footer className="relative z-10 text-center py-8 border-t border-white/5">
          <p className="text-xs text-muted-foreground/40 tracking-wide">
            2025 Ardjun Debi Tewarie — Crafted with care in The Hague, Netherlands
          </p>
        </footer>
      </FadeIn>
    </div>
  )
}
