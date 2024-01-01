//import React from 'react';
import Walking from '../assets/images/walk.svg';
import Line from '../assets/images/EWlement.png';
import Button from './Generics/Button';



const AboutCompany = () => {
  return (
    
    <section className="about-company">
        <div className="container">
            <div className="about-img">
                <img src={Walking} alt="a walking woman" className="walking-woman"/>
                <div className="about-founder">
                    <h5>               
                        Samantha Brown, <span className="red-text">Founder</span>  
                    </h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <img src={Line} alt="line" className="about-background-lines"/>

            </div>
            <div className="about-info">
                <h5 className ="about-red-text red-text">About Company</h5>
                <h2 className="about-title title">We are Business Consulting Credit Repair Experts</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quod eius totam sapiente consequatur, veritatis veniam dolores eligendi aspernatur simil</p>
                <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quod eius totam sapiente consequatur, veritatis veniam dolores eligendi aspernatur simil </p>
                <div className="about-btn">
                <Button text = 'Learn More' url='/service' theme = 'black' />
                    {/* <a href="/service/aboutcompany" className="button-black">Learn More<i className="fa-solid fa-arrow-up-right-dots"></i></a> */}
                    <a href="/service" className="video-btn"><i className="fa-solid fa-play"></i></a>
                    <p className="video-text">Intro Video</p>
                </div>           

        </div>
                

    </div>
</section>


  )
}

export default AboutCompany