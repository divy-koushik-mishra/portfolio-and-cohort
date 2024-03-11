import React from "react";
import ProjectCard from "../utils/ProjectCard";
import TestCard from "../utils/TestCard";
import { Ri24HoursLine } from "@remixicon/react";

const Projects = () => {
  const majorProjects = [
    {
      id: 1,
      title: "Do-Note front-end",
      desc: "A note-taking app with a twist",
      image: "tech/nextjs3.webp",
    },
    {
      id: 2,
      title: "Do-Note back-end",
      desc: "A note-taking app with a twist",
      image: "tech/nextjs3.webp",
    },
    {
      id: 3,
      title: "GradePerfect- Web presence",
      desc: "A web presence for GradePerfect",
      image: "tech/nextjs3.webp",
    },
    {
      id: 4,
      title: "Express Hive",
      desc: "An opensource NPM Package to ease the boilerplate process of backend API Development",
      image: "tech/nextjs3.webp",
    },
  ];

  const minorPrjects = [
    {
      id: 1,
      title: "Amazon UI Clone",
      desc: "Amazon UI Clone using vanilla HTML, CSS and JS",
      image: "tech/nextjs3.webp",
    },
    {
      id: 2,
      title: "Instagram UI Clone",
      desc: "Instagram UI Clone using Tailwind CSS",
      image: "tech/nextjs3.webp",
    },
    {
      id: 3,
      title: "Twitter UI Clone",
      desc: "Twitter UI Clone using Tailwind CSS",
      image: "tech/nextjs3.webp",
    },
    {
      id: 4,
      title: "Cynthia Ugwu's UI clone",
      desc: "Cynthia Ugwu's website's UI Clone using Next.js and Tailwind CSS",
      image: "tech/nextjs3.webp",
    },
    {
      id: 5,
      title: "Bubble shooter game",
      desc: "Bubble shooter game using vanilla HTML, CSS and JS",
      image: "tech/nextjs3.webp",
    },
    {
      id: 6,
      title: "Presidency University PhD Exam Hallticket Downloader",
      desc: "An Official Website to download Presidency University Exam Hallticket",
      image: "tech/nextjs3.webp",
    },
    {
      id: 7,
      title: "Redux To-do App",
      desc: "A React Redux App to showcase the usecase of Redux",
      image: "tech/nextjs3.webp",
    },
    {
      id: 8,
      title: "Cuberto UI Clone",
      desc: "Cuberto UI Clone using vanilla HTML, CSS and JS",
      image: "tech/nextjs3.webp",
    },
  ];
  return (
    <section className="min-h-screen w-full bg-[url('/project-2.jpg')] bg-no-repeat bg-cover ">
      <h2 className="text-center text-4xl anta-regular py-6 text-[#FBA100]">
        Portfolio Projects Showcase
      </h2>

      <div className="">
        <h2 className="text-2xl text-center font-semibold py-4 text-[#fb9f00b0]">
          Major Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {majorProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl text-center font-semibold py-8 text-[#fb9f00b0]">
          Minor Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {minorPrjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
