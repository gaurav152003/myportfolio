import React from 'react'
import { FlipWords } from './FlipWords'
import { delay, motion } from 'motion/react'

function Herotext() {
  const word = ["Secure", "Modern", "Scalable","Responsive"]

  const variants = {
    hidden: { opacity: 0, x: 500 }, // start lower & invisible
    visible: { opacity: 1, x: 0 }, // end normal
  }

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop view */}
      <motion.div
        className="hidden flex-col md:flex c-space"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }} // children animate one by one
      >
        <motion.h1
          className="text-5xl font-bold text-smooth"
          variants={variants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Hi I'm Gaurav Yadav
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-4xl font-bold  text-smooth"
            variants={variants}
            transition={{ duration: 2.2, ease: "easeOut"}}
          >
            A Software Developer <br
              variants={variants}
              transition={{duration:2.3,ease:"easeOut"}}
            /> Dedicated to Crafting
          </motion.p>

          <motion.div
            variants={variants}
            transition={{duration:2.4,ease:"easeOut" }}
          >
            <FlipWords
              words={word}
              className="text-8xl font-black text-white text-smooth-flip"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium  text-smooth"
            variants={variants}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            Websites
          </motion.p>

          <motion.p
            className='text-1xl mt-5 hover:animate-bounce'
            variants={variants}
            transition={{duration:2.6 ,ease:"easeOut"}}
          >
            <a href='#project' className='work-button ' >View My Work</a>
          </motion.p>
        </div>
      </motion.div>

      {/* Mobile view */}
      <motion.div
        className="flex flex-col md:hidden"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.p
          className="text-4xl font-medium  text-smooth"
          variants={variants}
         transition={{ duration: 2, ease: "easeOut" }}
        >
           Hi I'm Gaurav Yadav
        </motion.p>

        <motion.p
          className="mt-1 text-3xl font-black text-neutral-300  text-smooth"
          variants={variants}
          transition={{ duration: 2.2, ease: "easeOut"}}
        >
           A Software Developer <br
              variants={variants}
              transition={{duration:2.3,ease:"easeOut"}}
            /> Dedicated to Crafting
        </motion.p>

        <motion.div
          className="mt-1"
          variants={variants}
          transition={{duration:2.4,ease:"easeOut" }}
        >
          <FlipWords
            words={word}
            className="text-7xl font-medium text-white  text-smooth-flip"
          />
        </motion.div>

        <motion.p
          className="mt-1 text-3xl font-black text-neutral-300  text-smooth"
          variants={variants}
         transition={{ duration: 2.5, ease: "easeOut" }}
        >
          Websites.
        </motion.p>
        <motion.p
            className='text-1xl mt-5 hover:animate-bounce'
            variants={variants}
            transition={{duration:2.6 ,ease:"easeOut"}}
          >
            <a href='#project' className='work-button ' >View My Work</a>
          </motion.p>
      </motion.div>

    </div>
  )
}

export default Herotext
