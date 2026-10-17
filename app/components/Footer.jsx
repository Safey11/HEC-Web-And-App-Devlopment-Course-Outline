"use client";
import Link from "next/link";
import { BookOpen, MessageCircle, GitBranch, Mail, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-secondary)", marginTop: 0 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,200px),1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(56,189,248,0.25)" }}>
                <BookOpen size={15} color="#fff" />
              </div>
              <span style={{ fontWeight: 800, fontSize: 14, color: "var(--text)", letterSpacing: "-0.02em" }}>
                WebCraft <span style={{ color: "var(--accent)" }}>Academy</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 18 }}>
              From zero to Full-Stack + AI Developer. Weekends only. Karachi, Pakistan.
            </p>
            <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "#25D366", color: "#fff", borderRadius: "var(--radius-md)", fontSize: 13, fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(37,211,102,0.3)" }}
              onMouseOver={e => e.currentTarget.style.opacity="0.88"}
              onMouseOut={e => e.currentTarget.style.opacity="1"}>
              <MessageCircle size={14} /> Join Student Group
            </a>
          </div>

          {/* Course links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Course</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[{href:"/outline",label:"Full Curriculum"},{href:"/stack",label:"Tech Stack"},{href:"/schedule",label:"Schedule"},{href:"/instructors",label:"Meet the Team"}].map((l,i) => (
                <Link key={i} href={l.href} style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, letterSpacing: "-0.005em", transition: "color 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.color="var(--accent)"}
                  onMouseOut={e => e.currentTarget.style.color="var(--text-muted)"}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <Mail size={14}/>, href: "mailto:info@webcraftacademy.pk", label: "info@webcraftacademy.pk", hover: "var(--accent)" },
                { icon: <MessageCircle size={14}/>, href: "https://wa.me/923000000000", label: "WhatsApp us", hover: "#25D366" },
                { icon: <GitBranch size={14}/>, href: "https://github.com/webcraftacademy", label: "GitHub", hover: "var(--text)" },
              ].map((c,i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.color=c.hover}
                  onMouseOut={e => e.currentTarget.style.color="var(--text-muted)"}>
                  {c.icon} {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Details</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Location",       value: "Karachi, Pakistan" },
                { label: "Schedule",       value: "Sat & Sun only" },
                { label: "Session length", value: "2–3 hours" },
                { label: "Starts",         value: "April 5, 2026" },
                { label: "Level",          value: "Complete beginners" },
              ].map((d,i) => (
                <div key={i} style={{ display: "flex", gap: 8, fontSize: 13 }}>
                  <span style={{ color: "var(--text-faint)", minWidth: 96, flexShrink: 0, fontWeight: 500 }}>{d.label}</span>
                  <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--text-faint)", fontWeight: 500 }}>© 2026 WebCraft Academy · Karachi, Pakistan</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", background: "var(--credit-bg)", border: `1px solid var(--credit-border)`, borderRadius: 99 }}>
            <Star size={11} color="#f59e0b" fill="#f59e0b" />
            <span style={{ fontSize: 11, color: "var(--credit-text)", fontWeight: 600 }}>Core curriculum by Sir Ghous Ahmed · SMIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
