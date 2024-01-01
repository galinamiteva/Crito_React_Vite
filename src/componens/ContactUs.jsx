//import React from 'react';
import {useFormik} from 'formik';
//import Button from './Generics/Button';
import * as Yup from 'yup';


const ContactUs = () => {  //https://www.regextester.com  - validator Regex



  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      name:'',
      email:'',
      message:''

    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).required('Please write a name').matches(
        /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, 'invalid name'),
      email: Yup.string().min(4).required('Please write an email').matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
      message: Yup.string().required('Please write a message').min(5, 'min 5 characters').max(350, 'The message should be with max 1000 characters'),
      policy: Yup.boolean().oneOf([true], 'Terms & Conditions muct be checked')

    }),
    onSubmit: async (values, {resetForm}) => {
     
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.status === 200) {
        alert('Message sent!'); // bättre med feedback  med grön färg -nåt paragrafh!!! Use state funktion?
        
        resetForm({values:''})
      } else if (response.status === 400) {
        alert('Provided data is invalid');
       
      }

      else {
        alert('Failed to send the message');
      }
    }
  });

  

  return (
    <section className="contact-us">
        <div className="container">

            

          <div className='contact-content'>
            <div className='title-form'>
                  <h2 className="title">Leave us a message <br/> for any information</h2>
            </div>

            <form method="post" className="content-box" onSubmit={form.handleSubmit} noValidate>
               
                <div className="form-bit">
                    <label 
                    htmlFor='name'
                    className={form.errors.name && form.touched.name ? 'error' 
                    : !form.errors.name && form.touched.name ? 'success': ''}>
                    {form.errors.name && form.touched.name ? form.errors.name : "Name"}         
                    </label>
                    <input 
                    id='name'
                    className={form.errors.name && form.touched.name ? 'finput-error'
                    :!form.errors.name && form.touched.name ? 'finput-success': ''}
                     type="text" 
                     name="name"                     
                     value={form.values.name} 
                     onBlur={form.handleBlur} 
                     onChange={form.handleChange} 
                     required/>
                </div>

                <div className="form-bit">
                <label                    
                    htmlFor='email'
                    className={form.errors.email && form.touched.email ? 'error' 
                    : !form.errors.email && form.touched.email ? 'success': ''}>
                    {form.errors.email && form.touched.email ? form.errors.email : "Email"}         
                </label>
                    
                    <input 
                    id='email'
                    className={form.errors.email && form.touched.email ? 'finput-error'
                    :!form.errors.email && form.touched.email ? 'finput-success' : ''}
                     type="text" 
                     name="email"                     
                     value={form.values.email} 
                     onBlur={form.handleBlur} 
                     onChange={form.handleChange} 
                     required/>
                </div>

                <div className="form-bit">
                <label 
                  htmlFor='message'
                  className={form.errors.message && form.touched.message ? 'error'
                  : !form.errors.message && form.touched.message ? 'success': ''}>
                  {form.errors.message && form.touched.message ? form.errors.message : "Your Message"}
                </label>
                <textarea
                  id='message'
                  value={form.values.message}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  name='message'
                  className={form.errors.message && form.touched.message ? 'finput-error'
                  :!form.errors.message && form.touched.message ? 'finput-success': ''}
                  required>
                </textarea>
                </div>         
     
                
                <button href="/" className="button-yellow" type="submit">Send Message <i className="fa-solid fa-arrow-up-right-dots"></i></button>
               {/*  <Button text = 'Send Message' url='/' theme = 'button-yellow'  type="submit"/>  fungerar nte*/}
               
                
            </form>
               </div>
        </div>
    </section>
  )
}

export default ContactUs