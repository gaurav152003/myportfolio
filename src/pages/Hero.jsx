import React, { Suspense } from "react";
import Herotext from "../component/Herotext";
import Background from "../component/Background";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import { Model as Astronaut } from "../component/Astronaut";
import Curveline from "../component/Curveline";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <>
      <section
        className="relative flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden c-space px-6"
        id="home"
      >
        <Background />

        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center z-10 mb-1 md:mb-[280px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          <Herotext />
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-100% md:w-1/2 h-[500px]  md:h-[750px] md:mt-[100px]   "
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 5, ease: "easeOut", delay: 1.5 }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
            <ambientLight intensity={2.5} />

            <directionalLight position={[5, 5, 5]} intensity={2} />

            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
                <Astronaut
                  scale={isMobile ? 0.8 : 1}
                  position={isMobile ? [0, -1.2, 0] : [0, -1.5, 0]}
                />
              </Float>
            </Suspense>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.8}
            />
          </Canvas>
        </motion.div>
      </section>

      <Curveline />
    </>
  );
}

export default Hero;
