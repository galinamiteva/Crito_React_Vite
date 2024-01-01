/* eslint-disable react/prop-types */
//import React from 'react'

const ChooseBox = ({icon, title, text}) => {
    return (
    
        <div className="why-choose-box">
            <div>
                <i className={icon}></i>
            </div>
            <div>
                {title}
                <p>{text} </p>
            </div>
        </div> 
      )
}

export default ChooseBox