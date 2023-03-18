import { useEffect, useState } from "react";
import { GRIDetails } from "../components";

const Home = () => {
  const [gri, setGRI] = useState(null);

  useEffect(() => {
    const fetchGRI = async () => {
      const response = await fetch("http://192.168.0.229:7000/api/gym-rat-i");
      const json = await response.json();

      if (response.ok) {
        setGRI(json);
      }
    };
    fetchGRI();
  }, []); // empty [] means it will only fire once

  return (
    <div>
      {gri &&
        gri.map((information) => (
          <GRIDetails key={information._id} information={information}/>
        ))}
    </div>
  );
};

export default Home;
