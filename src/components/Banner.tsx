import DigitalHero from "../assets/images/digitalHero.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Item = {
  image: string;
  label: string;
  title: string;
  view: string;
  read: string;
};

const DATA: Item[] = [
  {
    image: DigitalHero,
    label: "News & Update",
    title: "AI-Powered Healthcare: Revolutionizing Patient Care in 2025",
    view: "1.3k",
    read: "8 min"
  },
  {
    image: DigitalHero,
    label: "News & Update",
    title: "AI in Finance: Risk Modeling & Automation in 2025",
    view: "1.1k",
    read: "7 min"
  },
  {
    image: DigitalHero,
    label: "News & Update",
    title: "The Rise of AGI: Ethical Implications and Future Growth",
    view: "2.1k",
    read: "12 min"
  }
];

const AUTOPLAY_MS = 4000;

export default function BannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);

  const modDist = (i: number, c: number, total: number) => {
    const d = Math.abs(i - c);
    return Math.min(d, total - d);
  };

  // Scale Card
  const cardScaleClass = (i: number) => {
    const d = modDist(i, current, DATA.length);
    if (d === 0) return "scale-105 z-30";
    if (d === 1) return "scale-90 z-20";
    return "scale-90 z-10";
  };

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    timerRef.current = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_MS);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [api]);

  return (
    <div className="mx-auto w-full py-8">
      <h2 className="mb-5 text-center text-3xl md:text-4xl font-semibold">
        Discover Latest News in AI
      </h2>

      <Carousel
        setApi={setApi}
        className="relative w-full px-20"
        opts={{
          loop: true,
          align: "center",
          containScroll: "keepSnaps",
          skipSnaps: false
        }}
      >
        <CarouselContent className="m-10">
          {DATA.map((item, i) => (
            <CarouselItem
              key={i}
              className={cn(
                "m-0 px-4 shrink-0",
                "basis-[82%] sm:basis-[70%] md:basis-[60%] xl:basis-[56%]"
              )}
            >
              <div
                className={cn(
                  "transition-transform duration-300 ease-out transform-gpu origin-center"
                )}
              >
                <Card
                  className={cn(
                    "relative h-[360px] md:h-[420px] overflow-hidden rounded-3xl border-0",
                    cardScaleClass(i)
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />

                  {/* Label */}
                  <div className="absolute left-4 top-5 z-10">
                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                      <div className="flex items-center gap-3 rounded-2xl px-4 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                        <span className="relative inline-flex h-3 w-3">
                          <span className="absolute inset-0 rounded-full bg-sky-400" />
                          <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md" />
                          <span className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                        </span>
                        <span className="text-white/90 text-sm font-medium tracking-wide">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient footer untuk keterbacaan */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <CardContent className="absolute inset-x-6 top-40 p-0">
                    <h3 className="max-w-sm text-2xl md:text-3xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2">
                      <p className="flex items-center gap-2 text-sm text-white/90">
                        <Eye className="h-4 w-4" aria-hidden="true" />
                        {item.view} seen
                      </p>
                      <span className="text-white/60">•</span>
                      <p className="text-sm text-sky-300">{item.read} read</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
      </Carousel>
    </div>
  );
}
