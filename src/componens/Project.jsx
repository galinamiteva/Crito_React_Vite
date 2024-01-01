//import React from 'react'
import newspaper from '../assets/images/newspaper.png';
import glasses from '../assets/images/glasses.png';
import notepad from '../assets/images/notepad.png';
import laptop from '../assets/images/laptop.png';
import ProjectBox from './Generics/ProjectBox';
import Button from './Generics/Button';


const Project = () => {
  return (
    <section className="project">
    <div className="container">
        <div className="project-upp">
            <h5 className="red-text">Project & Case Studies</h5>
            <h2 className="project-title title">Lets Looks Our Global Projects</h2>
        </div>

        <div className="project-grid">

            <ProjectBox img = {newspaper} altText= "a man who reads a newspaper" title= "Grow Your Business" url="/news"/>
            <ProjectBox img = {glasses} altText= "glasses, an ipad and a phone" title= "Why your client needs a responsive website" url="/news"/>
            <ProjectBox img = {notepad} altText= "a cup and notepad" title= "Why your client needs a responsive website" url="/news" />
            <ProjectBox img = {laptop} altText= "a laptop shows charts" title= "Business Insights is a important piece of your business" url="/news"/>
                        

        </div>
       

        <div className="project-btn">
           
            <Button text = 'All Recent Projects' url='#' theme = 'black' />
        </div> 

    </div>
</section>
  )
}

export default Project