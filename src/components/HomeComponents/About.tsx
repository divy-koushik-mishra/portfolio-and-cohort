import React from "react";

const About = () => {
  const aboutContent = {
    title: "About",
    email: "contact@divykoushikmishra.in",
    content:
      "Hey there! I am Divy Koushik Mishra, a B.Tech student with a passion for technology, specializing in DevOps.  As a Full-Stack MERN Developer fluent in JavaScript and Python, I love building robust and innovative solutions that bring ideas to life.  My journey extends into the realm of Machine Learning, where I explore the exciting possibilities of intelligent algorithms. I thrive on continuous learning and staying on top of the ever-evolving tech landscape.  With expertise in DevOps practices, I navigate the world of deployment, version control (Git), and containerization (Docker) seamlessly. Cloud platforms like AWS, DigitalOcean, and Linode are my playground for scaling applications. ",
  };
  return (
    <section className="w-full flex bg-[url('/dk-3.jpg')] bg-no-repeat bg-cover bg-center md:bg-top">
      {/* <div className="  bg-blur backdrop-filter backdrop-blur-lg w-full h-full"> */}
      <div className=" hidden md:block w-full md:w-1/2 min-h-screen"></div>
      <div className="w-full md:w-1/2 flex flex-col justify-evenly p-8 items-center ">
        <div className=" anta-regular">
          <h1 className="text-5xl font-bold py-1">{aboutContent.title}</h1>
          <hr className="w-1/2 mb-3" />
          <p className="text-center">
            <strong>Email:</strong> {aboutContent.email}
          </p>
        </div>
        <div className="w-4/5">{aboutContent.content}</div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
