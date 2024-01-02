//import React from 'react'
import Footer
from "../componens/Footer"
import ArticleDetail from "../componens/ArticleDetail"
import NewsAndArticlesDetail from "../componens/NewsAndArticlesDetail"
import ArticleShowcase from '../componens/ArticleShowcase'



const Article = () => {
    return (
      <div>
        <ArticleShowcase/>
        <ArticleDetail/>
        <NewsAndArticlesDetail/>
        <Footer/>

      </div>
    )
  }
  
  export default Article