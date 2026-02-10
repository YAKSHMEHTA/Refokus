import React from "react";
import Button from "./Button";

function Product({ val,mover,count }) {
  return (
    <div className="w-full  text-white h-[23rem] py-20 bg-gray-400">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="capitazile text-6xl font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-4 justify-between">
            {val.live && <Button ></Button>}
            {val.more && <Button info="More" ></Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
