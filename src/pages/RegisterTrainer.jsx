// import React, { useState } from "react";

// export default function RegisterTrainer() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     expertise: "",
//     experience: "",
//     bio: "",
//     location: "",
//     availability: "",
//     password: "",
//   });

//   const [profilePic, setProfilePic] = useState(null);
//   const [certifications, setCertifications] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e, type) => {
//     if (type === "profilePic") {
//       setProfilePic(e.target.files[0]);
//     } else if (type === "certifications") {
//       setCertifications(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     for (let key in formData) {
//       data.append(key, formData[key]);
//     }
//     if (profilePic) data.append("profilePic", profilePic);
//     if (certifications) data.append("certifications", certifications);

//     console.log("Trainer Data:", Object.fromEntries(data));
//     // You can send data to your backend using fetch/axios here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 md:p-12">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-8">
//           🏋️‍♂️ Register as a Trainer
//         </h2>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
//           {/* Full Name */}
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Date of Birth */}
//           <input
//             type="date"
//             name="dob"
//             placeholder="Date of Birth"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Gender */}
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//             className="input"
//           >
//             <option value="">Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>

//           {/* Location */}
//           <input
//             type="text"
//             name="location"
//             placeholder="Location (City, Country)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Expertise */}
//           <input
//             type="text"
//             name="expertise"
//             placeholder="Expertise (e.g., Yoga, HIIT)"
//             value={formData.expertise}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Years of Experience */}
//           <input
//             type="number"
//             name="experience"
//             placeholder="Years of Experience"
//             value={formData.experience}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Availability */}
//           <input
//             type="text"
//             name="availability"
//             placeholder="Availability (e.g., Mon-Fri, 9AM-5PM)"
//             value={formData.availability}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Password */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Set a Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           {/* Profile Picture */}
//           <div className="md:col-span-1">
//             <label className="block text-sm font-medium mb-1 text-green-900">
//               Upload Profile Picture
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleFileChange(e, "profilePic")}
//               className="input"
//             />
//           </div>

//           {/* Certification Upload */}
//           <div className="md:col-span-1">
//             <label className="block text-sm font-medium mb-1 text-green-900">
//               Upload Certification (PDF/Image)
//             </label>
//             <input
//               type="file"
//               accept=".pdf,image/*"
//               onChange={(e) => handleFileChange(e, "certifications")}
//               className="input"
//             />
//           </div>

//           {/* Bio */}
//           <div className="md:col-span-2">
//             <textarea
//               name="bio"
//               placeholder="Tell us about yourself..."
//               value={formData.bio}
//               onChange={handleChange}
//               required
//               className="input min-h-[100px]"
//             />
//           </div>

//           <div className="md:col-span-2 text-center">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
//             >
//               ✅ Register Trainer
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Custom Input Styling */}
//       <style jsx>{`
//         .input {
//           @apply w-full border border-green-300 rounded-lg px-4 py-2 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80 placeholder:text-green-700;
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RegisterTrainer() {
//   const [step, setStep] = useState(1); // Track which step of the form we're on
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     expertise: "",
//     experience: "",
//     bio: "",
//     location: "",
//     availability: "",
//     password: "",
//   });

//   const [profilePic, setProfilePic] = useState(null);
//   const [certifications, setCertifications] = useState(null);
//   const history = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e, type) => {
//     if (type === "profilePic") {
//       setProfilePic(e.target.files[0]);
//     } else if (type === "certifications") {
//       setCertifications(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // This is where you can send the data to your server
//     const data = new FormData();
//     for (let key in formData) {
//       data.append(key, formData[key]);
//     }
//     if (profilePic) data.append("profilePic", profilePic);
//     if (certifications) data.append("certifications", certifications);

//     console.log("Trainer Data Submitted:", Object.fromEntries(data));
//     // Simulate successful submission and redirect to login page or dashboard
//     history.push("/dashboard");
//   };

//   return (
//     <div className="bg-gray-300 h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-6xl bg-gradient-to-t from-yellow-200 via-yellow-100 to-slate-200 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
//         <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-6">
//           👨‍🏫 Register as a Trainer
//         </h2>

//         {/* Step navigation */}
//         <div className="flex justify-between items-center text-sm text-gray-500 p-3 border-orange-400 rounded-3xl border-2 bg-white bg-opacity-30 backdrop-blur-md shadow-lg">
//           <div
//             className={`cursor-pointer flex-1 text-center py-2 px-4 rounded-lg transition-all duration-300 ${
//               step === 1
//                 ? "font-semibold text-blue-600 bg-green-400 border-green-500 border-2 shadow-md"
//                 : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
//             }`}
//             onClick={() => setStep(1)}
//           >
//             Personal Info
//           </div>
//           <div
//             className={`cursor-pointer flex-1 text-center py-2 px-4 rounded-lg transition-all duration-300 ${
//               step === 2
//                 ? "font-semibold text-blue-600 bg-green-400 border-green-500 border-2 shadow-md"
//                 : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
//             }`}
//             onClick={() => setStep(2)}
//           >
//             Professional Info
//           </div>
//           <div
//             className={`cursor-pointer flex-1 text-center py-2 px-4 rounded-lg transition-all duration-300 ${
//               step === 3
//                 ? "font-semibold text-blue-600 bg-green-400 border-green-500 border-2 shadow-md"
//                 : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
//             }`}
//             onClick={() => setStep(3)}
//           >
//             Uploads
//           </div>
//         </div>

//         {/* Step 1 - Personal Info */}
//         {step === 1 && (
//           <form onSubmit={(e) => setStep(2)} className="space-y-4">
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               required
//               className="input"
//             />

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="input"
//             />

//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//               required
//               className="input"
//             />

//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//               className="input"
//             />

//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="input"
//             >
//               <option value="">Select Gender</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>

//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Location (City, Country)"
//               required
//               className="input"
//             />

//             <div className="text-center">
//               <button type="submit" className="btn">
//                 Next Step
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Step 2 - Professional Info */}
//         {step === 2 && (
//           <form onSubmit={(e) => setStep(3)} className="space-y-4">
//             <input
//               type="text"
//               name="expertise"
//               value={formData.expertise}
//               onChange={handleChange}
//               placeholder="Expertise (e.g., Yoga, HIIT)"
//               required
//               className="input"
//             />

//             <input
//               type="number"
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               placeholder="Years of Experience"
//               required
//               className="input"
//             />

//             <input
//               type="text"
//               name="availability"
//               value={formData.availability}
//               onChange={handleChange}
//               placeholder="Availability (e.g., Mon-Fri, 9AM-5PM)"
//               required
//               className="input"
//             />

//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               placeholder="Short Bio"
//               required
//               className="input min-h-[100px]"
//             />

//             <div className="text-center">
//               <button type="submit" className="btn">
//                 Next Step
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Step 3 - Uploads */}
//         {step === 3 && (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Profile Picture
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleFileChange(e, "profilePic")}
//                 className="input"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Certifications
//               </label>
//               <input
//                 type="file"
//                 accept=".pdf,image/*"
//                 onChange={(e) => handleFileChange(e, "certifications")}
//                 className="input"
//               />
//             </div>

//             <div className="text-center">
//               <button type="submit" className="btn">
//                 Submit Registration
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import { toast } from "react-toastify";

export default function RegisterTrainer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    expertise: "",
    experience: "",
    bio: "",
    location: "",
    availability: "",
    password: "",
  });

  const [profilePic, setProfilePic] = useState(null);
  const [certifications, setCertifications] = useState([]);
  // const history = useNavigate();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFileChange = (e, type) => {
  //   if (type === "profilePic") {
  //     setProfilePic(e.target.files[0]);
  //   } else if (type === "certifications") {
  //     setCertifications(e.target.files[0]);
  //   }
  // };

  const handleFileChange = (e, type) => {
    const files = e.target.files;

    if (type === "profilePic") {
      setProfilePic(files[0]);
    } else if (type === "certifications") {
      const selectedFiles = Array.from(files);
      setCertifications((prev) => [...prev, ...selectedFiles]); // append files
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   for (let key in formData) {
  //     data.append(key, formData[key]);
  //   }
  //   if (profilePic) data.append("profilePic", profilePic);
  //   if (certifications) data.append("certifications", certifications);

  //   console.log("Trainer Data Submitted:", Object.fromEntries(data));
  //   history.push("/dashboard");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }
      if (profilePic) data.append("profilePic", profilePic);
      // if (certifications) data.append("certifications", certifications);
      if (certifications.length > 0) {
        certifications.forEach((file) => {
          data.append("certifications", file); // ✅ One-by-one
        });
      }

      const response = await axios.post("/signup-trainer", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // console.log(response.data);
      // history.push("/dashboard");

      toast.success("Trainer registered successfully!");

      // ✅ Navigate to home on success
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Error submitting form data:", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const RegisterTrainer = ({ step, setStep, formData, handleChange, handleFileChange, handleSubmit, profilePic, certifications }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 min-h-screen flex items-center justify-center p-6">
        {/* <button
          className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
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
        </button> */}
        <div className="w-full max-w-5xl space-y-6">
          <div className="flex justify-start">
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
          <div className="w-full max-w-5xl bg-gradient-to-t from-orange-200 via-orange-100 to-slate-200 rounded-xl shadow-lg p-8  ">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              👨‍🏫 Register as a Trainer
            </h2>

            {/* Step navigation */}
            <div className="lg:flex justify-between items-center text-sm text-gray-500 p-3 border-orange-400 rounded-3xl border-2 bg-white bg-opacity-30 backdrop-blur-md shadow-lg mb-10">
              <div
                className={`cursor-pointer flex-1 text-center py-2 px-4 rounded-lg transition-all duration-300 ${
                  step === 1
                    ? "font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 border-green-500 border-2 shadow-lg"
                    : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                }`}
                onClick={() => setStep(1)}
              >
                Personal Info
              </div>
              <div
                className={`cursor-pointer flex-1 text-center py-2 px-4 rounded-lg transition-all duration-300 ${
                  step === 2
                    ? "font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-600 border-yellow-500 border-2 shadow-lg"
                    : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                }`}
                onClick={() => setStep(2)}
              >
                Professional Info
              </div>
              <div
                className={`cursor-pointer flex-1 text-center py-2 px-4 rounded-lg transition-all duration-300 ${
                  step === 3
                    ? "font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 border-blue-500 border-2 shadow-lg"
                    : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                }`}
                onClick={() => setStep(3)}
              >
                Uploads
              </div>
            </div>

            {/* Step 1 - Personal Info */}
            {step === 1 && (
              <form onSubmit={(e) => setStep(2)} className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location (City, Country)"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-500 text-white p-3 rounded-md w-full hover:bg-green-600 transition-all duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            )}

            {/* Step 2 - Professional Info */}
            {step === 2 && (
              <form onSubmit={(e) => setStep(3)} className="space-y-6">
                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="Expertise (e.g., Yoga, HIIT)"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Years of Experience"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Availability (e.g., Mon-Fri, 9AM-5PM)"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Short Bio"
                  required
                  className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white p-3 rounded-md w-full hover:bg-yellow-600 transition-all duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 - Uploads */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Picture Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Upload Profile Picture
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "profilePic")}
                    className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {profilePic && (
                    <div className="mt-4">
                      <img
                        src={URL.createObjectURL(profilePic)}
                        alt="Profile Preview"
                        className="w-32 h-32 object-cover rounded-full mx-auto"
                      />
                    </div>
                  )}
                </div>

                {/* Certifications Upload */}
                {/* <div>
                  <label className="block text-sm font-medium mb-2">
                    Upload Certifications
                  </label>
                  <input
                    type="file"
                    accept=".pdf,image/*"
                    multiple
                    onChange={(e) => handleFileChange(e, "certifications")}
                    className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {certifications && (
                    <div className="mt-4">
                      <p className="text-gray-700">
                        {certifications.name}{" "}
                        <span className="text-sm text-gray-500">(Preview)</span>
                      </p>
                      {certifications.type.startsWith("image") && (
                        <img
                          src={URL.createObjectURL(certifications)}
                          alt="Certification Preview"
                          className="w-32 h-32 object-cover rounded-lg mx-auto mt-2"
                        />
                      )}
                    </div>
                  )}
                </div> */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Upload Certifications
                  </label>
                  <input
                    type="file"
                    accept=".pdf,image/*"
                    multiple
                    onChange={(e) => handleFileChange(e, "certifications")}
                    className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {certifications.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {certifications.map((file, index) => (
                        <div key={index}>
                          <p className="text-gray-700">
                            {file.name}{" "}
                            <span className="text-sm text-gray-500">
                              (Preview)
                            </span>
                          </p>
                          {file.type.startsWith("image") && (
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Certification Preview ${index + 1}`}
                              className="w-32 h-32 object-cover rounded-lg mx-auto mt-2"
                            />
                          )}
                          {/* Optionally handle PDF preview or icons here */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600 transition-all duration-300"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
