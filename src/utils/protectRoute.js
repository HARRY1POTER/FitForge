// utils/protectRoute.js
import { useNavigate } from "react-router-dom";

export const protectRoute = (Component) => {
  return () => {
    const navigate = useNavigate();

    if (!localStorage.getItem("token")) {
      navigate("/login");
      return null;
    }

    return <Component />;
  };
};
