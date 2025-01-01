import { React, useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useData, setUserData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setUserData([...useData, { email, password }]);
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
            Login
          </button>
          <p className="text-center mb-4">
            New Here ?
            <Link to="/signup" className="text-blue-600">
              {" "}
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#cacc44] flex items-center justify-center  text-white font-semibold mb-7 rounded px-2 py-1.5 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
