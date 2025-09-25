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
//             <h3 className="text-xl font-semibold">{trainer?.fullName}</h3>
//             <p>
//               <strong>Email:</strong> {trainer?.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {trainer?.phone}
//             </p>
//             <p>
//               <strong>Expertise:</strong> {trainer?.expertise}
//             </p>
//             <p>
//               <strong>Experience:</strong> {trainer?.experience} years
//             </p>
//             <p>
//               <strong>Location:</strong> {trainer?.location}
//             </p>
//             {trainer?.profilePic && (
//               <img
//                 src={`http://localhost:5000/${trainer?.profilePic}`}
//                 alt="Profile"
//                 className="w-32 h-32 object-cover rounded-full"
//               />
//             )}
//             {trainer?.certifications && (
//               <a
//                 href={`http://localhost:5000/${trainer?.certifications}`}
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
//       <h2 className="text-3xl font-semibold text-center">{trainer?.fullName}</h2>
//       <div className="flex justify-center items-center gap-8 mt-6">
//         <img
//           src={trainer?.profilePic}
//           alt={trainer?.fullName}
//           className="w-32 h-32 object-cover rounded-full"
//         />
//         <div>
//           <h3 className="text-xl font-bold">Expertise: {trainer?.expertise}</h3>
//           <p className="text-lg">{trainer?.bio}</p>
//           <p className="text-lg">Location: {trainer?.location}</p>
//           <p className="text-lg">Phone: {trainer?.phone}</p>
//           <p className="text-lg">DOB: {trainer?.dob}</p>
//           <p className="text-lg">Availability: {trainer?.availability}</p>
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
//       <h2>{trainer?.fullName}</h2>
//       <img
//         src={trainer?.profilePic}
//         alt={trainer?.fullName}
//         className="w-32 h-32 object-cover rounded-full"
//       />
//       <p>
//         <strong>Expertise:</strong> {trainer?.expertise}
//       </p>
//       <p>
//         <strong>About:</strong> {trainer?.about}
//       </p>
//       <p>
//         <strong>Contact:</strong> {trainer?.contact}
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
//       <h2>{trainer?.fullName}</h2>
//       <img
//         src={trainer?.profilePic}
//         alt={trainer?.fullName}
//         className="w-32 h-32 object-cover rounded-full"
//       />
//       <p>
//         <strong>Expertise:</strong> {trainer?.expertise}
//       </p>
//       <p>
//         <strong>About:</strong> {trainer?.about}
//       </p>
//       <p>
//         <strong>Contact:</strong> {trainer?.contact}
//       </p>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";
import { getImageUrl } from "../utils/formatImagePath";
import InfoItem from "../components/InfoItem";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTransgender,
  FaCalendar,
  FaAward,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

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
    // <div className="trainer-profile">
    //   <h2>{trainer?.fullName}</h2>
    //   <img
    //     src={getImageUrl(trainer?.profilePic)}
    //     alt={trainer?.fullName}
    //     className="w-32 h-32 object-cover rounded-full"
    //   />
    //   <p>
    //     <strong>Expertise:</strong> {trainer?.expertise}
    //   </p>
    //   <p>
    //     <strong>About:</strong> {trainer?.about}
    //   </p>
    //   <p>
    //     <strong>Contact:</strong> {trainer?.contact}
    //   </p>
    // </div>
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    //   <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
    //     {/* Left Panel */}
    //     <div className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white md:w-1/3 p-6 flex flex-col items-center justify-center">
    //       <img
    //         src={getImageUrl(trainer?.profilePic)}
    //         alt="User"
    //         className="rounded-lg w-28 h-28 object-cover mb-4"
    //       />
    //       <h4 className="text-xl font-semibold mb-1">{trainer?.fullName}</h4>
    //       <p className="text-sm"> {trainer?.expertise}</p>
    //     </div>

    //     {/* Right Panel */}
    //     <div className="md:w-2/3 p-6 space-y-6">
    //       {/* Personal Info */}
    //       <div>
    //         <h3 className="text-lg font-bold uppercase border-b pb-2 tracking-widest text-gray-700 mb-4">
    //           Information
    //         </h3>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //           <div>
    //             <h4 className="text-gray-700 font-medium">Email</h4>
    //             <p className="text-sm text-gray-500">{trainer?.email}</p>
    //           </div>
    //           <div>
    //             <h4 className="text-gray-700 font-medium">Phone</h4>
    //             <p className="text-sm text-gray-500">{trainer?.phone}</p>
    //           </div>
    //           <div>
    //             <h4 className="text-gray-700 font-medium">Date of Birth</h4>
    //             <p className="text-sm text-gray-500">{trainer?.formattedDob}</p>
    //           </div>
    //           <div>
    //             <h4 className="text-gray-700 font-medium">Location</h4>
    //             <p className="text-sm text-gray-500">{trainer?.location}</p>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <h4 className="text-gray-700 font-medium">Availability</h4>
    //             <p className="text-sm text-gray-500">{trainer?.availability}</p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Bio */}
    //       <div>
    //         <h3 className="text-lg font-bold uppercase border-b pb-2 tracking-widest text-gray-700 mb-4">
    //           Bio
    //         </h3>
    //         <p className="text-sm text-gray-600">{trainer?.bio}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex-col min-h-screen bg-gray-500 p-4 ">
        <div className="flex justify-start ">
          <button
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black md:text-lg text-base font-semibold group"
            type="button"
            onClick={() => window.history.back()} // optional go back behavior
          >
            <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Go Back</p>
          </button>
        </div>
        <div className="flex justify-center items-center mt-10 mb-10 md:mt-16 md:mb-16">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-5xl flex flex-col lg:flex-row  ">
            {/* Left Panel */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white lg:w-1/3 p-6 flex flex-col items-center justify-center">
              <img
                src={getImageUrl(trainer?.profilePic)}
                alt="Trainer Profile"
                className="rounde d-full w-60 h-60 object-cover border-4 border-white shadow-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-1 text-center">
                {trainer?.fullName || "Unnamed"}
              </h2>
              <p className="text-sm text-center opacity-90">
                {trainer?.expertise || "No expertise listed"}
              </p>
            </div>

            {/* Right Panel */}
            <div className="lg:w-2/3 p-6 space-y-6">
              {/* Info Section */}
              <div>
                <h3 className="text-xl font-semibold uppercase border-b pb-2 tracking-wide text-gray-700 mb-4">
                  Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trainer?.email && (
                    <InfoItem
                      icon={FaEnvelope}
                      label="Email"
                      value={trainer.email}
                    />
                  )}
                  {trainer?.phone && (
                    <InfoItem
                      icon={FaPhone}
                      label="Phone"
                      value={trainer.phone}
                    />
                  )}
                  {trainer?.dob && (
                    <InfoItem
                      icon={FaCalendar}
                      label="Date of Birth"
                      value={new Date(trainer.dob).toLocaleDateString()}
                    />
                  )}
                  {trainer?.gender && (
                    <InfoItem
                      icon={FaTransgender}
                      label="Gender"
                      value={trainer.gender}
                    />
                  )}
                  {trainer?.location && (
                    <InfoItem
                      icon={FaMapMarkerAlt}
                      label="Location"
                      value={trainer.location}
                    />
                  )}
                  {trainer?.experience && (
                    <InfoItem
                      icon={FaUserTie}
                      label="Experience"
                      value={`${trainer.experience} years`}
                    />
                  )}
                  {trainer?.availability && (
                    <div className="sm:col-span-2">
                      <InfoItem
                        icon={FaClock}
                        label="Availability"
                        value={trainer.availability}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Bio Section */}
              {/* {trainer?.bio && (
                <div>
                  <h3 className="text-xl font-semibold uppercase border-b pb-2 tracking-wide text-gray-700 mb-4">
                    Bio
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              )} */}
              {trainer?.bio && (
                <div>
                  <h3 className="text-xl font-semibold uppercase border-b pb-2 tracking-wide text-gray-700 mb-4">
                    Bio
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap break-words">
                    {trainer.bio}
                  </p>
                </div>
              )}

              {/* Certifications */}
              {/* {trainer?.certifications && (
                <div>
                  <h3 className="text-xl font-semibold uppercase border-b pb-2 flex gap-1 tracking-wide text-gray-700 mb-4">
                    <FaAward className="mt-1" /> Certifications
                  </h3>
                  <img
                    src={getImageUrl(trainer.certifications)}
                    alt="Certification"
                    className="w-full max-w-md rounded border shadow-md"
                  />
                </div>
              )} */}
              {Array.isArray(trainer.certifications) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getImageUrl(trainer.certifications).map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Certification ${index + 1}`}
                      className="w-full h-44 object-cover rounded-md shadow-md"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
