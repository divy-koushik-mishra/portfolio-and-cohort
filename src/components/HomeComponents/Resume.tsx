import React from "react";
import Card from "../utils/Card";
import ExperienceCard from "../utils/ExperienceCard";

const Resume = () => {
  const technologies = [
    { id: 1, image: "tech/nextjs3.webp", name: "Next.js" },
    { id: 2, image: "tech/reactjs.png", name: "React.js" },
    { id: 3, image: "tech/expressjs.jpeg", name: "Express.js" },
    { id: 4, image: "tech/mongo.jpg", name: "MongoDB" },
    { id: 5, image: "tech/tailwindcss.jpg", name: "Tailwind" },
    { id: 6, image: "tech/web-socket.jpg", name: "WebSockets" },
    { id: 7, image: "tech/web-rtc.jpg", name: "Web RTC" },
    { id: 8, image: "tech/javascript.png", name: "JavaScript" },
    { id: 9, image: "tech/django.jpg", name: "Django" },
    { id: 10, image: "tech/fastapi.jpg", name: "FastAPI" },
    // { id: 11, image: "tech/numpy.jpg", name: "NumPy" },
    // { id: 12, image: "tech/pandas.jpg", name: "Pandas" },
    { id: 13, image: "tech/langchain.jpg", name: "LangChain" },
    { id: 14, image: "tech/python.jpg", name: "Python" },
    { id: 15, image: "tech/docker.jpg", name: "Docker" },
    { id: 16, image: "tech/aws.jpg", name: "AWS" },
  ];

  const experience = [
    {
      id: 1,
      title: "Full-stack Developer",
      company: "Mappleplex",
      duration: "2021 - Present",
      desc: "Worked as a full stack intern and helped the startup to build and deploy the official web app",
    },
    {
      id: 2,
      title: "Project Manager",
      company: "NxtEra Devices",
      duration: "2021 - Present",
      desc: "Worked as a project manager, as the firm was a web development agency for local businesses. ",
    },
    {
      id: 3,
      title: "B.Tech",
      company: "Presidency University",
      duration: "2023 - 2027",
      desc: "Pursuing B.Tech in Computer Science and Engineering",
    },
    {
      id: 4,
      title: "Full-stack Developer",
      company: "Gradeperfect",
      duration: "2024 - present",
      desc: "Pucchu will re writre thes all",
    },
  ];
  return (
    <section
      className="w-full min-h-screen  bg-[url('/resume-4.jpg')] bg-no-repeat bg-cover py-10"
      id="resume"
    >
      <div className="">
        <h2 className="text-center text-4xl anta-regular py-6 text-[#FBA100]">
          Experience and Education
        </h2>
        <div className="flex flex-wrap  justify-center w-full">
          {experience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              desc={exp.desc}
            />
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-center text-4xl anta-regular py-6 text-[#FBA100]">
          My Skills
        </h2>
        <div className="cardsHolder flex flex-wrap gap-5 justify-center  px-3">
          {technologies.map((tech) => (
            <Card
              key={tech.id}
              title={tech.name}
              image={tech.image}
              content={""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
