import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

export default function Fotter() {
  return (
    <div className="bg-[navy] mt-2 px-4 w-screen py-4">
      <h1 className="text-[white] text-2xl sm:text-xl">Get In Touch</h1>
      <span className="text-[white] flex items-center hover:text-[#f5b921] sm:text-sm">
        <FaLocationDot />
        Plot No. C-26, Dabua Colony, Faridabad-121001
      </span>
      <span className="text-[white] flex items-center hover:text-[#f5b921] sm:text-sm">
        <IoIosMail />
        <a href="mailto:Vaishnomanpowerservices@gmail.com">
          Vaishnomanpowerservices@gmail.com
        </a>
      </span>
      <span className="text-[white] flex items-center hover:text-[#f5b921] sm:text-sm">
        <AiFillPhone />
        +91-8588047075
      </span>
    </div>
  );
}
