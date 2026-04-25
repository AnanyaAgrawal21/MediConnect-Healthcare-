import React from "react";

const Login = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 block mt-4"
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="border p-2 block mt-4"
      />

      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;