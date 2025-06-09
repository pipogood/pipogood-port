import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar} from '../components'

const Mobot = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>META MOBOT</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h1 className="text-4xl font-bold mb-4">What is META MOBOT</h1>

        <div className="flex flex-row items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/1.png" className="rounded w-83 h-full object-cover" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/2.jpg" className="rounded w-75 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          Meta MOBOT is mobile robot which its main concept is teleoperation. Users are enabled to be controlled by any user from anywhere in the world.
          Meta MOBOT has a several features to play. <br />
          Mobility – With 4 omnidirectional wheels driven by DYNAMIXEL MX106, Meta MOBOT can travel with many ways and directions with low power.<br />
          Manipulator – With the power of ROBOTIS Open MANIPULATOR Pro and SPIDRA Gripper. There’re many ways to manipulate with the objects.<br />
          Vision – With Zed-mini camera, Players can adjust vision view and change camera mode to RGB or grayscale depth.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Exhibition: FIBO ON TOUR</h2>
        <div className="flex flex-row items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/3.jpg" className="rounded w-80 h-full object-cover" />
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/4.jpg" className="rounded w-87 h-full object-cover" />
        </div>
        <p className="text-lg leading-7 mb-4">
          On 17-18 September 2022 & 12-15 January 2023, Meta MOBOT has the mission in “FIBO ON TOUR” and “Kids Day: Futureland” at Central Rama IX, Bangkok. 
          In this exhibition, the audience can control MOBOT via Oculus quest. The mission that users must complete is they (Meta MOBOT needs 2 users to control mobility(wheel) and manipulator(arm)) 
          must control MOBOT to pick a ball and place at the goal as much as they can. There’re 3 goals which’ll give a different score. 
          My role on exhibition day is robot software debugging and checking network connection between robot and VR control room.
        </p>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/5.png" className="rounded w-200 h-full object-cover"/>
        </div>
        

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/9VjF70gu1C0"
            title="Mobot Demo"
            allowFullScreen
          />
        </div>


        {/* Main Role */}

        <h2 className="text-4xl font-semibold mt-20 mb-10 text-center">Main Role – Robot Software Developer</h2>
        
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/6.webp" className="rounded w-200 h-full object-cover"/>
        </div>

        <p className="text-lg leading-7 mb-6">
          META MOBOT’s system diagram consists of 3 parts. <br/>
          1. Control Room is MOBOT’s control panel in the virtual world, users can join in multiplayer mode to help each other to control MOBOT on the demonstration site.<br/>
          2. Field or demonstration site is the place for MOBOT working.<br/>
          3. Broker MQTT is a server for sending and receiving messages between the control room and MOBOT on the field.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">META MOBOT – Mobility</h2>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/7.webp" className="rounded w-200 h-full object-cover"/>
        </div>

        <p className="text-lg leading-7 mb-6">
          Mobility Workflow <br/>
          1. Receive movement direction and velocity command of robot from broker MQTT.<br/>
          2. Calculate the movement direction and velocity of each omnidirectional wheel for robot can move in any direction.<br/>
          3. Reading angular velocity from each Dynamixel motor to calculate linear velocity and angular velocity of robot and send velocities status to control room.<br/>
          4. Stop motor moving when lidar detects an obstacle.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">META MOBOT – Lidar Detection</h2>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/8.png" className="rounded w-200 h-full object-cover"/>
        </div>

        <p className="text-lg leading-7 mb-6">
          Defining lidar detection area for detecting obstacles. If an obstacle is in beware area motor will slow down. 
          If an obstacle is in danger area motor will stop automatically. 
          Lidar Detection Node will send real-time lidar status to the control room.  
        </p>


        <h2 className="text-2xl font-semibold mt-10 mb-2">META MOBOT – Manipulation</h2>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/9.webp" className="rounded w-200 h-full object-cover"/>
        </div>

        <p className="text-lg leading-7 mb-6">
          Manipulation Workflow <br/>
          1. Receive movement direction of the robotics arm from broker MQTT.<br/>
          2. Control robotics arm’s position to the desired direction while checking limited workspace of robotics arm to prevent robotics arm hit MOBOT.<br/>
          3. Manipulation Node will send real-time position in XYZ axis to control room via Broker MQTT.<br/> 
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">META MOBOT – MQTT Communication</h2>

        <p className="text-lg leading-7 mb-6">
          Communication between the control room and MOBOT will use MQTT broker. MQTT is a standards-based messaging protocol using publish-subscribe model work. 
          Publisher will send a message to MQTT broker with the topic name then subscriber will connect to MQTT broker and subscribe to topic name to receive message
        </p>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/10.webp" className="rounded w-200 h-full object-cover mb-0.5"/>
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/11.webp" className="rounded w-200 h-full object-cover"/>

        </div>


        <h2 className="text-2xl font-semibold mt-10 mb-2">Video Streaming</h2>
        <p className="text-lg leading-7 mb-6">
          Utilize webRTC(PeerJs) for video streaming between the control UI and MOBOT.
        </p>

        <div className="flex flex-col items-center justify-center mt-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/12.png" className="rounded w-200 h-full object-cover mb-0.5"/>
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/Mobot/13.png" className="rounded w-200 h-full object-cover"/>

        </div>

        <p className="text-sm mb-6 text-center">
          webRTC implementation and robot control example
        </p>

        <a href="https://github.com/pipogood/MetaMobot2024.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Github Repository for this project.
        </a>.

      </div>


    </>
  );
};

export default Mobot;
