import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [useData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, fullname } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status == 201) {
      const data = response.data;
      setUserData(data.user);
      navigate("/login");
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
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
            Create Account
          </button>
          <p className="text-center mb-4">
            Already Have a Account?
            <Link to="/login" className="text-blue-600">
              {" "}
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
