import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; 
function Footer() {
    return (
        <>
           <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[3px]  ' />
      <div  className='flex items-center h-10 w-full p-10 gap-2 justify-between'>
      <p className=' text-neutral-200' >© 2025 Gaurav Yadav All rights reserved.</p>
         <div className='flex gap-3' style={{fontSize:"20px"}}>
              <a href="https://github.com/gaurav152003" target="_blank" >
                <FaGithub className="hover:text-gray-600   " />
            </a>
            <a href="https://www.instagram.com/15._gaurav_/" target="_blank" rel="noopener noreferrer" >
                <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/gaurav-yadav-014756268/" target="_blank" rel="noopener noreferrer" >
                <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://wa.me/919321049909" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500" />
                    </a>
                    </div>
           <p><span className='inline-flexflex '>Back to top</span><a href='#home' className='bg-neutral-300 ml-2 text-black' style={{borderRadius:"18px",padding:"6px",fontSize:"12px",fontWeight:"bold"}}>&#8593;</a></p>
    </div>
        </>
  )
}

export default Footer
