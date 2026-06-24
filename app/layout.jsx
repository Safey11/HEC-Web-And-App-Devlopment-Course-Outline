import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "WebCraft Academy",
  description: "From zero to Full-Stack + AI Developer — one weekend at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer style={{ borderTop: "0.5px solid var(--border)", marginTop: 80, padding: "32px 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--text-faint)" }}>
            © 2026 WebCraft Academy · Karachi, Pakistan · Weekends Only
          </p>
          <p style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4 }}>
            Core curriculum based on Sir Ghous Ahmed's SMIT outline
          </p>
        </footer>
      </body>
    </html>
  );
}
