import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start}) {
  return (
    <div className={`p-5 bg-zinc-800 rounded-xl ${width} min-h-[35rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h1>Heading</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl mt-5">YAKSH</h1>
      </div>
      <div className="down w-full mb-2 ">
        <h1 className="text-7xl font-semibold tracking-tight leading-none">{start}</h1>
        <button className=" mt-10 rounded-full border-[1px] py-2 px-7">Get Started</button>
      </div>
    </div>
  );
}

export default Card;