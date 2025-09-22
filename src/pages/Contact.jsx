import React from 'react'
import { Mail, Phone } from "lucide-react";
import emailjs from "emailjs-com";


function Contact() {
    function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3skoa4o",   // 👉 replace with EmailJS Service ID
        "template_lk0hj4a",  // 👉 replace with EmailJS Template ID
        e.target,
        "VVZSuJgbOU4G0uabr"    // 👉 replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form after send
        },
        (error) => {
          alert("❌ Something went wrong: " + error.text);
        }
      );
  }

  return (
      <section className='flex flex-col gap-8 items-center justify-center mt-30 mb-30  ' id='contact' >
           <div className='flex flex-col items-center justify-center max-w-md p-5  rounded-2xl bg-black' >
              <div>
                  <h2 className='  text-3xl font-bold text-center'>Get In Touch</h2>
                  <p className=' subtext mt-3 text-center'>Have an opportunity in mind or looking to collaborate? I’d be glad to connect and explore how I can contribute.</p>
                  <a className='inline-flex gap-2 mt-4 text-black cursor-pointer bg-neutral-300 w-full rounded-3xl p-2'
                     href="mailto:gauravyadav49909@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect" 
                      target='_blank'
                  
                  ><Mail className='w-6 h-6 text-black' /> Email :<span className='hover:text-blue-500'>
                      gauravyadav49909@gmail.com</span></a>
                  <a className='cursor-pointer gap-2 inline-flex p-2 mt-2 text-black bg-neutral-300 w-full rounded-3xl'
                   href="tel:+919321049909"
                  ><Phone className='w-6 h-6 text-black' />Phone : <span className='hover:text-blue-500'> 9321049909</span></a>
              </div>
          </div>
          <div className='flex flex-col items-center justify-center max-w-md p-5  rounded-2xl bg-black text-white border border-white/10'  >
              <h2 className='font-bold text-center text-2xl '>Send a Message</h2>
              <form className='flex flex-col mt-2' onSubmit={sendEmail}>
                  <label >Your Name :</label>
                  <input name='from_name' type='text' className='w-100 bg-neutral-300 text-black   rounded-3xl mt-1 p-2 outline-none' placeholder='Full Name' />
                  <label className='mt-3' > Your Email :</label>
                  <input name='from_email' type='email' className='w-100 bg-neutral-300 text-black  rounded-3xl mt-1 p-2 outline-none' placeholder='example@gmail.com' />
                  <label className='mt-3' >Your Message :</label>
                  <textarea name='message' rows={3} type='text' className='w-100 bg-neutral-300 text-black rounded-3xl mt-1 p-2 outline-none' placeholder='Write your message here…' />
                  <button type='submit' className=' mt-5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl p-2 '>Send</button>
              </form>
          </div>
   </section>
  )
}

export default Contact
