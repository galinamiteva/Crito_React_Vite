/* eslint-disable react/prop-types */
//import React from 'react'

const MemberBox = ({img, altText, name, description}) => {
  return (
    <div className="member">
        <img src={img} alt={altText}/>
        <h3 className="name">{name}</h3>
        <p className="job">{description}</p>              
    </div>

  )
}




export default MemberBox