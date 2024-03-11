import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Faq from "@/components/CohortComponents/Faq";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // My Post: {params.slug}
  return (
    <section className="min-h-screen flex flex-col items-center w-full p-10">
      <div className="container h-4/5 flex  items-center border-b border-gray-700 mb-20">
        <div className="w-2/5">
          <Image
            src="/tech/aws.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-3/5 p-10 ">
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
              <p>
                <p>
                  <em className="font-bold text-lg">
                    Weeks 1-2: Introduction to Python
                  </em>{" "}
                  <br />
                  <br /> - History and basics of Python - Setting up Python
                  development environment - Writing and running simple Python
                  programs - Introduction to variables and data types <br />
                  <em className="font-bold text-lg">Weeks 3-4: Control Flow</em>
                  <br /> - Understanding if statements and loops - Using logical
                  operators (and, or, not) - Writing programs with loops and
                  conditions <br />
                  <em className="font-bold text-lg">
                    Weeks 5-6: Lists and Strings
                  </em>{" "}
                  <br />
                  <br /> - Declaring and initializing lists - Accessing and
                  modifying list elements - String manipulation methods - Using
                  lists and strings in programs <br />
                  <em className="font-bold text-lg">
                    Weeks 7-8: Functions
                  </em>{" "}
                  <br />
                  <br /> - Defining and calling functions - Passing arguments to
                  functions - Returning values from functions - Using functions
                  to modularize code <br />
                  <em className="font-bold text-lg">
                    Weeks 9-10: Dictionaries and Sets
                  </em>{" "}
                  <br />
                  <br /> - Declaring and initializing dictionaries and sets -
                  Accessing and modifying dictionary and set elements - Using
                  dictionaries and sets in programs <br />
                  <em className="font-bold text-lg">
                    Weeks 11-12: File Handling
                  </em>{" "}
                  <br />
                  <br /> - Reading from and writing to files - Using file
                  streams in Python - Handling file exceptions - Working with
                  text files in Python <br />
                  <em className="font-bold text-lg">
                    Weeks 13-14: Object-Oriented Programming
                  </em>{" "}
                  <br />
                  <br /> - Introduction to classes and objects - Creating
                  classNamees and objects in Python - ClassName constructors and
                  methods - Encapsulation and data hiding <br />
                  <em className="font-bold text-lg">
                    Weeks 15-16: Inheritance and Polymorphism
                  </em>{" "}
                  <br />
                  <br /> - Understanding inheritance
                </p>
              </p>
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
