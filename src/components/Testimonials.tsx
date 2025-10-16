import Profile from "../assets/images/image-user-1.png";
import Modal from "./Modal";
import Google from "@/assets/icons/icon-google.svg";
import Facebook from "@/assets/icons/logos_facebook.svg";
import {
  ArrowRightCircle,
  EllipsisVertical,
  Pencil,
  Quote,
  Star
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const data = [
  {
    image: Profile,
    name: "Bennedict A",
    rating: "5.0",
    review:
      "Website Hero Hub sangat membantu saya untuk menemukan informasi terkait produk Digital Hero. Navigasinya jelas, tampilannya simpel tapi tetap modern. Loading juga cepat, jadi pengalaman browsing terasa nyaman."
  },
  {
    image: Profile,
    name: "Bennedict A",
    rating: "5.0",
    review:
      "Hero Hub benar-benar membantu saya memahami konsep dasar AI. Materinya terstruktur dengan baik dan mudah diikuti, bahkan untuk pemula. Ditambah ada kuis interaktif yang bikin belajar nggak membosankan."
  },
  {
    image: Profile,
    name: "Bennedict A",
    rating: "5.0",
    review:
      "Platform ini keren, materinya up-to-date sesuai tren terbaru AI. Cuma saya berharap ada lebih banyak contoh studi kasus nyata supaya ilmunya bisa langsung dipraktikkan."
  },
  {
    image: Profile,
    name: "Bennedict A",
    rating: "4.0",
    review:
      "Materinya bagus, tapi kadang video agak lama loading. Kalau ada fitur download materi untuk offline learning pasti lebih praktis."
  }
];

const dataModal = [
  {
    name: "Andini",
    review:
      "Belajar AI di Hero Hub enak banget, penjelasannya runtut dan gampang dipahami. Cocok buat pemula kayak aku.",
    rate: "5.0"
  },
  {
    name: "Yanto Dian",
    review:
      "Hero Hub benar-benar membantu saya memahami konsep dasar AI. Materinya terstruktur dengan baik dan mudah diikuti, bahkan untuk pemula. Ditambah ada kuis interaktif yang bikin belajar nggak membosankan.",
    rate: "5.0"
  },
  {
    name: "Rizky",
    review:
      "Materinya update sesuai tren terbaru. Cuma kuisnya kadang terlalu mudah, semoga ke depannya lebih variatif",
    rate: "5.0"
  },
  {
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  },
  {
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  },
  {
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  },
  {
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  }
];

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  return (
    <section className="py-8 px-15">
      {/* Title */}
      <div className="flex items-center justify-between mb-7">
        <h2 className="capitalize text-xl">What They Say About Digital Hero</h2>
        {/* Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center border-1 border-gray-400 py-2 px-4 rounded-[8px] gap-2 text-gray-400 cursor-pointer"
          >
            View All
            <ArrowRightCircle className="size-5" />
          </button>
          <button
            onClick={() => setOpenTwo(true)}
            className="flex items-center border-1 border-blue-800 py-2 px-4 rounded-[8px] text-blue-800 gap-2 cursor-pointer"
          >
            Write a Review
            <Pencil className="size-4" />
          </button>

          {/* Modal 1 */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="w-xl px-4">
              <div className="flex items-center justify-between">
                <h2 className="capitalize text-xl">
                  What They Say About Digital Hero
                </h2>
                <EllipsisVertical />
              </div>
              <div className="flex flex-col max-h-[70vh] overflow-y-auto no-scrollbar overscroll-contain">
                {dataModal.map((items, index) => (
                  <div key={index} className="flex  flex-col gap-1 py-4">
                    <h3 className="text-[16px]">{items.name}</h3>
                    <p className="text-gray-600 text-sm">{items.review}</p>
                    <div className="flex items-center gap-2">
                      <Star
                        className="fill-yellow-500 text-yellow-500"
                        size={15}
                      />
                      <p className="text-sm">{items.rate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Modal>

          {/* Modal 2 */}
          <Modal open={openTwo} onClose={() => setOpenTwo(false)}>
            <div className="w-xl flex flex-col gap-2">
              <h2 className="text-xl">Sign In</h2>
              <h3 className="text-lg text-gray-600">
                Sign in to share your thought with the community
              </h3>
              <p>
                Don't have account yet?{" "}
                <Link to={"/register"} className="text-blue-400">
                  Sign Up!
                </Link>{" "}
              </p>
              <div className="flex flex-col gap-2 py-2">
                <button className="w-full py-2 rounded-md border-1 flex items-center justify-center gap-2 cursor-pointer">
                  <img src={Google} alt="" />
                  <h4>Continue with Google</h4>
                </button>
                <button className="w-full py-2 rounded-md border-1 flex items-center justify-center gap-2 cursor-pointer">
                  <img src={Facebook} alt="" />
                  <h4>Continue with Facebook</h4>
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* Card Testimonials */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {/* Testi */}
        {data.map((data) => (
          <div className="flex flex-col rounded-md gap-2 p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <img src={data.image} alt="" />
              <h3>{data.name}</h3>
            </div>
            <span className="flex items-center gap-2">
              <Star className="fill-yellow-500 text-yellow-500" />
              {data.rating}
            </span>

            <div className="flex flex-col gap-3 rounded-lg">
              <Quote className="self-start text-2xl" />
              <p className="text-base">{data.review}</p>
              <Quote className="self-end text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
