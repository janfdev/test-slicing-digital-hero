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
import { useEffect, useMemo, useRef, useState } from "react";

type CarouselItemData = {
  id: string;
  image: string;
  title: string;
  label?: string;
  view?: string;
  read?: string;
};

interface BannerCarouselProps {
  items?: CarouselItemData[]; // optional → kalau tidak ada, pakai default
  autoplayMs?: number;
}

const DEFAULT_ITEMS: CarouselItemData[] = [
  {
    id: "1",
    image: DigitalHero,
    label: "News & Update",
    title: "AI-Powered Healthcare: Revolutionizing Patient Care in 2025",
    view: "1.3k",
    read: "8 min"
  },
  {
    id: "2",
    image: DigitalHero,
    label: "News & Update",
    title: "AI in Finance: Risk Modeling & Automation in 2025",
    view: "1.1k",
    read: "7 min"
  },
  {
    id: "3",
    image: DigitalHero,
    label: "News & Update",
    title: "The Rise of AGI: Ethical Implications and Future Growth",
    view: "2.1k",
    read: "12 min"
  }
];

export default function BannerCarousel({
  items,
  autoplayMs = 4000
}: BannerCarouselProps) {
  // gunakan satu sumber data untuk semuanya
  const data = (items?.length ? items : DEFAULT_ITEMS) as CarouselItemData[];

  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // timer pakai self-scheduling setTimeout (hindari double interval)
  const timerRef = useRef<number | null>(null);
  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Jarak modular (loop-safe)
  const getModularDistance = (
    itemIndex: number,
    centerIndex: number,
    total: number
  ): number => {
    if (total <= 1) return 0;
    const direct = Math.abs(itemIndex - centerIndex);
    const wrap = total - direct;
    return Math.min(direct, wrap);
  };

  // Skala + opacity berdasarkan jarak dari pusat
  const getItemStyles = (itemIndex: number): string => {
    const distance = getModularDistance(itemIndex, currentIndex, data.length);
    if (distance === 0) return "scale-100 opacity-100 z-30";
    if (distance === 1) return "scale-90 opacity-80 z-20";
    return "scale-80 opacity-60 z-10";
  };

  // Sinkron index dari Embla + autoplay stabil
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
      if (!isHovering && !prefersReduced) {
        clearTimer();
        timerRef.current = window.setTimeout(
          () => api.scrollNext(),
          autoplayMs
        );
      }
    };

    onSelect(); // initial
    api.on("select", onSelect);
    api.on("pointerDown", clearTimer); // pause saat drag

    return () => {
      api.off("select", onSelect);
      api.off("pointerDown", clearTimer);
      clearTimer();
    };
  }, [api, autoplayMs, isHovering, prefersReduced]);

  // Pause saat tab tidak aktif; resume saat aktif
  useEffect(() => {
    if (!api || prefersReduced) return;
    const onVisibility = () => {
      if (document.hidden) {
        clearTimer();
      } else if (!isHovering) {
        clearTimer();
        timerRef.current = window.setTimeout(
          () => api.scrollNext(),
          autoplayMs
        );
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [api, autoplayMs, isHovering, prefersReduced]);

  return (
    <div
      className="mx-auto w-full py-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
    >
      <h2 className="mb-5 text-center text-4xl font-medium">
        Discover Latest News in AI
      </h2>

      <Carousel
        setApi={setApi}
        className="relative w-full px-4 sm:px-10 lg:px-20"
        opts={{
          loop: true,
          align: "center",
          skipSnaps: false,
          containScroll: "keepSnaps"
        }}
        aria-roledescription="carousel"
        aria-label="News carousel"
      >
        <CarouselContent
          className="-ml-4 pr-4 sm:-ml-6 sm:pr-6"
          role="list"
          aria-label="News carousel slides"
        >
          {data.map((item, index) => (
            <CarouselItem
              key={item.id}
              role="listitem"
              aria-label={`Slide ${index + 1} of ${data.length}: ${item.title}`}
              className={cn(
                "pl-4 sm:pl-6 shrink-0 basis-[82%] sm:basis-[70%] md:basis-[60%] xl:basis-[56%]",
                "cursor-grab active:cursor-grabbing",
                "transition-all duration-500 ease-out will-change-transform transform-gpu origin-center",
                getItemStyles(index)
              )}
            >
              <Card className="relative h-[360px] md:h-[420px] overflow-hidden rounded-3xl border-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                {item.label && (
                  <div className="absolute left-4 top-5 z-10">
                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                      <div className="flex items-center gap-3 rounded-2xl px-4 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                        <span
                          className="relative inline-flex h-3 w-3"
                          aria-hidden="true"
                        >
                          <span className="absolute inset-0 rounded-full bg-sky-400" />
                          <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md" />
                          <span className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                        </span>
                        <span className="text-white/90 text-sm font-medium tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent" />
                    </div>
                  </div>
                )}

                {/* Gradient footer */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <CardContent className="absolute inset-x-6 bottom-6 p-0">
                  <h3 className="max-w-sm text-2xl md:text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {(item.view || item.read) && (
                    <div className="mt-3 flex items-center gap-2">
                      {item.view && (
                        <p className="flex items-center gap-2 text-sm text-white/90">
                          <Eye className="h-4 w-4" aria-hidden="true" />
                          <span>{item.view} seen</span>
                        </p>
                      )}
                      {item.view && item.read && (
                        <span className="text-white/60" aria-hidden="true">
                          •
                        </span>
                      )}
                      {item.read && (
                        <p className="text-sm text-sky-300">{item.read} read</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Previous slide"
        />
        <CarouselNext
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Next slide"
        />
      </Carousel>
    </div>
  );
}
