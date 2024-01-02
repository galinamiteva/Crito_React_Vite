//import React from 'react'
import { Link } from 'react-router-dom'

function ArticleDetailButtons() {
    const buttons = ['Företag', 'Utbildning', 'IT']
  return (
    <div className='content-main-btn'>
        {
          buttons.map(button =>(
              <button key={button} className="btn-theme"><Link to={"/news"}>{button}</Link></button>
          ))
        }
    </div>
  )
}

export default ArticleDetailButtons