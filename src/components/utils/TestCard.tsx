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
      image: "/tech/python.jpg",
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
      image: "/tech/python.jpg",
      link: "/cohort/c",
    },
  ];
  return (
    <Carousel className="md:p-20">
      <CarouselContent>
        {cohort.map((cohort) => (
          <Link href={cohort.link} key={cohort.name}>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex-wrap flex">
              <Image
                src={cohort.image}
                alt="cohort"
                width={500}
                height={300}
                className="rounded w-full text-center"
              />
              <h1>{cohort.name}</h1>
              <p>{cohort.description}</p>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestCard;
