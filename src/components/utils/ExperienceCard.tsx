import { RiBookmark3Line } from "@remixicon/react";
import React from "react";

const ExperienceCard = (props: any) => {
  return (
    <div className="flex gap-2 w-1/2 p-4 pl-5 cursor-pointer shadow hover:shadow-2xl  hover:shadow-[#000] transition-all ">
      <div className="">
        <RiBookmark3Line className="text-yellow-700" />
      </div>
      <div className="">
        <div className="">
          <span className="bg-gray-600 text-sm px-2 rounded">
            {props.duration}
          </span>
        </div>
        <div className="textxl">
          <span className="font-semibold">{props.title}</span>-
          <span className="font-normal">{props.company}</span>
        </div>
        <div className="">
          <p className="opacity-65">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
