const steps = [
  {
    icon: "📱",
    title: "Record 5 seconds",
    description: "We help you frame that cute little face perfectly. Just point, tap, done.",
  },
  {
    icon: "🔔",
    title: "We remind you",
    description: "Pick your day and time. We'll nudge you gently so you never miss a week.",
  },
  {
    icon: "🎬",
    title: "Watch the magic",
    description: "Each clip condenses to one second and stitches into a timelapse you'll ugly-cry watching at 2 AM.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" id="how">
      <p className="reveal font-quicksand text-sm font-bold text-coral text-center uppercase tracking-widest mb-2">
        How it works
      </p>
      <h2 className="reveal font-nunito text-3xl md:text-4xl font-black text-center text-navy mb-3">
        One clip a week.<br />A lifetime of memories.
      </h2>
      <p className="reveal text-center text-text-light text-base max-w-[480px] mx-auto mb-16 leading-relaxed">
        No editing. No stress. Just hit record and let us handle the rest.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[900px] mx-auto">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="reveal text-center p-8 bg-mint-pale rounded-3xl relative hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(45,59,78,0.08)] transition-all"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-[0_3px_10px_rgba(242,112,109,0.25)]">
              {i + 1}
            </div>
            <div className="w-[72px] h-[72px] bg-mint rounded-[22px] flex items-center justify-center mx-auto mt-2 mb-5 text-3xl">
              {step.icon}
            </div>
            <h3 className="text-lg font-extrabold text-navy mb-2">{step.title}</h3>
            <p className="text-sm text-text-light leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
