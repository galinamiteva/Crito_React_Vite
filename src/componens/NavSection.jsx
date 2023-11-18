import  {useState} from 'react'
import companyLogo from '../assets/images/crito-logo.svg';
import Container from 'react-bootstrap/Container';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from './Generics/Button';


const NavSection = () => {
    const [menuActiv, setMenuActiv] = useState(false)

    const toggleMenu = () => {
       if (menuActiv){
        setMenuActiv(false)
       }else{
        setMenuActiv(true)
       }
       window.scrollTo(0, 0)
    }

  return (
    <section className='nav-section'>        

    <Container className="container">      

    <img src={companyLogo} alt="company-Crito-logo" className="logo"/>
     
       
            <nav className="navigation-bar">
                <div className="upper-info">
                    <div className="business-info">
                    
                        <span className="number"> <i className="fa-solid fa-phone-volume"></i> +46 (8) 121 470 50</span>
                        <span className="email"> <i className="fa-regular fa-envelope"></i> info@crito.com</span> 
                        <span className="address"> <i className="fa-solid fa-location-dot"></i>
                        <Link to="https://maps.app.goo.gl/JUjns7mUxx5Q5QEL8" target="_blank" rel="noreferrer">Sveavägen 31 111 34 Stockholm</Link>                      
                         </span> 
                    </div>
                    <div className="social-media">
                        

                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                        
                    </div>
                </div>              


                <div className="lower-info">
                    <nav className="navigation-links">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/service'>Services</NavLink>
                        <NavLink to='/news'>News</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>


                                    
                    </nav>
                
                    <div className="login-btn">                   
                
                        <Button text = 'Login' url='/login' theme = 'yellow' />
                        
                    </div>

                </div> 
            </nav>

            <button onClick={toggleMenu} className='menu-mobil-toggle' >
                <i className="fa-solid fa-bars-staggered"></i>
            </button>

            {menuActiv ?
            (
                <div className='menu-mobil'>
                    <button onClick={toggleMenu} className='menu-mobil-toggle'><i className="fa-solid fa-xmark"></i></button>
                    <div className='nav-links'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/service'>Services</NavLink>
                        <NavLink to='/news'>News</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>

                    </div>
                
                </div>
            ): ""
             }



        </Container>
</section>
  )
}

export default NavSection