//import React from 'react'
import ArticleBox from "./Generics/ArticleBox"
import smile_25mar from '../assets/images/Smile_25_mar.png';



const NewsAndArticles = () => {
    return (
        <section className="news-and-article">
        <div className="container">
                <h2 className="title">Our News & Article</h2>

            <div className="content-box">

                <ArticleBox title= "How To Use Digitalization In The Classroom" description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure" img={smile_25mar} alt="photo of a smiling woman" url="article_detail.html" />
{/*             <ChooseBox icon= "fa-brands fa-dropbox" title="Strategic Planning" text="Lorem ipsum dolor sit amet consectetur" />
 */}                   

               {/*  <div className="article-news-content" id="article-content-1">
                    <a  href="article_detail.html" className="article-img"> <img src="./images/Smile_25_mar.png" alt="photo of a smiling woman"/> </a>
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>

                <div className="article-news-content" id="article-content-2">
                    <a href="article-detail.html" className="article-img"> <img src="./images/article_17_mar.png" alt="a photo of ChatGpt:s page  "/></a>
                    <p>Business</p>
                    <h3>How To Implement ChatGpt In Your Projects</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>

                <div className="article-news-content" id="article-content-3">
                    <a href="article-detail.html"   className="article-img"> <img src="./images/Book_13mar.png" alt="a photo of CSS books"/> </a>
                    <p>Business</p>
                    <h3>How Guide To Support Modern CSS Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>


                <div className="article-news-content" id="article-content-4">
                    <a href="article-detail.html"   className="article-img"> <img src="./images/notepad_12mar.png" alt="photo of some sitting people "/> </a>
                    <p>Business</p>
                    <h3>Why You Need To Implement The Five S</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>

                <div className="article-news-content" id="article-content-5">
                    <a href="article-detail.html"   className="article-img"> <img src="./images/ofice_lapm_07mar.png" alt="photo of an office"/></a>
                    <p>Business</p>
                    <h3>Get Mire Involved With Your End Users</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>

                <div className="article-news-content" id="article-content-6">       
                    <a href="article-detail.html"  className="article-img"> <img src="./images/descs_02mar.png" alt="photo of meny desks"/></a>
                    <p>Business</p>
                    <h3>Guided Tour Of Our News Head Office In Stockholm</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>


                <div className="article-news-content" id="article-content-7">
                    <a href="article-detail.html"  className="article-img"> <img src="./images/Chart_28feb.png" alt="photo of a laptops screen"/></a>
                    <p>Business</p>
                    <h3>Using Business Intelligence To Get Insights Into Our Businesses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>
                <div className="article-news-content" id="article-content-8">
                    <a href="article-detail.html"  className="article-img"> <img src="./images/glasses_18feb.png" alt="photo of glasses and a tablet"/></a>
                    <p>Business</p>
                    <h3>Apple Has Released New Product. Are They Any Good?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>
                <div className="article-news-content" id="article-content-9">
                    <a href="article-detail.html"  className="article-img"> <img src="./images/notepad_11feb.png" alt="photo of anotepad and a cup"/></a>
                    <p>Business</p>
                    <h3>How To Improve Your Teams And Get A Better Result</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis iure</p>
                </div>
            
                 */}
            </div>

                <div className="carousel-slider">
                    <button className="carousel-button"><i className="fa-solid fa-chevron-left"></i></button>
                    <button className="carousel-button">1</button>
                    <button className="carousel-button">2</button>
                    <button className="carousel-button">3</button>
                    <button className="carousel-button">...</button>
                    <button className="carousel-button">9</button>
                    <button className="carousel-button"><i className="fa-solid fa-chevron-right"></i></button>
                </div>

        </div>
    </section>

    )
  }
  
  export default NewsAndArticles