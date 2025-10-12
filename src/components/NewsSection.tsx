import FilterIcon from "../assets/icons/filter-tick.svg";
import NewsData from "./News";
import { Button } from "./ui/button";
import { ArrowRightCircle } from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
  "All",
  "News & Update",
  "Education",
  "Profile & Case Study"
];

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isViewMore, setIsViewMore] = useState(false);
  const [page, setPage] = useState(1);

  const handleClick = (category: string) => {
    if (category === "All" && activeCategory === "All") {
      setActiveCategory("");
    } else {
      setActiveCategory(category);
    }
  };

  const titledBlocks = useMemo(() => {
    if (!activeCategory || activeCategory === "All") {
      return ["News & Update", "Education", "Profile & Case Study"];
    }
    return [activeCategory];
  }, [activeCategory]);

  const toggleView = () => {
    setIsViewMore((v) => !v);
    setPage(1);
  };

  return (
    <section className="py-5 px-15">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium bg-gradient-to-b from-[#002082] via-[#2757E8] to-[#002BAE] text-transparent bg-clip-text">
          Browse by Category
        </h3>

        <div className="flex items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const isFiltered = isActive;

            return (
              <Button
                key={category}
                onClick={() => handleClick(category)}
                variant={isFiltered ? "filtered" : "nonFiltered"}
                className={`transition-all duration-300 ${
                  isFiltered ? "flex items-center gap-2" : ""
                }`}
              >
                {isFiltered && <img src={FilterIcon} alt="" />}
                {category}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <h4 className="text-xl">Must Read</h4>
        <button
          onClick={toggleView}
          className="flex items-center justify-between border-2 border-blue-800 gap-3 rounded-md py-2 px-4"
        >
          <p className="text-blue-800">
            {isViewMore ? "View Less" : "View More"}
          </p>
          <ArrowRightCircle className="text-blue-800" />
        </button>
      </div>

      <NewsData
        viewModeForUntitled={isViewMore ? "more" : "less"}
        page={page}
        onPageChange={setPage}
      />

      <div className="mt-8 grid gap-6">
        {titledBlocks.map((label) => (
          <NewsData key={label} title={label} />
        ))}
      </div>
    </section>
  );
}
