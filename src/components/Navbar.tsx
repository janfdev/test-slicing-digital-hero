import Logo from "../assets/images/logo_dg.png";
import ArrowRight from "../assets/icons/arrow-right.svg";
import ArrowCircleDown from "../assets/icons/arrow-circle-down.svg";

const Navbar = () => {
  return (
    <div className="px-5 py-5 flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src={Logo} alt="" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <h2 className="text-blue-800">Community</h2>
          <img
            src={ArrowCircleDown}
            className="size-4 text-black cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="">Portal News</h2>
          <img
            src={ArrowCircleDown}
            className="size-4 text-black cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="">Games & Tools</h2>
          <img
            src={ArrowCircleDown}
            className="size-4 text-black cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="">Partnership</h2>
          <img
            src={ArrowCircleDown}
            className="size-4 text-black cursor-pointer"
            alt=""
          />
        </div>
      </nav>

      {/* Action */}
      <div className="flex items-center gap-2">
        <a href="/signin">Sign in</a>
        <button className="flex items-center py-2 px-2 gap-2 text-blue-800 border-2 border-blue-800 rounded-xl">
          <p>Get Started</p>
          <img
            src={ArrowRight}
            className="text-blue-800 bg-slate-200 rounded-full p-[2px]"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
