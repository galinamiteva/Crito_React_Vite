//import React from 'react'
import img_backgroundlines from '../assets/images/background-lines.svg'
import { Link } from 'react-router-dom'

function ArticleShowcase() {
  return (
    <section className="news-showcase">
    <img className="img-fluid" src={img_backgroundlines} alt=""/>

    <div className="container">
        <div className="content">
        <div className="link-trail">
            <ul className="breadcrumb">
                <li><Link to="/News">News</Link></li>
                <li className="active">Article</li>
            </ul>
        </div>  
          <h1>News & Articles</h1>
        </div>       
    </div>
    
</section>
  )
}

export default ArticleShowcase