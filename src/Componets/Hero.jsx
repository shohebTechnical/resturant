import React from "react";
import heroImg from "../../src/assets/1.png";
const Hero = () => {
  return (
    <>
      <div className="container grid  grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8">
        {/* text section? */}

        <div className=" flex flex-col items-start md:justify-center gap-5 md:items-center  pt-12 pb-10 md:p-0 md:justify-items-start ">
          <h1 className=" text-4xl font-bold">
            Delicious Food Is Waiting For You
          </h1>

          <p className=" text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            dolor aliquid natus rem voluptate quidem quis rerum quos, est,
            maiores delectus dolor aliquid natus rem voluptate quidem quis rerum quos, est,
            maiores  
          </p>

          <div className=" flex gap-4 items-center justify-center  lg:justify-center">
            <button className="primary-btn hover:bg-gray-400 hover:text-black duration-500 text-lg hover:scale-105">Food Menu</button>
            <button className="secondary-btn hover:text-white hover:bg-orange-500 duration-500 text-lg hover:scale-105">Book Table</button>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center  ">
          <img  src={heroImg} alt=""  className="img-shadow text-center w-[450px]  animate-spin-slow " />
        </div>
      </div>
    </>
  );
};

export default Hero;
