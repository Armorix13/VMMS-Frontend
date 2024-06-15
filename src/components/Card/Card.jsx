import React from "react";

export default function Card(props) {
  return (
    <div className="card w-60 h-60 ml-4 mr-4 mb-4 mt-2 border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-200 ease-in-out">
      <div className="w-full h-44">
        <img
          src={props.image}
          className="w-full h-full object-contain"
          alt="Card Image"
        ></img>
      </div>
      <div className="w-full h-16 flex justify-center items-center bg-gray-100">
        <span className="text-gray-800 font-semibold">{props.task1}</span>
      </div>
    </div>
  );
}
