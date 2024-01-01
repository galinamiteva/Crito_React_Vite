//import React from 'react'
import Button from './Generics/Button';
import FeaturesBox from './Generics/FeaturesBox';
import Container from 'react-bootstrap/Container';

const Features = () => {

const services = [
    {title:"Business Advice", icon:"fa-regular fa-handshake", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/service"},
    {title:"Startup Business", icon:"fa-regular fa-lightbulb", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/service"},
    {title:"Financial Advice", icon:"fa-solid fa-ranking-star", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/service"},
    {title:"Risk Management", icon:"fa-solid fa-box", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , url:"/service"},
]    


  return (
    
    <section className="features">
        <Container className="container wrapper">   
        
            <div className="features-info">
                <h5 className="red-text">Features</h5>            
                <div className="feature-mobile">
                    <h2 className="features-title title">Our Accounting is trusted by thousand of companies</h2>
                    
                    <Button text = 'Learn More' url='/service' theme = 'yellow' />

                </div>
            </div>
            <div className="features-aside">

                {
                    services.map((service, index) =>(
                        <FeaturesBox key= {index} title={service.title} icon={service.icon} description={service.description} alt = {service.alt} />
                    )) 
                }

                
            </div>
            
        </Container> 
    </section>
  )
}

export default Features