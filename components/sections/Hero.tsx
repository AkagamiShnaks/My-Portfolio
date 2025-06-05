// File: components/sections/Hero.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SplitHeading,
  RevealText,
  MagneticButton,
} from "@/components/common/animations";
import { FaArrowDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark pt-32 pb-48"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Accent circles */}
      <div className="absolute top-1/4 -right-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Ayon Sen
            </h2>
          </motion.div>

          {/* Role/Position */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-purple-400 font-mono text-sm tracking-wider mb-6"
          >
            MACHINE LEARNING ENGINEER & FULL-STACK DEVELOPER
          </motion.p>

          {/* Main heading */}
          <div className="mb-8">
            <SplitHeading className="font-display text-display2 text-balance leading-none text-white mb-4">
              TURNING IDEAS INTO IMPACT.
            </SplitHeading>
            <RevealText
              text="OBSESSED WITH SOLVING PROBLEMS THROUGH AI."
              className="font-display text-h2 text-balance bg-gradient-to-r from-violet-300 via-purple-400 to-violet-600 bg-clip-text text-transparent"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-body max-w-2xl mx-auto mb-12"
          >
            I'm a Computer Science graduate passionate about building real-world AI systems—
            from Natural Language Processing to Computer Vision and Explainable AI.
            I bring ideas to life with Python, PyTorch, and full-stack tools like React and Node.
            Let's make technology meaningful.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-surface-dark 
                         font-medium rounded-full hover:bg-purple-400 transition-colors duration-300 cursor-pointer"
              >
                View My Work
              </ScrollLink>
            </MagneticButton>

            <MagneticButton>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 
                         text-purple-400 font-medium rounded-full hover:bg-purple-500/10 
                         transition-colors duration-300 cursor-pointer"
              >
                Let's Connect
              </ScrollLink>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-purple-400"
        >
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
