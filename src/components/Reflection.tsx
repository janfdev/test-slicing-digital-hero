export default function ReflectionText() {
  return (
    <section className="min-h-[180px] bg-white flex items-start justify-center pt-8">
      <div className="relative">
        {/* TEKS UTAMA */}
        <h1 className="leading-none text-[42px] md:text-[64px] font-bold tracking-[0.22em] text-blue-800">
          MOMENTS WE SHARE
        </h1>

        {/* TEKS REFLEKSI */}
        <h1
          className="pointer-events-none absolute w-full leading-none text-[42px] md:text-[64px] font-bold tracking-[0.22em] text-blue-800 opacity-30"
          style={{
            top: "calc(180%)",
            transform: "scaleY(-1)",
            transformOrigin: "top",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))"
          }}
        >
          MOMENTS WE SHARE
        </h1>
      </div>
    </section>
  );
}
