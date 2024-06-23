import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

const menuItems = [
  { id: "aboutSection", label: "About", delay: 9.4 },
  { id: "skillsSection", label: "Skills", delay: 9.7, offset: -300 },
  { id: "WhereIhaveWorkedSection", label: "Experience", delay: 9.7 },
  { id: "educationSection", label: "Education", delay: 9.7 },
  { id: "SomethingIveBuiltSection", label: "Projects", delay: 9.8 },
  { id: "GetInTouchSection", label: "Contact", delay: 10 }
];

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs lg:flex hidden flex-row items-center space-x-8">
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : item.delay,
          }}
          className="text-AAsecondary"
        >
          <ReactScrollLink
            to={item.id}
            spy={true}
            smooth={true}
            offset={item.offset || -100}
            duration={200}
          >
            &gt; {`0${index + 1}. `}
            <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
              {item.label}
            </span>
          </ReactScrollLink>
        </motion.div>
      ))}
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 10.2,
          }}
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}
