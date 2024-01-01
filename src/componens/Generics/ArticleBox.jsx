/* eslint-disable react/prop-types */

import {Link} from 'react-router-dom';


const ArticleBox = ({index, title, description, img, alt, url}) => {

  return (
    <Link key = {index} className="content-box" to= {url}>
      <div className="article-img">

        <img src={img} alt={alt}/>
      </div>
    
      <div className="business-text">
          <p>Business</p>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>

    </Link>
  )
} 

export default ArticleBox  