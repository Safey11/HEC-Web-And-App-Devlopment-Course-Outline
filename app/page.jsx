import Link from "next/link";
import { ArrowRight, Clock, Calendar, Users, Award, Zap, Code2, Server, Database, Trophy, Bot, Smartphone } from "lucide-react";
import { outcomes, techStack, modules } from "./data/course";

const modIcons = [<Code2 size={15}/>, <Zap size={15}/>, <Code2 size={15}/>, <Server size={15}/>, <Bot size={15}/>, <Smartphone size={15}/>];
const modColors = [
  { accent: "#E24B4A", light: "#FCEBEB" },
  { accent: "#EF9F27", light: "#FAEEDA" },
  { accent: "#06b6d4", light: "#ecfeff" },
  { accent: "#1a6b4a", light: "#eaf4ef" },
  { accent: "#7F77DD", light: "#EEEDFE" },
  { accent: "#16a34a", light: "#f0fdf4" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,8vw,80px) 20px clamp(40px,6vw,60px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-light)", borderRadius: 99, padding: "6px 14px", marginBottom: 24 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--accent-dark)" }}>Enrolling now · April 2026 · Karachi</span>
        </div>
        <h1 style={{ fontSize: "clamp(32px, 6vw, 62px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "var(--text)", marginBottom: 18 }}>
          From zero to<br /><span style={{ color: "var(--accent)" }}>Full-Stack + AI Developer.</span>
        </h1>
        <p style={{ fontSize: "clamp(15px, 2.2vw, 18px)", color: "var(--text-muted)", maxWidth: 580, marginBottom: 14, lineHeight: 1.75 }}>
          Master HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB — and now <strong style={{ color: "var(--text)" }}>Agentic AI with LangChain & LangGraph.</strong>
        </p>
        <p style={{ fontSize: 13, color: "var(--text-faint)", maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
          Based on Sir Ghous Ahmed's battle-tested SMIT curriculum. Weekends only. 6 Hackathons.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "13px 24px", borderRadius: "var(--radius-md)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            View Full Curriculum <ArrowRight size={16} />
          </Link>
          <Link href="/stack" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text)", border: "1px solid var(--border-strong)", padding: "13px 24px", borderRadius: "var(--radius-md)", fontWeight: 500, fontSize: 15, textDecoration: "none" }}>
            Tech Stack
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-secondary)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 20 }}>
          {[
            { icon: <Calendar size={17}/>, label: "Schedule",    value: "Sat & Sun" },
            { icon: <Clock size={17}/>,    label: "Per session", value: "2–3 Hours" },
            { icon: <Code2 size={17}/>,    label: "Modules",     value: "6 Modules" },
            { icon: <Trophy size={17}/>,   label: "Hackathons",  value: "6 Hackathons" },
            { icon: <Bot size={17}/>,      label: "Includes AI", value: "Agentic AI" },
            { icon: <Users size={17}/>,    label: "Goal",        value: "Job-Ready" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ color: "var(--accent)", flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 10, color: "var(--text-faint)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules grid */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(40px,6vw,72px) 20px 0" }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 8 }}>6 modules. Every skill you need.</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>Each module ends with a real Hackathon. Build 6 projects. Graduate with a full portfolio.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 12 }}>
          {modules.map((m, i) => {
            const c = modColors[i];
            return (
              <div key={m.id} style={{ border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "22px", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
                {m.isNew && (
                  <div style={{ position: "absolute", top: 14, right: 14, fontSize: 10, fontWeight: 700, background: "#EEEDFE", color: "#6d28d9", padding: "3px 8px", borderRadius: 99 }}>NEW 2026</div>
                )}
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: c.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: 2 }}>{m.icon} {m.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, background: c.light, color: c.accent, padding: "3px 10px", borderRadius: 99 }}>{m.duration}</span>
                    <span style={{ fontSize: 11, color: "var(--text-faint)" }}>{m.quizzes.length} quiz{m.quizzes.length > 1 ? "zes" : ""}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {m.tags.slice(0, 4).map((t, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "2px 8px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", color: "var(--text-muted)", border: "0.5px solid var(--border)" }}>{t}</span>
                  ))}
                  {m.tags.length > 4 && <span style={{ fontSize: 11, color: "var(--text-faint)", alignSelf: "center" }}>+{m.tags.length - 4} more</span>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "#FAEEDA", borderRadius: "var(--radius-sm)", marginTop: "auto", border: "0.5px solid #FAC775" }}>
                  <Trophy size={12} color="#854F0B" />
                  <span style={{ fontSize: 11, color: "#633806", fontWeight: 500 }}>{m.hackathonGoal}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI module spotlight */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(32px,5vw,56px) 20px 0" }}>
        <div style={{ background: "#1a1218", borderRadius: "var(--radius-xl)", padding: "clamp(24px,5vw,48px)" }}>
          <div className="hackathon-inner">
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Module 5 · New in 2026</div>
              <h2 style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>🤖 Agentic AI Development</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.8, marginBottom: 20, maxWidth: 500 }}>
                The only bootcamp in Karachi teaching LangChain, LangGraph, RAG pipelines, and MCP alongside a full MERN stack. Build AI agents, connect them to your web apps, and ship products nobody else can.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Python", "LangChain", "LangGraph", "RAG", "Groq API", "MCP"].map((t, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 99, background: "rgba(127,119,221,0.2)", color: "#c4b5fd", border: "0.5px solid rgba(127,119,221,0.3)" }}>{t}</span>
                ))}
              </div>
            </div>
            <Link href="/outline#module-5" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7F77DD", color: "#fff", padding: "13px 22px", borderRadius: "var(--radius-md)", fontWeight: 700, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
              See Module 5 <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(32px,5vw,56px) 20px" }}>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 8 }}>What you will be able to do</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>Skills that get you hired or land your first freelance client.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,240px), 1fr))", gap: 10 }}>
          {outcomes.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", border: "0.5px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--bg)" }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Award size={13} color="var(--accent)" />
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>{o}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>
        <div style={{ background: "var(--accent)", borderRadius: "var(--radius-xl)", padding: "clamp(32px,5vw,52px)", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>Ready to become a Full-Stack + AI Developer?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginBottom: 28 }}>First session Saturday, April 5th. Seats are limited.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--accent-dark)", padding: "12px 24px", borderRadius: "var(--radius-md)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              View Curriculum <ArrowRight size={16} />
            </Link>
            <Link href="/instructors" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", padding: "12px 24px", borderRadius: "var(--radius-md)", fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
