import React from "react";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <section className="flex items-center justify-center w-full h-[700px] mx-auto">
      <div className="max-w-7xl text-center px-4">
         <div className="flex flex-col items-center justify-center">
            <img
              src="./src/assets/profile_pic.jpg" // ← replace with your image path
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover mb-2 mt-10"
            />
          </div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Suparach</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              options={{
                strings: ["Brain Computer Interface researcher", "Robotics Developer", "AI and Programming Enthusiast"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>

          <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-[16px] max-w-3xl leading-[30px] text-center"
            >
                Hello everyone, my name’s Suparach Intarasopa. I am a graduate with a bachelor’s degree in Robotics and Automation Engineering at King Mongkut University of Technology Thonburi, Thailand. 
                I have a strong interest in Brain Computer Interface (BCI) and Human Robot Interaction. 
                I possess experience in implementing human-robot interaction systems and creating BCI systems to analyze control commands from brain signals. 
                In the future, I believe we could integrate BCI with robotics technology to enhance the realism of Human Robot Interaction and assist patients with disabilities in controlling robots for their daily life activities through brain signals.
                Thank you everyone for visit my page.
          </motion.p>


      </div>
    </section>
  );
};


const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
