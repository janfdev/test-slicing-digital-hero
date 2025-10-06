import Globe from "../assets/icons/svg-globe.svg";
import ShapeOne from "../assets/icons/svg-shape-1.svg";
import ShapeTwo from "../assets/icons/svg-shape-2.svg";
import { Search } from "lucide-react";

const HeroNews = () => {
  return (
    <div>
      {/* Shape One */}
      <div className="flex items-center justify-between pb-15">
        <div>
          <img src={ShapeOne} className="rotate-y-180" alt="" />
        </div>
        {/* Text */}
        <div className="text-center flex flex-col gap-5 max-w-3xl mt-36">
          <h1 className="text-9xl  font-bold uppercase bg-gradient-to-b from-[#002082] from-0% via-[49%] via-[#2757E8] to-90% to-[#002BAE] bg-clip-text text-transparent">
            AI UPDATES
          </h1>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl">
              Curated AI News from all around the world
            </h2>
            <p className="text-[#737373] text-md ">
              Stay up-to-date with the latest breakthroughs, trends, and
              insights in artificial intelligence, organized for easy browsing
              and exploration
            </p>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-1 border-[#DCE0F0] rounded-md shadow-xl py-4 px-5">
            <Search className="size-4 text-[#737373]" />
            <input
              type="text"
              className="outline-none border-none text-[#737373]"
              placeholder="Search News..."
            />
          </div>
        </div>
        <div>
          <img src={ShapeOne} alt="" />
        </div>
      </div>

      {/* Shape Two */}
      <div className="flex items-center justify-between">
        <div>
          <img src={ShapeTwo} className="rotate-y-180" alt="" />
        </div>
        <div>
          <img src={Globe} alt="" />
        </div>
        <div>
          <img src={ShapeTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroNews;
