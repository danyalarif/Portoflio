import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Description from "./Descriptions/Description";
export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const descriptions = {
    "Cowlar Design Studio": {
      jobTitle: "Full Stack Engineer",
      companyTitle: "Cowlar Design Studio",
      dates: ["February 2024", "Present"],
      tasks: [
        {
          text: "Developed and maintained the company's website, increasing leads by 30% by showcasing its capabilities through user-friendly design and optimization.",
          keywords: [
            "increasing leads",
            "user-friendly design",
            "optimization",
          ],
        },
        {
          text: "Developed scalable and robust full-stack applications for real-time IoT scenarios by leveraging modern technologies such as React, Vue, Node, and Express.",
          keywords: [
            "scalable",
            "robust",
            "full-stack applications",
            "IoT",
            "React",
            "Vue",
            "Node",
            "Express",
          ],
        },
        {
          text: "Engineered real-time architectures for IoT applications, enhancing performance and scalability by utilizing MQTT broker systems and Node, Express, and Nest.",
          keywords: [
            "real-time architectures",
            "IoT",
            "performance",
            "scalability",
            "MQTT",
            "Node",
            "Express",
            "Nest",
          ],
        },
        {
          text: "Improved performance across multiple websites, reducing load times by 35% and significantly enhancing user experience through code optimization and efficient resource management.",
          keywords: [
            "improved performance",
            "reducing load times",
            "user experience",
            "code optimization",
            "resource management",
          ],
        },
        {
          text: "Implemented responsive designs, ensuring optimal user experience across various devices and screen sizes by using Tailwind CSS and media queries.",
          keywords: [
            "responsive designs",
            "user experience",
            "Tailwind CSS",
            "media queries",
          ],
        },
        {
          text: "Contributed to CI/CD pipeline development, improving development efficiency and release reliability by automating testing, building, and deployment processes.",
          keywords: [
            "CI/CD pipeline",
            "development efficiency",
            "release reliability",
            "automating testing",
            "building",
            "deployment processes",
          ],
        },
        {
          text: "Integrated third-party APIs, including Google Maps, enhancing functionality and user experience by incorporating external data and interactive features.",
          keywords: [
            "third-party APIs",
            "Google Maps",
            "functionality",
            "user experience",
            "external data",
            "interactive features",
          ],
        },
      ],
    },
    "USquare Solutions": {
      jobTitle: "Full Stack Developer",
      companyTitle: "USquare Solutions",
      dates: ["September 2023", "December 2023"],
      tasks: [
        {
          text: "Applied image compression techniques, reducing page load times by 20% and improving overall site performance through efficient resource optimization.",
          keywords: [
            "image compression",
            "reducing page load times",
            "site performance",
            "resource optimization",
          ],
        },
        {
          text: "Developed and implemented a real-time chat subsystem, enabling effective communication among system users by utilizing WebSocket technology.",
          keywords: [
            "real-time chat",
            "effective communication",
            "WebSocket technology",
          ],
        },
        {
          text: "Conducted comprehensive code refactoring, improving codebase readability and maintainability by applying clean code principles such as SOLID and design patterns.",
          keywords: [
            "code refactoring",
            "codebase readability",
            "maintainability",
            "SOLID",
            "design patterns",
          ],
        },
        {
          text: "Reduced bugs in production by 30%, enhancing code quality and reliability by implementing automated unit testing with Jest.",
          keywords: [
            "reducing bugs",
            "code quality",
            "reliability",
            "automated unit testing",
            "Jest",
          ],
        },
      ],
    },
  };
  const [DescriptionJob, setDescriptionJob] = React.useState(
    "Cowlar Design Studio"
  );
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        <Description
          companyTitle={descriptions[DescriptionJob].companyTitle}
          jobTitle={descriptions[DescriptionJob].jobTitle}
          tasks={descriptions[DescriptionJob].tasks}
          dates={descriptions[DescriptionJob].dates}
        />
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false, false, false, false, false, false]);
  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-[200px] w-32 duration-500
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center md:max-w-[250px]"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[88px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Cowlar Design Studio"
            BarPosition={-12}
            BarAvobePosition={1}
            DescriptionJob="Cowlar Design Studio"
            CompanyNameBackgroundColorGreen={[
              true,
              false,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="USquare Solutions"
            BarPosition={35}
            BarAvobePosition={150}
            DescriptionJob="USquare Solutions"
            CompanyNameBackgroundColorGreen={[
              false,
              true,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
