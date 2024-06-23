import React from "react";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../Icons/ArrowIcon";

export default function Skills() {
  const barRef = React.useRef<HTMLDivElement>(null);

  const skills = [
    {
      category: "Languages",
      skills: "HTML, CSS, JavaScript, TypeScript",
    },
    {
      category: "Frontend",
      skills: "React, Vue, Next, Material UI, Tailwind CSS, jQuery",
    },
    {
      category: "Backend",
      skills: "Node, Express, Nest, Sequelize, WebSockets, MQTT, Swagger, JWT, Microservices",
    },
    {
      category: "Databases",
      skills: "MongoDB, MySQL, PostgreSQL, InfluxDB, Firebase",
    },
    {
      category: "Testing",
      skills: "Jest, Supertest, Selenium, React Testing Library",
    },
    {
      category: "DevOps and Cloud",
      skills: "Git, GitHub, GitLab, Docker, Kubernetes, AWS, CI/CD Pipelines",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
      id="skillsSection"
    >
      <section className="flex flex-row items-center w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          My Skills
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* Skills Content section */}
      <section className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-center items-center md:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-2 p-4 bg-gray-800 rounded-md shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-AAsecondary font-semibold text-lg">
                {skill.category}
              </h3>
              <p className="text-gray-300 text-sm">{skill.skills}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
