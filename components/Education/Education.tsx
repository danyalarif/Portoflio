import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../Icons/ArrowIcon";

export default function Education() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
      id="educationSection"
    >
      {/* Title "My Education" */}
      <section className="flex flex-row items-center w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            04.
          </span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          My Education
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      
      {/* Education Content section */}
      <section className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-center items-center md:items-start">
        <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="translate-y-[0px] bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-AAsecondary text-xl md:text-2xl font-bold mb-2">
              COMSATS University Islamabad
            </h3>
            <p className="text-gray-200 text-md md:text-lg mb-1">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-gray-400 text-sm md:text-md">
              January 2020 - January 2024
            </p>
            <p className="text-gray-200 text-sm md:text-md mt-4">
              During my time at COMSATS University Islamabad, I gained in-depth knowledge of core Computer Science fundamentals including{" "}
              <span className="text-AAsecondary">OOP</span>,{" "}
              <span className="text-AAsecondary">data structures</span>,{" "}
              <span className="text-AAsecondary">algorithms</span>, and{" "}
              <span className="text-AAsecondary">databases</span>. I developed a strong passion for building scalable and efficient software solutions, leveraging this deep understanding. I also cultivated an adaptable mindset with a keen ability to quickly learn new tools and technologies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
