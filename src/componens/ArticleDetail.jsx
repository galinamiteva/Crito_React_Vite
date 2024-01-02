import  { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import ArticleDetailRight from './Generics/ArticleDetailRight'
import { useArticles } from '../contexts/ArticleContext'
import ArticleDetailButtons from './Generics/ArticleDetailButtons'


function Article() {
  const { article, threeArticles, fourArticles, getArticle } = useArticles()
  const { id } = useParams()

 useEffect(() => {
  getArticle(id)
 }, [getArticle, id])

  return ( 
    <div className='articleDetail'>
      <div className='container'>
        
        <div className="content-top">
            <h2>{article.title}</h2>
              <div className='content-top-detail'>
                <div>
                  {new Date(article.published).toLocaleDateString()}            
                </div>
                <i className="fa-solid fa-circle"></i>
                <div>
                  {article.category}
                </div>
                <i className="fa-solid fa-circle"></i>
                <div>       
                  {article.author}
                </div>
              </div>
        </div>

        <div className="content-main">
          <img src={article.imageUrl}/>
          <p>{article.content}</p> 
          <ArticleDetailButtons />
        </div>

        <div className="content-side">
            <form>     
              <i className="fa-thin fa-magnifying-glass"></i>                          
              <input type="text" placeholder="Type to search..." />                              
            </form>

            <div className="r-post">
              <h3>Recent Posts</h3>
              {
                    fourArticles.map(article => (
                        <Link key={article.id} to={`/article/${article.id}`}>
                            <ArticleDetailRight title={article.title} published={new Date(article.published).toLocaleDateString()} />
                        </Link>
                    ))
              }
            </div>

            <div className="categories1">
              <h3>Categories</h3>
              {
                  threeArticles.map(article => {
                    const categoryCount = threeArticles.filter(a => a.category === article.category).length;

                    return (
                      <div key={article.id}>
                        <p><strong>{article.category}</strong> - {categoryCount} Posts</p>
                      </div>
                    );
                  })
              }
            </div>

        </div>
      </div>
    </div>

  )
}

export default Article