"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/",            label: "Home" },
  { href: "/outline",     label: "Curriculum" },
  { href: "/stack",       label: "Tech Stack" },
  { href: "/schedule",    label: "Schedule" },
  { href: "/instructors", label: "Team" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [open,     setOpen]     = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dark,     setDark]     = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("wca-theme");
    if (saved === "dark") { document.documentElement.setAttribute("data-theme","dark"); setDark(true); }
    else if (saved === "light") { document.documentElement.setAttribute("data-theme","light"); setDark(false); }
    else {
      const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(sys);
    }
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("wca-theme", next ? "dark" : "light");
  };

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 0 rgba(15,23,42,0.04)",
      }}
      className="dark-nav">
        <style>{`
          [data-theme="dark"] .dark-nav {
            background: rgba(10,15,30,0.92) !important;
          }
        `}</style>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: "var(--radius-md)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(56,189,248,0.3)" }}>
              <BookOpen size={16} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)", letterSpacing: "-0.025em" }}>
              WebCraft <span style={{ color: "var(--accent)" }}>Academy</span>
            </span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
              {links.map(l => {
                const active = pathname === l.href;
                return (
                  <Link key={l.href} href={l.href} style={{
                    padding: "6px 14px", borderRadius: "var(--radius-md)",
                    fontSize: 13.5, fontWeight: active ? 600 : 500, textDecoration: "none",
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    background: active ? "var(--accent-light)" : "transparent",
                    letterSpacing: "-0.01em",
                    transition: "background 0.15s, color 0.15s",
                  }}>
                    {l.label}
                  </Link>
                );
              })}

              {/* Divider */}
              <div style={{ width: 1, height: 18, background: "var(--border-strong)", margin: "0 8px" }} />

              {/* Theme toggle */}
              <button onClick={toggleTheme} title={dark ? "Light mode" : "Dark mode"} style={{
                width: 34, height: 34, borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)", background: "var(--bg-secondary)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)", transition: "all 0.15s",
              }}
              onMouseOver={e => { e.currentTarget.style.background = "var(--bg-tertiary)"; e.currentTarget.style.color = "var(--text)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "var(--bg-secondary)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          )}

          {/* Mobile controls */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={toggleTheme} style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "var(--bg-secondary)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button onClick={() => setOpen(o => !o)} style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "var(--bg-secondary)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text)" }}>
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobile && open && (
        <>
          <div style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 49, background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "12px 20px 20px", boxShadow: "var(--shadow-lg)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {links.map(l => {
                const active = pathname === l.href;
                return (
                  <Link key={l.href} href={l.href} style={{
                    padding: "12px 16px", borderRadius: "var(--radius-lg)",
                    fontSize: 15, fontWeight: active ? 700 : 500, textDecoration: "none",
                    color: active ? "var(--accent)" : "var(--text)",
                    background: active ? "var(--accent-light)" : "transparent",
                    letterSpacing: "-0.01em",
                  }}>
                    {l.label}
                  </Link>
                );
              })}
            </div>
            <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--accent-light)", borderRadius: "var(--radius-lg)", textAlign: "center", border: "1px solid rgba(56,189,248,0.15)" }}>
              <span style={{ fontSize: 13, color: "var(--accent-dark)", fontWeight: 600 }}>🗓 First session: Saturday, April 5th</span>
            </div>
          </div>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 48, background: "rgba(15,23,42,0.3)", backdropFilter: "blur(4px)" }} />
        </>
      )}
    </>
  );
}
