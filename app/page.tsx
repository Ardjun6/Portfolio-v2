"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppLogo } from "@/components/app-logo";

// ─── Brand colors ─────────────────────────────────────────────────────────────

const C = {
  coral: "#c9553a",
  coralLight: "#f9ece9",
  coralMid: "#f2c4b8",
  indigo: "#5b5fe8",
  indigoLight: "#ecedf9",
  indigoMid: "#bbbef4",
  forest: "#2e7d52",
  forestLight: "#e8f5ee",
  forestMid: "#aad4be",
  amber: "#c47c14",
  amberLight: "#fdf3e0",
  amberMid: "#f0cc88",
} as const;

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/ardjun-debi-tewarie-05340b2a9/";

// ─── Accessibility preferences (persisted to localStorage) ────────────────────

function loadPrefs() {
  if (typeof window === "undefined") return { fontSize: 100, dyslexia: false, highContrast: false };
  try {
    const raw = localStorage.getItem("a11y-prefs");
    return raw ? JSON.parse(raw) : { fontSize: 100, dyslexia: false, highContrast: false };
  } catch { return { fontSize: 100, dyslexia: false, highContrast: false }; }
}

function applyPrefs(prefs: { fontSize: number; dyslexia: boolean; highContrast: boolean }) {
  const html = document.documentElement;
  html.style.fontSize = `${prefs.fontSize}%`;
  html.classList.toggle("font-dyslexia", prefs.dyslexia);
  html.classList.toggle("high-contrast", prefs.highContrast);
  try { localStorage.setItem("a11y-prefs", JSON.stringify(prefs)); } catch { }
}

// ─── Accessibility menu ───────────────────────────────────────────────────────

function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState({ fontSize: 100, dyslexia: false, highContrast: false });
  const panelRef = useRef<HTMLDivElement>(null);

  @@ -642, 50 + 644, 84 @@function FeatureCard({ icon, title, desc, color, bg, href }: {
    <div>
        <h3 className = "text-[16px] font-bold text-foreground mb-2 leading-tight">{ title }</h3>
    <p className="text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
      </div >
    { href && (
      <div className="flex items-center gap-1.5 text-[13px] font-semibold mt-auto group-hover:gap-2.5 transition-all" style={{ color }}>
        Learn more
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
      </div>
    )
}
    </Tag >
  );
}

const IcoPen = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
const IcoLink = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
const IcoGraph = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="5" cy="12" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="12" cy="12" r="2" /><line x1="7" y1="11" x2="10" y2="12" /><line x1="14" y1="12" x2="17" y2="6" /><line x1="14" y1="13" x2="17" y2="18" /></svg>;
const IcoCal = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
const IcoCode = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" /></svg>;
const IcoSearch = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const IcoExport = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
const IcoBell = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const IcoRepeat = () => <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><polyline points="17,1 21,5 17,9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7,23 3,19 7,15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>;
const IcoCheck = ({ color }: { color: string }) => <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5}><polyline points="20,6 9,17 4,12" /></svg>;

function HeadshotShowcase() {
  return (
    <aside className="relative mx-auto w-full max-w-[360px] lg:mx-0" aria-label="Founder headshot">
      <div className="absolute -inset-6 rounded-[2.4rem] opacity-70 blur-3xl" style={{ background: `linear-gradient(135deg, rgba(201,85,58,0.18), rgba(91,95,232,0.18))` }} aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-3 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
        <div className="relative overflow-hidden rounded-[1.45rem] bg-secondary">
          <img
            src="/ardjun-headshot.png"
            alt="Normal headshot portrait for Ardjun Debi-Tewarie"
            className="block aspect-[4/5] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/25 bg-white/85 p-4 text-left shadow-lg backdrop-blur-md dark:bg-black/55">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.coral }}>Built by</p>
            <h2 className="mt-1 text-lg font-bold text-foreground">Ardjun Debi-Tewarie</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Full Stack Developer focused on calm, useful tools.</p>
          </div>
        </div>
        <a
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
          aria-label="Open Ardjun Debi-Tewarie's LinkedIn profile"
        >
          <span>View LinkedIn</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
        </a>
      </div>
    </aside>
  );
}


// ─── Main page ────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const { status } = useSession();
  const [authOpen, setAuthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-primary border-t-transparent" />
      </div>
    );
  }

  const openAuth = () => setAuthOpen(true);

  return (
    @@ - 741, 129 + 777, 133 @@ export default function LandingPage() {
              </svg >
            </button >
          </div >
        </div >

        {/* Mobile drawer */ }
      {
        mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1">
            <a href="/" className="rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-secondary transition-colors" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="/noteflow" className="rounded-xl px-4 py-3 text-base font-bold hover:bg-secondary/60 transition-colors" style={{ color: C.coral }} onClick={() => setMobileOpen(false)}>NoteFlow</a>
            <a href="/calendar-features" className="rounded-xl px-4 py-3 text-base font-bold hover:bg-secondary/60 transition-colors" style={{ color: C.indigo }} onClick={() => setMobileOpen(false)}>Calendar</a>
          </div>
        )
      }
      </header >

        {/* ── HERO ── */ }
        < section className = "relative overflow-hidden" aria - labelledby="hero-heading" >
          {/* Deep layered ambient background */ }
          < div className = "pointer-events-none absolute inset-0" aria - hidden="true" >
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(201,85,58,0.11) 0%, rgba(91,95,232,0.08) 45%, transparent 72%)" }} />
          <div className="absolute -top-32 -left-48 h-[700px] w-[700px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(91,95,232,0.14) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute -top-10 -right-48 h-[600px] w-[600px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(201,85,58,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,85,58,0.30) 25%, rgba(91,95,232,0.30) 75%, transparent 100%)" }} />
        </div >

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-28 pb-12 text-center lg:grid-cols-[1fr_360px] lg:text-left">
          <div>
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-[13px] font-semibold mb-10 tracking-wide"
              style={{
                background: "linear-gradient(110deg, rgba(201,85,58,0.10) 0%, rgba(91,95,232,0.10) 100%)",
                border: "1px solid rgba(201,85,58,0.25)",
                color: C.coral,
                letterSpacing: "0.03em",
              }}
              role="doc-subtitle"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: C.coral }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: C.coral }} />
              </span>
              Built to keep your work in flow
            </div>

            {/* Hero headline — serif display */}
            <h1
              id="hero-heading"
              className="font-serif mx-auto max-w-4xl leading-[1.04] tracking-tight text-balance lg:mx-0"
              style={{ fontSize: "clamp(3rem, 7.5vw, 5.5rem)", fontWeight: 800 }}
            >
              <span className="block text-foreground">Write. Link. Plan.</span>
              <span className="block mt-2">
                <span style={{ color: C.coral }}>Note</span>
                <span className="text-foreground">Flow</span>
                <span className="mx-4 font-light opacity-15" aria-hidden="true">+</span>
                <span style={{
                  background: `linear-gradient(125deg, ${C.indigo} 0%, #9fa3f9 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Calendar</span>
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-lg text-[1.15rem] text-muted-foreground leading-[1.8] text-pretty lg:mx-0">
              One calm workspace for notes, links, and your schedule&nbsp;&mdash; with a personal touch from the developer behind it.
            </p>

            {/* CTA row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                onClick={openAuth}
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-9 py-4 text-[16px] font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                style={{
                  background: `linear-gradient(115deg, ${C.coral} 0%, #d96b38 42%, ${C.indigo} 100%)`,
                  boxShadow: `0 6px 28px rgba(201,85,58,0.32), 0 2px 8px rgba(91,95,232,0.18)`,
                }}
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 50%)" }} aria-hidden="true" />
                Log in / Sign up
                <svg className="h-4.5 w-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.3} aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
              </button>
              <MagneticButton
                href="#demos"
                className="rounded-2xl border border-border/80 bg-card/70 px-9 py-4 text-[16px] font-semibold text-foreground hover:bg-secondary/70 transition-all shadow-sm backdrop-blur-sm"
              >
                See it in action
              </MagneticButton>
            </div>

            {/* Trust strip */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-7 lg:justify-start">
              {[
                { text: "No credit card required" },
                { text: "Free to start" },
                { text: "Private by default" },
              ].map(({ text }) => (
                <span key={text} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke={C.forest} strokeWidth={2.5} aria-hidden="true"><polyline points="20,6 9,17 4,12" /></svg>
                  {text}
                </span>
              ))}
            </div>
          </div>

          <HeadshotShowcase />
        </div>

      {/* App window mockup */ }
      <div className="mx-auto max-w-5xl px-6 pb-28 mt-6">
        {/* Outer glow ring */}
        <div className="relative">
          <div className="absolute -inset-px rounded-[1.4rem] pointer-events-none" style={{ background: `linear-gradient(135deg, rgba(201,85,58,0.35) 0%, rgba(91,95,232,0.25) 100%)`, filter: "blur(1px)" }} aria-hidden="true" />
          <div className="relative rounded-[1.35rem] border border-border/60 bg-card overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.10),0_4px_16px_rgba(0,0,0,0.06)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2.5 border-b border-border bg-muted/60 px-5 py-3.5" aria-hidden="true">
              <div className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
              <div className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
              <div className="ml-4 flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground font-mono">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14,2 14,8 20,8" /></svg>
                q2-planning.md
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-5 text-[11px] text-muted-foreground">
                {[["NoteFlow", C.coral], ["Calendar", C.indigo], ["Graph", C.forest]].map(([lbl, col]) => (
                  <span key={lbl} className="flex items-center gap-1.5 font-semibold">
                    <span className="h-2 w-2 rounded-full" style={{ background: col }} />{lbl}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-[200px_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-border min-h-[280px]">