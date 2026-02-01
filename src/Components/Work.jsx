import React from "react";

function Work() {
  var images = [
    {
      url: "https://i.pinimg.com/736x/dc/d2/02/dcd20235abccefe2a02ab7ea37b5ac0c.jpg",
      top: "50",
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
  ];
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl relative text-center  mx-auto">
        <h1 className="text-[30vw] font-medium select-none leading-none">
          work
        </h1>
        <div className="w-full absolute top-0 h-full">
          {images.map((image, index) =>
            image.isActive ? (
              <img
                className="w-60 absolute -translate-x-[50%] translate-y-[50%] rounded-lg"
                style={{ top: image.top, left: image.left }}
                src={image.url}
                alt=""
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
