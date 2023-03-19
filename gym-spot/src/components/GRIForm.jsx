import { useState } from "react";

const GRIForm = () => {
  const [sex, setSex] = useState("");
  const [experiance, setExperiance] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gri = { sex, experiance, age, weight, height };

    const response = await fetch("http://192.168.0.229:7000/api/gym-rat-i", {
      method: "POST",
      body: JSON.stringify(gri),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setSex("");
      setExperiance("");
      setAge("");
      setWeight("");
      setHeight("");
      setError(null);
      console.log("new info added");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-[red] mt-11">Add your info</h3>

      <div>
        <label>Sex:</label>
        <input
          className="mt-16 border-radius 0px"
          type="text"
          onChange={(e) => setSex(e.target.value)}
          value={sex}
        />
      </div>

      <div>
        <label>Experiance:</label>
        <input
          type="text"
          onChange={(e) => setExperiance(e.target.value)}
          value={experiance}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </div>

      <div>
        <label>Weight:</label>
        <input
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
      </div>

      <div>
        <label>Height:</label>
        <input
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
      </div>
      <button 
      type="submit"
      className="font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4">
        Add info
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default GRIForm;
