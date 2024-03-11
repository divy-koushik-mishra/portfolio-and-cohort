import CohortCourse from "@/components/CohortComponents/CohortCourse";
import CohortHero from "@/components/CohortComponents/CohortHero";
import Footer from "@/components/utils/Footer";
import React from "react";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 bg-[#141819] text-[#ddd]">
      <CohortHero />
      <CohortCourse />
    </main>
  );
};

export default Page;
