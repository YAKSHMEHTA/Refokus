import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var data = [
    {
      title: "BMW",
      description:
        "German performance luxury blending sporty handling, advanced technology, and everyday comfort with iconic design.",
      live: true,
      more: false,
    },
    {
      title: "Porsche",
      description:
        "Precision-engineered sports cars famous for razor-sharp handling, timeless design, and race-bred performance.",
      live: true,
      more: false,
    },
    {
      title: "Ferrari",
      description:
        "Italian supercars symbolizing speed, passion, and exclusivity, powered by roaring engines and racing heritage.",
      live: true,
      more: false,
    },
    {
      title: "Lambo",
      description:
        "Bold, aggressive supercars known for dramatic styling, thunderous engines, and extreme performance.",
      live: true,
      more: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (value) => {
    setPos(value * 23);
  };

  return (
    <div className="mt-20 relative">
      {data.map((val, index) => (
        <Product val={val} mover={mover} count={index}></Product>
      ))}
      <div className="h-full absolute top-0 w-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-5%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="Window absolute left-[45%] w-[28rem] -translate-x-[50%] h-[23rem] overflow-hidden bg-white"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
