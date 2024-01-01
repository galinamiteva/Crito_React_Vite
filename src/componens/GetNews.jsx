/* eslint-disable react/no-unknown-property */
//import React from 'react'
import backgroundLines from '../assets/images/background-wavy-lines.svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const GetNews = () => {
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      
      email:''    

    },
    validationSchema: Yup.object({
      
      email: Yup.string().min(3).required('Please write an email').matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
     
      policy: Yup.boolean().oneOf([true], 'Terms & Conditions muct be checked')

    })
  });

  return (
    <section className="news-form">
    <img src={backgroundLines} alt="wavy lines" className="background-lines"/>
    <div className="container">
         <h2 className="title">Get News Updates By Signup</h2>
       <form metod="post" className="content-box" noValidate>
           
            <div className="form-bit">
              
              <label                    
                    htmlFor='email'                    
                    className={form.errors.email && form.touched.email ? 'error' 
                    : !form.errors.email && form.touched.email ? 'success': ''}>
                    {form.errors.email && form.touched.email ? form.errors.email : "Email"}         
                </label>
              
              
              <input 
                    id='email'
                    placeholder="username@domain.com"
                    className={form.errors.email && form.touched.email ? 'finput-error'
                    :!form.errors.email && form.touched.email ? 'finput-success' : ''}
                     type="text" 
                     name="email"                     
                     value={form.values.email} 
                     onBlur={form.handleBlur} 
                     onChange={form.handleChange} 
                     required/>
            
            </div>
            <button href="/" className="button-yellow" type="submit">Subscribe <i className="fa-solid fa-arrow-up-right-dots"></i></button>
        </form>
    </div>
</section>
  )
  
}

export default GetNews