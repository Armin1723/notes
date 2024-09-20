import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr + 1) % 4);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="carousel-container overflow-x-hidden overflow-y-auto w-4/5 flex flex-col gap-8">
      <div
        className="min-w-full carousel flex transition-transform ease-out duration-500 text-center"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        <div className="min-w-full">
          Lorem ipsum dolor sit amet 0000, consectetur adipisicing elit.
          Quibusdam deserunt ut libero.
        </div>
        <div className="min-w-full">
          Lorem ipsum dolor sit amet 1234 adipisicing elit. Atque vitae
          voluptates fuga.
        </div>
        <div className="min-w-full">
          Lorem ipsum dolor sit amet 5678, adipisicing elit. Officiis, delectus
          vitae! Corporis?
        </div>
        <div className="min-w-full">
          Lorem ipsum dolor sit amet, 7890 adipisicing elit. Voluptates esse
          ipsum officiis!
        </div>
      </div>
      <div className="carousel-indicators flex items-center justify-center gap-2">
        {[1, 1, 1, 1].map((i, index) => {
          const isActive = curr === index;
          return (
            <div
              key={index}
              onClick={() => {
                setCurr(index);
                clearInterval(slideInterval);
              }}
              className={`rounded-full bg-neon-green/70 border ${
                theme === "dark" ? "border-gray-400" : "border-black"
              } h-2 ${
                isActive ? "w-6" : "w-2"
              } transition-all duration-500 cursor-pointer hover:bg-neon-green`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
