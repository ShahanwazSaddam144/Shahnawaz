"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4 h-auto shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-[20px] lg:text-[30px] font-bold">
          Shahnawaz Saddam Buttggf
        </h1>

        {/* Hamburger Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <Link
              href="#about"
              className="hover:text-yellow-300 hover:bg-blue-500 px-3 py-1 rounded-md transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:text-yellow-300 hover:bg-blue-500 px-3 py-1 rounded-md transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-yellow-300 hover:bg-blue-500 px-3 py-1 rounded-md transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-yellow-300 hover:bg-blue-500 px-3 py-1 rounded-md transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`lg:hidden flex flex-col mt-4 space-y-2 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {["about", "skills", "projects", "contact"].map((item) => (
          <li key={item} className="w-full text-center">
            <Link
              href={`#${item}`}
              className="block px-4 py-2 hover:bg-blue-500 hover:text-yellow-300 rounded-md transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
