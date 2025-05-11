import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setemail]=useState("")
  const [password, setpassword]=useState("")
    const navigate = useNavigate()

    const handelsubmit = (e) => {
      e.preventDefault();
    
      axios.post("http://localhost:3000/login", {
        email,
        password
      })
      .then(result => {
        console.log(result)
        if(result.data == "success"){
           localStorage.setItem("isLoggedIn", "true")
          navigate("/todo-list")
        }
      alert(result.data)
      })
      .catch(err => {
      console.log(err)
      alert(err.data)
    });
    };


  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
    <form  onSubmit={handelsubmit}>
      <input
        type="email"
        placeholder="Email"
        className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        onChange={(e) => setemail(e.target.value)}
        autoComplete="username"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full text-black mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        onChange={(e) => setpassword(e.target.value)}
        autoComplete="current-password"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
      >
        Login
      </button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-6">
      Don’t have an account?{" "}
      <Link to={"/signup"} className="text-blue-600 hover:underline">
        Sign up
      </Link>
    </p>
  </div>
</div>

  );
};

export default Login;
