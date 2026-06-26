"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay so the new page's DOM is fully painted before we observe
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".fade-up");

      // Reset all — important for when user navigates back to same page
      els.forEach((el) => el.classList.remove("visible"));

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el) => io.observe(el));

      return () => io.disconnect();
    }, 80); // 80ms is enough for Next.js to paint the new page

    return () => clearTimeout(timer);
  }, [pathname]); // re-runs on every page change

  return null;
}
