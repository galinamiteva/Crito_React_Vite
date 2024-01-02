//import React from 'react'

import img_dot from '../assets/images/dot.svg'
import ArticleNewsContent from '../componens/Generics/ArticleNewsContent1'
import Button from './Generics/Button'
import SectionTitle from '../componens/Generics/SectionTitle'
import { useArticles } from '../contexts/ArticleContext'

function NewsAndArticlesDetail() {
    const { threeArticles } = useArticles()
    
  return (
    <section className="news-and-articles-detail  ">
        <div className="container">
            <div className="article-news-top">
                <SectionTitle title={"Article & News"} description={"Get Every Single Articles & News"}/>
                            
                <Button text = 'Browse Articles' url='/news' theme = 'beige' />

            </div>

            <div  className="article-news-content">
                {
                    threeArticles.map(article => (
                        <div className='article-content' key={article.id}>
                            <div className='article-news-content-date'>
                                <div>{new Date(article.published).toLocaleDateString('default', { day: 'numeric' })}</div>
                                <div>{new Date(article.published).toLocaleDateString('default', { month: 'short' })}</div> 
                            </div>
                            <ArticleNewsContent destination={`/article/${article.id}`} image={article.imageUrl} title={article.title} description={article.category} text={article.content} />                           
                        </div>
                    ))
                } 
            </div>   
            <div className='img_dot'>
                <img src={img_dot}/>
            </div>                   
        </div>
    </section>
  )
}

export default NewsAndArticlesDetail