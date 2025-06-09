// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar_back} from '../components'

const Bci_art = () => {
  return (
    <>
      <Navbar_back />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>Virtual Art BCI</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h1 className="text-4xl font-bold mb-4">Key Concept</h1>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Virtual_art/1.png" alt="Motor Imagery Graph" className="rounded w-170 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          This is our project, FEELFORM, where we seek to bring the heart and mind together — using brain-computer interface to transform emotions into visual art and let others see, feel, and connect with our brain. 
        </p>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Virtual_art/2.png" alt="Motor Imagery Graph" className="rounded w-170 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          In this project, we use affective computing to transform brain signals to process and recognize human emotions based on the <strong>valence–arousal</strong> model (Russell, 1980).<br/> 
          where Valence indicates how positive or negative an emotion iswhile, arousal indicates the intensity and activity in the mind and body 
        </p>


        <h2 className="text-2xl font-semibold mt-10 mb-2">Implementation-Preprocessing</h2>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Virtual_art/3.jpg" className="rounded w-150 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          To process data, we built a real-time EEG processing pipeline using Python. EEG signals were received through the LSL at a sampling rate of 250 Hz. The data was processed in 2-second windows with a 1-second overlap.<br/>
          The signals were filtered between 1-40 Hz and then passed through two pre-trained SVR models that predicted the valence and arousal.<br/>
          These predicted values were sent every second to a visual art generator built with p5.js, using Socket.io for live communication.<br/>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Implementation-Art Generation</h2>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Virtual_art/4.png" className="rounded w-110 h-full object-cover"/>
        </div>

        <p className="text-lg leading-7 mb-6">
          In order to create visuals that represent emotions, we based our value mapping on several psychological findings. For instance,<br/> 
          1. Color (tone) :cooler tones indicate coldness associated with negative valence, while warmer tone are usually linked with positivity.<br/>
          2. Scale: large scale can indicates power and dominance (high arousal), and , small scale represents fragility and tenderness (which refers to lower arousal).
        </p>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <p className="text-sm leading-7 mb-6"> (g.tec- BR41N.IO DESIGNERS' HACKATHON 2025) </p>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/Zl-wNaCFMaQ"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>


      </div>



    </>
  );
};

export default Bci_art;
