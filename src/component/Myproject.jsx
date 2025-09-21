import React, { useState } from 'react'
import MyProjectDetails from './MyProjectDetails'

function Myproject({ title, tags, description, subDescription, href, image ,setpreview}) {
  const [isHidden, setisHidden] = useState(false);
  return (
    <>
      <div className='flex-wrap items-center py-10 justify-baseline space-y-2 sm:flex-wrap sm:space-y-0'
        onMouseEnter={() => setpreview(image)}
        onMouseLeave={()=>setpreview(null)}
      >
        <p className='text-2xl ' style={{fontWeight:"bold"}}>{title}</p>
      <div className='flex gap-5 mt-2 text-sand'>
          {tags.map((t) => (<span key={t.id}>{t.name}</span>))}
      </div>
        <div className='md:flex flex-col md:mr-15 md:items-end'>
          <button onClick={()=> setisHidden(true)} className='mt-8  md:mt-0 hover:text-sky-500'> Read More &rarr;</button>
      </div>
    </div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px]  ' />
      { isHidden &&(<MyProjectDetails title={title} description={description} subDescription={subDescription} image={image} tags={tags} href={href} closeModal={() =>setisHidden(false)} />)}
      </>
  )
}

export default Myproject
