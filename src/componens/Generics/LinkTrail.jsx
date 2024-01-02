/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from 'react-router-dom'

function LinkTrail({prev, current}) {
  return (
    <>
        <div className="link-trail">
            <ul className="breadcrumb">
                <li><Link to="/">{prev}</Link></li>
                <li className="active">{current}</li>
            </ul>
        </div>    
    </>
  )
}

export default LinkTrail