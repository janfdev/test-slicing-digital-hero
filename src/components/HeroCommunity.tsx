import HeroPattern from "./HeroPattern";

export default function HeroCommunity() {
  return (
    <section className="relative overflow-hidden">
      <HeroPattern />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          INNOVATION
        </h1>
        <p className="mt-4 text-lg text-slate-600">OUR COMMUNITY</p>
      </div>
    </section>
  );
}
