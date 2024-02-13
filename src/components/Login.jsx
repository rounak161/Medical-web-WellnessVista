import React, { useState } from "react";
import LoginImg from "../assets/img/login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://doctor-backend-henna.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      if (response.ok) {
        // Login successful
        localStorage.setItem("username", username);
        navigate("/");
      } else {
        // Handle errors
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="h-screen bg-[rgb(28,164,189)] bg-opacity-10 flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/2">
        <div className="font-medium tracking-wide text-3xl">Welcome to</div>
        <div className="font-medium text-5xl my-4 tracking-widest animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          InHeal
        </div>
        <div className="my-4 text-gray-700 tracking-wide">
          Great achievements are accomplished with peace of mind.
        </div>
        <div className="my-4 text-gray-700 tracking-wide">
          We are delighted to offer a modern and user-friendly service to ensure
          you have the best experience.
        </div>
        <img
          src={LoginImg}
          className="w-[40rem] text-center my-6 mx-auto"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 bg-white shadow-xl px-8 py-6 rounded-xl">
        <div className="my-4 font-bold text-gray-800 text-2xl">Sign in</div>
        <form onSubmit={handleSubmit}>
          <input
            className="text-sm my-4 w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
