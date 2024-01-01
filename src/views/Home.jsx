//import React from 'react'
import Showcase from '../componens/Showcase';
import CompanyLogos from '../componens/CompanyLogos';
import Features from '../componens/Features'
import AboutCompany from '../componens/AboutCompany';
import OurService from '../componens/OurService';
import Choose from '../componens/Choose';
import Project from '../componens/Project';
import MeetTeam from '../componens/MeetTeam';
import ArticleNews from '../componens/ArticleNews';
import Footer from '../componens/Footer';
import GetNews from '../componens/GetNews';

const Home = () => {
  return (

    
    <div className='wrapper'>
        <main>
        <Showcase/>
        <CompanyLogos />    
         <Features /> 
        <AboutCompany/>
        <OurService/>
        <Choose/>
        <Project/>
        <MeetTeam/>
        <ArticleNews/>
         <GetNews/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home