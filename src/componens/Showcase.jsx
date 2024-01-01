import simpleLine from '../assets/images/background-lines.svg';
import Button from './Generics/Button';
import Container from 'react-bootstrap/Container';
import showcaseHero from '../assets/images/showcase.svg';


const Showcase = () => {
    return (
      <section className="showcase">
             
              <Container className="container">
                  <div className="showcase-info">
                      <h1 className="showcase-title"> We Provide The Best Business Solutions</h1>
                      <h6 className="showcase-paragraph">Establish your vision and value proposition and turn them into testable prototypes</h6>
                      <div className="showcase-btn">
                       
                          <Button text = 'Get Consulting' url='/service' theme = 'yellow'/>
   
                  
                         
                         <Button text = 'Learn More' url='/service' theme = 'beige'/>
                      </div>
                  </div>
                  <div className="showcase-img">
                      
                      <img src={showcaseHero} alt="man with glasses" className="showcase-img"/>
                  </div> 
                  
              </Container>
              
              <img src={simpleLine} alt="simple line" className="simple-line"/>
          </section>
    )
  }
  
  export default Showcase