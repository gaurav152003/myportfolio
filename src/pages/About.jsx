import { FaHandshake } from "react-icons/fa";
import { Globe } from '../component/Globe';
import { Frameworks } from '../component/Frameworks';
import { MarqueeDemo } from '../component/MarqueeDemo';


function About() {
  return (
    <section id="about">
         <h1 className="text-heading ml-1.5" style={{textShadow:"0 2px 2px white"}}>About <span>Me</span> </h1>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-4 mr-1.5 ml-1.5 '>
              {/* 1 */}
              <div className='flex items-end grid-default-color grid-1 about-box'>
                  <div className=' flex flex-col md:mb-85'>
                      <p className='headtext md:font-bold'>Hi, I'm Gaurav Yadav</p>
                      <p className='text-neutral-300 subtext'>
                          Passionate about technology, driven by curiosity, and obsessed with creating meaningful software solutions. I turn ideas into code and challenges into learning opportunities.
                      </p>
                      <p className='subtext md:mt-2.5 mt-1.5'>I hold a Bachelor’s degree in Computer Science with a strong foundation in programming, problem-solving, and emerging technologies.</p>
                      <p className='subtext cv mt-2 hover:animate-bounce'><a
                          href="/GAURAV YADAV.pdf"
                          download={"GAURAV YADAV.pdf"}

                      >Download CV</a></p>
                  </div>
                  <div className="hidden md:absolute md:mt-8 md:h-80 md:mr-7 md:block border " style={{borderRadius:"15px"}} >
                    <img 
                        src="assets/back.jpg" 
                          className="w-200 h-full object-cover" 
                          style={{ borderRadius:"15px",boxShadow:"0 0 2px white"}}
                    />
                    </div>

                
              </div>


              {/* 2 */}
              <div className='flex items-end grid-default-color grid-2 about-box'>
                  <div className='mb-30 w-150'>
                      <p className=' md:font-bold md:text-2xl'>Projects</p>
                      <p className='subtext text-neutral-400 font-normal'>Here are some of my recent projects, built with focus on performance, usability, and user experience.</p>
                      <p className='subtext project-box md:mt-2 mt-0 hover:animate-bounce'><a href='#project'>View Projects</a></p>
                      <div className='absolute md:bottom-1 bottom-0'><MarqueeDemo/></div>
                  </div>
    
              </div>
              {/* 3 */}
              <div className='flex items-end grid-black-color grid-3 about-box'>
                  <div className='flex flex-col mb-35 md:mb-45 md:text-1.5xl '>
                      <p className='headtext md:font-bold'>Time Zone</p>
                      <p className='subtext'>Based in India | Open to remote opportunities worldwide</p>
                  </div>
                  <figure className='absolute left-30 md:left-45 top-10 '>
                      <Globe/>
                  </figure>
                  
              </div>
              {/* 4 */}
              <div className='flex items-end grid-special-color grid-4 about-box'>
                  <div className=' flex flex-col gap-5 text-3xl mb-8 md:mb-10 text-center'>
                      <p style={{textShadow:"0 2px 2px #ccc "}}>Do You Want To Start a Project Together ? </p>
                      <a className="mt-4 m-auto flex items-center justify-center gap-2 contact-me hover:animate-bounce "  href="#contact">
                          <FaHandshake className=""
                          />
                      Let’s Build Together
                      </a>
                  </div>
              </div>

              {/* 5 */}
              <div className='flex items-end grid-black-color grid-5 about-box'>
                  <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[40%] md:scale-125">
                      <Frameworks/>
                  </div>
                  <div className='flex flex-col md:mb-30 md:w-130 mb-12 w-60'>
                      <p className='headtext md:font-bold'>Tech Stack</p>
                      <p className='subtext'>"Familiar with HTML5,CSS3, JavaScript, React.js,Three.js,GSAP, Node.js, MongoDB, and Tailwind CSS,Git & Github,VScode and continuously improving my skills to build modern applications."</p>
                  </div>
              </div>
              
              
          </div>
          
    </section>
  )
}

export default About
