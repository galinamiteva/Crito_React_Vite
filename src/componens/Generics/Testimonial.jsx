/* eslint-disable react/prop-types */
//import React from 'react'

const Testimonial = ({img, name, jobTitle}) => {
    const stars = [1,2,3,4,5]


  return (
    
    <div className="flex-box">
        <div className="stars">
            {
                stars.map(star => <i key={star} className="fa-solid fa-star"></i>)
            }
        </div> 

       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque suscipit ea similique rerum, voluptatibus ad expedita nulla sapiente doloremque, quam iste minus?</p>
    
        <div className="client">
            <div className="client-img"><img src={img} alt={name}/></div>
            <div className="client-info">
                <h3 className="name">{name}</h3>    
                <p className="title-red red-text">{jobTitle}</p> 
            </div>                  
        </div>
    </div>


  )
}

export default Testimonial