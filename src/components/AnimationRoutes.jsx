import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import FadeTrancition from "./Transition/FadeTrancition";
import Options from "../pages/Options";
//import NotImplemented from "../pages/NotImplemented";

const AnimationRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          exact path="/"
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <Options />
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/option1"
          element={
            <ProtectedRoute>
              <FadeTrancition>
                {() => {"<h1>CADORNA</h1>"}}
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/main/menu/option2"
          element={
            <ProtectedRoute>
              <FadeTrancition></FadeTrancition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
