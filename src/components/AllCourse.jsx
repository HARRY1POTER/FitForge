import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const classData = [
  {
    id: 1,
    title: "Weight Lifting",
    image: "/assets/class-1.jpg",
    icon: "/assets/class-icon-1.png",
    progress: 85,
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
  },
  {
    id: 2,
    title: "Cardio & Strength",
    image: "/assets/class-2.jpg",
    icon: "/assets/class-icon-2.png",
    progress: 70,
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
  },
  {
    id: 3,
    title: "Power Yoga",
    image: "/assets/class-3.jpg",
    icon: "/assets/class-icon-3.png",
    progress: 90,
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
  },
  {
    id: 4,
    title: "The Fitness Pack",
    image: "/assets/class-4.jpg",
    icon: "/assets/class-icon-4.png",
    progress: 60,
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
  },
];

const ClassesSection = () => {
  return (
    <section
      id="class"
      className=" bg-green-900 bg-cover bg-center py-28 "
      style={{ backgroundImage: "url('/assets/classes-bg.png')" }}
    >
      <div className="container mx-auto px-4 space-y-10">
        <p className="text-center  text-orange-400 text-2xl mb-4 border border-orange-400 px-6 py-2 rounded-md backdrop-blur-sm bg-orange-400/10 w-fit mx-auto">
          Our Classes
        </p>
        <h2 className=" text-center text-white mb-8 text-5xl">
          Fitness Classes For Every Goal
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {classData.map((cls) => (
            <SwiperSlide key={cls.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full">
                {/* Card Banner */}
                <div className="card-banner w-full h-[220px] overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="card-content p-6">
                  <div className=" flex items-center mb-4">
                    <img
                      src={cls.icon}
                      alt=""
                      className="mr-4 border-r border-gray-300 pr-4"
                    />
                    <h3 className="text-xl font-semibold hover:text-orange-500 transition-colors">
                      <a href="/">{cls.title}</a>
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm mb-5">
                    {cls.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="card-progress">
                    <div className="flex justify-between items-center mb-2 text-sm font-semibold text-gray-700">
                      <span>Class Full</span>
                      <span>{cls.progress}%</span>
                    </div>
                    <div className="progress-bg h-2 bg-orange-200 rounded-full">
                      <div
                        className="progress-bar h-2 bg-orange-500 rounded-full"
                        style={{ width: `${cls.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClassesSection;
