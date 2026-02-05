import React from "react";
import Product from "./Product";
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
      title: "Lamborghini",
      description:
        "Bold, aggressive supercars known for dramatic styling, thunderous engines, and extreme performance.",
      live: true,
      more: false,
    },
  ];

  return (
    <div className="mt-20">
      {data.map((val,index)=>(
        <Product val={val}></Product>
      ))}
    </div>
  );
}

export default Products;
