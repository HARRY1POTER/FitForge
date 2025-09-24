// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "Women’s Course",
//     image: "/assets/service-1.svg",
//     active: false,
//   },
//   {
//     id: 2,
//     title: "Basic Course",
//     image: "/assets/service-2.svg",
//     active: true,
//   },
//   {
//     id: 3,
//     title: "Men’s Course",
//     image: "/assets/service-3.svg",
//     active: false,
//   },
// ];

// const ServiceCards = () => {
//   return (
//     <div className="min-h-screen bg-[#600b28] flex flex-wrap justify-center items-center gap-8 p-6">
//       {services.map((service) => (
//         <div
//           key={service.id}
//           className="relative w-72 bg-white rounded-xl shadow-lg flex flex-col items-center p-6"
//         >
//           {/* Image */}
//           <div
//             className="w-40 h-40 rounded-lg shadow-md bg-center bg-cover mb-4"
//             style={{ backgroundImage: `url(${service.image})` }}
//           ></div>

//           {/* Title */}
//           <h3 className="text-xl font-semibold text-gray-800 text-center">
//             {service.title}
//           </h3>
//           <p className="text-sm text-gray-500 mb-4">Train with top coaches</p>

//           {/* Stats */}
//           <ul className="flex justify-between w-full text-center text-sm text-gray-600 font-medium mb-4">
//             <li>
//               <p className="text-lg font-bold text-gray-800">3</p>
//               <p>Weeks</p>
//             </li>
//             <li>
//               <p className="text-lg font-bold text-gray-800">5</p>
//               <p>Sessions</p>
//             </li>
//             <li>
//               <p className="text-lg font-bold text-gray-800">Lvl 2</p>
//               <p>Level</p>
//             </li>
//           </ul>

//           {/* Actions */}
//           <div className="flex gap-3 w-full">
//             <button className="flex-1 bg-[#b82151] hover:bg-[#a31845] text-white py-2 rounded-md font-medium">
//               Enroll
//             </button>
//             <button className="flex-1 border border-[#b82151] text-[#b82151] hover:bg-[#b82151]/10 py-2 rounded-md font-medium">
//               Details
//             </button>
//           </div>

//           {/* Active badge */}
//           {service.active && (
//             <span className="absolute top-3 right-3 bg-[#b82151] text-white text-xs font-semibold px-3 py-1 rounded-full">
//               Active
//             </span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServiceCards;

import React from "react";

const trainers = [
  {
    id: 1,
    name: "Alice",
    expertise: "Yoga",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Bob",
    expertise: "Fitness",
    image: "https://via.placeholder.com/100",
  },
];

const TrainerCard = ({ trainer }) => {
  return (
    <div className="bg-white rounded-xl shadow-md w-64 min-w-[16rem] p-4 flex flex-col items-center text-center">
      {/* Trainer Image */}
      <div
        className="w-24 h-24 rounded-full bg-center bg-cover mb-4 shadow-lg"
        style={{ backgroundImage: `url(${trainer.image})` }}
      ></div>

      {/* Info */}
      <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{trainer.expertise} Trainer</p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="bg-[#b82151] text-white px-4 py-2 rounded hover:bg-[#a31845] text-sm">
          Follow
        </button>
        <button className="border border-[#b82151] text-[#b82151] px-4 py-2 rounded hover:bg-[#b82151]/10 text-sm">
          Message
        </button>
      </div>
    </div>
  );
};

const TrainerList = () => {
  return (
    <div className="p-6 bg-[#600b28] min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6">Meet Our Trainers</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default TrainerList;
