"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Skills from "./Skills";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const MotionButton = motion(Button);
const proTechSkills = {
  header: "Proefficient",
  skills: [
    "Python",
    "Node",
    "Java",
    "Next.js & React",
    "PostgreSQL",
    "RDM",
    "HTML/CSS/Tailwind CSS",
  ],
};
const intermediateTechSkills = {
  header: "Intermediate",
  skills: ["C++", "C", "TypeScript", "React Native"],
};
const beginnerTechSkills = {
  header: "Beginner",
  skills: ["JQuery", "BootStrap"],
};
const softSkills = {
  header: "Soft Skills",
  skills: [
    "Teamwork & collaboration",
    "Constructive criticism",
    "Passion to learn",
    "Time management",
    "Resourcefulness"
  ],
};
const MiscSection = () => {
  return (
    <section className="mt-10 lg:mt-24 min-h-screen" id="misc">
      <div className=" sticky font-bold text-base md:text-xl lg:text-start text-center mb-6">
        Miscellaneous
      </div>
      <div>
        <p className="text-md font-medium lg:text-start text-center lg:mb-2">
          Technical Skills
        </p>
        <Skills header={proTechSkills.header} skills={proTechSkills.skills} />
        <Skills
          header={intermediateTechSkills.header}
          skills={intermediateTechSkills.skills}
        />
        <Skills
          header={beginnerTechSkills.header}
          skills={beginnerTechSkills.skills}
        />
      </div>
      <div className="mt-2">
        <p className="text-md font-medium lg:text-start text-center lg:mb-2">
          Soft Skills
        </p>
        <Skills skills={softSkills.skills} />
      </div>

      <div className="mt-16 w-full">
        <div className="flex flex-col w-full mb-4 items-start ">
          <p className="text-lg font-bold mb-4">Connect With Me</p>
          <MotionLink
            href="mailto:judepierre4477@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0 }}
            className="flex rounded-md font-medium bg-gradient-to-r from-primary-first via-primary-second to-primary-first px-3 py-2 text-center items-center"
          >
            Connect
            <EnvelopeIcon className="ml-1 " width={30} height={30} />
          </MotionLink>
        </div>
        <div className="w-full flex flex-col items-start mt-4">
          <p className="text-lg font-bold text-center mb-4">
            View & Download Resume{" "}
          </p>

          <MotionLink
            className="flex p-2 rounded-md  text-opacity text-center content-center items-center font-medium bg-gradient-to-r from-primary-first via-primary-second to-primary-first px-3 py-2"
            href="https://drive.google.com/file/d/1gOd0jqSXTKOVg1yK7t1N9MGnOl1BgkcS/view?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0 }}
          >
            Download Resume{" "}
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

export default MiscSection;
