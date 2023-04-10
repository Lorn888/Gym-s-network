import { useEffect } from "react";
import { GRIDetails, GRIForm } from "../components";
import { useGriContext } from "../hooks/useGriContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { gri, dispatch } = useGriContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchGRI = async () => {
      const response = await fetch("http://192.168.0.229:7000/api/gym-rat-i", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_GRI", payload: json });
      }
    };
    if (user) {
      fetchGRI();
    }
  }, [dispatch, user]); // empty [] means it will only fire once

  return (
    <div>
      {gri &&
        gri.map((information) => (
          <GRIDetails key={information._id} information={information} />
        ))}

      <GRIForm />
    </div>
  );
};

export default Home;
