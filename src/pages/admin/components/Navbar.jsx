import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Dashboard", path: "/admin", icon: "fa-house" },
    { name: "Users", path: "/admin/users", icon: "fa-users" },
    { name: "Doctors", path: "/admin/doctors", icon: "fa-user-doctor" },
    { name: "Hospitals", path: "/admin/hospitals", icon: "fa-hospital" },
    { name: "Bookings", path: "/admin/bookings", icon: "fa-calendar-check" },
  ];

  // ✅ FIXED: show all links
  const mainLinks = navLinks;

  return (
    <>
      {/* ───── DESKTOP NAVBAR ───── */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center w-full">
          {/* LOGO */}
          <Link to="/admin" className="flex items-center gap-2">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small_2x/golden-logo-template-free-png.png"
              alt="logo"
              className="h-14"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-2 flex-wrap">
            {mainLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-sky-100 text-sky-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  }`}
                >
                  <i className={`fa-solid ${link.icon}`}></i>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* LOGOUT */}
          <Link
            to="/login"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-xl text-sm shadow-sm hover:shadow-md transition"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </Link>
        </div>
      </nav>

      {/* ───── MOBILE TOP BAR ───── */}
      <header className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between px-4 py-3">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <i className="fa-solid fa-arrow-left text-gray-700"></i>
        </button>

        {/* LOGO */}
        <Link to="/admin">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small_2x/golden-logo-template-free-png.png"
            alt="logo"
            className="h-10"
          />
        </Link>

        <div className="w-6"></div>
      </header>

      {/* ───── MOBILE BOTTOM NAV ───── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex justify-around py-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center text-xs transition ${
                  active ? "text-sky-600" : "text-gray-500"
                }`}
              >
                <div
                  className={`text-lg ${active ? "scale-110" : ""} transition`}
                >
                  <i className={`fa-solid ${link.icon}`}></i>
                </div>

                <span className="mt-1">{link.name}</span>

                {active && (
                  <div className="w-1 h-1 bg-sky-500 rounded-full mt-1"></div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
