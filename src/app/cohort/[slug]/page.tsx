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
import Card from "@/components/CohortComponents/Card";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [curriculumURL, setCurriculumURL] = useState("");
  const isJavaSlug = slug === "java";

  useEffect(() => {
    if (slug === "python") {
      setThumbnailUrl("/tech/python.jpg");
      setCurriculumURL("/curriculums/python-curriculum.pdf");
    } else if (slug === "java") {
      setThumbnailUrl("/tech/java.png");
      setCurriculumURL("/curriculums/java-curriculum.pdf");
    } else if (slug === "c") {
      setThumbnailUrl("/tech/c.png");
      setCurriculumURL("/curriculums/c-curriculum.pdf");
    }
  }, [slug]);

  return (
    <section className="min-h-screen flex flex-col items-center w-full py-5 md:p-10">
      <div className="container h-4/5 flex flex-col md:flex-row items-center border-b border-gray-700 mb-20">
        <div className="w-full md:w-2/5">
          <Image
            src={thumbnailUrl}
            alt="hero"
            width={1920}
            height={1080}
            className="w-full rounded-lg  my-10"
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
            <div className="flex flex-col justify-center items-center">
              {isJavaSlug && (
                <>
                  <h3 className="text-xl font-semibold my-5">Curriculum</h3>
                  <div className="flex flex-col md:flex-row gap-5 w-full">
                    <Card url={curriculumURL} />
                    {/* <Card url={curriculumURL} /> */}
                  </div>
                </>
              )}

              {!isJavaSlug && (
                <p className="text-xl text-center">Coming Soon</p>
              )}

              {isJavaSlug && (
                <Link href="/cohort/java/whatsapp-channel">
                  <button className="border w-full p-3 rounded-[8px] my-5 hover:bg-[#ddd] hover:text-black transition-all">
                    Join Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}
