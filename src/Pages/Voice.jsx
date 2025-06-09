// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar_back} from '../components'

const Voice = () => {
  return (
    <>
      <Navbar_back />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>Voice Controlled Robot Arm</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h2 className="text-2xl font-bold mb-4">Objective of the Project</h2>

        <p className="text-lg leading-7 mb-6">
          This project is part of the Human-Robot Interaction course. The objective is to implement a robotics 
          system to assist paralyzed patients who are unable to move their arms and legs. 
          These individuals can utilize their voice to command the robot arm to grab a target object.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">System Architechture</h2>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="./src/assets/projects/Voice/1.webp" className="rounded w-150 h-full object-cover mb-0.5" />
          <img src="./src/assets/projects/Voice/2.webp" className="rounded w-150 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          1. <strong>The Dialogflow Node</strong> serves as a node to receive voice commands from users, transforming them into text through the Dialogflow API, and generating speech responses to interact with the user.<br />
          2. <strong>The Object Detection Node</strong> functions as a node to receive the target object from the Dialogflow Node. Subsequently, it identifies and retrieves the position of the target object in the XYZ axis before forwarding this information to the Manipulation Node.<br/>
          3. <strong>The Manipulation Node</strong> is responsible for receiving the position of the object from the Object Detection Node. If the position falls within the workspace of the robotic arm, this node will issue commands to control the robotic arm, directing it to move to the target position and grab the specified object.
        </p>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/G1iTDF-y1eU"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>

      </div>



    </>
  );
};

export default Voice;
