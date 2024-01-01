/* eslint-disable react/prop-types */
//import React from 'react'

const ContactBox = ({title, icon, paragraph1, paragraph2}) => {

  return (

    <div className="box-item">
        <div className="icon">
            <i className={icon}></i>
        </div>   

        <div className="text-content">
            <h3>{title}</h3>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>                    
        </div>

    </div>   

  )
}

export default ContactBox