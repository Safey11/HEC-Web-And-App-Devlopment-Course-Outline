"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, Calendar, Users, Trophy, Bot, ChevronDown, Check, Briefcase, Globe, MessageCircle, Award, Code2 } from "lucide-react";
import { outcomes, modules, modColors } from "./data/course";

const faqs = [
  { q: "Do I need any prior experience?", a: "Zero. Module 1 starts from the very basics — how the internet works, what HTML is, and how to set up VS Code. If you can use a computer and browse the web, you are ready." },
  { q: "Do I need to buy a laptop?", a: "Yes, you need a personal laptop. Any Windows or Mac laptop from the last 5 years works fine. We will help you set everything up on day one." },
  { q: "What if I miss a weekend session?", a: "Every session is recorded and shared in the student WhatsApp group the same day. You won't fall behind as long as you watch the recording before the next session." },
  { q: "Is the course online or in-person?", a: "In-person at our centre in Karachi every Saturday and Sunday. Being physically present makes a huge difference — especially for the hands-on coding sessions." },
  { q: "Will I get a certificate?", a: "Yes — a certificate after each module Hackathon. By the end you will have 6 certificates plus 6 live deployed projects to show employers or freelance clients." },
  { q: "How much does it cost?", a: "Message us on WhatsApp for current fee details. We offer installment plans and keep pricing as accessible as possible — our goal is your career, not profit." },
  { q: "Can I get a job or freelance after this?", a: "That is the entire goal. The curriculum is built on Sir Ghous Ahmed's SMIT outline which has produced hundreds of employed developers in Pakistan. We added Agentic AI to make you even more hireable in 2026." },
];

const whyPoints = [
  { icon: <Award size={20}/>, title: "Battle-tested curriculum", body: "Built on Sir Ghous Ahmed's SMIT outline — the same syllabus that produced hundreds of employed developers across Pakistan.", color: "#38bdf8" },
  { icon: <Bot size={20}/>,   title: "Agentic AI included",    body: "The only weekend bootcamp in Karachi teaching LangChain, LangGraph, and RAG alongside full MERN stack. Nobody else does this.", color: "#7c3aed" },
  { icon: <Trophy size={20}/>,title: "6 real Hackathons",      body: "Every module ends with a Hackathon. You graduate with 6 deployed projects in your portfolio — not just course certificates.", color: "#d97706" },
  { icon: <Users size={20}/>, title: "3 active instructors",   body: "Hafiz Zeeshan, Saif, and Adnan — all active developers, not just teachers. They build real products and teach what actually gets you hired.", color: "#0891b2" },
  { icon: <Globe size={20}/>, title: "Freelance-ready skills", body: "GSAP, Stripe, Cloudinary, Supabase, deployment — tools Pakistani freelancers use on Upwork to earn $500–$2000 per project.", color: "#059669" },
  { icon: <Briefcase size={20}/>, title: "Job market aligned", body: "Every technology in this course appears in Pakistani and remote job listings right now. Nothing is taught just because it is trendy.", color: "#db2777" },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-btn" onClick={() => setOpen(o => !o)}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.5, letterSpacing: "-0.01em" }}>{q}</span>
        <ChevronDown size={17} color="var(--text-faint)" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s", flexShrink: 0 }} />
      </button>
      <div className={`faq-answer${open ? " open" : ""}`}>
        <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.85, paddingBottom: 20 }}>{a}</p>
      </div>
    </div>
  );
}

const W = 1100; // consistent max-width

export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ maxWidth: W, margin: "0 auto", padding: "clamp(60px,9vw,108px) 24px clamp(48px,6vw,72px)" }}>
        <div className="hero-grid">
          <div style={{ minWidth: 0 }}>
            {/* Eyebrow */}
            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-light)", borderRadius: 99, padding: "5px 14px", marginBottom: 28, border: "1px solid rgba(56,189,248,0.18)" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.01em" }}>Enrolling now · April 2026 · Karachi</span>
            </div>

            <h1 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(38px,5.5vw,70px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.04, color: "var(--text)", marginBottom: 22 }}>
              From zero to<br />
              <span style={{ color: "var(--accent)" }}>Full-Stack</span><br />
              <span style={{ color: "var(--accent)" }}>+ AI Developer.</span>
            </h1>

            <p className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(15px,1.8vw,17px)", color: "var(--text-muted)", maxWidth: 480, marginBottom: 12, lineHeight: 1.85, letterSpacing: "-0.005em" }}>
              Master HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB — and <strong style={{ color: "var(--text)", fontWeight: 700 }}>Agentic AI with LangChain & LangGraph.</strong>
            </p>

            <p className="fade-up fade-up-delay-2" style={{ fontSize: 13, color: "var(--text-faint)", maxWidth: 400, marginBottom: 36, lineHeight: 1.65 }}>
              Based on Sir Ghous Ahmed's battle-tested SMIT curriculum. Weekends only. 6 Hackathons.
            </p>

            <div className="fade-up fade-up-delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/outline" className="btn-primary">View Full Curriculum <ArrowRight size={15} /></Link>
              <Link href="/instructors" className="btn-secondary">Meet the Team</Link>
            </div>

            {/* Mobile pill tags */}
            <div className="hero-mobile-tags">
              {["HTML·CSS","JavaScript","TypeScript","React","Next.js","Node.js","MongoDB","LangChain"].map((t,i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 99, background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="hero-code-block fade-up fade-up-delay-2" style={{ flexShrink: 0 }}>
            <div style={{
              width: "clamp(270px,28vw,360px)",
              background: "#0f172a",
              borderRadius: "var(--radius-2xl)",
              padding: "22px 24px",
              border: "1px solid #1e293b",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(11.5px,1.1vw,13px)",
              lineHeight: 1.8,
              boxShadow: "0 24px 80px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.03)",
            }}>
              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 18 }}>
                {["#ff5f57","#febc2e","#28c840"].map((c,i) => <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
                <span style={{ marginLeft: 8, fontSize: 11, color: "#475569", fontFamily: "var(--font-sans)", fontWeight: 500 }}>webcraft.js</span>
              </div>

              <div className="code-line"><span style={{ color: "#64748b" }}>// 📅 Week 1 — first line of code</span></div>
              <div className="code-line"><span style={{ color: "#7dd3fc" }}>const</span><span style={{ color: "#e2e8f0" }}> you </span><span style={{ color: "#f472b6" }}>=</span><span style={{ color: "#a3e635" }}> "a developer now"</span></div>
              <div className="code-line" style={{ marginTop: 8 }}><span style={{ color: "#64748b" }}>// ⚛️ Week 13 — React + Next.js</span></div>
              <div className="code-line"><span style={{ color: "#c084fc" }}>export default function</span><span style={{ color: "#7dd3fc" }}> Portfolio</span><span style={{ color: "#f472b6" }}>{"() {"}</span></div>
              <div className="code-line"><span style={{ color: "#e2e8f0" }}>  return </span><span style={{ color: "#a3e635" }}>&lt;App isHired=</span><span style={{ color: "#7dd3fc" }}>{"{true}"}</span><span style={{ color: "#a3e635" }}>/&gt;</span></div>
              <div className="code-line"><span style={{ color: "#f472b6" }}>{"}"}</span></div>
              <div className="code-line" style={{ marginTop: 8 }}><span style={{ color: "#64748b" }}>// 🤖 Module 5 — Agentic AI</span></div>
              <div className="code-line"><span style={{ color: "#c084fc" }}>const</span><span style={{ color: "#e2e8f0" }}> agent </span><span style={{ color: "#f472b6" }}>=</span><span style={{ color: "#e2e8f0" }}> new </span><span style={{ color: "#7dd3fc" }}>LangGraph</span><span style={{ color: "#e2e8f0" }}>(config)</span></div>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ color: "#22c55e", fontSize: 12, fontFamily: "var(--font-sans)", fontWeight: 600 }}>Deployed · vercel.app</span>
                <span className="cursor-blink" style={{ color: "#22c55e" }}>▋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
        <div className="stats-grid" style={{ maxWidth: W, margin: "0 auto", padding: "18px 24px" }}>
          {[
            { icon: <Calendar size={15}/>, label: "Schedule",   value: "Sat & Sun" },
            { icon: <Clock size={15}/>,    label: "Per session",value: "2–3 Hours" },
            { icon: <Code2 size={15}/>,    label: "Modules",    value: "6 Modules" },
            { icon: <Trophy size={15}/>,   label: "Hackathons", value: "6 Real" },
            { icon: <Bot size={15}/>,      label: "Includes",   value: "Agentic AI" },
            { icon: <Users size={15}/>,    label: "Goal",       value: "Job-Ready" },
          ].map((s,i) => (
            <div key={i} className="stat-card" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ color: "var(--accent)", flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 10, color: "var(--text-faint)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY WEBCRAFT ── */}
      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: W, margin: "0 auto", padding: "clamp(60px,8vw,96px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 48 }}>
            <div className="divider" />
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>Not just another bootcamp.</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, maxWidth: 460, lineHeight: 1.75, letterSpacing: "-0.005em" }}>Six reasons students choose us over YouTube and other weekend courses.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))", gap: 12 }}>
            {whyPoints.map((p,i) => (
              <div key={i} className={`hover-card fade-up fade-up-delay-${(i%3)+1}`}
                style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "24px", background: "var(--bg)", display: "flex", gap: 16, alignItems: "flex-start", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-lg)", background: p.color + "12", border: `1px solid ${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: p.color }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)", marginBottom: 5, letterSpacing: "-0.015em" }}>{p.title}</div>
                  <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.75 }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 MODULES — alt bg ── */}
      <section style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: W, margin: "0 auto", padding: "clamp(60px,8vw,96px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 48 }}>
            <div className="divider" />
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>6 modules. Every skill you need.</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.75, letterSpacing: "-0.005em" }}>Each module ends with a real Hackathon. Graduate with 6 live projects for your portfolio.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,310px),1fr))", gap: 12 }}>
            {modules.map((m,i) => {
              const c = modColors[i];
              return (
                <div key={m.id} className={`hover-card fade-up fade-up-delay-${(i%3)+1}`}
                  style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "24px", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 16, position: "relative", boxShadow: "var(--shadow-xs)" }}>
                  {m.isNew && <div style={{ position: "absolute", top: 16, right: 16, fontSize: 10, fontWeight: 700, background: "var(--purple-light)", color: "var(--purple)", padding: "3px 9px", borderRadius: 99, letterSpacing: "0.04em" }}>NEW 2026</div>}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 2px 6px ${c.accent}40` }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{m.id}</span>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: c.accent, letterSpacing: "0.07em", textTransform: "uppercase" }}>{m.label}</span>
                    </div>
                    <div style={{ fontSize: 16.5, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 10 }}>{m.icon} {m.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, background: c.light, color: c.accent, padding: "3px 10px", borderRadius: 99, border: `1px solid ${c.accent}18` }}>{m.duration}</span>
                      <span style={{ fontSize: 11, color: "var(--text-faint)", fontWeight: 500 }}>{m.quizzes.length} quiz{m.quizzes.length > 1 ? "zes" : ""}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {m.tags.slice(0,4).map((t,j) => (
                      <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "3px 9px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>
                    ))}
                    {m.tags.length > 4 && <span style={{ fontSize: 11, color: "var(--text-faint)", alignSelf: "center" }}>+{m.tags.length-4}</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", background: "var(--hack-bg)", borderRadius: "var(--radius-md)", marginTop: "auto", border: "1px solid var(--hack-border)" }}>
                    <Trophy size={13} color="var(--hack-icon)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 12, color: "var(--hack-text)", fontWeight: 600, lineHeight: 1.55 }}>{m.hackathonGoal}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="fade-up" style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/outline" className="btn-secondary" style={{ fontSize: 14 }}>
              See full curriculum with all topics <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AI SPOTLIGHT ── */}
      <section style={{ maxWidth: W, margin: "0 auto", padding: "clamp(48px,6vw,80px) 24px 0" }}>
        <div className="fade-up" style={{ background: "#0f172a", borderRadius: "var(--radius-2xl)", padding: "clamp(32px,5vw,56px)", border: "1px solid #1e293b", boxShadow: "0 24px 64px rgba(15,23,42,0.18)" }}>
          <div className="hackathon-inner">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 12px", borderRadius: 99, marginBottom: 16 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase" }}>Module 5 · New in 2026 · Only in Karachi</span>
              </div>
              <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.15 }}>🤖 Agentic AI Development</h2>
              <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.85, marginBottom: 24, maxWidth: 500 }}>
                LangChain, LangGraph, RAG pipelines, vector databases, and MCP — wired into your full MERN stack. Build AI agents that don't just answer questions, they take real actions.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {["Python","LangChain","LangGraph","RAG","Groq API","Vector DBs","MCP"].map((t,i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 99, background: "rgba(124,58,237,0.12)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.22)" }}>{t}</span>
                ))}
              </div>
              <Link href="/outline" className="btn-ghost-white" style={{ fontSize: 13.5 }}>See Module 5 <ArrowRight size={14} /></Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
              {[{val:"2",label:"Months",sub:"dedicated AI"},{val:"2",label:"Quizzes",sub:"LangChain + RAG"},{val:"1",label:"Hackathon",sub:"AI product"}].map((s,i) => (
                <div key={i} style={{ textAlign: "center", padding: "16px 22px", background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius-xl)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#c4b5fd", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.val}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section style={{ maxWidth: W, margin: "0 auto", padding: "clamp(60px,8vw,96px) 24px" }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <div className="divider" />
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>What you will be able to do</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.75, letterSpacing: "-0.005em" }}>Skills that get you hired or land your first freelance client on Upwork.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,248px),1fr))", gap: 10 }}>
          {outcomes.map((o,i) => (
            <div key={i} className={`hover-card fade-up fade-up-delay-${(i%4)+1}`}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", background: "var(--bg)", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={13} color="var(--accent)" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.01em" }}>{o}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "clamp(60px,8vw,96px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 44 }}>
            <div className="divider" />
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>Questions students always ask</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.75 }}>Everything you need to know before enrolling.</p>
          </div>
          <div className="fade-up" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-2xl)", padding: "0 28px", boxShadow: "var(--shadow-sm)" }}>
            {faqs.map((f,i) => <FAQItem key={i} {...f} />)}
          </div>
          <div className="fade-up" style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-xs)" }}>
            <MessageCircle size={16} color="var(--accent)" />
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
              Still have questions?{" "}
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>Message us on WhatsApp →</a>
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: W, margin: "0 auto", padding: "clamp(48px,6vw,72px) 24px clamp(60px,8vw,96px)" }}>
        <div className="fade-up" style={{ background: "var(--accent)", borderRadius: "var(--radius-2xl)", padding: "clamp(44px,6vw,72px) clamp(28px,5vw,64px)", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 24px 64px rgba(56,189,248,0.25), 0 4px 16px rgba(56,189,248,0.15)" }}>
          {/* Subtle rings */}
          <div style={{ position: "absolute", top: "-60%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: 450, height: 450, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Start your journey</p>
            <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.035em", marginBottom: 14, lineHeight: 1.15 }}>
              Ready to become a<br />Full-Stack + AI Developer?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, marginBottom: 36, maxWidth: 380, margin: "0 auto 36px", lineHeight: 1.75 }}>
              First session Saturday, April 5th. Limited seats. Join the WhatsApp group to secure your spot.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-white">
                <MessageCircle size={16} /> Join on WhatsApp
              </a>
              <Link href="/outline" className="btn-ghost-white">View Curriculum <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
