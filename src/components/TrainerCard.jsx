// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function TrainerCard({ trainer }) {
// // // // //   const navigate = useNavigate();

// // // // //   const handleView = () => {
// // // // //     const loggedIn = localStorage.getItem("loggedIn");
// // // // //     if (loggedIn === "true") {
// // // // //       navigate(`/trainer/${trainer.id}`);
// // // // //     } else {
// // // // //       alert("Please log in to view trainer profile.");
// // // // //       navigate("/login");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="border p-4 rounded shadow w-60 text-center">
// // // // //       <img
// // // // //         src={trainer.image}
// // // // //         alt={trainer.name}
// // // // //         className="w-20 h-20 mx-auto rounded-full"
// // // // //       />
// // // // //       <h3 className="text-lg font-semibold mt-2">{trainer.name}</h3>
// // // // //       <p className="text-sm text-gray-500">{trainer.expertise}</p>
// // // // //       <button
// // // // //         onClick={handleView}
// // // // //         className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
// // // // //       >
// // // // //         View Profile
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useNavigate } from "react-router-dom";

// // // // export default function TrainerCard({ trainer }) {
// // // //   const navigate = useNavigate();

// // // //   const handleView = () => {
// // // //     const loggedIn = localStorage.getItem("loggedIn");
// // // //     if (loggedIn === "true") {
// // // //       navigate(`/trainer/${trainer.id}`);
// // // //     } else {
// // // //       alert("Please log in to view trainer profile.");
// // // //       navigate("/login");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="w-72 flex-shrink-0 bg-gradient-to-br from-green-800 to-orange-700/80 rounded-2xl p-6 shadow-lg text-white border border-white/20 backdrop-blur-md transition-transform transform hover:scale-105 duration-300 my-20">
// // // //       <div className="flex flex-col items-center text-center">
// // // //         <img
// // // //           src={trainer.image}
// // // //           alt={trainer.name}
// // // //           className="w-24 h-24 rounded-full border-4 border-orange-400 shadow-md object-cover mb-4"
// // // //         />
// // // //         <h3 className="text-2xl font-semibold">{trainer.name}</h3>
// // // //         <p className="text-sm text-orange-200">{trainer.expertise}</p>
// // // //         <button
// // // //           onClick={handleView}
// // // //           className="mt-5 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-full font-medium"
// // // //         >
// // // //           View Profile
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useNavigate } from "react-router-dom";

// // // export default function TrainerCard({ trainer }) {
// // //   const navigate = useNavigate();

// // //   const handleView = () => {
// // //     const loggedIn = localStorage.getItem("loggedIn");
// // //     if (loggedIn === "true") {
// // //       navigate(`/trainer/${trainer.id}`);
// // //     } else {
// // //       alert("Please log in to view trainer profile.");
// // //       navigate("/login");
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-72 flex-shrink-0 bg-gradient-to-br from-green-600 to-orange-500 rounded-3xl p-6 shadow-xl text-white border border-white/20 backdrop-blur-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 my-12">
// // //       <div className="flex flex-col items-center text-center">
// // //         <img
// // //           src={trainer.image}
// // //           alt={trainer.name}
// // //           className="w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover mb-6"
// // //         />
// // //         <h3 className="text-2xl font-semibold text-white">{trainer.name}</h3>
// // //         <p className="text-sm text-orange-200 mb-4">{trainer.expertise}</p>
// // //         <button
// // //           onClick={handleView}
// // //           className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-2 rounded-full font-medium transform hover:scale-105"
// // //         >
// // //           View Profile
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useNavigate } from "react-router-dom";

// // export default function TrainerCard({ trainer }) {
// //   const navigate = useNavigate();

// //   const handleView = () => {
// //     const loggedIn = localStorage.getItem("loggedIn");
// //     if (loggedIn === "true") {
// //       navigate(`/trainer/${trainer.id}`);
// //     } else {
// //       alert("Please log in to view trainer profile.");
// //       navigate("/login");
// //     }
// //   };

// //   // Dynamic background gradient based on expertise
// //   const getGradient = () => {
// //     switch (trainer.expertise.toLowerCase()) {
// //       case "yoga":
// //         return "bg-gradient-to-br from-blue-400 to-purple-500";
// //       case "fitness":
// //         return "bg-gradient-to-br from-green-500 to-yellow-400";
// //       default:
// //         return "bg-gradient-to-br from-gray-600 to-gray-800";
// //     }
// //   };

// //   return (
// //     <div
// //       className={`w-72 flex-shrink-0 rounded-3xl p-6 shadow-xl text-white border border-white/20 backdrop-blur-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300 my-12 ${getGradient()} animate-pulse-card`}
// //     >
// //       <div className="flex flex-col items-center text-center">
// //         <img
// //           src={trainer.image}
// //           alt={trainer.name}
// //           className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover mb-6"
// //         />
// //         <h3 className="text-2xl font-semibold text-white">{trainer.name}</h3>
// //         <p className="text-sm text-orange-200 mb-4">{trainer.expertise}</p>
// //         <button
// //           onClick={handleView}
// //           className="bg-orange-600 hover:bg-orange-700 transition-all text-white px-6 py-2 rounded-full font-medium transform hover:scale-105"
// //         >
// //           View Profile
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// import { useNavigate } from "react-router-dom";

// export default function TrainerCard({ trainer }) {
//   const navigate = useNavigate();

//   const handleView = () => {
//     const loggedIn = localStorage.getItem("loggedIn");
//     if (loggedIn === "true") {
//       navigate(`/trainer/${trainer.id}`);
//     } else {
//       alert("Please log in to view trainer profile.");
//       navigate("/login");
//     }
//   };

//   // Dynamic background gradient based on expertise
//   const getGradient = () => {
//     switch (trainer.expertise.toLowerCase()) {
//       case "yoga":
//         return "bg-gradient-to-br from-blue-400 to-purple-600";
//       case "fitness":
//         return "bg-gradient-to-br from-green-500 to-yellow-400";
//       case "nutrition":
//         return "bg-gradient-to-br from-yellow-500 to-orange-600";
//       default:
//         return "bg-gradient-to-br from-gray-600 to-gray-800";
//     }
//   };

//   return (
//     <div
//       className={`w-72 flex-shrink-0 rounded-3xl p-6 shadow-xl text-white border border-white/20 backdrop-blur-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl my-12 ${getGradient()} animate-pulse-card`}
//     >
//       <div className="flex flex-col items-center text-center space-y-4">
//         {/* Profile Image */}
//         <div className="relative w-32 h-32 mb-6">
//           <img
//             src={trainer.image}
//             alt={trainer.name}
//             className="w-full h-full rounded-full border-4 border-white shadow-xl object-cover transform transition-all duration-300 hover:scale-110 hover:rotate-3"
//           />
//         </div>

//         {/* Name and Expertise */}
//         <h3 className="text-2xl font-semibold text-white tracking-wide">
//           {trainer.name}
//         </h3>
//         <p className="text-sm text-orange-200 mb-4">{trainer.expertise}</p>

//         {/* View Profile Button */}
//         <button
//           onClick={handleView}
//           className="bg-orange-600 hover:bg-orange-700 transition-all text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 hover:shadow-lg"
//         >
//           View Profile
//         </button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getImageUrl } from "../utils/formatImagePath";

export default function TrainerCard({ trainer }) {
  const navigate = useNavigate();

  // const handleView = () => {
  //   const loggedIn = localStorage.getItem("loggedIn");
  //   if (loggedIn === "true") {
  //     console.log(trainer.id);

  //     navigate(`/trainer/${trainer.id}`);
  //   } else {
  //     alert("Please log in to view trainer profile.");
  //     navigate("/login");
  //   }
  // };

  // TrainerCard component
  // const handleView = (id, fullName) => {
  //   const loggedIn = localStorage.getItem("loggedIn");
  //   if (loggedIn === "true") {
  //     localStorage.setItem("_Id", id);
  //     localStorage.setItem("fullName", fullName);

  //     console.log(id); // Ensure trainer.id is available and correct
  //     navigate(`/trainer-profile/trainer/${fullName}`);
  //     // navigate(`/trainer-profile/trainers/${trainer.id}`); // Make sure you use the right path
  //   } else {
  //     alert("Please log in to view trainer profile.");
  //     navigate("/login");
  //   }
  // };
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

        {/* View Profile Button */}
        {/* <button
          // onClick={handleView}
          // onClick={() =>
          //   handleView(trainer._id) && handleView(trainer.fullName)
          // }
          onClick={() => handleView(trainer._id, trainer.fullName)}
          className="bg-orange-600 hover:bg-orange-700 transition-all text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 hover:shadow-lg"
        >
          View Profile
        </button> */}
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

// import React from "react";

// const TrainerCard = ({ trainer }) => {
//   return (
//     <div className="card">
//       <img
//         src={trainer.profilePic}
//         alt={trainer.fullName}
//         className="w-24 h-24 object-cover rounded-full"
//       />
//       <h3>{trainer.fullName}</h3>
//       <p>{trainer.expertise}</p>
//     </div>
//   );
// };

// export default TrainerCard;
