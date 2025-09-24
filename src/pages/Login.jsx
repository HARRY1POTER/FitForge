// import { useNavigate } from "react-router-dom";
// import { login } from "../auth";

// export default function Login() {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     login();
//     navigate("/");
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl mb-4">Login</h2>
//       <form onSubmit={handleLogin} className="flex flex-col gap-2 max-w-sm">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="border p-2"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className="border p-2"
//         />
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// // }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login, logout, isLoggedIn } from "../auth"; // Make sure this exists

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       // Use your existing login logic
//       login();
//       console.log("Logged in");
//       navigate("/");
//     } else {
//       // You can handle sign-up logic here
//       console.log("Signing up...");
//       navigate("/"); // or navigate to a welcome page
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     console.log("Logged out");
//     navigate("/login"); // Redirect to login page after logout
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('/assets/hero-bg.png')",
//       }}
//       className="min-h-screen bg-cover flex items-center justify-center bg-green-900 p-6"
//     >
//       <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl w-full max-w-md p-8 text-white">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           {isLogin ? "Welcome Back 👋" : "Join FitLife 💪"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {!isLogin && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               required
//             />
//           )}

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             required
//           />

//           {!isLogin && (
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               required
//             />
//           )}

//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-md text-lg font-semibold"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center text-sm mt-6">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-orange-400 hover:underline font-semibold"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
// Import axios for HTTP requests
import { login, setToken } from "../auth"; // Your auth functions
//  logout, isLoggedIn,
const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State for toggling between login and signup
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [fullName, setFullName] = useState(""); // Full name for signup
  const navigate = useNavigate(); // Navigate to different pages after login/signup

  // Handle form submission (login/signup)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };
    if (!isLogin) {
      userData.fullName = fullName; // Add fullName for signup
    }

    try {
      let response;

      if (isLogin) {
        // Login API call
        response = await axios.post("/login", userData);
        console.log(response.data.token); // JWT token from the response
        setToken(response.data.token); // Save the JWT token to localStorage
        login(); // Mark user as logged in
        navigate("/"); // Redirect to home/dashboard
      } else {
        // Signup API call
        response = await axios.post("/signup", userData);
        console.log(response.data.message); // Message from the response
        navigate("/login"); // Redirect to login page after successful signup
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message); // Log error message
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/assets/hero-bg.png')",
      }}
      className="min-h-screen bg-cover flex items-center justify-center bg-green-900 p-6"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl w-full max-w-md p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back 👋" : "Join FitLife 💪"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name input (only for signup) */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          )}

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Confirm Password input (only for signup) */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-md text-lg font-semibold"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)} // Toggle between login and signup
            className="text-orange-400 hover:underline font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
        {/* Add "Want to login later?" link/button */}
        <div className="text-center text-sm mt-2">
          Prefer to log in later?
          <button
            onClick={() => window.history.back()}
            type="button"
            className="text-orange-400 hover:underline font-semibold ml-2"
          >
            Return to the home page.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
