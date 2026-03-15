import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/45 py-12 px-6 text-center">
      <div className="mb-4">
        <Image
          src="/logo-wide.png"
          alt="lil leaps"
          width={100}
          height={28}
          className="h-7 w-auto mx-auto brightness-0 invert sepia hue-rotate-[320deg] saturate-[3] opacity-70"
        />
      </div>
      <div className="flex justify-center gap-8 mb-6">
        <a href="https://foregoing-bike-50c.notion.site/lil-leaps-Privacy-Policy-2130b19dee8c80a5bbd7fd4faa30f760?pvs=74" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm font-semibold hover:text-coral transition-colors">Privacy Policy</a>
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm font-semibold hover:text-coral transition-colors">Terms of Use</a>
        <a href="/support" className="text-white/35 text-sm font-semibold hover:text-coral transition-colors">Support</a>
        <a href="https://instagram.com/lilleapsapp" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm font-semibold hover:text-coral transition-colors">Instagram</a>
      </div>
      <p className="text-xs">&copy; 2026 lil leaps. Made with ❤️ for tiny humans.</p>
    </footer>
  );
}
