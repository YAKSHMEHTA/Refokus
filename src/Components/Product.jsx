import React from "react";
import Button from "./Button";

function Product() {
  return (
    <div className="w-full py-10 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="capitazile text-6xl font-semibold">KRISH</h1>
        <div className="dets w-1/3">
          <p className="mb-10">
            BMW blends precision engineering, sporty performance, luxury design,
            and driving joy, crafting machines that feel alive on every road.
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}

export default Product;