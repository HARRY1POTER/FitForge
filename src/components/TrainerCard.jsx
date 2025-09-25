import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getImageUrl } from "../utils/formatImagePath";

export default function TrainerCard({ trainer }) {
  const navigate = useNavigate();

  // console.log(trainer);

  const handleView = (id, fullName) => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true") {
      const formattedName = fullName.toLowerCase().replace(/\s+/g, "-"); // slugify
      localStorage.setItem("_Id", id);
      localStorage.setItem("fullName", fullName);

      navigate(`/trainer-profile/trainer/${formattedName}`);
    } else {
      toast("Please log in to view trainer profile.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  // Dynamic background gradient based on expertise
  const getGradient = () => {
    switch (trainer.expertise.toLowerCase()) {
      case "yoga":
        return "bg-gradient-to-br from-blue-400 to-purple-600";
      case "fitness":
        return "bg-gradient-to-br from-green-500 to-yellow-400";
      case "nutrition":
        return "bg-gradient-to-br from-yellow-500 to-orange-600";
      default:
        return "bg-gradient-to-br from-gray-600 to-gray-800";
    }
  };

  return (
    <div
      className={`w-72 flex-shrink-0 rounded-3xl p-6 shadow-xl text-white border border-white/20 backdrop-blur-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl my-12 ${getGradient()} animate-pulse-card`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Image */}
        <div className="relative w-48 h-48  mb-">
          <img
            src={getImageUrl(trainer.profilePic)}
            alt={trainer?.name}
            className="w-full h-full rounded-lg border-4 border-white shadow-xl object-cover transform transition-all duration-300 hover:scale-110 hover:rotate-3"
          />
        </div>

        {/* Name and Expertise */}
        <h3 className="text-2xl font-semibold text-white tracking-wide">
          {trainer.name}
        </h3>
        <p className="text-sm text-orange-200 mb-4">{trainer.expertise}</p>

        <button
          onClick={() => handleView(trainer._id, trainer.fullName)}
          type="submit"
          className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-orange-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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
    </div>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getImageUrl } from "../utils/formatImagePath";

// export default function TrainerCard({ trainers = [] }) {
//   const [index, setIndex] = useState(0);
//   const autoSlideRef = useRef(null);
//   const navigate = useNavigate();

//   const goTo = (i) => {
//     setIndex((i + trainers.length) % trainers.length);
//     resetAutoSlide();
//   };

//   const next = () => goTo(index + 1);
//   const prev = () => goTo(index - 1);

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [index]);

//   useEffect(() => {
//     let startX = 0;

//     const handleTouchStart = (e) => {
//       startX = e.touches[0].clientX;
//     };

//     const handleTouchEnd = (e) => {
//       const endX = e.changedTouches[0].clientX;
//       const diff = startX - endX;
//       if (Math.abs(diff) > 50) {
//         diff > 0 ? next() : prev();
//       }
//     };

//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [index]);

//   useEffect(() => {
//     startAutoSlide();
//     return stopAutoSlide;
//   }, [index, trainers]);

//   const startAutoSlide = () => {
//     stopAutoSlide();
//     autoSlideRef.current = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % trainers.length);
//     }, 5000);
//   };

//   const stopAutoSlide = () => {
//     if (autoSlideRef.current) clearInterval(autoSlideRef.current);
//   };

//   const resetAutoSlide = () => {
//     stopAutoSlide();
//     startAutoSlide();
//   };

//   const handleView = (id, fullName) => {
//     const loggedIn = localStorage.getItem("loggedIn");

//     if (loggedIn === "true") {
//       const formattedName = fullName.toLowerCase().replace(/\s+/g, "-");
//       localStorage.setItem("_Id", id);
//       localStorage.setItem("fullName", fullName);
//       navigate(`/trainer-profile/trainer/${formattedName}`);
//     } else {
//       toast("Please log in to view trainer profile.");
//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     }
//   };

//   if (!trainers.length) return null;

//   return (
//     <div className="w-full px-4 py-10 flex flex-col items-center">
//       <h1 className="text-4xl sm:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-green-700 to-gray-400/10 uppercase tracking-tight mb-8 mt-2">
//         Our Experienced Instructor
//       </h1>

//       <div className="relative w-full max-w-6xl h-[350px] sm:h-[420px] flex items-center justify-center overflow-hidden">
//         {/* Left arrow */}
//         <button
//           onClick={prev}
//           className="absolute left-2 sm:left-4 z-10 bg-green-800/70 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:scale-110 transition"
//         >
//           ‹
//         </button>

//         {/* Trainer cards */}
//         <div className="relative w-full h-full flex items-center justify-center">
//           {trainers.map((trainer, i) => {
//             const offset = (i - index + trainers.length) % trainers.length;
//             const baseClass =
//               "absolute transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-xl";
//             const commonStyle = "w-[180px] h-[240px] sm:w-[230px] sm:h-[300px]";

//             let classes = baseClass + " " + commonStyle;

//             if (offset === 0) {
//               classes += " scale-110 z-20";
//             } else if (offset === 1) {
//               classes +=
//                 " translate-x-36 sm:translate-x-52 scale-90 opacity-70 z-10";
//             } else if (offset === 2) {
//               classes +=
//                 " translate-x-60 sm:translate-x-96 scale-75 opacity-50 z-0";
//             } else if (offset === trainers.length - 1) {
//               classes +=
//                 " -translate-x-36 sm:-translate-x-52 scale-90 opacity-70 z-10";
//             } else if (offset === trainers.length - 2) {
//               classes +=
//                 " -translate-x-60 sm:-translate-x-96 scale-75 opacity-50 z-0";
//             } else {
//               classes += " hidden";
//             }

//             return (
//               <div
//                 key={trainer._id}
//                 className={`${classes} group cursor-pointer`}
//                 onClick={() => goTo(i)}
//               >
//                 <img
//                   src={getImageUrl(trainer.profilePic)}
//                   alt={trainer.name}
//                   className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
//                 />
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleView(trainer._id, trainer.fullName);
//                   }}
//                   className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold"
//                 >
//                   <span className="bg-orange-500 px-4 py-2 rounded-full shadow-lg hover:bg-emerald-500 transition">
//                     View Profile
//                   </span>
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right arrow */}
//         <button
//           onClick={next}
//           className="absolute right-2 sm:right-4 z-10 bg-green-800/70 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:scale-110 transition"
//         >
//           ›
//         </button>
//       </div>

//       {/* Member Info */}
//       <div className="text-center mt-8 sm:mt-12">
//         <h2 className="text-2xl sm:text-3xl font-bold text-green-500 relative inline-block">
//           {trainers[index].name || trainers[index].fullName}
//           <span className="block w-14 sm:w-20 h-1 bg-green-500 absolute -left-20 top-full"></span>
//           <span className="block w-14 sm:w-20 h-1 bg-green-500 absolute -right-20 top-full"></span>
//         </h2>
//         <p className="text-sm sm:text-base text-red-500 uppercase tracking-wider mt-5">
//           {trainers[index]?.expertise}
//         </p>
//       </div>
//     </div>
//   );
// }
