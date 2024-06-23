import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            05.
          </span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ? Project 1 */}
        <ProjectSection
          aos="fade-up"
          imgSrc="/img/dabs.png"
          imgAlt="DABS Project Screen shot"
          projectLink="https://dabs-frontend.vercel.app"
          projectTitle="DABS - Final Year Project"
          projectSubtitle="Centralized platform transforming hotel bookings in Pakistan"
          projectDescription="Developed a centralized web and mobile platform transforming hotel bookings in Pakistan. DABS seamlessly connects travelers to their ideal accommodations while equipping hotel owners with robust tools for hotel management, automated marketing, access control, detailed reports & analytics, augmented reality and staff management."
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          githubLink=""
          externalLink="https://dabs-frontend.vercel.app"
        />

        {/* // ? Project 2 */}
        <ProjectSection
          aos="fade-up"
          imgSrc=""
          imgAlt="Music Streaming Website Project Screen shot"
          projectLink="https://github.com/danyalarif/Music-Streaming-Website-MERN/tree/master"
          projectTitle="Music Streaming Website"
          projectSubtitle="Platform enabling users to manage and stream their music files"
          projectDescription="Created a music streaming website enabling users to manage and stream their music files within the application."
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          githubLink="https://github.com/danyalarif/Music-Streaming-Website-MERN/tree/master"
          externalLink=""
        />

        {/* // ? Project 3 */}
        <ProjectSection
          aos="fade-up"
          imgSrc=""
          imgAlt="MovieHub Project Screen shot"
          projectLink="https://github.com/danyalarif/moviehub"
          projectTitle="MovieHub"
          projectSubtitle="Platform where users can watch trailers and rate movies"
          projectDescription="Built a movie platform where users can watch trailers and rate movies."
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          githubLink="https://github.com/danyalarif/moviehub"
          externalLink=""
        />

        {/* // ? Project 4 */}
        <ProjectSection
          aos="fade-up"
          imgSrc=""
          imgAlt="DineIn Project Screen shot"
          projectLink="https://github.com/danyalarif/dine-in"
          projectTitle="DineIn"
          projectSubtitle="Multi-vendor mobile application for ordering food from various restaurants"
          projectDescription="Developed a multi-vendor mobile application for ordering food from various restaurants. Major features include user profiling, hotel and food management, rating and reviews, wishlist, cart, and order management."
          technologies={["React Native", "Firebase"]}
          githubLink="https://github.com/danyalarif/dine-in"
          externalLink=""
        />

        {/* // ? Project 5 */}
        <ProjectSection
          aos="fade-up"
          imgSrc="/img/ecommerce.png"
          imgAlt="E-Commerce Website Project Screen shot"
          projectLink="https://github.com/danyalarif/ECommerce-Website-Laravel"
          projectTitle="E-Commerce Website"
          projectSubtitle="Robust e-commerce platform with extensive features"
          projectDescription="Built a robust e-commerce platform with extensive features such as user profiling, cart and order management, product management, ratings and reviews, secure payment integration, and an admin panel for store management."
          technologies={["Laravel", "PHP", "JavaScript", "MySQL"]}
          githubLink="https://github.com/danyalarif/ECommerce-Website-Laravel"
          externalLink=""
        />
      </div>
    </div>
  );
}

function ProjectSection({
  aos,
  imgSrc,
  imgAlt,
  projectLink,
  projectTitle,
  projectSubtitle,
  projectDescription,
  technologies,
  githubLink,
  externalLink,
}) {
  const router = useRouter();
  return (
    <div
      data-aos={aos}
      className="relative md:grid md:grid-cols-12 w-full md:h-96"
    >
      {/* Left image */}
      <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div className="relative rounded w-full h-full col-span-7">
          <a href={projectLink} target="_blank" rel="noreferrer">
            <div
              className="absolute w-full h-full rounded bg-AAprimary 
              transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>
          {imgSrc && (
            <Img
              src={imgSrc}
              alt={imgAlt}
              className={`w-full rounded h-full`}
            />
          )}{" "}
        </div>
      </div>

      {/* right Content */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* background for text in mobile responsive */}
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
            <Img src={imgSrc} alt={imgAlt} className={`w-full h-full`} />
          </div>
        </div>

        <div
          className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
          col-span-8 flex flex-col items-start md:items-end space-y-3"
        >
          <div className="flex flex-col space-y-1 md:items-end z-10">
            <span className="text-AAsecondary text-base">{projectTitle}</span>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                {projectSubtitle}
              </span>
            </a>
          </div>
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
            <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
              {projectDescription}
            </p>
          </div>
          <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
            {technologies.map((tech, index) => (
              <span className="pr-4 z-10" key={index}>
                {tech}
              </span>
            ))}
          </ul>
          <div className="flex flex-row space-x-6 z-10">
            {githubLink && (
              <GithubIcon
                className={
                  "w-5 md:w-6 h-5 md:h-6 text-gray-300 hover:text-AAsecondary"
                }
                onClick={() => {
                  router.push(githubLink);
                }}
              />
            )}
            {externalLink && (
              <div className="w-5 md:w-6 h-5 md:h-6 text-gray-300 hover:text-AAsecondary">
                <ExternalLink url={externalLink} router={router} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
