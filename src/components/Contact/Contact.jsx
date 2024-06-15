import React, { useState } from "react";
import axios from "axios";
import { queryapi } from "../../constant/api";
import { toast } from "react-toastify";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(queryapi, {
        Name: inputs?.name,
        email: inputs?.email,
        phoneNumber: inputs?.phone,
        message: inputs?.message,
      });
      console.log(res);
      if (res) {
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Failed to connect to the server");
      } else {
        toast.error("Network error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-white to-blue-100 p-6">
      <div className="w-full max-w-3xl mt-10 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-6">
          <hr className="w-20 h-0.5 bg-blue-500 mr-2" />
          <span className="text-navy-700 font-semibold text-3xl sm:text-lg">
            Contact Us
          </span>
          <hr className="w-20 h-0.5 bg-blue-500 ml-2" />
        </div>
        <h2 className="text-center font-medium text-xl text-navy-700 mb-4">
          We are here for your Queries
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
              className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={inputs.phone}
              onChange={handleChange}
              className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={inputs.message}
              onChange={handleChange}
              className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
