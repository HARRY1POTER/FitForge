// import React from "react";
// import testimonialsData from "./TestimonialsData.json"; // assuming the JSON data is saved in this file

// const Testimonials = () => {
// return (
//     <div className="w-full min-h-screen flex items-center bg-black  bg-gray-50 text-black">
//     <div className="max-w-full py-5 mt-10 mb-20 mx-auto overflow-hidden">
//         <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
//         <p className="text-sm sm:text-lg font-semibold text-rose-600">
//             Words That Matter
//         </p>
//         <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
//             See Why Clients Keep Coming Back
//         </h3>
//         </div>
//         <div className="flex flex-col gap-3">
//         {/* TOP LINE */}
//         <div
//             style={{
//             maskImage:
//                 "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
//             WebkitMaskImage:
//                 "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
//             }}
//             className="relative flex justify-around gap-5 overflow-hidden shrink-0"
//         >
//             <div className="max-w-full mx-auto">
//             <div className="px-4 md:px-10 mx-auto w-full">
//                 <div className="animate-scrollReverse flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
//                 {testimonialsData.map((testimonial, index) => (
//                     <div
//                     key={index}
//                     className="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px]  border-black shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]"
//                     >
//                     <p className="px-5 py-5 tracking-tight text-lg font-extralight md:text-lg">
//                         "{testimonial.quote}"
//                     </p>
//                     <div className="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px]  border-black">
//                         <div className="flex items-center w-3/4 gap-3 px-4 py-3">
//                         <img
//                             className="w-10 h-10 rounded"
//                             src={testimonial.image}
//                             alt="avatar"
//                         />
//                         <div className="flex flex-col items-start justify-start flex-1 gap-0">
//                             <h5 className="text-base font-medium md:text-md">
//                             {testimonial.name}
//                             </h5>
//                             <p className="text-sm md:text-base mt-[-4px]  text-black/30">
//                             {testimonial.role}
//                             </p>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 ))}
//                 </div>
//             </div>
//             </div>
//         </div>
//         {/* Bottom line */}
//         <div
//             style={{
//             maskImage:
//                 "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
//             WebkitMaskImage:
//                 "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)", // for Safari
//             }}
//             className="relative flex justify-around gap-5 overflow-hidden shrink-0"
//         >
//             <div className="max-w-full mx-auto">
//             <div className="px-4 md:px-10 mx-auto w-full">
//                 <div className="animate-scroll flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
//                 {testimonialsData.map((testimonial, index) => (
//                     <div
//                     key={index}
//                     className="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px]  border-black shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]"
//                     >
//                     <p className="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
//                         "{testimonial.quote}"
//                     </p>
//                     <div className="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px]  border-black">
//                         <div className="flex items-center w-3/4 gap-3 px-4 py-3">
//                         <img
//                             className="w-10 h-10 rounded"
//                             src={testimonial.image}
//                             alt="avatar"
//                         />
//                         <div className="flex flex-col items-start justify-start flex-1 gap-0">
//                             <h5 className="text-base font-medium md:text-md">
//                             {testimonial.name}
//                             </h5>
//                             <p className="text-sm md:text-base  text-black/30 mt-[-4px]">
//                             {testimonial.role}
//                             </p>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 ))}
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//     </div>
// );
// };

// export default Testimonials;
import React from "react";

// Define the testimonials data
const testimonialsData = [
  {
    name: "Hugo Pakula",
    role: "CEO at Company X",
    image: "https://i.ibb.co/39QLHv5H/1693926367335.jpg",
    quote:
      "Working with Ab Nahid Agency was a game-changer. Their web development and SEO support significantly boosted my site's visibility and performance.",
  },
  {
    name: "Ajmaine Bhuiyan",
    role: "Founder at Startup Y",
    image:
      "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
    quote:
      "They delivered exactly what I needed — a modern, fast, and SEO-optimized website for my startup. Highly recommended for entrepreneurs.",
  },
  {
    name: "Josh Gardner",
    role: "Designer at Company Z",
    image: "https://i.ibb.co/HLCKTh8F/1742201429729.jpg",
    quote:
      "Their UI/UX design skills are impressive. My site now looks professional and loads super fast across all devices. Excellent communication too!",
  },
  {
    name: "Hugo Pakula",
    role: "CEO at Company X",
    image: "https://i.ibb.co/39QLHv5H/1693926367335.jpg",
    quote:
      "Working with Ab Nahid Agency was a game-changer. Their web development and SEO support significantly boosted my site's visibility and performance.",
  },
  {
    name: "Ajmaine Bhuiyan",
    role: "Founder at Startup Y",
    image:
      "https://i.ibb.co/Zz7HrXgJ/1750602389688-e-1756944000-v-beta-t-rsy-A7-Ftr-NJaz-CX1-VS9lkuh12-Hon-WNhh-Kes1n4wd6k-SA.jpg",
    quote:
      "They delivered exactly what I needed — a modern, fast, and SEO-optimized website for my startup. Highly recommended for entrepreneurs.",
  },
  {
    name: "Josh Gardner",
    role: "Designer at Company Z",
    image: "https://i.ibb.co/HLCKTh8F/1742201429729.jpg",
    quote:
      "Their UI/UX design skills are impressive. My site now looks professional and loads super fast across all devices. Excellent communication too!",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full min-h-scre en bg-orange-100 py-16 px-4 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 ">
          Our trusted clients
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is to drive progress and enhance the lives of our
          customers by delivering superior products and services that exceed
          expectations.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through testimonialsData */}
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="relative text-center transition-transform duration-300 p-6 bg-gray-200 rounded-[30px] outline-1 outline-offset-[-1px] outline-[#f5f7f9] flex flex-col justify-center items-center gap-5 hover:scale-105 hover:rotate-[4deg] shadow-[0px_25px_52px_-12px_rgba(17,17,17,0.20)] shadow-black/40"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="space-y-6">
              <h4 className="text-[#323b47] text-xl font-bold leading-tight">
                {testimonial.name}
              </h4>
              <p className="text-[#58677d] text-lg font-medium leading-snug">
                {testimonial.quote}
              </p>
            </div>
            <div className="p-3.5 rounded-full outline-1 outline-offset-[-1px] outline-[#e9eff7] flex justify-center items-center">
              <img
                src="https://img.icons8.com/?size=100&id=38968&format=png&color=000000"
                alt="quote"
                className="w-6 h-6"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
