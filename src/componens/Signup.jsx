//import React from 'react'

import img_backgroundwavy from '../assets/images/background-wavy-lines.svg'
import Button from './Generics/Button'

function Signup() {

  return (
    <section className="signup">
      <img className="bg-wavy-lines" src={img_backgroundwavy}/>   
        <div className="container">
        <h2>Get News Update By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com"/>
                    
                    <Button text = 'Subscribe' url='/contact' theme = 'yellow' />
                
                </form>
        </div>
    </section>
  )
}

export default Signup