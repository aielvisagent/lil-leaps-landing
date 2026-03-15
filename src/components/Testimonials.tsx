const testimonials = [
  {
    text: "I'm on week 36 with my daughter and just watched the timelapse so far. I'm sobbing. She's changed so much and I almost didn't notice until now.",
    name: "Sarah M.",
    detail: "Mom of 1 · using since newborn",
    avatar: "👩",
  },
  {
    text: "The weekly reminder is clutch. I'd been meaning to do something like this for years but never followed through. 22 weeks in and haven't missed one.",
    name: "Jessica R.",
    detail: "Mom of 2 · started at 8 months",
    avatar: "👩‍🦰",
  },
  {
    text: "Showed my wife the first timelapse on our son's birthday. Best gift I've ever given her and it cost me 5 seconds a week. Legendary dad move.",
    name: "Mike T.",
    detail: "Dad of 1 · 52-week streak 🔥",
    avatar: "🧔",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <p className="reveal font-quicksand text-sm font-bold text-coral text-center uppercase tracking-widest mb-2">
        What parents are saying
      </p>
      <h2 className="reveal font-nunito text-3xl md:text-4xl font-black text-center text-navy mb-3">
        Moms are already crying 🥲
      </h2>
      <p className="reveal text-center text-text-light text-base max-w-[480px] mx-auto mb-16 leading-relaxed">
        Don&apos;t take our word for it — here&apos;s what real families think.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="reveal bg-mint-pale rounded-[20px] p-8 border-2 border-transparent hover:border-mint hover:-translate-y-1 transition-all"
          >
            <div className="text-coral text-sm tracking-widest mb-3">★★★★★</div>
            <p className="text-sm text-text-light leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-mint flex items-center justify-center text-xl border-2 border-white">
                {t.avatar}
              </div>
              <div>
                <div className="font-bold text-sm text-navy">{t.name}</div>
                <div className="text-xs text-text-light">{t.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
