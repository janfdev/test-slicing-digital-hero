import FilterIcon from "../assets/icons/filter-tick.svg";
import { Button } from "./ui/button";
import { useState } from "react";

const categories = [
  "All",
  "News & Update",
  "Education",
  "Profile & Case Study"
];

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = (category: string) => {
    if (category === "All" && activeCategory === "All") {
      setActiveCategory("");
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <section className="py-5 px-15">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium bg-gradient-to-b from-[#002082] via-[#2757E8] to-[#002BAE] text-transparent bg-clip-text">
          Browse by Category
        </h3>
        {/* Action */}
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
    </section>
  );
};

export default NewsSection;
