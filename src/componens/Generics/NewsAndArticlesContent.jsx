/* eslint-disable react/prop-types */
//import React from 'react'



function NewsAndArticlesContent({pic, title, category, text }) {

  return (
    <div>
          <div className="article-news-content">
            <img className="img-fluid" src={pic} />                 
            <h3>{category}</h3>
            <h5>{title}</h5>
            <p>{text}</p>
          </div>  
    </div>
  )
}

export default NewsAndArticlesContent