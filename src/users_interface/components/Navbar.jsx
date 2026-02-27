import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Bookings", path: "/bookings" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-8" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition ${
                  location.pathname === link.path
                    ? "text-sky-600"
                    : "text-gray-600 hover:text-sky-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* LOGIN BUTTON */}
          <div className="hidden md:block">
            <Link to="/login">
              <button className="bg-sky-500 text-white px-4 py-1.5 rounded-lg hover:bg-sky-600 transition">
                Login
              </button>
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-gray-700"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-semibold text-lg text-sky-600">Menu</span>

          <button
            onClick={() => setOpen(false)}
            className="text-xl text-gray-600"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`px-6 py-4 text-lg ${
                location.pathname === link.path
                  ? "text-sky-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="p-6">
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="w-full bg-sky-500 text-white py-3 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
