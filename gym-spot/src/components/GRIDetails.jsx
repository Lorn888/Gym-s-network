import React from "react";
import { useGriContext } from "../hooks/useGriContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const GRIDetails = ({ information }) => {
  const { dispatch } = useGriContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://192.168.0.229:7000/api/gym-rat-i/" + information._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_GRI", payload: json });
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-4">
      <h4 className="text-lg font-medium mb-2">{information.sex}</h4>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <p className="text-gray-600">
            <strong>Experiance (years):</strong> {information.experiance}
          </p>
          <p className="text-gray-600">
            <strong>Age (years):</strong> {information.age}
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            <strong>Weight (kg):</strong> {information.weight}
          </p>
          <p className="text-gray-600">
            <strong>Height (cm):</strong> {information.height}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-sm">
        {formatDistanceToNow(new Date(information.createdAt), {
          addSuffix: true,
        })}
      </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default GRIDetails;
