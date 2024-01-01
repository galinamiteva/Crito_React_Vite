//import React from 'react'
import Footer from '../componens/Footer';
import {useNavigate} from 'react-router-dom';
import Button from '../componens/Generics/Button';




const NotFoundPage = () => {
const navigate = useNavigate();


  return (
    <div className='wrapper'>

        
        <section className='error-page container'>

            <div>
                <h2>
                404 Page Not Found
                </h2>
                <i className="fa-solid fa-ban"></i>
            </div>
            <Button onClick = {()=> navigate(-1)}
            text = 'Go back' url='/Home' theme = 'yellow' />

        </section>
        <Footer/>
        
    </div>
  )
}

export default NotFoundPage