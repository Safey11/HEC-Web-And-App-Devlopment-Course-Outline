"use client";
import { modules, modColors } from "../data/course";
import { Calendar, Trophy } from "lucide-react";

const durations = [2.5, 4.5, 3, 4, 2, 2];
const totalMonths = durations.reduce((a, b) => a + b, 0);

export default function SchedulePage() {
  let cumulativeMonths = 0;

  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(40px,6vw,64px) 24px clamp(36px,5vw,52px)" }}>
          <div className="fade-up">
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Schedule</div>
            <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 12, lineHeight: 1.1 }}>
              6 Modules · ~18 Months
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.8 }}>
              Weekends only — Saturday & Sunday. Each session runs 2–3 hours. 6 Hackathons throughout the journey.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(32px,5vw,52px) 24px 80px" }}>

          {/* Progress bar */}
          <div className="fade-up" style={{ marginBottom: 48, padding: "22px 24px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 12, letterSpacing: "-0.01em" }}>
              Total course timeline — <strong style={{ color: "var(--text)" }}>{totalMonths} months</strong>
            </div>
            <div style={{ display: "flex", borderRadius: "var(--radius-md)", overflow: "hidden", height: 12, gap: 2 }}>
              {modules.map((m, i) => (
                <div key={m.id} title={`${m.name} — ${durations[i]} months`}
                  style={{ flex: durations[i], background: modColors[i].accent, borderRadius: 3, opacity: 0.9 }} />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 14 }}>
              {modules.map((m, i) => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: modColors[i].accent, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>{m.label}: {durations[i]}mo</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: "1px", background: "var(--border)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {modules.map((m, i) => {
                const c = modColors[i];
                const startMonth = cumulativeMonths;
                cumulativeMonths += durations[i];
                const endMonth = cumulativeMonths;

                const startDate = new Date("2026-04-04");
                const moduleStart = new Date(startDate);
                moduleStart.setMonth(startDate.getMonth() + Math.floor(startMonth));
                const moduleEnd = new Date(startDate);
                moduleEnd.setMonth(startDate.getMonth() + Math.floor(endMonth));
                const fmt = (d) => d.toLocaleDateString("en-PK", { month: "long", year: "numeric" });

                return (
                  <div key={m.id} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16 }}>
                    {/* Timeline dot */}
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, zIndex: 1 }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: c.accent, border: "3px solid var(--bg)", boxShadow: `0 0 0 1.5px ${c.accent}` }} />
                    </div>

                    {/* Card */}
                    <div className={`hover-card fade-up fade-up-delay-${(i % 3) + 1}`}
                      style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(16px,2.5vw,22px) clamp(18px,3vw,24px)", background: "var(--bg)" }}>

                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: c.accent, background: c.light, padding: "2px 9px", borderRadius: 99 }}>{m.label}</span>
                            {m.isNew && <span style={{ fontSize: 10, fontWeight: 700, background: "var(--purple-light)", color: "var(--purple)", padding: "2px 8px", borderRadius: 99 }}>NEW</span>}
                          </div>
                          <div style={{ fontSize: "clamp(14px,2vw,17px)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>{m.icon} {m.name}</div>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: c.accent, background: c.light, padding: "5px 14px", borderRadius: "var(--radius-md)", flexShrink: 0, border: `1px solid ${c.accent}20` }}>
                          {durations[i]} months
                        </span>
                      </div>

                      {/* Date chips */}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        {[{ label: "Starts", date: fmt(moduleStart) }, { label: "Ends", date: fmt(moduleEnd) }].map((d, j) => (
                          <div key={j} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", background: c.light, borderRadius: "var(--radius-md)", border: `1px solid ${c.accent}18` }}>
                            <Calendar size={12} color={c.accent} />
                            <span style={{ fontSize: 10, fontWeight: 700, color: c.accent, textTransform: "uppercase", letterSpacing: "0.04em" }}>{d.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{d.date}</span>
                          </div>
                        ))}
                      </div>

                      {/* Quizzes */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                        <span style={{ fontSize: 10, color: "var(--text-faint)", alignSelf: "center", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginRight: 2 }}>Quizzes</span>
                        {m.quizzes.map((q, j) => (
                          <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 99, background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{q}</span>
                        ))}
                      </div>

                      {/* Hackathon */}
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
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--hack-text)", marginBottom: 6, letterSpacing: "-0.02em" }}>Graduation 🎓</div>
                  <div style={{ fontSize: 14, color: "var(--hack-icon)", lineHeight: 1.75 }}>
                    6 modules complete · 6 Hackathon projects in your portfolio · Full-Stack + Agentic AI developer — ready to get hired or start freelancing.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ marginTop: 40, background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
            <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "var(--text)" }}>Weekends only.</strong> Doors open 15 mins before each session. All sessions are recorded and shared in the student WhatsApp group. Dates may shift slightly based on public holidays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
