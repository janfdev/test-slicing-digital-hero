import GridImage from "../assets/images/grid-image.png";

const BannerGrid = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-10 mt-5">
        <img src={GridImage} alt="" />
        <div>
          <img src={GridImage} className="w-[200px]" alt="" />
        </div>
        <img src={GridImage} alt="" />
        <div>
          <img src={GridImage} className="w-[200px]" alt="" />
        </div>
        <img src={GridImage} alt="" />
      </div>
    </div>
  );
};

export default BannerGrid;
