import React from "react";
import BannerImg from "../assets/2.png";
const Banner = () => {
  return (
    <>
      <div className=" container py-14">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8  justify-center items-center">
          {/* images section  */}
          <div>
            <img src={BannerImg} alt="" />
          </div>
          {/* text section  */}
          <div className="flex flex-col justify-center" >
            <h1 className=" text-4xl font-semibold">Good Is Always Good</h1>
            <p className="py-4 text-xl font-medium ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem harum, vel repellendus rerum reprehenderit velit
              nesciunt, quis quas distinctio asperiores maiores vitae id quaerat
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
