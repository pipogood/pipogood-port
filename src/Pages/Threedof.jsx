// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar} from '../components'

const Threedof = () => {
  window.scrollTo(0, 0);
return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>3DOF robotic arm Trajectory Tracking System</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h2 className="text-2xl font-bold mb-4">Objective of the Project</h2>

        <p className="text-lg leading-7 mb-6">
          This project aims to applied kinematics knowledge and ROS2 operation system to simulate our own design 3 DOF Robotics arm to drawing letter of F I B O in RVIZ.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">System Architechture</h2>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/3dof/1.webp" className="rounded w-150 h-full object-cover mb-0.5" />
        </div>

        <p className="text-lg leading-7 mb-6">
          The first step, Scheduler Node will receive a list of via points from YAML file and send the current position(pi), final position(pf), and path time(T) to Generator Node.
        </p>

        <p className="text-lg leading-7 mb-6">
          Generator Node will create a trajectory for moving from current position to final position then send position(pr) 
          and velocity(pr_dot) of end-effector for solving joint config(qr) and joint velocity(qr_dot) using kinematics server.        
        </p>

        <p className="text-lg leading-7 mb-6">
          Tracker node will control robotics arm to move to follow trajectory form Generator Node. 
          If robotics arm reaches position(pf), Proximity detector node will be sent message to Scheduler Node.       
        </p>

        <p className="text-lg leading-7 mb-6">
          Last, Scheduler Node will send the next final position(pf) 
          to Generator Node and repeat above step until robotics arm finish to draw a sequence of letters.       
        </p>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/Xl-SnWjoby4"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>

        <a href="https://github.com/pipogood/3DOF-robotic-arm.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Github Repository for this project.
        </a>.

      </div>
    </>
  );
};

export default Threedof;
