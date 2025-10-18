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

const testimonials = [
  {
    id: "t1",
    image: Profile,
    name: "Bennedict A",
    rating: "5.0",
    review:
      "Website Hero Hub sangat membantu saya untuk menemukan informasi terkait produk Digital Hero. Navigasinya jelas, tampilannya simpel tapi tetap modern. Loading juga cepat, jadi pengalaman browsing terasa nyaman."
  },
  {
    id: "t2",
    image: Profile,
    name: "Bennedict A",
    rating: "5.0",
    review:
      "Hero Hub benar-benar membantu saya memahami konsep dasar AI. Materinya terstruktur dengan baik dan mudah diikuti, bahkan untuk pemula. Ditambah ada kuis interaktif yang bikin belajar nggak membosankan."
  },
  {
    id: "t3",
    image: Profile,
    name: "Bennedict A",
    rating: "5.0",
    review:
      "Platform ini keren, materinya up-to-date sesuai tren terbaru AI. Cuma saya berharap ada lebih banyak contoh studi kasus nyata supaya ilmunya bisa langsung dipraktikkan."
  },
  {
    id: "t4",
    image: Profile,
    name: "Bennedict A",
    rating: "4.0",
    review:
      "Materinya bagus, tapi kadang video agak lama loading. Kalau ada fitur download materi untuk offline learning pasti lebih praktis."
  }
];

const reviewsModalData = [
  {
    id: "r1",
    name: "Andini",
    review:
      "Belajar AI di Hero Hub enak banget, penjelasannya runtut dan gampang dipahami. Cocok buat pemula kayak aku.",
    rate: "5.0"
  },
  {
    id: "r1",
    name: "Yanto Dian",
    review:
      "Hero Hub benar-benar membantu saya memahami konsep dasar AI. Materinya terstruktur dengan baik dan mudah diikuti, bahkan untuk pemula. Ditambah ada kuis interaktif yang bikin belajar nggak membosankan.",
    rate: "5.0"
  },
  {
    id: "r1",
    name: "Rizky",
    review:
      "Materinya update sesuai tren terbaru. Cuma kuisnya kadang terlalu mudah, semoga ke depannya lebih variatif",
    rate: "5.0"
  },
  {
    id: "r1",
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  },
  {
    id: "r1",
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  },
  {
    id: "r1",
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  },
  {
    id: "r1",
    name: "Clara",
    review:
      "UI aplikasinya clean dan nyaman dipakai. Belajarnya jadi nggak bikin pusing, malah bikin nagih.",
    rate: "5.0"
  }
];

const Testimonials = () => {
  const [isAllReviewsOpen, setAllReviewsOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <section className="py-8 px-4 md:px-6">
      {/* Title */}
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-xl capitalize">What They Say About Digital Hero</h2>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setAllReviewsOpen(true)}
            className="flex cursor-pointer items-center gap-2 rounded-[8px] border px-4 py-2 text-gray-600"
          >
            View All
            <ArrowRightCircle className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="flex cursor-pointer items-center gap-2 rounded-[8px] border border-blue-800 px-4 py-2 text-blue-800"
          >
            Write a Review
            <Pencil className="size-4" />
          </button>

          {/* Modal 1: All Reviews */}
          <Modal
            open={isAllReviewsOpen}
            onClose={() => setAllReviewsOpen(false)}
          >
            <div className="max-w-xl px-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl capitalize">
                  What They Say About Digital Hero
                </h2>
                <button
                  type="button"
                  aria-label="More options"
                  className="rounded p-1 hover:bg-gray-100"
                >
                  <EllipsisVertical className="size-5" />
                </button>
              </div>

              <div className="no-scrollbar max-h-[70vh] overflow-y-auto overscroll-contain">
                {reviewsModalData.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-1 py-4 border-b"
                  >
                    <h3 className="text-[16px] font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.review}</p>
                    <div className="flex items-center gap-2">
                      <Star className="size-4 fill-yellow-500 text-yellow-500" />
                      <p className="text-sm">{item.rate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Modal>

          {/* Modal 2: Auth */}
          <Modal open={isAuthModalOpen} onClose={() => setAuthModalOpen(false)}>
            <div className="max-w-xl flex flex-col gap-2">
              <h2 className="text-xl">Sign In</h2>
              <h3 className="text-lg text-gray-600">
                Sign in to share your thought with the community
              </h3>
              <p className="text-sm">
                Don&apos;t have an account yet?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Sign Up!
                </Link>
              </p>

              <div className="flex flex-col gap-2 py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2"
                >
                  <img src={Google} alt="Google" />
                  <span>Continue with Google</span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2"
                >
                  <img src={Facebook} alt="Facebook" />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-3 rounded-md p-4 shadow-lg"
          >
            <header className="flex items-center gap-2">
              <img
                src={item.image}
                alt={`Foto profil ${item.name}`}
                className="h-10 w-10 rounded-full object-cover"
              />
              <h3 className="font-medium">{item.name}</h3>
            </header>

            <span className="flex items-center gap-2 text-sm">
              <Star className="size-4 fill-yellow-500 text-yellow-500" />
              {item.rating}
            </span>

            <div className="rounded-lg">
              <Quote aria-hidden className="text-2xl" />
              <p className="mt-2 text-base">{item.review}</p>
              <Quote aria-hidden className="ml-auto mt-2 text-2xl" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
