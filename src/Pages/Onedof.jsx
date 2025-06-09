// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar} from '../components'

const Onedof = () => {
  window.scrollTo(0, 0);
return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>High Precision 1-DOF Robot</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h2 className="text-2xl font-bold mb-4">Objective of the Project</h2>

        <p className="text-lg leading-7 mb-6">
          Objective of this project is controlling the motor with 50 cm beam to stop at the target hole and shoot the 
          laser that attached to end effector of beam. So, this project applies the knowledge of Closed Loop controls, Stability analysis for control motor and signal processing for preprocess data form encoder.
        </p>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/1dof/1.webp" className="rounded w-150 h-full object-cover mb-0.5" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/1dof/2.jpg" className="rounded w-150 h-full object-cover mb-0.5" />
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-2">System Architechture</h2>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/1dof/5.webp" className="rounded w-150 h-full object-cover mb-0.5" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/1dof/3.webp" className="rounded w-150 h-full object-cover mb-0.5" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Simulation with Simulink</h2>
        <p className="text-lg leading-7 mb-6">
          Try to model system close loop control by modelling motor and create trajectory to identify PID value for used in real world system.
        </p>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/1dof/4.webp" className="rounded w-150 h-full object-cover mb-0.5" />
        </div>

      </div>
    </>
  );
};

export default Onedof;
