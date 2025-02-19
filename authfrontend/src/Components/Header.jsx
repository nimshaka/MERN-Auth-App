import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-teal-400">
          AuthApp
        </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-teal-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-300">
            About
          </Link>
        </nav>
        <div>
          <Link
            to="/sing-in"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
