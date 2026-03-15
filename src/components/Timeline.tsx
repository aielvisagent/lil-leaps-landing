const milestones = [
  { emoji: "🍼", age: "Newborn", week: "Week 1", size: "w-[42px] h-[42px] md:w-[52px] md:h-[52px]", bg: "bg-mint-light" },
  { emoji: "🧸", age: "6 mo", week: "Week 26", size: "w-[46px] h-[46px] md:w-[58px] md:h-[58px]", bg: "bg-mint" },
  { emoji: "👣", age: "1 year", week: "Week 52", size: "w-[50px] h-[50px] md:w-[64px] md:h-[64px]", bg: "bg-coral-light" },
  { emoji: "🎈", age: "3 years", week: "Week 156", size: "w-[56px] h-[56px] md:w-[72px] md:h-[72px]", bg: "bg-coral" },
  { emoji: "🎒", age: "5 years", week: "Week 260", size: "w-[62px] h-[62px] md:w-[80px] md:h-[80px]", bg: "bg-navy" },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 bg-mint-pale text-center">
      <p className="reveal font-quicksand text-sm font-bold text-coral text-center uppercase tracking-widest mb-2">
        The long game
      </p>
      <h2 className="reveal font-nunito text-3xl md:text-4xl font-black text-center text-navy mb-3">
        Watch them grow, week by week
      </h2>
      <p className="reveal text-center text-text-light text-base max-w-[480px] mx-auto mb-8 leading-relaxed">
        52 clips a year. 260 clips by kindergarten. One unforgettable timelapse.
      </p>
      <div className="reveal flex justify-center items-end gap-1 md:gap-2 max-w-[680px] mx-auto py-8">
        {milestones.map((m) => (
          <div key={m.week} className="flex flex-col items-center gap-2 flex-1">
            <div
              className={`${m.size} ${m.bg} rounded-full flex items-center justify-center text-lg md:text-xl border-2 md:border-3 border-white shadow-[0_4px_12px_rgba(45,59,78,0.08)] hover:scale-115 transition-all`}
            >
              {m.emoji}
            </div>
            <p className="font-extrabold text-xs md:text-sm text-navy">{m.age}</p>
            <p className="text-[10px] md:text-xs text-text-light">{m.week}</p>
          </div>
        ))}
      </div>
      <div className="reveal max-w-[500px] mx-auto h-1.5 rounded-sm bg-gradient-to-r from-mint via-coral to-navy" />
      <p className="reveal mt-6 font-bold text-text-light text-sm">
        Every tiny change, captured — from <strong className="text-coral">squishy baby</strong> to{" "}
        <strong className="text-coral">big kid</strong> ✦
      </p>
    </section>
  );
}
