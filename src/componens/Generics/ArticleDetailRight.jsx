/* eslint-disable react/prop-types */
//import React from 'react'

function ArticleDetailRight({title, published}) {
  return (
    <>
        <div>
            <h4>{title}</h4>
            <p>{published}</p>
        </div>
    </>
  )
}

export default ArticleDetailRight