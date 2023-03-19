import React from 'react'

const GRIDetails = ({information}) => {
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
      <p className="text-gray-500 text-sm">{information.createdAt}</p>
    </div>
  )
}

export default GRIDetails