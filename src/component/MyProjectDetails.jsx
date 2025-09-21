import React from 'react'
import { motion } from "motion/react";
function MyProjectDetails({
    title,
    description,
    subDescription,
    tags,
    image,
    href,
    closeModal
}) {
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
              className="relative max-w-2xl border shadow-sm rounded-3xl bg-gradient-to-b from-black via-black to-gray-800 border-white/10 mr-1.5 ml-1.5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{duration:1}}
      >
              <button
                  onClick={closeModal}
                  className="absolute p-1  top-3 right-3 bg-black hover:bg-midnight"
                  style={{border:" 0.5px solid black",borderRadius:"20px"}}
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
              <img src={image} alt={title} className="w-full rounded-t-3xl" />
              <div className='p-2'>
                  <p  className='text-2xl' style={{fontWeight:"bold"}}>{title}</p>
                  <p style={{fontSize:"15px"}} className='subtext mb-3'>{description}</p>
                  {subDescription.map((s) => (<p style={{ fontSize: "13px" }} className='subtext '>{s}</p>))}  
                  <div className='flex items-center justify-between mt-5'>
                      <div className='flex gap-3' >
                          {tags.map((t)=>(<img key={t.id} src={t.path} className='rounded-3xl size-10 hover:animate-bounce cursor-pointer'/>))}
                      </div>
                      <a className='inline-flex gap-2 text-black cursor-pointer items-center'href={href} >View Code<img src='assets/Logos/github.svg' className='h-8 w-8 cursor-pointer'/></a>
                  </div>
              </div>
  </motion.div>
</div>

  )
}

export default MyProjectDetails
