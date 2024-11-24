import React, { useRef } from "react";
import {useStateValue} from "../../context/index"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameValue = username.current.value.trim();
    const passwordValue = password.current.value.trim();
    if (!usernameValue || !passwordValue) {
      toast.warning("Please fill in both fields");
      return;
    }
    const user = {
      username: usernameValue,
      password: passwordValue,
    };
    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        dispatch({ type: "ADD_TOKEN", payload: res.data.accessToken }); 
        navigate("/admin/create-product");
        toast.success(`Welcome ${usernameValue}`);
      })
      .catch((err) => {
        toast.warning("Username or password is incorrect");
        console.error(err);
      });
  };

  return (
    <div className="container_person">
      <form onSubmit={handleSubmit} className="w-96 p-3 shadow-md mx-auto mt-14">
        <h2 className="text-center text-2xl mb-4">Login</h2>
        <input
          type="text"
          ref={username}
          className="w-full h-10 border-[1px] border-slate-400 mb-3 px-3"
          placeholder="Username"
        />
        <input
          type="password"
          ref={password}
          className="w-full h-10 border-[1px] border-slate-400 mb-3 px-3"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full h-10 bg-blue-500 text-white font-semibold hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
