"use client";
import { techStack, modules, modColors } from "../data/course";
import { CheckCircle2 } from "lucide-react";

const stackDetails = {
  "HTML5":          "Structure of every webpage. Semantic, accessible HTML from day one.",
  "CSS3":           "Styling, animations, Flexbox and Grid. Look great on any screen.",
  "Figma":          "Design tools, Developer Mode, pixel-perfect UI handoff.",
  "Bootstrap":      "Rapid UI components. Speed up layouts while learning CSS deeply.",
  "Git & GitHub":   "Version control & collaboration. Every developer uses this daily.",
  "JavaScript":     "The language of the web. 89 chapters, 4 quizzes — deep mastery.",
  "TypeScript":     "Typed JavaScript. Industry standard for large codebases in 2026.",
  "GSAP":           "Professional scroll and timeline animations — great for freelance.",
  "Supabase":       "Auth, database and storage — build full products before backend.",
  "React v19":      "World's most popular UI library. Component-based, fast, reusable.",
  "Next.js 15":     "React framework for production. SSR, SSG, API routes, App Router.",
  "Tailwind v4":    "Utility-first CSS. Used by most modern React & Next.js projects.",
  "Redux Toolkit":  "Predictable state management for complex React applications.",
  "TanStack Query": "Server state management. Caching, refetching, loading states.",
  "Node.js":        "JavaScript on the server. Build backends, APIs, and CLIs.",
  "Express":        "Fast, minimal web framework. REST API development standard.",
  "MongoDB":        "NoSQL database. Flexible, scalable, hosted on Atlas.",
  "PostgreSQL":     "Relational database. SQL, relationships, joins — widely used.",
  "Socket.IO":      "Real-time bidirectional communication. Build live chat & games.",
  "Redis":          "In-memory caching. Speed up APIs and manage sessions.",
  "Stripe":         "Payment integration. The industry standard in 2026.",
  "Python":         "Fast-track for AI scripting, LLM APIs, and LangChain.",
  "LangChain":      "Framework for building LLM-powered apps. Chains, tools, memory.",
  "LangGraph":      "Multi-agent orchestration. Build stateful AI agent workflows.",
  "Groq API":       "Ultra-fast LLM inference. Build snappy, real-time AI features.",
  "OpenAI API":     "GPT-4o integration. Industry-standard LLM API worldwide.",
  "React Native":   "Build iOS & Android apps with React knowledge you already have.",
  "Expo":           "Fastest way to build and publish React Native apps.",
};

export default function StackPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "clamp(40px,6vw,64px) 24px clamp(36px,5vw,52px)" }}>
          <div className="fade-up">
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Tech Stack</div>
            <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 12, lineHeight: 1.1 }}>
              28 industry-standard tools
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 540, lineHeight: 1.8 }}>
              Every technology used in real companies right now. Grouped by the module you learn them in.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "clamp(32px,5vw,52px) 24px 80px" }}>

          {modules.map((m, i) => {
            const c = modColors[i];
            const modStack = techStack.filter(t => t.module === m.id);
            if (!modStack.length) return null;

            return (
              <div key={m.id} style={{ marginBottom: 52 }}>
                {/* Section header */}
                <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "var(--radius-sm)", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{m.id}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>{m.name}</span>
                    {m.isNew && <span style={{ fontSize: 10, fontWeight: 700, background: "var(--purple-light)", color: "var(--purple)", padding: "2px 8px", borderRadius: 99 }}>NEW</span>}
                  </div>
                  <span style={{ fontSize: 11, color: "var(--text-faint)", fontWeight: 500 }}>{m.duration}</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: 10 }}>
                  {modStack.map((t, j) => (
                    <div key={j} className={`hover-card fade-up fade-up-delay-${(j % 3) + 1}`}
                      style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "16px 18px", background: "var(--bg)", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      {/* Color dot */}
                      <div style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: t.color + "14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${t.color}28` }}>
                        <div style={{ width: 11, height: 11, borderRadius: "50%", background: t.color }} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4, letterSpacing: "-0.01em" }}>{t.name}</div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65 }}>{stackDetails[t.name] || ""}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* MERN + AI banner */}
          <div className="fade-up" style={{ background: "#0d1117", border: "1px solid #21262d", borderRadius: "var(--radius-2xl)", padding: "clamp(28px,4vw,40px)", boxShadow: "0 16px 48px rgba(0,0,0,0.18)" }}>
            <h2 style={{ fontSize: "clamp(20px,3vw,24px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", marginBottom: 10 }}>MERN + Agentic AI Stack</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: 24, maxWidth: 580 }}>
              The most in-demand combination for Pakistani freelancers and remote developers in 2026. Full-stack MERN skills with AI integration capability — no other bootcamp in Karachi teaches this combination.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["MongoDB", "Express", "React", "Node.js", "LangChain", "LangGraph"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", fontSize: 13, fontWeight: 700, color: "#fff" }}>
                  <CheckCircle2 size={13} color="#4ade80" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
