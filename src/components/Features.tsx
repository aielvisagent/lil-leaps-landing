const features = [
  { emoji: "☁️", title: "Saved to your iCloud", description: "Your memories live on your device and your cloud. We never hold them hostage." },
  { emoji: "⏱️", title: "5 seconds. That's it.", description: "No pressure to film a masterpiece. The constraint is what makes it beautiful." },
  { emoji: "👶", title: "Multiple kiddos", description: "Track each kid separately. Their own timeline, their own timelapse." },
  { emoji: "🎁", title: "Share with family", description: "Grandparents, partners, anyone. Share the timelapse without sharing an account." },
  { emoji: "🧠", title: "Smart reminders", description: "Pick your day and time. Gentle nudges — never annoying. Because mom brain is real." },
  { emoji: "🔒", title: "Private by default", description: "No social feeds. No strangers. Just your family's moments, kept safe." },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots-white" />
      <p className="reveal font-quicksand text-sm font-bold text-mint text-center uppercase tracking-widest mb-2 relative z-10">
        Mom-tested. Mom-approved.
      </p>
      <h2 className="reveal font-nunito text-3xl md:text-4xl font-black text-center text-white mb-3 relative z-10">
        Built for real life
      </h2>
      <p className="reveal text-center text-white/60 text-base max-w-[480px] mx-auto mb-16 leading-relaxed relative z-10">
        Not another app that collects dust. This one earns its spot on your home screen.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto relative z-10">
        {features.map((f) => (
          <div
            key={f.title}
            className="reveal bg-white/[0.06] border-2 border-white/[0.08] rounded-[20px] p-8 hover:bg-white/10 hover:-translate-y-1 hover:border-coral transition-all"
          >
            <div className="w-[52px] h-[52px] bg-coral/15 rounded-[14px] flex items-center justify-center text-2xl mb-4">
              {f.emoji}
            </div>
            <h3 className="text-lg font-extrabold mb-2">{f.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
