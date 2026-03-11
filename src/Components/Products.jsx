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

  var image = [
    {
      url: "https://i.pinimg.com/736x/dc/d2/02/dcd20235abccefe2a02ab7ea37b5ac0c.jpg",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://i.pinimg.com/736x/61/a8/d9/61a8d9a75e2a41c4eb4ae5f7466da80d.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/d0/5e/87/d05e8716446c82a1e178707ac3476284.jpg",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/1200x/d7/25/1e/d7251e4b6a86143787b4b76afe48ded2.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/a6/db/73/a6db736c419380d2c6102fa8dc2d2d35.jpg",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/91/c4/ee/91c4ee1ca668994679f7ea8742856aba.jpg",
      top: "60%",
      left: "55%",
      isActive: false,
    },
  ]

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
          ><img src={image[0].url} alt="" /></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ><img src={image[1].url} alt="" /></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ><img src={image[2].url} alt="" /></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full  h-full bg-blue-400"
          ><img src={image[3].url} alt="" /></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
