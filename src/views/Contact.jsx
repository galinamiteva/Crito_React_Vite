//import React from 'react'
import Footer from '../componens/Footer'
import BreadCum from '../componens/BreadCum'
import CompanyContact from '../componens/CompanyContact';
import ContactUs from '../componens/ContactUs';
import ContactMap from '../componens/ContactMap';

const Contact = () => {
  return (
    <div className='wrapper' >

        <BreadCum  title="Let&#39;s Connect"/>     
        <main>
          <CompanyContact/>
          <ContactUs/>
          <ContactMap/>
        </main>
        <Footer/>
        
          

    </div>
  )
}

export default Contact