import Image from "next/image";
import React from "react";

const CohortHero = () => {
  return (
    <section className="min-h-screen  w-full p-5 ">
      <div className="flex flex-col items-center justify-center py-16   bg-gradient-to-br from-[#050e2f] to-[#87237f] rounded-3xl ">
        <div className="md:w-3/4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Code Mentor
          </h1>
          <h1 className="text-2xl text-center  md:text-2xl">by</h1>
          <h2 className="text-xl md:text-4xl font-bold text-right text-white uppercase">
            Divy Koushik Mishra
          </h2>
        </div>
      </div>
      <div className="w-full  flex flex-col md:flex-row ">
        <div className="w-full md:w-2/5 py-10 ">
          <Image
            src={"/cohort-1.jpg"}
            alt="cohort"
            width={1920}
            height={1080}
            className="md:w-3/4 rounded-3xl"
          />
        </div>
        <div className="md:w-3/5 flex flex-col justify-center items-center md:p-10">
          <h2 className="text-2xl font-semibold my-5 ">Description</h2>
          <p>
            This course, led by Divy Koushik Mishra, spans an intense 10-14
            weeks dedicated to the programming language of your choice. You will
            learn to code, gain a deep understanding of the language, and work
            on projects that will enhance your resume.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CohortHero;
