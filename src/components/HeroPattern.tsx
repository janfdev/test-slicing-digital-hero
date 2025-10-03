/**
 * Background pola garis (vertical + diagonal) seperti contoh.
 * - Tanpa dependency tambahan, hanya Tailwind + inline CSS.
 * - Warna garis pakai RGBA tipis agar elegan.
 * - Diletakkan sebagai elemen absolut di belakang konten hero.
 */
export default function HeroPattern({
  className = ""
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        // Warna dasar
        backgroundColor: "#ffffff",
        // 3 layer: vertical lines, diagonal 60°, diagonal 120°
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(2, 6, 23, 0.08) 0 1px,      /* 1px garis */
            transparent 1px 220px            /* jarak antar garis */
          ),
          repeating-linear-gradient(
            60deg,
            rgba(2, 6, 23, 0.06) 0 1px,
            transparent 1px 180px
          ),
          repeating-linear-gradient(
            120deg,
            rgba(2, 6, 23, 0.04) 0 1px,
            transparent 1px 180px
          )
        `,
        // (opsional) fade lembut ke tepi agar tidak “keras”
        WebkitMaskImage:
          "radial-gradient(120% 70% at 50% 40%, #000 60%, transparent 100%)",
        maskImage:
          "radial-gradient(120% 70% at 50% 40%, #000 60%, transparent 100%)"
      }}
    />
  );
}
