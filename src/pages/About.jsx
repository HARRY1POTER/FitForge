import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import TrainerCard from "../components/TrainerCard";
// import TrainerMarquee from "../components/TrainerMarquee";
import axios from "../api/axiosConfig";

const About = () => {
  // const trainers = [
  //   {
  //     id: 1,
  //     name: "Sarah",
  //     expertise: "Pilates",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "James",
  //     expertise: "Strength Training",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Emily",
  //     expertise: "Cardio",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Michael",
  //     expertise: "Nutrition",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Olivia",
  //     expertise: "Martial Arts",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "David",
  //     expertise: "CrossFit",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Sophia",
  //     expertise: "Dance",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "John",
  //     expertise: "Boxing",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 9,
  //     name: "Isabella",
  //     expertise: "Swimming",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 10,
  //     name: "Liam",
  //     expertise: "Running",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 11,
  //     name: "Mia",
  //     expertise: "Cycling",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 12,
  //     name: "Ethan",
  //     expertise: "Climbing",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 13,
  //     name: "Charlotte",
  //     expertise: "Stretching",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 14,
  //     name: "Daniel",
  //     expertise: "Athletics",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  //   {
  //     id: 15,
  //     name: "Grace",
  //     expertise: "Mindfulness",
  //     image:
  //       "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
  //   },
  // ];
  const [trainers, setTrainers] = useState([]); // Start with an empty array

  useEffect(() => {
    // Fetch trainers data when the component mounts
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("/trainers");
        setTrainers(response.data); // Set the fetched trainers data
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);
  return (
    <section
      id="about"
      className="bg-gray-100 py- 36 pt-36 pb-10 relative overflow-hidden "
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
        {/* Image Banner with overlays */}
        <div className="relative w-full max-w-[470px] h-[580px] mx-auto lg:mx-0">
          {/* Rotating shape */}
          <div
            className="absolute top-[-40px] left-[-40px] w-[120px] h-[120px] bg-no-repeat bg-center bg-contain animate-spin-slow z-[99]"
            style={{
              backgroundImage: "url('/assets/about-shape-1.png')",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-200 opacity-60 z-0 rounded-lg" />

          {/* Main image */}
          <img
            src="/assets/about-banner.jpg"
            alt="about banner"
            className="w-full h-full object-cover relative z-20 rounded-lg shadow-xl"
          />

          {/* Floating Button */}
          {/* <a
            href="/"
            className="absolute bottom-9 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition z-30 text-center"
          >
            Meet Instructor View Profile
          </a> */}
          <button
            type="submit"
            className=" absolute  bottom-9 left-1/2 transform -translate-x-1/2 z-30 transition flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-orange-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 rel ative px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            View Profile
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="relative bg-white p-8 sm:p-10 shadow-xl max-w-2xl rounded-md z-10 text-center lg:text-left">
          {/* Decorative shape */}
          <div
            className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-no-repeat bg-center bg-contain z-[-1]"
            style={{
              backgroundImage: "url('/assets/about-shape-2.png')",
            }}
          ></div>

          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">
            25+ Years Of Experience
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-snug">
            We have expert instructor to help our students.
          </h2>

          <p className="text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries but also the leap
            into electronic typesetting.
          </p>

          <h3 className="text-xl font-semibold text-teal-600 mb-2">
            100+ Courses
          </h3>

          <p className="text-gray-700">
            Our course offerings span various disciplines and skill levels,
            ensuring that everyone finds a path that suits their goals.
          </p>
        </div>
      </div>
      <p className="text-center text-green-900 text-2xl mb-4 border border-green-900 px-6 py-2 rounded-md backdrop-blur-sm bg-orange-400/10 w-fit justify-center mt-20 s mx-auto ">
        Our Experienced Instructor
      </p>
      {/* <TrainerMarquee /> */}
      <div
        style={
          {
            // WebkitMaskImage:
            // "linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)",
          }
        }
      >
        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="w-full py-8 bg--800/60 rounded-lg"
        >
          <div className="flex gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id ?? index}
                className={`flex-shrink-0 ${index === 0 ? "ml-8" : ""} ${
                  index === trainers.length - 1 ? "mr-" : ""
                }`}
              >
                <TrainerCard trainer={trainer} />
              </div>
            ))}
          </div>
        </Marquee>
        {/* <TrainerCard trainers={trainers} /> */}
      </div>
    </section>
  );
};

export default About;
