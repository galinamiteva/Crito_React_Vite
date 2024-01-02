/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from 'react-router-dom'

function ArticleNewsContent({destination, image, title, description, text}) {
  return (
    <>
        <Link to={destination}><img className="img-fluid" src={image}/>               
          <p>{description}</p>
          <h3>{title}</h3>
          <p>{text}</p>
        </Link>                     
    </>
  )
}

export default ArticleNewsContent