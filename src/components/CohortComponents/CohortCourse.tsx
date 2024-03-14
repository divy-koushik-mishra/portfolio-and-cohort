import React from "react";
import TestCard from "../utils/TestCard";

const CohortCourse = () => {
  return (
    <section className="min-h-screen w-full ">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-center text-white">
          Cohort Course
        </h1>
        <p className="text-center text-white">
          This is the course for the cohort.
        </p>
      </div>
      <div className="">
        <TestCard />
      </div>
    </section>
  );
};

export default CohortCourse;
