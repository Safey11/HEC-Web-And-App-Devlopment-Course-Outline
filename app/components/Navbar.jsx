"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/",            label: "Home" },
  { href: "/outline",     label: "Curriculum" },
  { href: "/stack",       label: "Tech Stack" },
  { href: "/schedule",    label: "Schedule" },
  { href: "/instructors", label: "Team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "0.5px solid var(--border)",
      }}>
        <div style={{
          maxWidth: 1080, margin: "0 auto", padding: "0 20px",
          height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={17} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)", letterSpacing: "-0.02em" }}>
              WebCraft <span style={{ color: "var(--accent)" }}>Academy</span>
            </span>
          </Link>

          {/* Desktop links — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {links.map(l => (
                <Link key={l.href} href={l.href} style={{
                  padding: "6px 13px", borderRadius: "var(--radius-sm)",
                  fontSize: 13, fontWeight: 500, textDecoration: "none",
                  color: pathname === l.href ? "var(--accent)" : "var(--text-muted)",
                  background: pathname === l.href ? "var(--accent-light)" : "transparent",
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* Hamburger — shown only on mobile */}
          {isMobile && (
            <button
              onClick={() => setOpen(o => !o)}
              style={{ border: "none", background: "none", cursor: "pointer", padding: 6, color: "var(--text)", display: "flex", alignItems: "center" }}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && open && (
        <>
          <div style={{
            display: "flex", flexDirection: "column", gap: 4,
            position: "fixed", top: 60, left: 0, right: 0,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            padding: "16px 20px 24px",
            borderBottom: "0.5px solid var(--border)",
            zIndex: 49,
          }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                padding: "14px 16px", borderRadius: "var(--radius-md)",
                fontSize: 16, fontWeight: 600, textDecoration: "none",
                color: pathname === l.href ? "var(--accent)" : "var(--text)",
                background: pathname === l.href ? "var(--accent-light)" : "transparent",
                borderBottom: "0.5px solid var(--border)",
              }}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 12, padding: "12px 16px", background: "var(--accent-light)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
              <span style={{ fontSize: 13, color: "var(--accent-dark)", fontWeight: 500 }}>🗓 First session: Saturday, April 5th</span>
            </div>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 48, background: "rgba(0,0,0,0.25)", backdropFilter: "blur(2px)" }}
          />
        </>
      )}
    </>
  );
}
