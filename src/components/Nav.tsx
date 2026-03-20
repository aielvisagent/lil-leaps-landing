"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-5 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(45,59,78,0.08)]"
          : ""
      }`}
    >
      <a href="/">
        <Image src="/logo-wide.png" alt="lil leaps" width={120} height={36} className="h-9 w-auto" />
      </a>
      <a
        href="https://apps.apple.com/us/app/lil-leaps/id6746146083"
        className="bg-coral text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-coral-dark hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(242,112,109,0.25)] hover:shadow-[0_6px_20px_rgba(242,112,109,0.25)]"
      >
        Try Free
      </a>
    </nav>
  );
}
