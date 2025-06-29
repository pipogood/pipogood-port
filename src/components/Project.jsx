import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, link}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >

        <div className="relative w-full h-[230px]">
          <a href={link} rel="noopener noreferrer">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl cursor-pointer"
            />
          </a>
        </div>
        
        <div className="mt-5">
          <a href={link} rel="noopener noreferrer">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </a>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
  );
};

const Project = () => {
  return (
    <section id="project">
    <>
      <h2 className={`${styles.sectionHeadText} text-center mt-2`}>Projects</h2>
      <div className="w-full flex justify-center items-center">
          Following projects showcase my skills and experience through examples
          of my work in field of ROBOTICS AI and PROGRAMMING.
      </div>
      <div className="mt-10 mb-10 flex flex-wrap gap-7 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
    </section>
  );
};

export default SectionWrapper(Project, "project");
