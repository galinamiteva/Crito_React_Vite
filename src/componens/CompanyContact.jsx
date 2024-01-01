//import React from 'react'
import ContactBox from './Generics/ContactBox'



const CompanyContact = () => {

const contacts =[
    {title: "Visit us", icon: "fa-solid fa-location-dot", paragraph1: "Sveavägen 31", paragraph2: "111 31 STOCKHOLM"},
    {title: "Call us", icon: "fa-solid fa-phone", paragraph1: "+46 (8) 121 470 50", paragraph2: "+46 (8) 121 470 51"},
    {title: "Email us", icon: "fa-regular fa-envelope", paragraph1: "info@crito.com", paragraph2: "support@crito.com"}
    
]

  return (
    <section className="company-contact">
        <div className="container">
                       
            {
                contacts.map((info, index) =>(
                    <ContactBox key = {index} title ={info.title} icon= {info.icon} paragraph1 = {info.paragraph1} paragraph2={info.paragraph2}/>
                ))
            }

          
        </div>

    </section>  
  )
}

export default CompanyContact