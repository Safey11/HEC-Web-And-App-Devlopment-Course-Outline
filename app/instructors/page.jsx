import { Code2, GraduationCap, Star, Bot } from "lucide-react";
import { instructors } from "../data/course";

export default function InstructorsPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(32px,6vw,56px) 20px 80px" }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>The Team</div>
        <h1 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 12 }}>
          Learn from practitioners
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 480, lineHeight: 1.75 }}>
          Three instructors. Real industry experience. One mission — making you job-ready and freelance-ready in 2026.
        </p>
      </div>

      {/* Hafiz Zeeshan — lead full-width card */}
      <div style={{ border: "0.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(24px,4vw,36px)", background: "var(--bg)", marginBottom: 16 }}>
        <div className="instructor-lead">
          <div>
            <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 26, fontWeight: 900, color: "var(--accent)" }}>HZ</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#fffbeb", padding: "4px 10px", borderRadius: 99 }}>
              <Star size={11} color="#f59e0b" fill="#f59e0b" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#92400e" }}>Head Instructor</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 4 }}>Hafiz Zeeshan</div>
            <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>Lead & Head Instructor · WebCraft Academy</div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
              The visionary behind WebCraft Academy. Designed the entire curriculum with one goal — making students genuinely market-ready. Leads overall strategy, mentors both instructors, oversees student progress, and personally reviews all final projects and Hackathon submissions.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
              {["Course direction & strategy", "Advanced concept sessions", "Career & freelance mentorship", "Hackathon judging & reviews"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text)" }}>
                  <GraduationCap size={13} color="var(--accent)" style={{ flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Saif & Adnan side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 14 }}>
        {/* Saif */}
        <div style={{ border: "0.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "28px", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: "var(--blue)" }}>SA</span>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.01em" }}>Saif</div>
              <div style={{ fontSize: 12, color: "var(--blue)", fontWeight: 600, marginTop: 2 }}>Full-Stack & AI Instructor</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
            Hands-on full-stack developer and co-creator of WebCraft Academy. Leads the frontend, React, Next.js, and Agentic AI modules. Known for making complex topics click through live coding and real projects.
          </p>

          {/* Modules taught */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
            {["Module 1", "Module 2", "Module 3", "Module 5 — AI"].map((t, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 99, background: "var(--blue-light)", color: "var(--blue)" }}>{t}</span>
            ))}
          </div>

          <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: 16, marginTop: "auto" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Teaches</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["HTML, CSS & ES6+ JavaScript", "React v19 & Next.js 15", "Agentic AI — LangChain & LangGraph", "Live coding & real project demos"].map((t, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text)" }}>
                  <Bot size={13} color="var(--blue)" style={{ flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adnan */}
        <div style={{ border: "0.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "28px", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--purple-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: "var(--purple)" }}>AD</span>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.01em" }}>Adnan</div>
              <div style={{ fontSize: 12, color: "var(--purple)", fontWeight: 600, marginTop: 2 }}>Backend & DevOps Instructor</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
            Backend specialist with deep focus on Node.js, Express, MongoDB, and PostgreSQL. Makes sure every student can build, secure, and deploy production-grade APIs — not just tutorials.
          </p>

          {/* Modules taught */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
            {["Module 4", "Module 6"].map((t, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 99, background: "var(--purple-light)", color: "var(--purple)" }}>{t}</span>
            ))}
          </div>

          <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: 16, marginTop: "auto" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Teaches</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Node.js & Express REST APIs", "MongoDB & PostgreSQL", "JWT Auth, Redis & Socket.IO", "Deployment — Render, Railway, Google Cloud"].map((t, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text)" }}>
                  <Code2 size={13} color="var(--purple)" style={{ flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sir Ghous credit */}
      <div style={{ marginTop: 32, display: "flex", alignItems: "flex-start", gap: 14, padding: "20px 24px", background: "#fffbeb", border: "0.5px solid #fcd34d", borderRadius: "var(--radius-lg)" }}>
        <Star size={18} color="#f59e0b" fill="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#92400e", marginBottom: 4 }}>Built on Sir Ghous Ahmed's SMIT Curriculum</div>
          <p style={{ fontSize: 13, color: "#a16207", lineHeight: 1.75, margin: 0 }}>
            The core curriculum at WebCraft Academy is based on the proven outline developed by Sir Ghous Ahmed at SMIT — one of Pakistan's most respected free tech education programs. We have extended it with an Agentic AI module to align with 2026 market demands.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 16, background: "var(--bg-secondary)", border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
          <strong style={{ color: "var(--text)" }}>Questions?</strong> All three instructors are active in the student WhatsApp group throughout the course. Reach out before April 5th — we are happy to answer anything.
        </p>
      </div>
    </div>
  );
}
