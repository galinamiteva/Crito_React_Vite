//import React from 'react'
import backgroundLines from '../assets/images/background-lines.svg'; 
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const BreadCum = ({title}) => {  //evenuell om har tid för de andra sidor 
  return (
    <section className="broad-title">

        <div className="background-lines"><img src={backgroundLines} alt="background lines"/></div>

        <div className="container">
            <h6 className="title-small-text">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>   
                
            </h6>

            <h2 className="title-big-text">{title}</h2>
            
        </div>    
    </section>      
  )
}

export default BreadCum