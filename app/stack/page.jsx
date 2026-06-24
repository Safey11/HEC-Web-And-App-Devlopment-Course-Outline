import { techStack, modules } from "../data/course";
import { CheckCircle2 } from "lucide-react";

const modColors = [
  { accent: "#E24B4A", light: "#FCEBEB" },
  { accent: "#EF9F27", light: "#FAEEDA" },
  { accent: "#06b6d4", light: "#ecfeff" },
  { accent: "#1a6b4a", light: "#eaf4ef" },
  { accent: "#7F77DD", light: "#EEEDFE" },
  { accent: "#16a34a", light: "#f0fdf4" },
];

const stackDetails = {
  "HTML5":          "Structure of every webpage. Semantic, accessible HTML from day one.",
  "CSS3":           "Styling, animations, Flexbox and Grid. Look great on any screen.",
  "Figma":          "Design tools, Developer Mode, pixel-perfect UI handoff.",
  "Bootstrap":      "Rapid UI components. Speed up layouts while learning CSS.",
  "Git & GitHub":   "Version control & collaboration. Every developer uses this daily.",
  "JavaScript":     "The language of the web. 89 chapters, 4 quizzes — deep mastery.",
  "TypeScript":     "Typed JavaScript. Industry standard for large codebases.",
  "GSAP":           "Professional scroll and timeline animations for client work.",
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
  "Socket.IO":      "Real-time bidirectional communication. Build live chat apps.",
  "Redis":          "In-memory caching. Speed up APIs, session storage.",
  "Stripe":         "Payment integration. The industry standard in 2026.",
  "Python":         "Fast-track for AI scripting, LLM APIs, and LangChain.",
  "LangChain":      "Framework for building LLM-powered apps. Chains, tools, memory.",
  "LangGraph":      "Multi-agent orchestration. Build stateful AI agent workflows.",
  "Groq API":       "Ultra-fast LLM inference. Build snappy AI features.",
  "OpenAI API":     "GPT-4o integration. Industry-standard LLM API.",
  "React Native":   "Build iOS & Android apps with React knowledge you already have.",
  "Expo":           "Fastest way to build and publish React Native apps.",
};

export default function StackPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(32px,6vw,56px) 20px 80px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Tech Stack</div>
        <h1 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 12 }}>
          28 industry-standard tools
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.75 }}>
          Every technology used in real companies right now. Grouped by the module you learn them in.
        </p>
      </div>

      {modules.map((m, i) => {
        const c = modColors[i];
        const modStack = techStack.filter(t => t.module === m.id);
        return (
          <div key={m.id} style={{ marginBottom: 52 }}>
            {/* Section header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
              <div style={{ height: 1, width: 24, background: c.accent, flexShrink: 0 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: c.accent, letterSpacing: "0.07em", textTransform: "uppercase" }}>{m.label} · {m.name}</span>
                {m.isNew && <span style={{ fontSize: 10, fontWeight: 700, background: "#EEEDFE", color: "#6d28d9", padding: "2px 7px", borderRadius: 99 }}>NEW</span>}
              </div>
              <span style={{ fontSize: 11, color: "var(--text-faint)" }}>{m.duration}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: 10 }}>
              {modStack.map((t, j) => (
                <div key={j} style={{ border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "16px 18px", background: "var(--bg)", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", background: t.color + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `0.5px solid ${t.color}33` }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: t.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>{stackDetails[t.name] || ""}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* MERN + AI banner */}
      <div style={{ background: "#1a1a18", border: "0.5px solid #333", borderRadius: "var(--radius-xl)", padding: "clamp(24px,4vw,36px)" }}>
        <h2 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 10 }}>MERN + Agentic AI Stack</h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 22, maxWidth: 600 }}>
          The most in-demand combination for Pakistani freelancers and remote developers in 2026. Full-stack MERN skills with AI integration capability — no other bootcamp in Karachi teaches this combination.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["MongoDB", "Express", "React", "Node.js", "LangChain", "LangGraph"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-md)", fontSize: 13, fontWeight: 700, color: "#fff" }}>
              <CheckCircle2 size={13} color="#4ade80" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
