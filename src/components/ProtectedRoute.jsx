import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppStateContext } from "../context/AppStateContext";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AppStateContext);

  if (!user.token) {
    return <Navigate to="/" />;
  }
  return children;
};
