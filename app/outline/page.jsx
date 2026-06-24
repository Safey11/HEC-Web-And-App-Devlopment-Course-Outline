"use client";
import { useState } from "react";
import { modules } from "../data/course";
import { ChevronDown, CheckCircle2, Trophy, Star } from "lucide-react";

const modColors = [
  { accent: "#E24B4A", light: "#FCEBEB" },
  { accent: "#EF9F27", light: "#FAEEDA" },
  { accent: "#06b6d4", light: "#ecfeff" },
  { accent: "#1a6b4a", light: "#eaf4ef" },
  { accent: "#7F77DD", light: "#EEEDFE" },
  { accent: "#16a34a", light: "#f0fdf4" },
];

export default function OutlinePage() {
  const [open, setOpen] = useState({ 0: true }); // first module open by default

  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(32px,6vw,56px) 20px 80px" }}>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Full Curriculum</div>
        <h1 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 12 }}>
          From Beginner to<br />Full-Stack + AI Developer
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.75 }}>
          6 modules built on Sir Ghous Ahmed's battle-tested SMIT curriculum — with Agentic AI added on top. Every module ends with a real Hackathon.
        </p>
        <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg-secondary)", border: "0.5px solid var(--border)", padding: "8px 14px", borderRadius: "var(--radius-md)" }}>
          <Star size={13} color="#EF9F27" fill="#EF9F27" />
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Core outline by <strong style={{ color: "var(--text)" }}>Sir Ghous Ahmed</strong> · SMIT</span>
        </div>
      </div>

      {/* Modules */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {modules.map((m, i) => {
          const c = modColors[i];
          const isOpen = !!open[i];
          return (
            <div key={m.id} id={`module-${m.id}`} style={{ border: `0.5px solid ${isOpen ? c.accent + "44" : "var(--border)"}`, borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--bg)", transition: "border-color 0.2s" }}>

              {/* Module header — clickable */}
              <button
                onClick={() => toggle(i)}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: isOpen ? c.light : "transparent", border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.2s" }}
              >
                {/* Number */}
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{m.id}</span>
                </div>

                {/* Title block */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>{m.icon} {m.name}</span>
                    {m.isNew && (
                      <span style={{ fontSize: 10, fontWeight: 700, background: "#EEEDFE", color: "#6d28d9", padding: "2px 8px", borderRadius: 99, flexShrink: 0 }}>NEW 2026</span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: c.accent }}>{m.duration}</span>
                    <span style={{ fontSize: 11, color: "var(--text-faint)" }}>·</span>
                    <span style={{ fontSize: 11, color: "var(--text-faint)" }}>Pre-req: {m.prereq}</span>
                  </div>
                </div>

                {/* Quiz count + chevron */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, background: "var(--bg-secondary)", color: "var(--text-muted)", padding: "3px 10px", borderRadius: 99, border: "0.5px solid var(--border)", whiteSpace: "nowrap" }}>
                    {m.quizzes.length} quiz{m.quizzes.length > 1 ? "zes" : ""}
                  </span>
                  <ChevronDown size={18} color="var(--text-faint)" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }} />
                </div>
              </button>

              {/* Module body */}
              {isOpen && (
                <div style={{ padding: "0 20px 22px", borderTop: `0.5px solid ${c.accent}22` }}>

                  {/* Quizzes row */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "14px 0 18px", borderBottom: "0.5px solid var(--border)" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-faint)", alignSelf: "center", marginRight: 4 }}>QUIZZES</span>
                    {m.quizzes.map((q, j) => (
                      <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 99, background: c.light, color: c.accent, border: `0.5px solid ${c.accent}33` }}>{q}</span>
                    ))}
                  </div>

                  {/* Sections */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20, marginTop: 20 }}>
                    {m.sections.map((section, j) => (
                      <div key={j}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: c.accent, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>{section.title}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {section.topics.map((topic, k) => (
                            <div key={k} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
                              <CheckCircle2 size={13} color={c.accent} style={{ flexShrink: 0, marginTop: 1 }} />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20, paddingTop: 16, borderTop: "0.5px solid var(--border)" }}>
                    {m.tags.map((t, j) => (
                      <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", color: "var(--text)", border: "0.5px solid var(--border)" }}>{t}</span>
                    ))}
                  </div>

                  {/* Hackathon goal */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 14, padding: "12px 16px", background: "#FAEEDA", border: "0.5px solid #FAC775", borderRadius: "var(--radius-md)" }}>
                    <Trophy size={15} color="#854F0B" style={{ flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#854F0B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>Hackathon</div>
                      <span style={{ fontSize: 13, color: "#633806", fontWeight: 500 }}>{m.hackathonGoal}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div style={{ marginTop: 40, background: "var(--bg-secondary)", border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
          <strong style={{ color: "var(--text)" }}>Note:</strong> Each session builds on the last. Recordings and notes are shared in the student WhatsApp group after every weekend. Bring your laptop — we learn by doing.
        </p>
      </div>
    </div>
  );
}
