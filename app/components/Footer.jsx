"use client";
import Link from "next/link";
import { BookOpen, MessageCircle, GitBranch, Mail, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "0.5px solid var(--border)", marginTop: 80, background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "52px 20px 32px" }}>

        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={16} color="#fff" />
              </div>
              <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)", letterSpacing: "-0.02em" }}>
                WebCraft <span style={{ color: "var(--accent)" }}>Academy</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 18 }}>
              From zero to Full-Stack + AI Developer. Weekends only. Karachi, Pakistan.
            </p>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", background: "#25D366", color: "#fff", borderRadius: "var(--radius-md)", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "opacity 0.15s" }}
              onMouseOver={e => e.currentTarget.style.opacity = "0.88"}
              onMouseOut={e => e.currentTarget.style.opacity = "1"}
            >
              <MessageCircle size={15} />
              Join Student Group
            </a>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Course</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/outline",     label: "Full Curriculum" },
                { href: "/stack",       label: "Tech Stack" },
                { href: "/schedule",    label: "Schedule" },
                { href: "/instructors", label: "Meet the Team" },
              ].map((l, i) => (
                <Link key={i} href={l.href} style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseOut={e => e.currentTarget.style.color = "var(--text-muted)"}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="mailto:info@webcraftacademy.pk" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--text-muted)"}>
                <Mail size={14} /> info@webcraftacademy.pk
              </a>
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseOver={e => e.currentTarget.style.color = "#25D366"}
                onMouseOut={e => e.currentTarget.style.color = "var(--text-muted)"}>
                <MessageCircle size={14} /> WhatsApp us
              </a>
              <a href="https://github.com/webcraftacademy" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--text)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--text-muted)"}>
                <GitBranch size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* Location & timing */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Details</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Location", value: "Karachi, Pakistan" },
                { label: "Schedule", value: "Sat & Sun only" },
                { label: "Session length", value: "2–3 hours" },
                { label: "Starts", value: "April 5, 2026" },
                { label: "Level", value: "Complete beginners" },
              ].map((d, i) => (
                <div key={i} style={{ display: "flex", gap: 8, fontSize: 13 }}>
                  <span style={{ color: "var(--text-faint)", minWidth: 96, flexShrink: 0 }}>{d.label}</span>
                  <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--text-faint)" }}>
            © 2026 WebCraft Academy · Karachi, Pakistan
          </p>
          {/* Sir Ghous credit */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", background: "#fffbeb", border: "0.5px solid #fcd34d", borderRadius: 99 }}>
            <Star size={11} color="#f59e0b" fill="#f59e0b" />
            <span style={{ fontSize: 11, color: "#92400e", fontWeight: 500 }}>
              Core curriculum by Sir Ghous Ahmed · SMIT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
