import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        MediConnect
      </h1>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/doctors">Find Doctor</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/login">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          Login
        </button>
      </Link>
    </header>
  );
};

export default Header;