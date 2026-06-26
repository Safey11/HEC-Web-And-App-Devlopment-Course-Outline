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
  { icon: <Award size={22} />, title: "Battle-tested curriculum", body: "Built on Sir Ghous Ahmed's SMIT outline — the same syllabus that produced hundreds of employed developers across Pakistan.", color: "#16a34a" },
  { icon: <Bot size={22} />, title: "Agentic AI included", body: "The only weekend bootcamp in Karachi teaching LangChain, LangGraph, and RAG alongside full MERN stack. Nobody else does this.", color: "#7c3aed" },
  { icon: <Trophy size={22} />, title: "6 real Hackathons", body: "Every module ends with a Hackathon. You graduate with 6 deployed projects in your portfolio — not just course certificates.", color: "#d97706" },
  { icon: <Users size={22} />, title: "3 experienced instructors", body: "Hafiz Zeeshan, Saif, and Adnan — all active developers, not just teachers. They build real products and teach what actually gets you hired.", color: "#0891b2" },
  { icon: <Globe size={22} />, title: "Freelance-ready skills", body: "GSAP, Stripe, Cloudinary, Supabase, deployment — tools Pakistani freelancers use on Upwork to earn $500–$2000 per project.", color: "#E24B4A" },
  { icon: <Briefcase size={22} />, title: "Job market aligned", body: "Every technology in this course appears in Pakistani and remote job listings right now. Nothing is taught just because it is trendy.", color: "#059669" },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-btn" onClick={() => setOpen(o => !o)}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.5 }}>{q}</span>
        <ChevronDown size={18} color="var(--text-faint)" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s", flexShrink: 0 }} />
      </button>
      <div className={`faq-answer${open ? " open" : ""}`}>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.85, paddingBottom: 20 }}>{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(56px,8vw,100px) 24px clamp(48px,6vw,72px)" }}>
        <div className="hero-grid">
          {/* Left: text */}
          <div style={{ minWidth: 0 }}>
            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-light)", borderRadius: 99, padding: "5px 14px", marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-dark)", letterSpacing: "0.02em" }}>Enrolling now · April 2026 · Karachi</span>
            </div>

            <h1 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: "var(--text)", marginBottom: 22 }}>
              From zero to<br />
              <span style={{ color: "var(--accent)" }}>Full-Stack</span><br />
              <span style={{ color: "var(--accent)" }}>+ AI Developer.</span>
            </h1>

            <p className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(15px,1.8vw,17px)", color: "var(--text-muted)", maxWidth: 500, marginBottom: 12, lineHeight: 1.85, fontWeight: 400 }}>
              Master HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB — and <strong style={{ color: "var(--text)", fontWeight: 700 }}>Agentic AI with LangChain & LangGraph.</strong>
            </p>

            <p className="fade-up fade-up-delay-2" style={{ fontSize: 13, color: "var(--text-faint)", maxWidth: 420, marginBottom: 36, lineHeight: 1.65 }}>
              Based on Sir Ghous Ahmed's battle-tested SMIT curriculum. Weekends only. 6 Hackathons.
            </p>

            <div className="fade-up fade-up-delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/outline" className="btn-primary">View Full Curriculum <ArrowRight size={16} /></Link>
              <Link href="/instructors" className="btn-secondary">Meet the Team</Link>
            </div>

            {/* Mobile: tech pills instead of code block */}
            <div className="hero-mobile-tags">
              {["HTML·CSS", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "LangChain", "LangGraph"].map((t, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 99, background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right: animated code block */}
          <div className="hero-code-block fade-up fade-up-delay-2" style={{ flexShrink: 0 }}>
            <div style={{
              width: "clamp(260px, 28vw, 360px)",
              background: "#0d1117",
              borderRadius: "var(--radius-2xl)",
              padding: "22px 24px",
              border: "1px solid #21262d",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(11.5px, 1.1vw, 13px)",
              lineHeight: 1.8,
              boxShadow: "0 32px 80px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.04)",
            }}>
              {/* Window bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 18 }}>
                {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                  <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ marginLeft: 8, fontSize: 11, color: "#484f58", fontFamily: "var(--font-sans)" }}>webcraft.js</span>
              </div>

              <div className="code-line"><span style={{ color: "#6e7681" }}>// 📅 Week 1 — Your first line of code</span></div>
              <div className="code-line"><span style={{ color: "#ff7b72" }}>const</span><span style={{ color: "#c9d1d9" }}> you </span><span style={{ color: "#ff7b72" }}>=</span><span style={{ color: "#a5d6ff" }}> "a developer now"</span></div>

              <div className="code-line" style={{ marginTop: 8 }}><span style={{ color: "#6e7681" }}>// ⚛️ Week 13 — React & Next.js</span></div>
              <div className="code-line"><span style={{ color: "#d2a8ff" }}>export default function</span><span style={{ color: "#79c0ff" }}> Portfolio</span><span style={{ color: "#c9d1d9" }}>()</span><span style={{ color: "#ff7b72" }}> {"{"}</span></div>
              <div className="code-line"><span style={{ color: "#c9d1d9" }}>  return </span><span style={{ color: "#7ee787" }}>&lt;App isHired=</span><span style={{ color: "#a5d6ff" }}>{"{true}"}</span><span style={{ color: "#7ee787" }}> /&gt;</span></div>
              <div className="code-line"><span style={{ color: "#ff7b72" }}>{"}"}</span></div>

              <div className="code-line" style={{ marginTop: 8 }}><span style={{ color: "#6e7681" }}>// 🤖 Module 5 — Agentic AI</span></div>
              <div className="code-line"><span style={{ color: "#d2a8ff" }}>const</span><span style={{ color: "#c9d1d9" }}> agent </span><span style={{ color: "#ff7b72" }}>=</span><span style={{ color: "#c9d1d9" }}> new </span><span style={{ color: "#79c0ff" }}>LangGraph</span><span style={{ color: "#c9d1d9" }}>()</span></div>
              <div className="code-line"><span style={{ color: "#c9d1d9" }}>await agent.</span><span style={{ color: "#d2a8ff" }}>run</span><span style={{ color: "#c9d1d9" }}>(</span><span style={{ color: "#a5d6ff" }}>"build something real"</span><span style={{ color: "#c9d1d9" }}>)</span></div>

              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #21262d", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ color: "#7ee787", fontSize: 12, fontFamily: "var(--font-sans)" }}>Deployed to Vercel</span>
                <span className="cursor-blink" style={{ color: "#7ee787", marginLeft: 2 }}>▋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
        <div className="stats-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px" }}>
          {[
            { icon: <Calendar size={16}/>, label: "Schedule",    value: "Sat & Sun" },
            { icon: <Clock size={16}/>,    label: "Per session", value: "2–3 Hours" },
            { icon: <Code2 size={16}/>,    label: "Modules",     value: "6 Modules" },
            { icon: <Trophy size={16}/>,   label: "Hackathons",  value: "6 Real" },
            { icon: <Bot size={16}/>,      label: "Includes",    value: "Agentic AI" },
            { icon: <Users size={16}/>,    label: "Goal",        value: "Job-Ready" },
          ].map((s, i) => (
            <div key={i} className="stat-card" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ color: "var(--accent)", flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 10, color: "var(--text-faint)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY WEBCRAFT — alt bg ── */}
      <section style={{ background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(56px,7vw,88px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 44 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Why WebCraft Academy</div>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 10 }}>Not just another bootcamp.</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, maxWidth: 480, lineHeight: 1.7 }}>Six reasons students choose us over YouTube and other weekend courses.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 14 }}>
            {whyPoints.map((p, i) => (
              <div key={i} className={`hover-card fade-up fade-up-delay-${(i % 3) + 1}`}
                style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", background: "var(--bg)", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: p.color + "14", border: `1px solid ${p.color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: p.color }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6, letterSpacing: "-0.01em" }}>{p.title}</div>
                  <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.75 }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 MODULES — white bg ── */}
      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(56px,7vw,88px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 10 }}>6 modules. Every skill you need.</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>Each module ends with a real Hackathon. Graduate with 6 live projects for your portfolio.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))", gap: 14 }}>
            {modules.map((m, i) => {
              const c = modColors[i];
              return (
                <div key={m.id} className={`hover-card fade-up fade-up-delay-${(i % 3) + 1}`}
                  style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
                  {m.isNew && (
                    <div style={{ position: "absolute", top: 16, right: 16, fontSize: 10, fontWeight: 700, background: "var(--purple-light)", color: "var(--purple)", padding: "3px 9px", borderRadius: 99, letterSpacing: "0.04em" }}>NEW 2026</div>
                  )}
                  {/* Module number + name */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{m.id}</span>
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: c.accent, letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.label}</div>
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 8 }}>{m.icon} {m.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, background: c.light, color: c.accent, padding: "3px 10px", borderRadius: 99 }}>{m.duration}</span>
                      <span style={{ fontSize: 11, color: "var(--text-faint)", fontWeight: 500 }}>{m.quizzes.length} quiz{m.quizzes.length > 1 ? "zes" : ""}</span>
                    </div>
                  </div>
                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {m.tags.slice(0, 4).map((t, j) => (
                      <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "3px 9px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>
                    ))}
                    {m.tags.length > 4 && <span style={{ fontSize: 11, color: "var(--text-faint)", alignSelf: "center", fontWeight: 500 }}>+{m.tags.length - 4} more</span>}
                  </div>
                  {/* Hackathon goal */}
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
      <section className="fade-up" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px clamp(48px,6vw,72px)" }}>
        <div style={{ background: "#0d1117", borderRadius: "var(--radius-2xl)", padding: "clamp(32px,5vw,56px)", border: "1px solid #21262d", boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}>
          <div className="hackathon-inner">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Module 5 · New in 2026 · Only in Karachi</div>
              <h2 style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.15 }}>🤖 Agentic AI Development</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.85, marginBottom: 22, maxWidth: 500 }}>
                LangChain, LangGraph, RAG pipelines, vector databases, and MCP — wired into your full MERN stack. Build AI agents that don't just answer questions, they take real actions.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {["Python", "LangChain", "LangGraph", "RAG", "Groq API", "Vector DBs", "MCP"].map((t, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 99, background: "rgba(124,58,237,0.15)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.25)" }}>{t}</span>
                ))}
              </div>
              <Link href="/outline" className="btn-ghost-white" style={{ fontSize: 14 }}>See Module 5 <ArrowRight size={15} /></Link>
            </div>
            {/* Stats mini */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
              {[
                { val: "2", label: "Months", sub: "dedicated AI" },
                { val: "2", label: "Quizzes", sub: "LangChain + RAG" },
                { val: "1", label: "Hackathon", sub: "AI product" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: "16px 22px", background: "rgba(255,255,255,0.035)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#c4b5fd", lineHeight: 1, fontFamily: "var(--font-sans)" }}>{s.val}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES — alt bg ── */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(56px,7vw,88px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 10 }}>What you will be able to do</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>Skills that get you hired or land your first freelance client on Upwork.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 248px), 1fr))", gap: 10 }}>
            {outcomes.map((o, i) => (
              <div key={i} className={`hover-card fade-up fade-up-delay-${(i % 4) + 1}`}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--bg)" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={13} color="var(--accent)" />
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.005em" }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — white bg ── */}
      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(56px,7vw,88px) 24px" }}>
          <div className="fade-up" style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 10 }}>Questions students always ask</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>Everything you need to know before enrolling.</p>
          </div>
          <div className="fade-up" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "0 28px", background: "var(--bg)" }}>
            {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
          </div>
          <div className="fade-up" style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
            <MessageCircle size={16} color="var(--accent)" />
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
              Still have questions?{" "}
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>
                Message us on WhatsApp →
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(24px,4vw,48px) 24px clamp(56px,7vw,96px)" }}>
        <div style={{ background: "var(--accent)", borderRadius: "var(--radius-2xl)", padding: "clamp(40px,6vw,64px) clamp(24px,5vw,56px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Subtle glow rings */}
          <div style={{ position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: 360, height: 360, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Start your journey</div>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.2 }}>
              Ready to become a<br />Full-Stack + AI Developer?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 36, maxWidth: 400, margin: "0 auto 36px", lineHeight: 1.75 }}>
              First session Saturday, April 5th. Limited seats. Join the WhatsApp group to secure your spot.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-white">
                <MessageCircle size={16} /> Join on WhatsApp
              </a>
              <Link href="/outline" className="btn-ghost-white">
                View Curriculum <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
