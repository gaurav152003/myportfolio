import React, { Suspense } from "react";
import Herotext from "../component/Herotext";
import Background from "../component/Background";
import { Canvas } from "@react-three/fiber";
import { Loader, Float,OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import { Astronaut } from "../component/Astronaut";
import Scroll from "../component/Scroll";


function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

    return (
      <>
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen overflow-hidden c-space px-6" id="home">
      <Background />

      <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center z-10 mb-6 md:mb-[280px]"
            //   initial={{ opacity: 0, y : -1000  }}
            //   animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1, ease: "easeOut" ,delay:2}}
      >
        <  Herotext  />
      </motion.div>

      <motion.div
        className="w-100% md:w-1/2 h-[400px]  md:h-[750px] md:mt-[100px]   "
        initial={{ opacity: 0, x : -1000  }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5, ease: "easeOut" ,delay:1.5}}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={2} />
          <directionalLight position={[50, 50, 50]} intensity={1} />
          <Suspense fallback={null}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.25 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [0, -1, 0]}
              />
            </Float>
                  </Suspense>
                  <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </motion.div>

          
        </section>
        <Scroll/>
            </>
  );
}

export default Hero;
