import { React, useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [useData, setUserData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    console.log(useData);
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        ></img>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex flex-row gap-4">
            <input
              className="bg-[#eeeeee] w-1/2 mb-7 rounded px-2 py-1.5 border text-lg placeholder:text-base"
              required
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
            ></input>
            <input
              className="bg-[#eeeeee] mb-7 w-1/2 rounded px-2 py-1.5 border text-lg placeholder:text-base"
              required
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            ></input>
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-2 py-1.5 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          ></input>
          <h3 className="text-lg font-medium mb-2">Enter Passowrd</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-2 py-1.5 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          ></input>
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-2 py-1.5 w-full text-lg placeholder:text-base">
            Sign Up
          </button>
          <p className="text-center mb-4">
            Already are a captain?
            <Link to="/captain-login" className="text-blue-600">
              {" "}
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
