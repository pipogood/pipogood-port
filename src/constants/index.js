import {
    c,
    python,
    java,
    cpp,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    hci,
    termpw,
    threejs,
    nx,
    CompileVortex,
    mitsu,
    kmutt,
    meta,
    onedof,
    threedof,
    greencone,
    gui,
    thesis,
    voice,
    teledraw,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "project",
      title: "Projects",
    },
  ];

  export const services = [
    { title: "C", icon: c },
    { title: "C++", icon: cpp },
    { title: "Python", icon: python },
    { title: "Java", icon: java },
  ];
  
  export const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Rect JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "Three JS", icon: threejs },
    { name: "git", icon: git },
  ];

  export const experiences = [
    {
      title: "Research Assistance | Neuroscience Center",
      company_name: "Neuroscience Center for Research and Innovation | KMUTT",
      icon: nx,
      iconBg: "#161329",
      date: "Jun 2023 - Now",
      points: [
        "- Preprocess collected EEG data (e.g. Epoch segmentation, data labeling, ICA) using MATLAB and Python.",
        "- Implement Real-time brain wave signal (EEG) monitoring GUI program for real-time graph plotting and machine learning approach for real-time brain wave classification.",
        "- Experience on recruiting volunteer subjects for experiments, set up EEG BIOSEMI, Tobii pro eye tracker, and Real-time data monitoring."
      ],
    },
    {
      title: "Research Assistance | Human Computer Interface Lab",
      company_name: "Institute of field robotics (FIBO) | KMUTT",
      icon: hci,
      iconBg: "#161329",
      date: "Jun 2022 - June 2025",
      points: [
        "META MOBOT – Software Developer",
        "- Implement software on Jetson Nano to control DC motors connected to omnidirectional wheels and control 6 DOF robotic arm for move to desired position in either joint space or task space.",
        "- Implement robot-user telecommunication system, utilize MQTT for data transfer and Peerjs for webRTC video streaming",   
        "AI Photobooth – Project Leader",
        "- Lead the development of the Generative-AI photobooth utilizing Stable Diffusion for generate clothing and background style, showcasing Thai traditional fashion.", 
        "- Designed and integrated image processing pipelines, web-based user interface and QR-code scanning system." 
      ],
    },
    {
      title: "Internship | Manufacturing Engineer",
      company_name: "Mitsubishi Motor Thailand | Laemchabang, Chonburi, Thailand",
      icon: mitsu,
      iconBg: "#161329",
      date: "Jul 2023 - Aug 2023",
      points: [
        "- Study the manufacturing process for producing body parts and explore the routine responsibilities of a manufacturing engineer.",
        "- Have experience teaching industrial welding robots’ arm (Fanuc) and providing instruction in basic Fanuc operation programming.",
        "- Investigated methods to reduce the energy consumption of a robot arm without increasing the cycle time of line operations.",
      ],
    },
  ];

    export const education = [
    {
      title: "B.E. Robotics and Automation Engineer | Institute of Field Robotics (FIBO)",
      university_name: "King Mongkut's University of Technology Thonburi (KMUTT) | Thailand",
      icon: kmutt,
      iconBg: "white",
      date: "Graduated June 2024",
      points: [
        "GPAX: 3.69/4.00"
      ],
    },
  ];
  
  export const projects = [
    {
      name: "Evaluating the Potential of Low-Cost BCI Devices for Online Classification of Four-Class Motor Imagery States",
      description:
        "Utilized Python for the real-time classification brain wave signal of four motor imagery classes (imagine movement direction e.g. left, right ,forward and non-imagine) using deep learning model (CNN-LSTM)",
      tags: [
        { name: "Machine Learning", color: "blue-text-gradient" },
        { name: "Jupyter Notebook", color: "green-text-gradient" },
        { name: "Regression Algorithms", color: "pink-text-gradient" },
      ],
      image: thesis,
    },
    {
      name: "META MOBOT",
      description:
        "Teleoperation of mobile robot control via virtual world",
      tags: [
        { name: "Javascript", color: "blue-text-gradient" },
        { name: "HTML", color: "green-text-gradient" },
        { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
        { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
      ],
      image: meta,
    },
    {
      name: "AI-Photobooth",
      description:
        "The Generative-AI application for generate clothing and background style.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "Javascript", color: "pink-text-gradient" },
      ],
      image: termpw,
    },
    {
      name: "Real-time EEG Monitoring GUI", 
      description:
        "Real-time EEG monitoring GUI program for real-time graph plotting and BCI-SSVEP based application.",
      tags: [
        { name: "shell", color: "blue-text-gradient" },
      ],
      image: gui,
    },
    {
      name: "Virtual art BCI",
      description:
        "Utilized machine learning to classify users' emotions from EEG signals in real time, generating dynamic virtual art that reflects changes in emotional states.",
      tags: [
        { name: "Javascript", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
        { name: "HTML", color: "pink-text-gradient" },
      ],
      image: CompileVortex,
    },
    {
      name: "Teleoperation of Portrait Drawing with Robot Arm",
      description:
        "Utilize generated portrait drawing image from input image then use the OpenCV library to extract lines for drawing with robot arm.",
      tags: [
        { name: "OpenCV", color: "blue-text-gradient" },
        { name: "Matplotlib", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: teledraw,
    },
    {
      name: "Voice Controlled Robot Arm",
      description:
        "Design a system to select objects and colors for grabbing through voice commands using the UR3e robot arm.",
      tags: [
        { name: "OpenCV", color: "blue-text-gradient" },
        { name: "Matplotlib", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: voice,
    },
    {
      name: "Green Cone, Sensor data visualization",
      description:
        "Implemented a front-end web interface to visualize real-time sensor data from Green Cone by querying the API database server.",
      tags: [
        { name: "OpenCV", color: "blue-text-gradient" },
        { name: "Matplotlib", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: greencone,
    },
    {
      name: "3-DOF Robotic Arm Trajectory Tracking System",
      description:
        "Design 3DOF robotics arm to draw a sequence of letters by moving end-effector and simulation robotics arm tracking system in RVIZ with ROS2.",
      tags: [
        { name: "OpenCV", color: "blue-text-gradient" },
        { name: "Matplotlib", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: threedof,
    },
    {
      name: "High Precision 1-DOF Robot ",
      description:
        "Utilize cascade PID control with C language on STM32 Nucleo-F411R for control a DC motor to rotate 50 cm robot arm with less than 5 mm error.",
      tags: [
        { name: "OpenCV", color: "blue-text-gradient" },
        { name: "Matplotlib", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: onedof,
    },
  ];