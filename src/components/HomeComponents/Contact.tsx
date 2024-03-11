import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMailFill,
  RiSendPlaneFill,
  RiStackOverflowFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react";
import React from "react";

const Contact = () => {
  const socialList = [
    {
      id: 1,
      name: "Twitter",
      link: "https://twitter.com/ugwucynthia_",
      icon: "twitter-x",
      color: "blue",
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://www.github.com/divy-koushik-mishra",
      icon: "github",
      color: "black",
    },
    {
      id: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/divy-koushik-mishra",
      icon: "linkedin-box",
      color: "blue",
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/divy_koushik_mishra",
      icon: "instagram-line",
      color: "pink",
    },
    {
      id: 5,
      name: "Email",
      link: "mailto:divykoushikmishra@gmail.com",
      icon: "mail",
      color: "red",
    },
  ];
  return (
    <section className="relative bg-[url('/contact-1.jpg')] bg-no-repeat bg-cover w-full min-h-screen py-12">
      <div className="relative">
        <h1 className="font-black text-7xl text-gray-500 text-center relative z-0 opacity-25">
          CONTACT
        </h1>
        <h2 className="absolute top-4 left-0 w-full text-center text-4xl font-semibold anta-regular z-20">
          Get In <span className="text-[#0FE2DC]">touch</span>
        </h2>
      </div>
      <div className="flex flex-col  md:flex-row">
        <div className="w-full md:w-2/5 flex flex-col py-8 px-16">
          <p className="">
            I am available for freelance work. Connect with me through any of
            the following platforms.
          </p>
          <div className="">
            {/* {socialList.map((social) => (
              <a
                href={social.link}
                key={social.id}
                className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
              >
                <span className="text-2xl text-yellow-500">
                  <i className={`ri-${social.icon}-fill`}></i>
                </span>
                <span>{social.name}</span>
              </a>
            ))} */}
            <ol>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiMailFill className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>Mail</span>
                </a>
              </li>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiLinkedinBoxFill className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiGithubFill className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiTwitterXFill className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiStackOverflowFill className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>Stackoverflow</span>
                </a>
              </li>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiInstagramLine className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={socialList[0].link}
                  className={`flex gap-2 items-center p-2 text-[#c5c5c5] rounded-xl my-4 w-full`}
                >
                  <span className="text-2xl text-yellow-500">
                    <RiYoutubeFill className="inline-block text-yellow-700 ml-2" />
                  </span>
                  <span>YouTube</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-8">
          <form action="" className="flex flex-col gap-6">
            <div className="flex gap-8">
              <input
                className="w-1/2 rounded-3xl p-3 bg-transparent border-2 border-[#474747] bg-blur backdrop-filter backdrop-blur-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-1/2 rounded-3xl p-3 bg-transparent border-2 border-[#474747] bg-blur backdrop-filter backdrop-blur-sm"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="rounded-3xl p-3 w-full bg-transparent border-2 border-[#474747] bg-blur backdrop-filter backdrop-blur-sm"
            />
            <textarea
              name=""
              id=""
              cols={20}
              rows={10}
              placeholder="Your message"
              className="rounded-3xl p-3 w-full bg-transparent border-2 border-[#474747] bg-blur backdrop-filter backdrop-blur-sm"
            ></textarea>

            <button
              type="submit"
              value="Send Message"
              className="bg-[#0FE2DC] text-[#141819] px-5 py-2 rounded-3xl cursor-pointer w-fit"
            >
              Send Message
              <RiSendPlaneFill className="inline-block text-white ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
