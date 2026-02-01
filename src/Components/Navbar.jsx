import React from "react";
import Button from "./Button";
import "../index.css";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center  bg-copper-100 justify-between border-b-1 border-zinc-700">
      <div className="nleft flex items-center gap-1">
        <img
          className="h-10 w-10 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/014/414/135/original/fox-face-illustration-perfect-for-fashion-brand-clothing-business-logo-design-and-kids-t-shirt-design-vector.jpg"
          alt=""
        />
        refokus
        <div className="links flex gap-14 ml-35">
          {["Home", "About", "Work"].map((elem, idx) => (
            <a className="flex items-center gap-1">
              {idx === 1 ? (
                <span
                  style={{ boxShadow: "0 0 0.45rem #00FF19 " }}
                  className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 "
                ></span>
              ) : null}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
