import { Link } from "react-router-dom";

const specialities = [
  {
    name: "Cardiology",
    color: "bg-red-50",
    iconColor: "text-red-500",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=120&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
    ),
  },
  {
    name: "Dermatology",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        <path d="M12 6c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />
      </svg>
    ),
  },
  {
    name: "Pediatrics",
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5l-3 3M12 12l3 3M8 17h8" />
      </svg>
    ),
  },
  {
    name: "Orthopedics",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    image:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="w-6 h-6"
      >
        <path d="M6 2v8l4 4-4 4v4M18 2v8l-4 4 4 4v4" />
      </svg>
    ),
  },
  {
    name: "Dentist",
    color: "bg-teal-50",
    iconColor: "text-teal-500",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 2C9 2 6 4 6 7c0 2 1 3.5 1 5 0 3 1 8 2.5 8S11 17 12 17s2 3 3.5 3S18 15 18 12c0-1.5 1-3 1-5 0-3-3-5-6-5" />
      </svg>
    ),
  },
  {
    name: "Neurology",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M9 3C6 3 4 5 4 7.5c0 1 .3 2 1 2.5C4 11 3 12.5 3 14c0 2.5 2 4 4 4h1c0 1.5 1.8 2 4 2s4-.5 4-2h1c2 0 4-1.5 4-4 0-1.5-1-3-2-4 .7-.5 1-1.5 1-2.5C20 5 18 3 15 3c-1 0-2 .5-3 1.5C11 3.5 10 3 9 3z" />
      </svg>
    ),
  },
  {
    name: "Gynecology",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v8M9 18h6" />
      </svg>
    ),
  },
  {
    name: "ENT",
    color: "bg-green-50",
    iconColor: "text-green-500",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 3a9 9 0 00-9 9c0 3 2 5 4 6 1 .5 1 1.5 1 2h8c0-.5 0-1.5 1-2 2-1 4-3 4-6a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const hospitals = [
  {
    name: "City Care Hospital",
    location: "Ottappalam",
    dist: "2.1 km",
    beds: "120 beds",
    type: "Multi-specialty",
    open: true,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=200&fit=crop",
  },
  {
    name: "Sunrise Medical Center",
    location: "Shoranur",
    dist: "3.5 km",
    beds: "85 beds",
    type: "General Hospital",
    open: true,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=200&fit=crop",
  },
  {
    name: "Malabar Health Clinic",
    location: "Perinthalmanna",
    dist: "5.2 km",
    beds: "60 beds",
    type: "Specialty Clinic",
    open: false,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop",
  },
  {
    name: "Unity Hospital",
    location: "Palakkad",
    dist: "7.8 km",
    beds: "200 beds",
    type: "Super Specialty",
    open: true,
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop",
  },
  {
    name: "Kerala Med Centre",
    location: "Thrissur",
    dist: "9.1 km",
    beds: "150 beds",
    type: "Multi-specialty",
    open: true,
    image:
      "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=300&h=200&fit=crop",
  },
  {
    name: "Amrita Hospital",
    location: "Kochi",
    dist: "12 km",
    beds: "320 beds",
    type: "Super Specialty",
    open: true,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&h=200&fit=crop",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="w-4 h-4"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const BedIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-3 h-3"
  >
    <path d="M3 9V6a1 1 0 011-1h16a1 1 0 011 1v3M3 9h18M3 9v9m18-9v9M3 18h18M7 9V7m10 2V7" />
  </svg>
);

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen pb-28">
      {/* ── HERO ── */}
      <section
        className="px-5 pt-8 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700/90 via-sky-600/85 to-cyan-500/80" />
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
        <div className="absolute top-20 -right-4 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 left-6 w-32 h-32 bg-white/10 rounded-full" />

        <div className="relative z-10 max-w-2xl md:max-w-4xl mx-auto">
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
            Find Your Doctor,
            <br />
            Book Instantly
          </h1>
          <p className="text-white/70 text-sm mt-2 md:mt-3 max-w-sm">
            Consult top specialists and book hospital appointments near you.
          </p>

          {/* Search */}
          <div className="mt-5 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-sky-900/20 max-w-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5 text-gray-400 shrink-0"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              placeholder="Search doctor, speciality, hospital..."
            />
            <div className="bg-sky-500 hover:bg-sky-600 transition-colors rounded-xl p-2 cursor-pointer shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                className="w-4 h-4"
              >
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* ── QUICK ACTIONS ── */}
        <section className="-mt-8 relative z-10">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <Link to="/bookings">
              <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex items-center gap-3 hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95">
                <div className="bg-sky-100 rounded-xl p-3 shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8"
                    stroke="none"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#0ea5e9"
                      opacity="0.15"
                    />
                    <rect
                      x="6"
                      y="8"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#0ea5e9"
                    />
                    <rect
                      x="13"
                      y="8"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#0ea5e9"
                      opacity="0.4"
                    />
                    <rect
                      x="6"
                      y="15"
                      width="5"
                      height="3"
                      rx="1"
                      fill="#0ea5e9"
                      opacity="0.4"
                    />
                    <rect
                      x="13"
                      y="15"
                      width="5"
                      height="3"
                      rx="1"
                      fill="#0ea5e9"
                      opacity="0.4"
                    />
                    <path
                      d="M8 3v4M16 3v4M3 11h18"
                      stroke="#0ea5e9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="16" cy="16" r="5" fill="#0ea5e9" />
                    <path
                      d="M14 16l1.5 1.5L18 14"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    My Appointment
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    View Your Bookings
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/doctors">
              <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex items-center gap-3 hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95">
                <div className="bg-cyan-100 rounded-xl p-3 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#06b6d4"
                      opacity="0.15"
                    />
                    <path
                      d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"
                      stroke="#06b6d4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="17" cy="17" r="4" fill="#06b6d4" />
                    <path
                      d="M17 15v4M15 17h4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    Book Your OP
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Schedule OP Token
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── SPECIALITIES ── */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-bold text-gray-800">
              Explore by Speciality
            </h2>
            <Link
              to="/doctors"
              className="text-sky-500 text-xs font-semibold flex items-center gap-0.5 hover:text-sky-600"
            >
              See all <ArrowIcon />
            </Link>
          </div>

          {/* Mobile: horizontal scroll | Desktop: grid */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-8 md:overflow-visible">
            {specialities.map((s, i) => (
              <Link to="/doctors" key={i} className="shrink-0 md:shrink">
                <div className="flex flex-col items-center gap-2 group w-16 md:w-auto">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-gray-600 text-center leading-tight w-16 md:w-auto">
                    {s.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── NEARBY HOSPITALS ── */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-bold text-gray-800">
              Nearby Hospitals
            </h2>
            <button className="text-sky-500 text-xs font-semibold flex items-center gap-0.5 hover:text-sky-600">
              See all <ArrowIcon />
            </button>
          </div>

          {/* Mobile: vertical list | Desktop: 2-col grid */}
          <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            {hospitals.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                {/* Mobile layout: row | Desktop: card with image top */}
                <div className="md:block flex items-center gap-0">
                  {/* Image */}
                  <div className="md:w-full w-24 shrink-0 md:h-36 h-full relative overflow-hidden">
                    <img
                      src={h.image}
                      alt={h.name}
                      className="w-24 h-24 md:w-full md:h-36 object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-3 md:p-4">
                    <p className="text-sm font-bold text-gray-800 leading-tight">
                      {h.name}
                    </p>
                    <span className="inline-block text-[10px] font-medium text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full mt-1">
                      {h.type}
                    </span>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 text-gray-400">
                        <LocationIcon />
                        <span className="text-[11px]">{h.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <button className="text-[11px] font-bold text-white bg-sky-500 hover:bg-sky-600 px-3 py-1.5 rounded-xl transition-colors">
                        Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="mt-8">
          <div
            className="rounded-3xl p-6 relative overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/95 to-cyan-500/80 rounded-3xl" />
            <div className="absolute -right-4 -top-4 w-28 h-28 bg-white/10 rounded-full" />
            <div className="absolute right-8 -bottom-4 w-20 h-20 bg-white/10 rounded-full" />
            <div className="relative z-10 md:flex md:items-center md:justify-between">
              <div>
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">
                  24/7 Available
                </p>
                <h3 className="text-white text-xl font-bold leading-tight">
                  Need Medical Help
                  <br />
                  Right Now?
                </h3>
                <p className="text-white/70 text-xs mt-2 max-w-xs">
                  Book an appointment with trusted doctors in minutes.
                </p>
              </div>
              <Link to="/doctors" className="mt-5 md:mt-0 inline-block">
                <button className="bg-white text-sky-600 text-sm font-bold px-6 py-3 rounded-2xl hover:bg-sky-50 transition-colors shadow-lg whitespace-nowrap">
                  Book Now →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
