import { RiBardFill } from "@remixicon/react";
import React from "react";

const ProjectCard = (props: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  desc:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <div className="flex  p-4 w-56 gap-2 shadow-xl shadow-black rounded-lg cursor-pointer">
      <div className="">
        <RiBardFill className="text-yellow-500" />
      </div>
      <div className="">
        <div className="">
          <span className="font-semibold">{props.title}</span>
        </div>
        <div className="mt-4 text-[#777777]">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
