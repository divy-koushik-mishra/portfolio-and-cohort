import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[url('/bg-2.jpg')] bg-no-repeat bg-cover bg-[#141819] flex items-center relative top-0 md:px-24">
      <div className="flex flex-col anta-regular">
        <h1 className="text-6xl font-semibold">Divy</h1>
        <h1 className="text-8xl font-bold"> Koushik</h1>
        <h1 className="text-6xl font-semibold mb-3">Mishra</h1>
        <h2 className="text-2xl anta-regular mb-7 ">Full Stack Developer</h2>
        <div className="flex gap-10">
          <button className="border hover:bg-[#ddd] hover:text-black border-white rounded-xl px-12 py-2">
            Resume
          </button>
          <button className="border hover:bg-[#ddd] hover:text-black border-white rounded-xl px-12 py-2">
            Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
