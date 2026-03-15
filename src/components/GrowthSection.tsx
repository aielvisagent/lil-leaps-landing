import Image from "next/image";

export default function GrowthSection() {
  return (
    <section className="py-20 px-6 bg-mint-pale text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mint via-coral to-mint" />
      <div className="reveal">
        <p className="font-nunito text-xl md:text-2xl font-extrabold italic max-w-[600px] mx-auto leading-snug text-navy">
          &ldquo;You&apos;ll never get these days back — but you can keep a{" "}
          <span className="text-coral">little piece</span> of each one.&rdquo;
        </p>
      </div>
      <div className="reveal max-w-[600px] mx-auto mt-8 rounded-[20px] overflow-hidden">
        <Image
          src="/illustration.jpg"
          alt="Watch them grow — from baby to big kid"
          width={600}
          height={400}
          className="w-full"
        />
      </div>
    </section>
  );
}
