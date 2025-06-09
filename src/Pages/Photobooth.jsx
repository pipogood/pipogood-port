// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar_back} from '../components'

const Photobooth = () => {
  return (
    <>
      <Navbar_back />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>AI-Photobooth</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h1 className="text-4xl font-bold mb-4">Key Concept</h1>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Photobooth/1.jpg" alt="Motor Imagery Graph" className="rounded w-170 h-full object-cover mb-0.5" />
          <img src="./src/assets/projects/Photobooth/2.jpg" alt="Motor Imagery Graph" className="rounded w-170 h-full object-cover" />

        </div>

        <p className="text-lg leading-7 mb-6">
          I spearheaded the development of an AI-powered photobooth system that creatively showcased Thai traditional fashion through advanced image generation technology. 
          The system leveraged Stable Diffusion to perform clothing and background style transfer, allowing users to transform their appearance into various Thai cultural attires in real time.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">My responsibilities</h2>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Photobooth/3.png" className="rounded w-200 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          1. Leading the end-to-end development process, from concept design to deployment.<br/>
          2. Designing and integrating a robust image processing pipeline to enable seamless style transfer using deep learning models.<br/>
          3. Developing a web-based user interface that was intuitive, responsive, and engaging for users of all ages.<br/>
          4. Implementing a QR code scanning system for users to instantly access and download their stylized photos to their personal devices.<br/>
          5. Ensuring real-time performance and system stability during live exhibitions and public showcases.<br/>
        </p>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/X0RHA9FIeu0"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>

      </div>



    </>
  );
};

export default Photobooth;
