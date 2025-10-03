import { ArrowRightCircle, Pencil, Quote, Star } from "lucide-react";
import Profile from "../assets/images/image-user-1.png";

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

const Testimonials = () => {
  return (
    <section className="py-8 px-15">
      {/* Title */}
      <div className="flex items-center justify-between mb-7">
        <h2 className="capitalize text-xl">What They Say About Digital Hero</h2>
        {/* Action */}
        <div className="flex items-center gap-3">
          <button className="flex items-center border-1 border-gray-400 py-2 px-4 rounded-[8px] gap-2 text-gray-400 cursor-pointer">
            View All
            <ArrowRightCircle className="size-5" />
          </button>
          <button className="flex items-center border-1 border-blue-800 py-2 px-4 rounded-[8px] text-blue-800 gap-2 cursor-pointer">
            Write a Review
            <Pencil className="size-4" />
          </button>
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
