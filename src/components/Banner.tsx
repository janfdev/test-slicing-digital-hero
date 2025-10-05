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
import { useEffect, useState, useRef } from "react";

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
    title: "AI-Powered Healthcare: Revolutionizing Patient Care in 2025",
    view: "1.3k",
    read: "8 min"
  },
  {
    image: DigitalHero,
    label: "News & Update",
    title: "The Rise of AGI: Ethical Implications and Future Growth",
    view: "2.1k",
    read: "12 min"
  }
];

const AUTOPLAY_INTERVAL = 4000;

export default function Banner() {
  const [api, setApi] = useState<CarouselApi>();
  const currentRef = useRef(0);

  // Sinkronkan posisi saat ini
  useEffect(() => {
    if (!api) return;
    const syncCurrent = () => {
      currentRef.current = api.selectedScrollSnap();
    };

    syncCurrent();
    api.on("select", syncCurrent);
    api.on("scroll", syncCurrent);

    return () => {
      api.off("select", syncCurrent);
      api.off("scroll", syncCurrent);
    };
  }, [api]);

  // Autoplay
  useEffect(() => {
    if (!api) return;
    const autoplay = () => {
      if (api.selectedScrollSnap() !== currentRef.current) return;
      api.scrollNext();
    };
    const timer = setInterval(autoplay, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <div className="mx-auto w-full py-8">
      <h2 className="mb-5 text-center text-4xl font-medium ">
        Discover Latest News in AI
      </h2>

      <Carousel
        setApi={setApi}
        className="relative w-full px-20"
        opts={{
          loop: true,
          align: "center",
          skipSnaps: false,
          containScroll: "keepSnaps"
        }}
      >
        <CarouselContent className="-ml-6 pr-6">
          {DATA.map((item, i) => (
            <CarouselItem
              key={i}
              className="pl-6 shrink-0 basis-[82%] sm:basis-[70%] md:basis-[60%] xl:basis-[56%] cursor-grabbing"
            >
              <Card
                className={cn(
                  "relative h-[360px] md:h-[400px] overflow-hidden rounded-3xl border-0"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />

                <div className="absolute top-10 left-4 z-10">
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
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent" />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <CardContent className="absolute inset-x-6 bottom-6 p-0">
                  <h3 className="text-white text-3xl font-semibold max-w-sm">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <p className="flex items-center gap-2 text-white/90 text-sm">
                      <Eye className="h-4 w-4" />
                      {item.view} seen
                    </p>
                    <span className="text-white/60">•</span>
                    <p className="text-sky-300 text-sm">{item.read} read</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
      </Carousel>
    </div>
  );
}
