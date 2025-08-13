import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Service" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className=" py-4">
      <div className=" flex items-center justify-between container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-auto w-auto" />
        </div>

        {/* Nav + Search (Desktop) */}
        <div className="hidden lg:flex items-center justify-center  w-full">
          <div className="flex  items-center justify-around bg-[#232323] rounded-full px-2 py-1 gap-x-6">
            {/* Nav Links */}
            <div className="flex gap-2 px-6">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-full font-bold transition-colors duration-200 ${
                      isActive
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/20"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
            {/* Search Bar */}
            <div className="flex items-center bg-[#232323] rounded-full m gap-1">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-black bg-white rounded-full px-3 py-1 w-28 md:w-40"
              />
              <button className="text-black bg-white rounded-full p-1.5 ">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-auto hidden xl:block opacity-0"
          />
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col gap-4 px-6 py-4 z-50">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `py-1 text-sm ${
                  isActive ? "text-blue-400" : "hover:text-blue-300"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center bg-white text-black rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full"
            />
            <FaSearch />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
