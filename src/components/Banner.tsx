import { Eye } from "lucide-react";
import DigitalHero from "../assets/images/digitalHero.png";

const data = [
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
    title: "AI-Powered Healthcare: Revolutionizing Patient Care in 2025",
    view: "1.3k",
    read: "8 min"
  }
];

const Discover = () => {
  return (
    <div className="">
      <h2>Discover Latest News in AI</h2>
      <div
        className="flex flex-col gap-3
      "
      >
        {data.map((data) => (
          <div className="relative">
            <div className="absolute top-3 left-3">
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                <div className="flex items-center gap-3 rounded-2xl px-4 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                  <span className="relative inline-flex h-3 w-3">
                    <span className="absolute inset-0 rounded-full bg-sky-400"></span>
                    <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md"></span>
                    <span className="absolute inset-0 rounded-full ring-2 ring-white/60"></span>
                  </span>
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    {data.label}
                  </span>
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent"></span>
              </div>
            </div>
            <img src={data.image} alt="" />
            <div className="absolute flex flex-col gap-5 top-25 left-5">
              <h3 className="text-white text-[28px] max-w-sm">{data.title}</h3>
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 text-white">
                  <Eye className="text-white" />
                  {data.view} seen
                </p>
                <span className="text-white">•</span>
                <p className="text-blue-500">{data.read} read</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
