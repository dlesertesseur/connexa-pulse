import { useContext, useEffect } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { options } from "../data/options";
import AnimationRoutes from "./AnimationRoutes";

const PrincipalPanel = () => {
  const { setOptions } = useContext(AppStateContext);

  const getData = async () => {
    setOptions(options);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnimationRoutes />;
};

export default PrincipalPanel;
