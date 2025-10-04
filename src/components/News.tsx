import ImageNews from "../assets/images/image-news.png";
import { Eye } from "lucide-react";

type Props = {
  title: string;
};

const newsData = [
  {
    label: "Education",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "News & Update",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "News & Update",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Education",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  }
];

const NewsData = ({ title }: Props) => {
  return (
    <div className="py-5">
      <h2 className="text-xl mb-5">{title}</h2>
      {/* News  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
        {/* News Card */}
        {newsData.map((data) => (
          <div className="flex flex-col gap-2">
            <div className="relative">
              <img src={data.image} alt="" className="rounded-xl" />

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
            </div>

            <h3>{data.title}</h3>
            <p className="text-gray-500">{data.description}</p>

            <div className="flex items-center gap-2">
              <p className="flex text-sm items-center gap-2">
                <Eye className="size-4" />
                {data.view} seen
              </p>
              <span className="text-gray-400">•</span>
              <p className="text-sm text-blue-800">{data.read} read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsData;
