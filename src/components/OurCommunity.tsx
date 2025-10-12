import ArrowRight from "../assets/icons/arrow-right.svg";
import DiscordIcon from "../assets/icons/discord.svg";

const OurCommunity = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <h1 className="text-xl">Join Our Community</h1>
      <button className="flex items-center py-2 px-5 justify-between gap-2 border-2 border-blue-800 rounded-xl">
        <img src={DiscordIcon} alt="discord_icon" loading="lazy" />
        <h2 className="text-blue-800">Join Our Discord Server</h2>
        {/* Action */}
        <div className="bg-blue-200 p-1 rounded-full">
          <img src={ArrowRight} alt="icon_arrow" loading="lazy" />
        </div>
      </button>
    </div>
  );
};

export default OurCommunity;
