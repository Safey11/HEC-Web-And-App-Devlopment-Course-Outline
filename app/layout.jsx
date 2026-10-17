import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";

export const metadata = {
  title: "WebCraft Academy — Full-Stack + AI Developer Course",
  description: "From zero to Full-Stack + AI Developer. Based on Sir Ghous Ahmed's SMIT curriculum. Weekends only, Karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <ScrollObserver />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
