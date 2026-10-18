"use client";
import { modules, modColors } from "../data/course";
import { Calendar, Trophy } from "lucide-react";

const W = 960;
// Months per module — keep in sync with course.js (Module 5 = 3 weeks, Module 6 = 1 month)
const durations = [2.5, 4.5, 3, 4, 0.75, 1];
const totalMonths = durations.reduce((a, b) => a + b, 0);

export default function SchedulePage() {
  let cum = 0;
  return (
    <div>
      <section style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: W, margin: "0 auto", padding: "clamp(44px,6vw,68px) 24px clamp(36px,5vw,52px)" }}>
          <div className="fade-up">
            <div className="divider" />
            <h1 style={{ fontSize: "clamp(28px,5vw,46px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 14, lineHeight: 1.08 }}>6 Modules · ~{Math.round(totalMonths)} Months</h1>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 480, lineHeight: 1.8 }}>
              Weekends only — Saturday & Sunday. Each session runs 2–3 hours. 6 Hackathons throughout the journey.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: W, margin: "0 auto", padding: "clamp(32px,5vw,52px) 24px 80px" }}>

          {/* Timeline progress bar */}
          <div className="fade-up" style={{ marginBottom: 48, padding: "22px 24px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 12 }}>
              Total timeline — <strong style={{ color: "var(--text)" }}>{totalMonths} months</strong>
            </div>
            <div style={{ display: "flex", borderRadius: "var(--radius-md)", overflow: "hidden", height: 10, gap: 2 }}>
              {modules.map((m, i) => (
                <div key={m.id} title={`${m.name} — ${m.duration}`}
                  style={{ flex: durations[i], background: modColors[i].accent, opacity: 0.85, borderRadius: 3 }} />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 14 }}>
              {modules.map((m, i) => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: modColors[i].accent }} />
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>{m.label}: {m.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline items */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: "1px", background: "var(--border)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {modules.map((m, i) => {
                const c = modColors[i];
                const startM = cum;
                cum += durations[i];
                const endM = cum;
                const base = new Date("2026-04-04");
                const s = new Date(base); s.setMonth(base.getMonth() + Math.floor(startM));
                const e = new Date(base); e.setMonth(base.getMonth() + Math.floor(endM));
                const fmt = d => d.toLocaleDateString("en-PK", { month: "long", year: "numeric" });
                return (
                  <div key={m.id} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16 }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, zIndex: 1 }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: c.accent, border: "3px solid var(--bg)", boxShadow: `0 0 0 1.5px ${c.accent}` }} />
                    </div>
                    <div className={`hover-card fade-up fade-up-delay-${(i%3)+1}`}
                      style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(16px,2.5vw,22px) clamp(18px,3vw,24px)", background: "var(--bg)", boxShadow: "var(--shadow-xs)" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 5 }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: c.accent, background: c.light, padding: "2px 9px", borderRadius: 99, border: `1px solid ${c.accent}18` }}>{m.label}</span>
                            {m.isNew && <span style={{ fontSize: 10, fontWeight: 700, background: "var(--purple-light)", color: "var(--purple)", padding: "2px 8px", borderRadius: 99 }}>NEW</span>}
                          </div>
                          <div style={{ fontSize: "clamp(14px,2vw,17px)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>{m.icon} {m.name}</div>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: c.accent, background: c.light, padding: "5px 14px", borderRadius: "var(--radius-md)", flexShrink: 0, border: `1px solid ${c.accent}18` }}>
                          {m.duration}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        {[{label:"Starts",date:fmt(s)},{label:"Ends",date:fmt(e)}].map((d,j) => (
                          <div key={j} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", background: c.light, borderRadius: "var(--radius-md)", border: `1px solid ${c.accent}15` }}>
                            <Calendar size={12} color={c.accent} />
                            <span style={{ fontSize: 10, fontWeight: 700, color: c.accent, textTransform: "uppercase", letterSpacing: "0.04em" }}>{d.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{d.date}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                        <span style={{ fontSize: 10, color: "var(--text-faint)", alignSelf: "center", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginRight: 2 }}>Quizzes</span>
                        {m.quizzes.map((q,j) => (
                          <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 99, background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{q}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "var(--hack-bg)", border: "1px solid var(--hack-border)", borderRadius: "var(--radius-md)" }}>
                        <Trophy size={13} color="var(--hack-icon)" />
                        <span style={{ fontSize: 12, color: "var(--hack-text)", fontWeight: 600 }}>{m.hackathonGoal}</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Graduation */}
              <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16 }}>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#f59e0b", border: "3px solid var(--bg)", boxShadow: "0 0 0 1.5px #f59e0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>🏆</div>
                </div>
                <div className="fade-up" style={{ border: "1px solid var(--hack-border)", borderRadius: "var(--radius-xl)", padding: "20px 24px", background: "var(--hack-bg)" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--hack-text)", marginBottom: 6, letterSpacing: "-0.025em" }}>Graduation 🎓</div>
                  <div style={{ fontSize: 14, color: "var(--hack-icon)", lineHeight: 1.75 }}>
                    6 modules complete · 6 Hackathon projects in your portfolio · Full-Stack + AI developer — ready to get hired or start freelancing.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ marginTop: 40, background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px", boxShadow: "var(--shadow-xs)" }}>
            <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "var(--text)" }}>Weekends only.</strong> Doors open 15 mins before each session. All sessions are recorded and shared in the WhatsApp group. Dates may shift slightly based on public holidays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}