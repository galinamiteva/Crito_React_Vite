//import React from 'react'
import Kristina from '../assets/images/Kristina.png';
import Mark from '../assets/images/Mark.png';
import Kimberly from '../assets/images/Kimberly.png';
import Justin from '../assets/images/Justin.png';
import Cassandra from '../assets/images/CassandraW.png';
import Amanda from '../assets/images/Amanda.png';
import Jack from '../assets/images/JackMc.png';
import Button from './Generics/Button';
import MemberBox from '../componens/Generics/MemberBox';
import Testimonial from './Generics/Testimonial';



const MeetTeam = () => {
  return (
    <section className="meet-our-team">

    <div className="container">

        <div className="meet-team-title">
                   
             <div className= "meet-title">
                <h5 className="red-text">Meet Our Team</h5>
                <h2 className="title">Experience Team Members</h2>
            </div> 
            
            

            <div className="browse-button">                
               
                <Button text = 'Browse Team' url='#' theme = 'beige' />
            </div>        
            
            <div className="browse-button-mobile">                
               
                <Button text = 'Browse Team' url='#' theme = 'beige' />
            </div>               
          
            
            
        </div>
        
    
        <div className="meet-team-members">

            
           
            <MemberBox img = {Kristina} altText= "bild of Kristine Palmer" name= "Kristine Palmer" description='Chef Operation Officer' />
            <MemberBox  img={Mark} name='Mark Aubri' description='Senior Consultant' altText='Mark Aubri img'/>
            <MemberBox  img={Kimberly} name='Kimberly Hansen' description='Senior Consultantr' altText='Kimberly Hansen img'/>
            <MemberBox  img={Justin} name='Justin Willoman' description='Senior Tech Consultant' altText='Justin Willoman img'/>

 
                               
            
        </div>

        <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>                
        </div>
    

        {/* <!-- ------------------------Testimonial start-----------------> */}

        <section className="testimonial">
            
                <div className="testimonial-title">
                    <h5 className="red-text">Testimonials</h5>
                    <h2 className="title">What Our Client Says</h2>
                </div>
                
            
                <div className="container">

                    <Testimonial img={Cassandra} name="Cassandra Warren" jobTitle="Business Manager, Dorfus" />
                    <Testimonial img={Amanda} name="Amanda Tulling" jobTitle="Senior Developer, Square" />
                    <Testimonial img={Jack} name="Jack McDogglas" jobTitle="Key Account Manager, Gobona" />               

                </div>

                

                <div className="testimonial-btn">                
               
                    <Button text = 'All Reviews' url='#' theme = 'black' />
                </div>           
        </section>

    </div>

</section>

  )
}

export default MeetTeam