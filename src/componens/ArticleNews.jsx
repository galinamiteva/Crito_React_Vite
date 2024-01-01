//import React from 'react';
import smile_25mar from '../assets/images/Smile_25_mar.png';
import article_17mar from '../assets/images/article_17_mar.png';
import book_13mar from '../assets/images/Book_13mar.png';
import Button from './Generics/Button';
import ArticleBox from './Generics/ArticleBox';


const ArticleNews = () => {

   
    
    
  return (
    <section className="article">
        <div className="container">


            <div className="article-title">
                <div className="container-title">                
                    <h5 className="red-text">Article & News</h5>
                    <h2 className="title"> Get Every Single Articles & News </h2>
                </div>                 

                <Button text = 'Browse Articles' url='/news' theme = 'beige' />
               
                
            </div>        
                
            <div className="article-content">

                <ArticleBox title="How To Use Digitalization In The Classroom" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure"  url="/news_details" alt="smiling woman" img= {smile_25mar} />
                <ArticleBox title="How To Implement ChatGpt In Your Projects" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure"  url="/news_details" alt="ChatGpt:s page" img= {article_17mar} />
                <ArticleBox title="How Guide To Support Modern CSS Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure"  url="/news_details" alt="CSS books" img= {book_13mar} />

           
                
            </div>
            
            <div className="dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>                
            </div> 
        </div>  

    </section>

  )


}

export default ArticleNews