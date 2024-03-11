import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className=" w-40 font-medium overflow-hidden  shadow hover:shadow-2xl shadow-[#000] cursor-pointer transition-all  hover:scale-95 ">
      {/* <Image
        src={`/${props.image}`}
        alt={props.title}
        width={500}
        height={550}
        className="w-full h-28 obj"
      /> */}
      <h2 className="text-center py-2">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
