import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { loginapi, singupapi } from "../../constant/api";

export default function Auth() {
  const location = useLocation();
  const isSignup = location.pathname.includes("/signup");
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignup) {
      try {
        console.log("Signup details:", inputs);
        const res = await axios.post(singupapi, {
          Name: inputs?.name,
          email: inputs?.email,
          password: inputs?.password,
          currentPassword: inputs?.confirmPassword,
        });
        if (res) {
          toast.success(res?.data?.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    } else {
      try {
        const res = await axios.post(loginapi, {
          email: inputs?.email,
          password: inputs?.password,
        });
        if (res) {
          toast.success(res?.data?.message);
          console.log(res?.data?.data);
          if (parseInt(res?.data?.data?.role) === 0) {
            localStorage.setItem("token", res?.data?.data?.token);
            localStorage.setItem("Role", res?.data?.data?.role);
            navigate("/user");
          } else {
            localStorage.setItem("token", res?.data?.data?.token);
            localStorage.setItem("Role", res?.data?.data?.role);
            navigate("/admin");
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
      console.log("Login details:", {
        email: inputs.email,
        password: inputs.password,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-white to-blue-100 p-6">
      <div className="w-full max-w-3xl mt-10 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-6">
          <hr className="w-20 h-0.5 bg-blue-500 mr-2" />
          <span className="font-semibold text-3xl sm:text-lg text-navy-700">
            {isSignup ? "Signup" : "Login"}
          </span>
          <hr className="w-20 h-0.5 bg-blue-500 ml-2" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            {isSignup && (
              <label className="w-full max-w-md">
                <span className="block text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={inputs?.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            )}
            <label className="w-full max-w-md">
              <span className="block text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="w-full max-w-md">
              <span className="block text-gray-700">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            {isSignup && (
              <label className="w-full max-w-md">
                <span className="block text-gray-700">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={inputs.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            )}
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              {isSignup ? "Signup" : "Login"}
            </button>
            <div>
              <span> Don't have an account?</span>{" "}
              <Link
                to={isSignup ? "/login" : "/signup"}
                className="text-blue-600"
              >
                {isSignup ? "Login" : "Signup"}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
