// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Testimonials from "./pages/Testimonials";
// import Login from "./pages/Login";
// import TrainerProfile from "./pages/TrainerProfile";
// import RegisterTrainer from "./pages/RegisterTrainer";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       {/* <Route path="/about" element={<About />} />
//       <Route path="/testimonials" element={<Testimonials />} /> */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/registerTrainer" element={<RegisterTrainer />} />

//       <Route
//         path="/trainer/:id"
//         element={
//           <ProtectedRoute>
//             <TrainerProfile />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/register-trainer"
//         element={
//           <ProtectedRoute>
//             <RegisterTrainer />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TrainerProfile from "./pages/TrainerProfile";
import RegisterTrainer from "./pages/RegisterTrainer";
import ProtectedRoute from "./components/ProtectedRoute";
import TrainerMarquee from "./components/TrainerMarquee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Login and Register Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<TrainerMarquee />} />
        {/* <Route
        path="/trainer-profile/trainers/:fullName"
        element={<TrainerProfile />}
      /> */}

        <Route
          path="/trainer/register-form"
          element={
            <ProtectedRoute>
              <RegisterTrainer />
            </ProtectedRoute>
          }
        />
        {/* Other Routes */}
        {/* <Route
        path="/trainer-profile/trainer/name/:name"
        element={<TrainerProfile />}
      /> */}
        <Route
          path="/trainer-profile/trainer/:name"
          element={<TrainerProfile />}
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
