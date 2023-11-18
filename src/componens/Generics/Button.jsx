/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({theme, url, text}) => {

    const getButtonClassName = () => {
        switch(theme) {
            case "yellow":
                return 'button-yellow'
            case 'black':
                return 'button-black'
            case 'beige':
                return 'button-beige'
               
                
            default:
                return 'button-beige'
        }
 
    }
  return (    
    <Link className={getButtonClassName()} to={url}>{text}<i className="fa-solid fa-arrow-up-right-dots"></i></Link>
  
    )
}
 
export default Button