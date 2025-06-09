// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar_back} from '../components'

const Gui = () => {
  return (
    <>
      <Navbar_back />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>Real-time BCI GUI</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">

        <p className="text-lg leading-7 mb-6">
          This project aims to create an EEG GUI for real-time plotting and to be the BCI approach for sending the predicted SSVEP (predict user's focusing frequency from brain wave) command to Unity. 
          This GUI can stream EEG data via LSL from an EEG device.
        </p>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/BCI_GUI/1.png" alt="Motor Imagery Graph" className="rounded w-170 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-4">
          This project has been use as real-time BCI classification example for student in class Neuromedia and Brain-Computer Interface at King Mongkut's University of Technology Thonburi, Thailand .
        </p>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <p className="text-sm leading-7 mb-4">
          SSVEP application from student in class (Left side is 10 Hz shape blinking, Right side is 15 Hz shape blinking).
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/yZTIbZBBM58"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>

        <a href="https://github.com/pipogood/BCI-realtime-GUI.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Github Repository for this project.
        </a>.

      </div>



    </>
  );
};

export default Gui;
