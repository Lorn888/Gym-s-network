import { GRIContext } from "../context/GRIContext";
import { useContext } from "react";

export const useGriContext = () => {
  const context = useContext(GRIContext);

    if (!context) {
        throw Error('useGriContext must be used inside an GriContextProvider')
    }

  return context;
};
