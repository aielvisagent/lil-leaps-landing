export default function StatsBanner() {
  const stats = [
    { number: "2,000+", label: "Families" },
    { number: "50,000+", label: "Clips Recorded" },
    { number: "5 sec", label: "Per Week" },
  ];

  return (
    <div className="bg-mint py-5 px-6">
      <div className="max-w-[800px] mx-auto flex justify-center gap-8 md:gap-12 flex-wrap text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-navy">{stat.number}</span>
            <span className="text-xs font-semibold text-navy-light uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
