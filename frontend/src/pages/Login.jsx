// src/pages/Login.jsx

import { useState, useContext } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await loginUser(formData);

      login(
  res.data.token,
  {
    name: res.data.name,
    email: res.data.email,
  }
);

      navigate("/");

    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome Back
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <button
            type="submit"
            className="w-full p-4 rounded-2xl bg-violet-600 hover:bg-violet-700 transition font-semibold"
          >
            Login
          </button>

        </div>

        <p className="mt-6 text-center text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400"
          >
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;