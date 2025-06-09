// Pages/Page2.jsx
import React from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {Navbar_back, Navbar} from '../components'

const Thesis = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-25`}>Undergraduate Thesis</h2>
      </motion.div>

      <div className="text-white px-6 sm:px-10 py-10 max-w-5xl mt-10 mx-auto">
      
        <h1 className="text-4xl font-bold mb-4">BCI-Motor Imagery</h1>

        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/thesis/1.png" className="rounded w-170 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          Motor imagery signals occur when we imagine moving different body parts within the frequency band of 8–30 Hz,
          specifically around the Sensorimotor Cortex of the brain. Within this frequency range, α (8–13 Hz) and β (13–30 Hz)
          bands' amplitudes decrease relative to rest (ERD), while post-movement signal increases are referred to as Event-related
          Synchronization (ERS). These signals are useful for decoding imagined motor activity using EEG.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Study BCI-Motor Imagery</h2>
        <p className="text-lg leading-7 mb-4">
          Study basic signal processing and motor imagery classification via OpenVibe tutorials and create a BCI system for
          real-world virtual character direction control.
        </p>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/thesis/2.png" className="rounded w-150 h-full object-cover" />
        </div>

        <p className="text-lg leading-7 mb-6">
          For brain signal collection, a dry EEG (non-gel) device such as the Unicorn Hybrid Black with 8 electrode channels
          and a 250 Hz sampling rate can be used, connected via Bluetooth.
        </p>
        <div className="flex flex-col items-center justify-center mt-6 mb-6">
          <img src="https://raw.githubusercontent.com/pipogood/pipogood-port/refs/heads/main/public/assets/projects/thesis/3.png" className="rounded w-110 h-full object-cover"/>
        </div>

        <h2 className="text-4xl font-semibold mt-10 mb-4">Demonstration Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-120 rounded-lg"
            src="https://www.youtube.com/embed/i8Irzkx0vVU"
            title="Motor Imagery Demo"
            allowFullScreen
          />
        </div>

        <h2 className="text-4xl font-semibold mt-20 mb-10 text-center">Evaluating the Potential of Low-Cost BCI Devices for Online Classification of Four-Class Motor Imagery States</h2>
        <p className="text-lg leading-7 mb-6">
          <strong>Abstract :</strong> Brain-Computer Interface (BCI) systems enable direct communication between the human brain and external devices by utilizing neural signals to control machines or computers. 
          Among the various BCI paradigms, motor imagery (MI) BCI has garnered significant attention due to its potential in real-world applications, 
          such as assistive technologies and smart home control. However, most existing studies on consumer-grade real-time MI-BCI systems have been limited to two-class discrimination tasks 
          (e.g., left vs. right hand movement), which constrains their applicability to more complex, real-world scenarios. In this pilot study, 
          we explore the feasibility of a real-time MI-BCI system capable of distinguishing among four MI classes (left hand, right hand, feet, and idle) 
          using a dry-electrode, 8-channel EEG device (g.tec Unicorn Hybrid Black). A hybrid CNN-LSTM deep learning model was employed for classification analysis. 
          Our results revealed a modest above-chance classification performance of 40.9% for the offline session and 35.9% for the online session, with significant variability across subjects. 
          Further analysis indicated that the strength and clarity of Event-Related Desynchronization (ERD) patterns associated with motor imagery were critical factors influencing performance. 
          These findings suggest that, although the proposed system shows promise, significant challenges remain, particularly in achieving consistent performance across new or inexperienced users.
        </p>

        <p className="text-lg leading-7 mb-6">
          <strong>Methodology : </strong> The current study explores the feasibility of developing a real-time MI-BCI system capable of distinguishing among four MI classes (left hand, right hand, feet, idle) using signals obtained from a dry-electrode, 
          8-channel EEG device (g.tec Unicorn Hybrid Black). We selected a hybrid CNN-LSTM deep-learning model for both offline and online classification. 
          Five participants was seated in a quiet, well-lit room and completed a 30-minute offline training session followed by an online experiment. 
          The offline session consisted of 4 blocks of 30 trials each (i.e., 120 trials in total), and data from this session were used to train the deep learning algorithm for the online experiment.
        </p>

        <p className="text-lg leading-7 mb-10">
          <strong>Result : </strong> Across the five subjects, the overall performance accuracy achieved by the CNN-LSTM model was 40.9% (SD = 16.9%), which was moderately above chance level (25%). There was considerable variability in performance across subjects, 
          with subject No.1 displaying the highest accuracy (65.5%) and subject No.4 displaying the lowest accuracy (21.8%). Data from the online session were analyzed by averaging the accuracies computed for each 200 ms time interval (e.g., 0-0.2s, 0.2-0.4s, 0.4-0.6s, etc.) 
          within a 5-second epoch. Across subjects, the average accuracy was 35.9% (SD = 10.4%).
        </p>

      </div>



    </>
  );
};

export default Thesis;
