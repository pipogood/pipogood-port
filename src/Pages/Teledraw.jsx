// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar_back} from '../components'

const Teledraw = () => {
  return (
    <>
      <Navbar_back />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>Teleoperation of Portrait Drawing with Robot Arm</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h2 className="text-2xl font-bold mb-4">Objective of the Project</h2>

        <p className="text-lg leading-7 mb-6">
          This project is part of an Internet of Things course. 
          It allows users to upload images via a website to create portrait drawings using a robotic arm. 
          Users can also trace the drawing process by watching real-time video streaming.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">System Architecture</h2>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Teledraw/1.webp" className="rounded w-150 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-4">
          The first step is for the user to upload their portrait image. 
          Once the upload is complete, the user can review their generated image. 
          If the generated image is satisfactory, they can click “start,” 
          and the robot will commence the drawing process. In the case of another user, 
          the generated image will be placed in a waiting queue. Users can monitor the drawing process through a streaming video until it is completed.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Image Processing Step</h2>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Teledraw/2.webp" className="rounded w-110 h-full object-cover"/>
        </div>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/2LEYLX5HX1s"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>

        <a href="https://github.com/pipogood/Tele-Portrait-Drawing.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Github Repository for this project.
        </a>.

      </div>



    </>
  );
};

export default Teledraw;
