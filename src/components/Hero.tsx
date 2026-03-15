import Image from "next/image";

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 md:px-8 relative overflow-hidden bg-mint-pale">
      <div className="absolute inset-0 bg-pattern-dots opacity-50" />
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <div className="max-w-[500px] mx-auto md:mx-0 text-center md:text-left">
          {/* Social proof */}
          <div className="animate-fade-in-down inline-flex items-center gap-2.5 mb-6">
            <div className="flex">
              <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm bg-mint -mr-2">👩</span>
              <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm bg-coral-light -mr-2">👨</span>
              <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm bg-mint-light -mr-2">👩‍🦰</span>
              <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm bg-[#F9D5A7]">🧔</span>
            </div>
            <span className="text-xs font-bold text-navy">
              Loved by <strong className="text-coral">2,000+ families</strong>
            </span>
          </div>

          <h1 className="animate-fade-in-up-1 text-4xl md:text-5xl lg:text-[3.4rem] font-black leading-[1.15] text-navy mb-5">
            Blink once, they&apos;re <span className="text-coral">bigger</span>. Blink twice — toddlerhood.
          </h1>

          <p className="animate-fade-in-up-2 text-lg text-text-light leading-relaxed mb-8">
            lil leaps helps you freeze time (sort of) with one tiny habit: a 5-second clip, once a week. One day you&apos;ll have a magical timelapse of their journey from squishy baby to big kid.
          </p>

          <div className="animate-fade-in-up-3 flex gap-3 flex-wrap justify-center md:justify-start" id="download">
            <a href="#" className="bg-coral text-white px-7 py-3.5 rounded-[14px] font-extrabold text-base inline-flex items-center gap-2 hover:bg-coral-dark hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(242,112,109,0.25)] hover:shadow-[0_8px_25px_rgba(242,112,109,0.25)]">
              <AppleIcon />
              Download for iOS
            </a>
            <a href="#how" className="bg-white text-navy border-2 border-mint px-6 py-3 rounded-[14px] font-bold text-base inline-flex items-center gap-2 hover:border-coral hover:-translate-y-0.5 transition-all">
              See How It Works ↓
            </a>
          </div>

          <p className="animate-fade-in-up-4 mt-3 text-xs text-text-light">
            ✨ Free to start. No credit card needed.
          </p>
        </div>

        {/* Phone mockup */}
        <div className="animate-fade-in-up-3 flex justify-center order-first md:order-last">
          <div className="animate-float-phone relative w-[260px] h-[530px] md:w-[280px] md:h-[572px] bg-navy rounded-[50px] p-3 shadow-[0_30px_80px_rgba(45,59,78,0.2),0_8px_24px_rgba(45,59,78,0.1)]">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-10" />
            {/* Screen */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-white">
              <Image
                src="/app-screenshot.jpg"
                alt="lil leaps app"
                fill
                className="object-cover object-top rounded-[38px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
