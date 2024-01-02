/* eslint-disable react/prop-types */
//import React from 'react'


function SectionTitle({title, description}) {
  return (
    <div className="section-title">
        <p>{title}</p>
        <h2>{description}</h2>
    </div>
  )
}

export default SectionTitle