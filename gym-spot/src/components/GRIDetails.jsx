import React from 'react'

const GRIDetails = ({information}) => {
  return (
    <div>
        <h4>
            {information.sex}
        </h4>
        <p>
            <strong>
                experience (years):
            </strong> {information.experience}
        </p>
        <p>
            <strong>
                age (years):
            </strong> {information.age}
        </p>
        <p>
            <strong>
                weightt (kg):
            </strong> {information.weight}
        </p>
        <p>
            <strong>
                height (cm):
            </strong> {information.height}
        </p>
        <p>
            {information.createdAt}
        </p>
    </div>
  )
}

export default GRIDetails