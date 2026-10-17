"use client";
import { Code2, GraduationCap, Star, Bot, Server } from "lucide-react";

const W = 960;

export default function InstructorsPage() {
  return (
    <div>
      <section style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: W, margin: "0 auto", padding: "clamp(44px,6vw,68px) 24px clamp(36px,5vw,52px)" }}>
          <div className="fade-up">
            <div className="divider" />
            <h1 style={{ fontSize: "clamp(28px,5vw,46px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 14, lineHeight: 1.08 }}>Learn from practitioners</h1>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 460, lineHeight: 1.8 }}>
              Three instructors. Real industry experience. One mission — making you job-ready and freelance-ready in 2026.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: W, margin: "0 auto", padding: "clamp(32px,5vw,52px) 24px 80px" }}>

          {/* Hafiz Zeeshan lead card */}
          <div className="hover-card fade-up" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-2xl)", padding: "clamp(24px,4vw,40px)", background: "var(--bg)", marginBottom: 14, boxShadow: "var(--shadow-sm)" }}>
            <div className="instructor-lead">
              <div>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, border: "2px solid rgba(56,189,248,0.18)", boxShadow: "0 4px 16px rgba(56,189,248,0.12)" }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)" }}>HZ</span>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fffbeb", padding: "5px 12px", borderRadius: 99, border: "1px solid #fde68a" }}>
                  <Star size={12} color="#f59e0b" fill="#f59e0b" />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#92400e" }}>Head Instructor</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(20px,3.5vw,28px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 4, lineHeight: 1.1 }}>Hafiz Zeeshan</div>
                <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, marginBottom: 18 }}>Lead & Head Instructor · WebCraft Academy</div>
                <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 22 }}>
                  The visionary behind WebCraft Academy. Designed the entire curriculum with one goal — making students genuinely market-ready. Leads overall strategy, mentors both instructors, oversees student progress, and personally reviews all final projects and Hackathon submissions.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 10 }}>
                  {["Course direction & strategy", "Advanced concept sessions", "Career & freelance mentorship", "Hackathon judging & reviews"].map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5, color: "var(--text)", fontWeight: 500 }}>
                      <GraduationCap size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Saif & Adnan */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))", gap: 14 }}>
            {[
              {
                initials: "SA", name: "Saif", role: "Full-Stack & AI Instructor",
                color: "var(--blue)", light: "var(--blue-light)",
                bio: "Hands-on full-stack developer and co-creator of WebCraft Academy. Leads the frontend, React, Next.js, and Agentic AI modules. Known for making complex topics click through live coding and real projects.",
                modules: ["Module 1", "Module 2", "Module 3", "Module 5 — AI"],
                teaches: ["HTML, CSS & ES6+ JavaScript", "React v19 & Next.js 15", "Agentic AI — LangChain & LangGraph", "Live coding & real project demos"],
                icon: (color) => <Bot size={14} color={color} style={{ flexShrink: 0 }} />,
              },
              {
                initials: "AD", name: "Adnan", role: "Backend & DevOps Instructor",
                color: "var(--purple)", light: "var(--purple-light)",
                bio: "Backend specialist with deep focus on Node.js, Express, MongoDB, and PostgreSQL. Makes sure every student can build, secure, and deploy production-grade APIs — not just follow tutorials.",
                modules: ["Module 4", "Module 6"],
                teaches: ["Node.js & Express REST APIs", "MongoDB & PostgreSQL", "JWT Auth, Redis & Socket.IO", "Deployment — Render, Railway, Cloud"],
                icon: (color) => <Server size={14} color={color} style={{ flexShrink: 0 }} />,
              },
            ].map((ins, i) => (
              <div key={i} className={`hover-card fade-up fade-up-delay-${i+1}`}
                style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-2xl)", padding: "28px", background: "var(--bg)", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: ins.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `2px solid ${ins.color}22`, boxShadow: `0 2px 8px ${ins.color}15` }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: ins.color }}>{ins.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 19, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.025em" }}>{ins.name}</div>
                    <div style={{ fontSize: 12, color: ins.color, fontWeight: 600, marginTop: 2 }}>{ins.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 18 }}>{ins.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {ins.modules.map((t, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: ins.light, color: ins.color, border: `1px solid ${ins.color}18` }}>{t}</span>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 18, marginTop: "auto" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Teaches</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {ins.teaches.map((t, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5, color: "var(--text)", fontWeight: 500 }}>
                        {ins.icon(ins.color)} {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Credit */}
          <div className="fade-up" style={{ marginTop: 28, display: "flex", alignItems: "flex-start", gap: 14, padding: "20px 24px", background: "var(--credit-bg)", border: "1px solid var(--credit-border)", borderRadius: "var(--radius-lg)" }}>
            <Star size={18} color="#f59e0b" fill="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--credit-text)", marginBottom: 5 }}>Built on Sir Ghous Ahmed's SMIT Curriculum</div>
              <p style={{ fontSize: 13, color: "var(--credit-text)", lineHeight: 1.8, margin: 0, opacity: 0.85 }}>
                The core curriculum at WebCraft Academy is based on the proven outline developed by Sir Ghous Ahmed at SMIT — one of Pakistan's most respected free tech education programs. Extended with Agentic AI to align with 2026 market demands.
              </p>
            </div>
          </div>

          <div className="fade-up" style={{ marginTop: 14, background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "18px 24px", boxShadow: "var(--shadow-xs)" }}>
            <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "var(--text)" }}>Questions?</strong> All three instructors are active in the student WhatsApp group. Reach out before April 5th — we are happy to answer anything.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
