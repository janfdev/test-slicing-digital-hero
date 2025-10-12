import Footer from "./Footer";
import Navbar from "./Navbar";
import Verified from "@/assets/icons/verified.svg";
import ArticleImg from "@/assets/images/article-image.png";
import ArticleMore from "@/assets/images/article-more.png";
import LogoIcon from "@/assets/images/logo-icon.png";
import { Eye } from "lucide-react";

const Article = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 w-full">
        <img src={ArticleImg} className="w-full" alt="" />

        {/* Bottom */}
        <div className="flex gap-7 px-14 py-10">
          {/* Text */}
          <div className="w-3/4 flex flex-col gap-3">
            <p>
              Artificial Intelligence is rapidly transforming the healthcare
              industry, offering innovative solutions that improve patient care,
              optimize hospital workflows, and accelerate medical research.
              Hospitals around the world are now deploying AI-powered diagnostic
              tools capable of analyzing medical images, lab results, and
              patient histories with incredible speed and accuracy. Recent
              studies indicate that AI systems can detect certain conditions,
              such as early-stage cancer or cardiovascular risks, with accuracy
              rates comparable to experienced physicians. By identifying
              potential health issues earlier, AI allows for timely
              intervention, potentially saving thousands of lives each year.
              Beyond diagnostics, AI is being used to personalize treatment
              plans. Machine learning algorithms can analyze a patient’s genetic
              data, lifestyle, and medical history to recommend targeted
              therapies that are more effective and have fewer side effects.
              This marks a significant shift from the traditional
              one-size-fits-all approach to precision medicine. Healthcare
              administrators also benefit from AI in managing hospital
              operations. Predictive models forecast patient admissions,
              optimize staff schedules, and ensure the efficient use of medical
              resources. In addition, AI-driven virtual assistants help patients
              manage appointments, provide reminders for medication, and answer
              health-related questions, reducing the burden on medical staff.
              While the benefits of AI in healthcare are significant, experts
              caution about the ethical and regulatory challenges that come with
              widespread adoption. Data privacy, algorithmic bias, and
              transparency remain critical concerns. To address these issues,
              organizations are working to implement clear guidelines, robust
              security measures, and explainable AI systems that allow
              healthcare professionals to understand and trust AI
              recommendations. The future of AI in healthcare promises a more
              efficient, personalized, and proactive medical system,
              transforming not only how doctors work but also how patients
              experience care. With continued investment and careful oversight,
              AI could soon become an indispensable partner in the fight for
              better health outcomes worldwide.
            </p>

            <div className="flex flex-col self-start gap-2">
              {/* Author */}
              <div className="flex items-center gap-2">
                {/* Logo */}
                <img src={LogoIcon} alt="" />
                <h2 className="font-montserrat">Digital Hero</h2>
                <img src={Verified} alt="" />
              </div>

              {/* Time */}
              <div className="flex font-montserrat items-center gap-2 justify-between">
                <p className="text-[#737373]">October 1st, 2025</p>
                <span className="text-[#737373]">•</span>
                <p className="text-[#737373]">12 Minutes ago</p>
              </div>
            </div>
          </div>

          {/* More Article */}
          <div className="w-2/4 flex flex-col gap-3">
            <h1 className="text-xl">Read More</h1>
            {/* Articles */}
            <div className="flex gap-2">
              {/* Image */}
              <div className="relative ">
                <img
                  src={ArticleMore}
                  alt="News"
                  loading="lazy"
                  className="w-full h-full rounded-xl object-cover"
                />

                <div className="absolute top-2 left-2 z-10">
                  <div className="relative rounded-2xl  bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                    <div className="flex items-center gap-2 rounded-2xl px-2 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                      <span className="relative inline-flex h-3 w-3">
                        <span className="absolute inset-0 rounded-full bg-sky-400" />
                        <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md" />
                        <span className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                      </span>
                      <span className="text-white/90 text-[10px] font-medium tracking-wide">
                        News & Update
                      </span>
                    </div>
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg">Lorem Dolor</h2>
                <p className="max-w-sm">
                  Receive an official certificate to showcase your participation
                  and learning achievement.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="flex items-center gap-2 text-sm">
                    <Eye className="h-4 w-4" />
                    1.8k seen
                  </p>
                  <span className="">•</span>
                  <p className="text-sky-300 text-sm">8 min read</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {/* Image */}
              <div className="relative ">
                <img
                  src={ArticleMore}
                  alt="News"
                  loading="lazy"
                  className="w-full h-full rounded-xl object-cover"
                />

                <div className="absolute top-2 left-2 z-10">
                  <div className="relative rounded-2xl  bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                    <div className="flex items-center gap-2 rounded-2xl px-2 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                      <span className="relative inline-flex h-3 w-3">
                        <span className="absolute inset-0 rounded-full bg-sky-400" />
                        <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md" />
                        <span className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                      </span>
                      <span className="text-white/90 text-[10px] font-medium tracking-wide">
                        News & Update
                      </span>
                    </div>
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg">Lorem Dolor</h2>
                <p className="max-w-sm">
                  Receive an official certificate to showcase your participation
                  and learning achievement.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="flex items-center gap-2 text-sm">
                    <Eye className="h-4 w-4" />
                    1.8k seen
                  </p>
                  <span className="">•</span>
                  <p className="text-sky-300 text-sm">8 min read</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {/* Image */}
              <div className="relative ">
                <img
                  src={ArticleMore}
                  alt="News"
                  loading="lazy"
                  className="w-full h-full rounded-xl object-cover"
                />

                <div className="absolute top-2 left-2 z-10">
                  <div className="relative rounded-2xl  bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                    <div className="flex items-center gap-2 rounded-2xl px-2 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                      <span className="relative inline-flex h-3 w-3">
                        <span className="absolute inset-0 rounded-full bg-sky-400" />
                        <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md" />
                        <span className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                      </span>
                      <span className="text-white/90 text-[10px] font-medium tracking-wide">
                        News & Update
                      </span>
                    </div>
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg">Lorem Dolor</h2>
                <p className="max-w-sm">
                  Receive an official certificate to showcase your participation
                  and learning achievement.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="flex items-center gap-2 text-sm">
                    <Eye className="h-4 w-4" />
                    1.8k seen
                  </p>
                  <span className="">•</span>
                  <p className="text-sky-300 text-sm">8 min read</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
