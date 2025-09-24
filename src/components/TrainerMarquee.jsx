// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Marquee from "react-fast-marquee";
// import TrainerCard from "./TrainerCard"; // Make sure this is the correct import

// export default function TrainerMarquee({ trainers }) {
//   const navigate = useNavigate();

//   const handleViewProfile = (trainerId) => {
//     // Navigate to the profile page of the trainer
//     navigate(`/trainer-profile/${trainerId}`);
//   };

//   return (
//     <div>
//       <Marquee
//         gradient={false}
//         speed={70}
//         pauseOnHover={true}
//         pauseOnClick={true}
//         delay={0}
//         play={true}
//         direction="left"
//         className="w-full py-8 bg--800/60 rounded-lg"
//       >
//         <div className="flex gap-8">
//           {trainers.map((trainer, index) => (
//             <div
//               key={trainer.id}
//               className={`flex-shrink-0 ${index === 0 ? "ml-8" : ""} ${
//                 index === trainers.length - 1 ? "mr-" : ""
//               }`}
//             >
//               {/* Display trainer name, image and expertise */}
//               <div className="flex flex-col items-center gap-4">
//                 <img
//                   src={trainer.profilePic} // Use trainer image
//                   alt={trainer.fullName}
//                   className="w-24 h-24 object-cover rounded-full"
//                 />
//                 <h3 className="font-semibold">{trainer.fullName}</h3>
//                 <p>{trainer.expertise}</p>
//                 <button
//                   onClick={() => handleViewProfile(trainer.id)} // Handle view profile click
//                   className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//                 >
//                   View Profile
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Marquee>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import TrainerCard from "./TrainerCard"; // Ensure this import is correct
import axios from "../api/axiosConfig";

export default function TrainerMarquee() {
  const [trainers, setTrainers] = useState([]); // Start with an empty array
  const navigate = useNavigate();

  useEffect(() => {
    console.log("-------------", trainers);

    // Fetch trainers data when the component mounts
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("/trainers");

        setTrainers(response.data); // Set the fetched trainers data
        console.log("----", response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewProfile = (trainerId) => {
    // Navigate to the profile page of the trainer
    navigate(`/trainer-profile/trainers/${trainerId.id}`);
  };

  return (
    <div>
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
          {/* Map through trainers only if data is available */}
          {trainers.length > 0 ? (
            trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className={`flex-shrink-0 ${index === 0 ? "ml-8" : ""} ${
                  index === trainers.length - 1 ? "mr-" : ""
                }`}
              >
                {/* Display trainer name, image, and expertise */}
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={trainer.profilePic} // Use trainer image
                    alt={trainer.fullName}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <h3 className="font-semibold">{trainer.fullName}</h3>
                  <p>{trainer.expertise}</p>
                  <button
                    onClick={() => handleViewProfile(trainer.id)} // Handle view profile click
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>Loading trainers...</div>
          )}
        </div>
      </Marquee>
    </div>
  );
}
