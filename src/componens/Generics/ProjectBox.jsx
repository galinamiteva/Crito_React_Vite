/* eslint-disable react/prop-types */
//import React from 'react';
import {Link} from 'react-router-dom';

const ProjectBox = ({img, altText, title, url}) => {
  return (
    <Link className='article' to ={ url }>
        <img src={img} alt={altText}/>
        <h3>{title}</h3>
        
         <div> Read more <i className="fa-solid fa-arrow-up-right-dots"></i> </div>

        

    </Link>
  )
}

export default ProjectBox