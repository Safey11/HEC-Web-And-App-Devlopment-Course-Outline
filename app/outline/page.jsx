"use client";
import { useState } from "react";
import { modules, modColors } from "../data/course";
import { ChevronDown, CheckCircle2, Trophy, Star } from "lucide-react";

export default function OutlinePage() {
  const [open, setOpen] = useState({ 0: true });
  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div>
      {/* Page header — alt bg */}
      <section style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(40px,6vw,64px) 24px clamp(36px,5vw,56px)" }}>
          <div className="fade-up">
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Full Curriculum</div>
            <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 12, lineHeight: 1.1 }}>
              From Beginner to<br />Full-Stack + AI Developer
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 540, lineHeight: 1.8 }}>
              6 modules built on Sir Ghous Ahmed's battle-tested SMIT curriculum — with Agentic AI added on top. Every module ends with a real Hackathon.
            </p>
            <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, background: "var(--credit-bg)", border: `1px solid var(--credit-border)`, padding: "7px 14px", borderRadius: "var(--radius-md)" }}>
              <Star size={13} color="#f59e0b" fill="#f59e0b" />
              <span style={{ fontSize: 12, color: "var(--credit-text)", fontWeight: 600 }}>Core outline by <strong>Sir Ghous Ahmed</strong> · SMIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules accordion */}
      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(32px,5vw,52px) 24px clamp(48px,6vw,80px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {modules.map((m, i) => {
              const c = modColors[i];
              const isOpen = !!open[i];
              return (
                <div key={m.id} id={`module-${m.id}`}
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  style={{
                    border: `1px solid ${isOpen ? c.accent + "55" : "var(--border)"}`,
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    background: "var(--bg)",
                    transition: "border-color 0.2s",
                    boxShadow: isOpen ? `0 4px 24px ${c.accent}10` : "none",
                  }}>

                  {/* Accordion header */}
                  <button onClick={() => toggle(i)} style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 14,
                    padding: "clamp(14px,2vw,20px) clamp(16px,2.5vw,24px)",
                    background: isOpen ? c.accent + "0d" : "transparent",
                    border: "none", cursor: "pointer", textAlign: "left",
                    transition: "background 0.2s",
                  }}>
                    {/* Numbered circle */}
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 2px 8px ${c.accent}40` }}>
                      <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{m.id}</span>
                    </div>

                    {/* Title */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: "clamp(14px,2vw,16px)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.015em" }}>
                          {m.icon} {m.name}
                        </span>
                        {m.isNew && (
                          <span style={{ fontSize: 10, fontWeight: 700, background: "var(--purple-light)", color: "var(--purple)", padding: "2px 8px", borderRadius: 99, letterSpacing: "0.04em", flexShrink: 0 }}>NEW 2026</span>
                        )}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: c.accent }}>{m.duration}</span>
                        <span style={{ fontSize: 11, color: "var(--text-faint)" }}>·</span>
                        <span style={{ fontSize: 11, color: "var(--text-faint)", fontWeight: 500 }}>Pre-req: {m.prereq}</span>
                      </div>
                    </div>

                    {/* Quiz count + chevron */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, background: "var(--bg-secondary)", color: "var(--text-muted)", padding: "3px 10px", borderRadius: 99, border: "1px solid var(--border)", whiteSpace: "nowrap" }}>
                        {m.quizzes.length} quiz{m.quizzes.length > 1 ? "zes" : ""}
                      </span>
                      <ChevronDown size={18} color="var(--text-faint)" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s", flexShrink: 0 }} />
                    </div>
                  </button>

                  {/* Accordion body */}
                  {isOpen && (
                    <div style={{ padding: "0 clamp(16px,2.5vw,24px) clamp(20px,3vw,28px)", borderTop: `1px solid ${c.accent}22` }}>

                      {/* Quizzes */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "14px 0 18px", borderBottom: "1px solid var(--border)" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-faint)", alignSelf: "center", textTransform: "uppercase", letterSpacing: "0.06em", marginRight: 4 }}>Quizzes</span>
                        {m.quizzes.map((q, j) => (
                          <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: c.accent + "12", color: c.accent, border: `1px solid ${c.accent}28` }}>{q}</span>
                        ))}
                      </div>

                      {/* Topic sections */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 24, marginTop: 22 }}>
                        {m.sections.map((section, j) => (
                          <div key={j}>
                            <div style={{ fontSize: 10, fontWeight: 700, color: c.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>{section.title}</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                              {section.topics.map((topic, k) => (
                                <div key={k} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55 }}>
                                  <CheckCircle2 size={13} color={c.accent} style={{ flexShrink: 0, marginTop: 1 }} />
                                  {topic}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                        {m.tags.map((t, j) => (
                          <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>
                        ))}
                      </div>

                      {/* Hackathon goal */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 14, padding: "12px 16px", background: "var(--hack-bg)", border: "1px solid var(--hack-border)", borderRadius: "var(--radius-md)" }}>
                        <Trophy size={15} color="var(--hack-icon)" style={{ flexShrink: 0, marginTop: 1 }} />
                        <div>
                          <div style={{ fontSize: 10, fontWeight: 700, color: "var(--hack-icon)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 2 }}>Hackathon Goal</div>
                          <span style={{ fontSize: 13, color: "var(--hack-text)", fontWeight: 600 }}>{m.hackathonGoal}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="fade-up" style={{ marginTop: 36, padding: "20px 24px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
            <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>Note:</strong> Each session builds on the last. Recordings and notes are shared in the student WhatsApp group every weekend. Bring your laptop — we learn by doing, not by watching.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
