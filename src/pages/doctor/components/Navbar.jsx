import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/banner.png";

export default function DoctorNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "fa-calendar-check",
    },

  

    {
        name: "My Slots",
        path: "/doctor/slots",
        icon: "fa-calendar-days",
    },

    {
      name: "Profile",
      path: "/doctor/profile",
      icon: "fa-user-doctor",
    },
    {
      name: "Logout",
      path: "/login",
      icon: "fa-right-from-bracket",
    },
  ];

  const mainLinks = navLinks.slice(0, 3);

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center w-full">
          <Link to="/doctor" className="text-xl font-semibold text-sky-600">
            Doctor Panel
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1">
            {mainLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    active
                      ? "bg-sky-50 text-sky-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  }`}
                >
                  <i className={`fa-solid ${link.icon}`}></i>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Logout */}
          <Link to="/login">
            <button className="flex items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-xl">
              <i className={`fa-solid ${navLinks[3].icon}`}></i>
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* ── MOBILE TOP BAR ── */}
      <header className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <i className="fa-solid fa-arrow-left text-gray-700 text-lg"></i>
        </button>

        <span className="text-sky-600 font-semibold">Doctor</span>

        <div className="w-6"></div>
      </header>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around px-2 py-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 min-w-[56px] ${
                  active ? "text-sky-600" : "text-gray-400"
                }`}
              >
                <i
                  className={`fa-solid ${link.icon} ${
                    active ? "scale-110" : ""
                  }`}
                ></i>

                <span className="text-[10px] font-medium">{link.name}</span>

                {active && (
                  <span className="w-1 h-1 bg-sky-500 rounded-full mt-0.5"></span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
