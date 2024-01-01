//import React from 'react'
import conversation from '../assets/images/conversation.png';
import ChooseBox from './Generics/ChooseBox';

const Choose = () => {
    return (
        <section className="why-choose-us">
        <div className="beige-backgr-box"></div>
        <div className="container"> 
    
            <div className="why-choose-content">            
                
                <h5 className="red-text">Why choose us</h5>
                <h2 className="why-choose-title title">Why We Are The Best Business Consulting Agency</h2>
    
                <div className="why-choose-advert">
    
                    <ChooseBox icon= "fa-brands fa-dropbox" title="Strategic Planning" text="Lorem ipsum dolor sit amet consectetur" />
                   
                    <ChooseBox icon="fa-solid fa-school-lock" title="Experience Design" text="Lorem ipsum dolor sit amet consectetur" />
                  
                    <ChooseBox icon="fa-solid fa-face-grin-hearts" title="Artificial Inteligence" text="Lorem ipsum dolor sit amet consectetur" />
      
                   
                </div>
                
            </div>
    
            <div className="why-choose-img">
                
                <img src={conversation}  alt="two women talking"/>
            </div>
            
            
        </div>
    
    </section>
      )
}

export default Choose;
