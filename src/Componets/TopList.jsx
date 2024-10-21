import React from "react";
import Image5 from "../assets/5.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";

const FoodData = [
  {
    Image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis this text is oneline",
  },
  {
    Image: Image4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis this text is oneline",

  },
  {
    Image: Image5,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis this text is oneline",

  },
];

const TopList = () => {
  return (
    <div className=" container py-16">
      <div className=" text-center mb-12">
        <h1 className=" text-4xl font-semibold">Top List</h1>
        {/* <hr className=" w-25 mx-auto" /> */}
        <p className=" text-lg font-medium text-gray-500">Our top ist</p>
      </div>

      {/* // card section  */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {FoodData.map((item, index) => (
          <div key={index} className=" bg-white/50 p-5 sm:p-3 md:pt-5 rounded-3xl hover:scale-110 transition duration-300 ">
            <img
              src={item.Image}
              alt=""
              className="md:w-50  sm:w-40 sm:h-40  mx-auto object-cover rounded-full img-shadow "
            />

            <div className=" space-y-2 ">
              <p className=" text-red-500">{item.rating} </p>
              <p className=" text-lg font-semibold">{item.name}</p>
              <p className="">{item.desc} </p>
              <p className=" text-lg font-semibold">{item.price} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
