import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://miro.medium.com/v2/resize:fit:720/format:webp/0*YKnWMU_5guQtxIR1)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        ></img>
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold"> Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex item-center justify-center w-full bg-black text-white py-3 rounded mt-4"
          >
            continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
