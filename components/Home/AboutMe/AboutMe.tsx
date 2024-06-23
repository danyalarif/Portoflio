import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
    ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header">
              <p className="text-gray-400 leading-relaxed">
                I'm Danyal Arif, a dedicated{" "}
                <span className="text-AAsecondary">Software Engineer</span>{" "}
                based in Islamabad, Pakistan. I graduated from{" "}
                <span className="text-AAsecondary">
                  Comsats University Islamabad
                </span>{" "}
                with a Bachelor's degree in Computer Science. Possessing
                in-depth knowledge of core Computer Science fundamentals such as{" "}
                <span className="text-AAsecondary">OOP</span>,{" "}
                <span className="text-AAsecondary">data structures</span>,{" "}
                <span className="text-AAsecondary">algorithms</span>, and{" "}
                <span className="text-AAsecondary">databases</span>, I have a
                strong passion for building scalable and efficient software
                solutions.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Throughout my career, I have demonstrated an adaptable mindset
                with a keen ability to quickly learn new tools and technologies.
                Currently working as a{" "}
                <span className="text-AAsecondary">Full Stack Engineer</span> at{" "}
                <span className="text-AAsecondary">Cowlar Design Studio</span>,
                I leverage my expertise in technologies like{" "}
                <span className="text-AAsecondary">React</span>,{" "}
                <span className="text-AAsecondary">Node.js</span>,{" "}
                <span className="text-AAsecondary">Express</span>, and{" "}
                <span className="text-AAsecondary">MongoDB</span> to deliver
                seamless digital experiences.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Beyond coding, I am committed to continuous learning and
                improvement, ensuring that I deliver high-quality solutions that
                align with both user needs and business goals. I have achieved
                notable recognitions such as securing the 2nd position at the{" "}
                <span className="text-AAsecondary">
                  Comsats Career Expo Fall 2023
                </span>{" "}
                and winning 1st place in the web development category at{" "}
                <span className="text-AAsecondary">Visio Spark 2023</span>.
              </p>
            </div>

            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/myImage.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/myImage.jpg"}
                className={"object-contain rounded-lg"}
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
