import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/45 py-12 px-6 text-center">
      <div className="mb-4">
        <Image
          src="/logo-wide.jpg"
          alt="lil leaps"
          width={100}
          height={28}
          className="h-7 w-auto mx-auto brightness-0 invert sepia hue-rotate-[320deg] saturate-[3] opacity-70"
        />
      </div>
      <div className="flex justify-center gap-8 mb-6">
        {["Privacy Policy", "Terms of Use", "Support", "Instagram"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-white/35 text-sm font-semibold hover:text-coral transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-xs">&copy; 2026 lil leaps. Made with ❤️ for tiny humans.</p>
    </footer>
  );
}
