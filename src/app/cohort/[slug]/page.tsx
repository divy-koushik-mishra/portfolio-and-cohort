"use client";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Faq from "@/components/CohortComponents/Faq";
import { useState, useEffect } from "react";
import Python from "@/components/CohortComponents/CourseInfo/Python";
import Java from "@/components/CohortComponents/CourseInfo/Java";
import C from "@/components/CohortComponents/CourseInfo/C";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [python, setPython] = useState(false);
  const [java, setJava] = useState(false);
  const [c, setC] = useState(false);
  useEffect(() => {
    if (slug === "python") {
      setThumbnailUrl("/tech/python.jpg");
      setPython(true);
    } else if (slug === "java") {
      setThumbnailUrl("/tech/java.png");
      setJava(true);
    } else if (slug === "c") {
      setThumbnailUrl("/tech/c.png");
      setC(true);
    }
  }, [slug]);
  // My Post: {params.slug}
  return (
    <section className="min-h-screen flex flex-col items-center w-full py-5 md:p-10">
      <div className="container h-4/5 flex flex-col md:flex-row items-center border-b border-gray-700 mb-20">
        <div className="w-full md:w-2/5">
          <Image
            src={thumbnailUrl}
            alt="hero"
            width={1920}
            height={1080}
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-3/5 py-4 md:p-10 ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cohort">Cohort</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{params.slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h2 className="text-4xl font-bold my-2">
            <span className="capitalize">{params.slug}</span> Cohort
          </h2>

          <div className="">
            <h3 className="text-xl font-semibold my-5">Curriculam</h3>
            <div className="">
              {python ? <Python /> : null}
              {java ? <Java /> : null}
              {c ? <C /> : null}

              <button className="border p-3 rounded-[8px] my-5 hover:bg-[#ddd] hover:text-black transition-all">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}
