import { useState } from "react";
import { useGriContext } from "../hooks/useGriContext";

const GRIForm = () => {
  const { dispatch } = useGriContext();
  const [sex, setSex] = useState("");
  const [experiance, setExperiance] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setSex("");
      setExperiance("");
      setAge("");
      setWeight("");
      setHeight("");
      setError(null);
      setEmptyFields([]);
      console.log("new info added");
      dispatch({ type: "CREATE_GRI", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <h3 className="text-red-500 text-3xl mt-8 mb-4">Add Your Information</h3>

      <div className={`mb-4 ${emptyFields.includes('sex') ? 'border-red-500' : ''}`}>
  <label className="block text-gray-700 font-bold mb-2" htmlFor="sex">
    Sex:
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    id="sex"
    placeholder="Enter your sex"
    onChange={(e) => setSex(e.target.value)}
    value={sex}
  />
</div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="experiance"
        >
          Experiance:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emptyFields.includes("experiance") ? "border-red-500" : ""
          }`}
          type="text"
          id="experiance"
          placeholder="Enter your experiance"
          onChange={(e) => setExperiance(e.target.value)}
          value={experiance}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
          Age:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emptyFields.includes("age") ? "border-red-500" : ""
          }`}
          type="text"
          id="age"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
          Weight:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emptyFields.includes("weight") ? "border-red-500" : ""
          }`}
          type="text"
          id="weight"
          placeholder="Enter your weight"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="height">
          Height:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emptyFields.includes("height") ? "border-red-500" : ""
          }`}
          type="text"
          id="height"
          placeholder="Enter your height"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Info
      </button>

      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
  );
};

export default GRIForm;
