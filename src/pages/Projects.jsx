import React, { useState } from "react";
import Myproject from "../component/Myproject";
import { myProjects } from "../Constant";
import { motion, useMotionValue, useSpring } from "motion/react";
function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 50 });
  const springY = useSpring(y, { damping: 20, stiffness: 50 });
  const HandleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setpreview] = useState(null);

  return (
    <section onMouseMove={HandleMouseMove} className="relative  " id="project">
      <h2
        className="text-heading mt-10 text-center"
        style={{ textShadow: "0 2px 2px white" }}
      >
        My Selected Projects
      </h2>
      <p
        className="subtext font-medium mt-3 text-center"
        style={{ fontSize: "20px" }}
      >
        Here are some of my recent projects, thoughtfully designed and developed
        with a strong focus on performance, scalability, and user experience.
      </p>
      <div
        style={{ marginTop: "10px" }}
        className="bg-gradient-to-r from-transparent via-neutral-700  to-transparent h-[2px] w-full"
      />
      <div className="flex flex-col gap-6 mt-8">
        {myProjects.map((p) => (
          <Myproject key={p.id} {...p} setpreview={setpreview} />
        ))}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 h-50 rounded-lg shadow-lg pointer-events-none w-80 z-50 object-cover"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
      <div className="flex justify-center mt-6">
        <a
          href="https://github.com/gaurav152003"
          target="_blank"
          rel="noopener noreferrer"
          className="
      px-6 py-3
      rounded-xl
      border border-blue-500/30
     
      text-blue-400
      font-medium
      transition-all duration-300
    
      hover:border-blue-500
      hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
      hover:-translate-y-1
    "
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
}

export default Projects;
