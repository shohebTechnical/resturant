import React from "react";
import profile from "../../src/assets/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className=" py-4">
      <div className=" container flex justify-between items-center">
        {/* logo section  */}

        <div >
          <p className=" uppercase text-2xl font-semibold">
            Food <span className=" text-red-500">ear</span>
          </p>
        </div>

        {/* menu section  */}
        <div className=" flex justify-center items-center gap-4 ">
          <ul className=" hidden sm:flex  gap-8 ">
            <li className="hover:border-b-2 border-orange-500 uppercase">
              Home
            </li>
            <li className="hover:border-b-2 border-orange-500 uppercase">
              Menu
            </li>
            <li className="hover:border-b-2 border-orange-500 uppercase">
              About
            </li>
            <li className="hover:border-b-2 border-orange-500 uppercase">
              Contact 
            </li>
          </ul>
        </div>

        {/* login  */}
        <div className=" flex items-center gap-4">
          <img src={profile} alt="" className=" w-10 rounded-full" />
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
