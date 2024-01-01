
import Paperz from '../assets/images/paperz.svg';
import Dorfus from '../assets/images/dorfus.svg';
import Martino from '../assets/images/martino.svg';
import Square from '../assets/images/square.svg';
import Gobona from '../assets/images/gobona.svg';
import Container from 'react-bootstrap/Container';


const CompanyLogos = () => {



  const logos = [
    { name: 'Paperz', src:`${Paperz}`, alt: 'paperz logo' },
    { name: 'Dorfus', src: `${Dorfus}`, alt: 'dorfus logo' },
    { name: 'Martino', src: `${Martino}`,  alt: 'martino logo' },
    { name: 'Square', src: `${Square}`,  alt: 'square logo' },
    { name: 'Gobona', src: `${Gobona}`,  alt: 'gobona logo' },
  ]
  
  
    return (
      <section className="company_logos">
          <Container className="container">
             
                 
              {
                logos.map((logos, index)=>(
                  <img key={index} src={logos.src} alt={logos.alt}/>  
                ))
              }
  
  
          </Container>
      </section>
  
  
    )
  }
  
  export default CompanyLogos 
  
  