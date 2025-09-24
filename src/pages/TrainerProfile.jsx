// // import { useParams } from "react-router-dom";

// // export default function TrainerProfile() {
// //   const { id } = useParams();
// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold">Trainer Profile</h2>
// //       <p>This is the full profile of trainer ID: {id}</p>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Dashboard() {
//   const [trainers, setTrainers] = useState([]);

//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/auth/trainers"
//         );
//         setTrainers(response.data);
//       } catch (err) {
//         console.error("Error fetching trainer data:", err);
//       }
//     };
//     fetchTrainers();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold">Trainer Data</h2>
//       <div className="space-y-6 mt-4">
//         {trainers.map((trainer, index) => (
//           <div key={index} className="bg-white p-4 rounded-md shadow-md">
//             <h3 className="text-xl font-semibold">{trainer.fullName}</h3>
//             <p>
//               <strong>Email:</strong> {trainer.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {trainer.phone}
//             </p>
//             <p>
//               <strong>Expertise:</strong> {trainer.expertise}
//             </p>
//             <p>
//               <strong>Experience:</strong> {trainer.experience} years
//             </p>
//             <p>
//               <strong>Location:</strong> {trainer.location}
//             </p>
//             {trainer.profilePic && (
//               <img
//                 src={`http://localhost:5000/${trainer.profilePic}`}
//                 alt="Profile"
//                 className="w-32 h-32 object-cover rounded-full"
//               />
//             )}
//             {trainer.certifications && (
//               <a
//                 href={`http://localhost:5000/${trainer.certifications}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Certifications
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function TrainerProfile() {
//   const { trainerId } = useParams(); // Get the trainerId from URL
//   const [trainer, setTrainer] = useState(null);

//   useEffect(() => {
//     // Fetch the trainer details from the API using the trainerId
//     const fetchTrainerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/auth/trainers/${trainerId}`
//         );
//         setTrainer(response.data);
//       } catch (error) {
//         console.error("Error fetching trainer details:", error);
//       }
//     };

//     fetchTrainerDetails();
//   }, [trainerId]);

//   if (!trainer) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="trainer-profile">
//       <h2 className="text-3xl font-semibold text-center">{trainer.fullName}</h2>
//       <div className="flex justify-center items-center gap-8 mt-6">
//         <img
//           src={trainer.profilePic}
//           alt={trainer.fullName}
//           className="w-32 h-32 object-cover rounded-full"
//         />
//         <div>
//           <h3 className="text-xl font-bold">Expertise: {trainer.expertise}</h3>
//           <p className="text-lg">{trainer.bio}</p>
//           <p className="text-lg">Location: {trainer.location}</p>
//           <p className="text-lg">Phone: {trainer.phone}</p>
//           <p className="text-lg">DOB: {trainer.dob}</p>
//           <p className="text-lg">Availability: {trainer.availability}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // For getting the dynamic route parameter (trainerId)
// import axios from "axios";

// export default function TrainerProfilePage() {
//   const { trainerId } = useParams(); // Get trainerId from the URL
//   const [trainer, setTrainer] = useState(null);
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [error, setError] = useState(null); // Track errors

//   // Function to fetch trainer details
//   const fetchTrainerDetails = async (id) => {
//     if (!id) {
//       console.error("Trainer ID is undefined");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/auth/trainers/${id}`
//       );
//       setTrainer(response.data);
//       setLoading(false); // Stop loading once the data is fetched
//     } catch (error) {
//       console.error("Error fetching trainer profile:", error);
//       setError("Failed to load trainer profile");
//       setLoading(false); // Stop loading in case of error
//     }
//   };

//   // Use effect for fetching trainer profile based on trainerId from URL or localStorage
//   useEffect(() => {
//     // First, try to get trainerId from URL params, then from localStorage if not found
//     const idFromUrl = trainerId;
//     const idFromLocalStorage = localStorage.getItem("_Id");

//     if (idFromUrl) {
//       fetchTrainerDetails(idFromUrl);
//     } else if (idFromLocalStorage) {
//       fetchTrainerDetails(idFromLocalStorage);
//     } else {
//       console.error("No trainer ID found in URL or localStorage");
//       setError("Trainer ID is missing");
//       setLoading(false);
//     }
//   }, [trainerId]); // Re-fetch when trainerId from URL changes

//   if (loading) {
//     return <div>Loading profile...</div>; // Show loading message while data is being fetched
//   }

//   if (error) {
//     return <div>{error}</div>; // Show error message if something went wrong
//   }

//   if (!trainer) {
//     return <div>Trainer not found!</div>; // If no trainer data is found
//   }

//   return (
//     <div className="trainer-profile">
//       <h2>{trainer.fullName}</h2>
//       <img
//         src={trainer.profilePic}
//         alt={trainer.fullName}
//         className="w-32 h-32 object-cover rounded-full"
//       />
//       <p>
//         <strong>Expertise:</strong> {trainer.expertise}
//       </p>
//       <p>
//         <strong>About:</strong> {trainer.about}
//       </p>
//       <p>
//         <strong>Contact:</strong> {trainer.contact}
//       </p>
//       {/* Add more details as needed */}
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function TrainerProfile() {
//   const { id } = useParams(); // Access the id from the URL
//   const { name } = useParams();
//   const [trainer, setTrainer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTrainerDetails = async () => {
//       if (!id && !name) {
//         console.error("Trainer ID is undefined");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/auth/trainers/name/${name}`
//         );
//         setTrainer(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching trainer profile:", error);
//         setError("Failed to load trainer profile");
//         setLoading(false);
//       }
//     };

//     fetchTrainerDetails();
//   }, [id, name]);

//   if (loading) {
//     return <div>Loading profile...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!trainer) {
//     return <div>Trainer not found!</div>;
//   }

//   return (
//     <div className="trainer-profile">
//       <h2>{trainer.fullName}</h2>
//       <img
//         src={trainer.profilePic}
//         alt={trainer.fullName}
//         className="w-32 h-32 object-cover rounded-full"
//       />
//       <p>
//         <strong>Expertise:</strong> {trainer.expertise}
//       </p>
//       <p>
//         <strong>About:</strong> {trainer.about}
//       </p>
//       <p>
//         <strong>Contact:</strong> {trainer.contact}
//       </p>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";
import { getImageUrl } from "../utils/formatImagePath";

export default function TrainerProfile() {
  const { name } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      if (!name) {
        setError("Trainer name is missing.");
        return;
      }

      try {
        const response = await axios.get(`/trainers/name/${name}`);
        setTrainer(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trainer profile:", error);
        setError("Failed to load trainer profile");
        setLoading(false);
      }
    };

    fetchTrainerDetails();
  }, [name]);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>{error}</div>;
  if (!trainer) return <div>Trainer not found!</div>;

  return (
    <div className="trainer-profile">
      <h2>{trainer?.fullName}</h2>
      <img
        src={getImageUrl(trainer?.profilePic)}
        alt={trainer?.fullName}
        className="w-32 h-32 object-cover rounded-full"
      />
      <p>
        <strong>Expertise:</strong> {trainer.expertise}
      </p>
      <p>
        <strong>About:</strong> {trainer.about}
      </p>
      <p>
        <strong>Contact:</strong> {trainer.contact}
      </p>
    </div>
  );
}
