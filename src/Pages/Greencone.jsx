// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar} from '../components'

const Greencone = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>Green Cone, Sensor data visualization</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h1 className="text-4xl font-bold mb-4">What is GreenCone</h1>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/GreenCone/1_1.png" alt="Motor Imagery Graph" className="rounded w-120 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          Green cone is one of the waste management method which use an aerobic composting process in order to dissolve organic waste into soil by using solar in order to control temperature and the other parameters.<br/>
          This equipment consists of plastic, with a top-shaped cone and attached basket in which the food was stored underground under the cone. This idea of solar digester has been utilized by constructing digester below ground level and covered with flat-plate solar collectors at the roof structure. The steps for this process were to insert the food waste through the hinged lid, and it will fall into the container. The fungi, bacteria, microorganisms, worms, and insects must decompose the food scraps in this stage.
        </p>

        <h1 className="text-4xl font-bold mb-4">Project Concept</h1>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/GreenCone/1_2.png" alt="Motor Imagery Graph" className="rounded w-120 h-full object-cover mb-0.5" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/GreenCone/1.jpg" alt="Motor Imagery Graph" className="rounded w-120 h-full object-cover" />

        </div>

        <p className="text-lg leading-7 mb-6">
          This project was a class-based IoT system designed to monitor and analyze environmental data collected from smart sensors embedded in a compact, cone-shaped device. The system was created to promote sustainable urban living 
          by tracking environmental metrics such as temperature, humidity, air quality, soil moisture, and light intensity. These values could help improve smart agriculture systems, environmental awareness, and public safety initiatives.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">My Responsibility</h2>
        <p className="text-lg leading-7 mb-4">
          1. Developing a backend program to continuously collect and transmit real-time sensor data to a centralized cloud database through a provided API.<br/>
          2. Designing and implementing a front-end web interface that allows users to monitor sensor values in real time, using dynamic charts and graphs to visualize fluctuations and trends.<br/>
          3. Ensuring robust communication between the Green Cone hardware and the database server for seamless and accurate data updates.<br/>
          4. Optimizing the system for real-time performance and user accessibility through responsive design and intuitive layout.<br/>
        </p>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/GreenCone/2.png" className="rounded w-150 h-full object-cover mb-2" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/GreenCone/3.png" className="rounded w-150 h-full object-cover mb-2" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/GreenCone/4.png" className="rounded w-150 h-full object-cover" />
        </div>

      
      </div>



    </>
  );
};

export default Greencone;
