import { modules } from "../data/course";
import { Calendar, Trophy } from "lucide-react";

const modColors = [
  { accent: "#E24B4A", light: "#FCEBEB" },
  { accent: "#EF9F27", light: "#FAEEDA" },
  { accent: "#06b6d4", light: "#ecfeff" },
  { accent: "#1a6b4a", light: "#eaf4ef" },
  { accent: "#7F77DD", light: "#EEEDFE" },
  { accent: "#16a34a", light: "#f0fdf4" },
];

const durations = [2.5, 4.5, 3, 4, 2, 2]; // months per module
const totalMonths = durations.reduce((a, b) => a + b, 0); // ~18

export default function SchedulePage() {
  let cumulativeMonths = 0;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(32px,6vw,56px) 20px 80px" }}>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Schedule</div>
        <h1 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 12 }}>
          6 Modules · ~18 Months
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, lineHeight: 1.75 }}>
          Weekends only — Saturday & Sunday. Each session runs 2–3 hours. 6 Hackathons throughout the journey.
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 48, padding: "20px 24px", background: "var(--bg-secondary)", border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 12 }}>Total course timeline — {totalMonths} months</div>
        <div style={{ display: "flex", borderRadius: "var(--radius-sm)", overflow: "hidden", height: 10 }}>
          {modules.map((m, i) => (
            <div key={m.id} title={m.name} style={{ flex: durations[i], background: modColors[i].accent, opacity: 0.85 }} />
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
          {modules.map((m, i) => (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: modColors[i].accent, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>{m.label}: {durations[i]}mo</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: "0.5px", background: "var(--border)" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {modules.map((m, i) => {
            const c = modColors[i];
            const startMonth = cumulativeMonths;
            cumulativeMonths += durations[i];
            const endMonth = cumulativeMonths;

            const startDate = new Date("2026-04-04");
            const moduleStart = new Date(startDate);
            moduleStart.setMonth(startDate.getMonth() + startMonth);
            const moduleEnd = new Date(startDate);
            moduleEnd.setMonth(startDate.getMonth() + endMonth);
            const fmt = (d) => d.toLocaleDateString("en-PK", { month: "long", year: "numeric" });

            return (
              <div key={m.id} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16 }}>
                {/* Dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 18 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: c.accent, border: "3px solid var(--bg)", zIndex: 1, boxShadow: `0 0 0 1.5px ${c.accent}` }} />
                </div>

                {/* Card */}
                <div style={{ border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "18px 20px", background: "var(--bg)" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: c.accent, background: c.light, padding: "2px 8px", borderRadius: 99 }}>{m.label}</span>
                        {m.isNew && <span style={{ fontSize: 10, fontWeight: 700, background: "#EEEDFE", color: "#6d28d9", padding: "2px 8px", borderRadius: 99 }}>NEW</span>}
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginTop: 4, letterSpacing: "-0.01em" }}>{m.icon} {m.name}</div>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c.accent, background: c.light, padding: "5px 12px", borderRadius: "var(--radius-sm)", flexShrink: 0 }}>
                      {durations[i]} months
                    </span>
                  </div>

                  {/* Dates */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
                    {[{ label: "Starts", date: fmt(moduleStart) }, { label: "Ends", date: fmt(moduleEnd) }].map((d, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", background: c.light, borderRadius: "var(--radius-sm)" }}>
                        <Calendar size={12} color={c.accent} />
                        <span style={{ fontSize: 10, fontWeight: 600, color: c.accent, textTransform: "uppercase" }}>{d.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{d.date}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quizzes */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                    <span style={{ fontSize: 11, color: "var(--text-faint)", alignSelf: "center", marginRight: 2 }}>Quizzes:</span>
                    {m.quizzes.map((q, j) => (
                      <span key={j} style={{ fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 99, background: "var(--bg-secondary)", color: "var(--text-muted)", border: "0.5px solid var(--border)" }}>{q}</span>
                    ))}
                  </div>

                  {/* Hackathon */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "#FAEEDA", border: "0.5px solid #FAC775", borderRadius: "var(--radius-sm)" }}>
                    <Trophy size={12} color="#854F0B" />
                    <span style={{ fontSize: 12, color: "#633806", fontWeight: 500 }}>{m.hackathonGoal}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Graduation dot */}
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: 18 }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EF9F27", border: "3px solid var(--bg)", zIndex: 1, boxShadow: "0 0 0 1.5px #EF9F27", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 8 }}>🏆</span>
              </div>
            </div>
            <div style={{ border: "0.5px solid #FAC775", borderRadius: "var(--radius-lg)", padding: "18px 20px", background: "#FAEEDA" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#633806", marginBottom: 4 }}>Graduation 🎓</div>
              <div style={{ fontSize: 13, color: "#854F0B", lineHeight: 1.7 }}>
                6 modules complete. 6 hackathon projects in your portfolio. Full-Stack + Agentic AI developer — ready to get hired or start freelancing.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40, background: "var(--bg-secondary)", border: "0.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
          <strong style={{ color: "var(--text)" }}>Weekends only.</strong> Doors open 15 mins before each session. All sessions are recorded and shared in the student WhatsApp group. Dates may shift slightly based on public holidays.
        </p>
      </div>
    </div>
  );
}
