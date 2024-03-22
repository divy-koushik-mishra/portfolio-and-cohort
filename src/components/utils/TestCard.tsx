import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const TestCard = () => {
  const cohort = [
    {
      name: "Java Cohort",
      description: "This is the Java cohort.",
      image: "/tech/java.png",
      link: "/cohort/java",
    },
    {
      name: "Python Cohort",
      description: "This is the Python cohort.",
      image: "/tech/python.jpg",
      link: "/cohort/python",
    },
    {
      name: "C Cohort",
      description: "This is the C cohort.",
      image: "/tech/c.png",
      link: "/cohort/c",
    },
  ];
  return (
    <div className="overflow-hidden ">
      <div className="">
        <Carousel className="md:p-20 hidden md:block">
          <CarouselContent>
            {cohort.map((cohort) => (
              <Link href={cohort.link} key={cohort.name}>
                <CarouselItem className=" sm:basis-1/2 md:basis-1/3 ">
                  <Image
                    src={cohort.image}
                    alt="cohort"
                    width={500}
                    height={300}
                    className="rounded w-full text-center h-56 hover:scale-95 transition-all"
                  />
                  <h1>{cohort.name}</h1>
                  <p>{cohort.description}</p>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="block md:hidden pb-10 border-b border-gray-600">
        <Carousel className="md:p-20" orientation="vertical">
          <CarouselContent>
            {cohort.map((cohort) => (
              <Link href={cohort.link} key={cohort.name}>
                <CarouselItem className="">
                  <Image
                    src={cohort.image}
                    alt="cohort"
                    width={500}
                    height={300}
                    className="rounded w-full text-center h-56"
                  />
                  <h1 className="pt-2 text-xl font-medium">{cohort.name}</h1>
                  <p className="pt-2">{cohort.description}</p>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TestCard;
