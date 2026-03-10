import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: (active) => (
        <svg
          viewBox="0 0 24 24"
          fill={active ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
    },
    {
      name: "Doctors",
      path: "/doctors",
      icon: (active) => (
        <svg
          viewBox="0 0 24 24"
          fill={active ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M12 14v3M10.5 15.5h3" />
        </svg>
      ),
    },
    {
      name: "Bookings",
      path: "/bookings",
      icon: (active) => (
        <svg
          viewBox="0 0 24 24"
          fill={active ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: (active) => (
        <svg
          viewBox="0 0 24 24"
          fill={active ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
    {
      name: "Login",
      path: "/login",
      icon: (active) => (
        <svg
          viewBox="0 0 24 24"
          fill={active ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
        </svg>
      ),
    },
  ];

  const mainLinks = navLinks.slice(0, 4);

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small_2x/golden-logo-template-free-png.png"
              alt="logo"
              className="h-16"
            />
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1">
            {mainLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-sky-50 text-sky-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  }`}
                >
                  {active}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Login Button */}
          <Link to="/login">
            <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-5 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
              {navLinks[4].icon(false)}
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* ── MOBILE TOP BAR (logo only) ── */}
      <header className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small_2x/golden-logo-template-free-png.png"
            alt="logo"
            className="h-16"
          />
        </Link>
      </header>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around px-2 py-1 pb-safe">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-200 min-w-[56px] ${
                  active ? "text-sky-600" : "text-gray-900 hover:text-sky-500"
                }`}
              >
                <span
                  className={`transition-transform duration-200 ${active ? "scale-110" : ""}`}
                >
                  {link.icon(active)}
                </span>
                <span
                  className={`text-[10px] font-medium leading-tight ${active ? "text-sky-800" : "text-gray-400"}`}
                >
                  {link.name}
                </span>
                {active && (
                  <span className="w-1 h-1 rounded-full bg-sky-500 mt-0.5" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
