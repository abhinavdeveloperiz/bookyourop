import { Link } from "react-router-dom";

const hospitals = [
  {
    id: 1,
    name: "City Hospital",
    location: "Thiruvananthapuram",
    address: "MG Road, Kerala",
    phone: "+91 9876543210",
    type: "Multi Speciality",
    beds: 320,
    rating: 4.7,
    specializations: ["Cardiology", "Orthopedic", "Neurology"],
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
  },
  {
    id: 2,
    name: "Apollo Hospital",
    location: "Kochi",
    address: "Marine Drive, Kochi",
    phone: "+91 9988776655",
    type: "Super Speciality",
    beds: 580,
    rating: 4.9,
    specializations: ["Dermatology", "Pediatrics", "ENT"],
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
  },
  {
    id: 3,
    name: "KIMS Hospital",
    location: "Trivandrum",
    address: "Anayara, Trivandrum",
    phone: "+91 9123456789",
    type: "Multi Speciality",
    beds: 450,
    rating: 4.5,
    specializations: ["Oncology", "Nephrology", "Pulmonology"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: 1,
    name: "City Hospital",
    location: "Thiruvananthapuram",
    address: "MG Road, Kerala",
    phone: "+91 9876543210",
    type: "Multi Speciality",
    beds: 320,
    rating: 4.7,
    specializations: ["Cardiology", "Orthopedic", "Neurology"],
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
  },
  {
    id: 2,
    name: "Apollo Hospital",
    location: "Kochi",
    address: "Marine Drive, Kochi",
    phone: "+91 9988776655",
    type: "Super Speciality",
    beds: 580,
    rating: 4.9,
    specializations: ["Dermatology", "Pediatrics", "ENT"],
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
  },
  {
    id: 3,
    name: "KIMS Hospital",
    location: "Trivandrum",
    address: "Anayara, Trivandrum",
    phone: "+91 9123456789",
    type: "Multi Speciality",
    beds: 450,
    rating: 4.5,
    specializations: ["Oncology", "Nephrology", "Pulmonology"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
];

const typeColors = {
  "Super Speciality": {
    bg: "bg-violet-100",
    text: "text-violet-700",
    dot: "bg-violet-500",
  },
  "Multi Speciality": {
    bg: "bg-sky-100",
    text: "text-sky-700",
    dot: "bg-sky-500",
  },
};

const specColors = [
  "bg-indigo-50 text-indigo-600 border border-indigo-100",
  "bg-teal-50 text-teal-600 border border-teal-100",
  "bg-rose-50 text-rose-600 border border-rose-100",
  "bg-amber-50 text-amber-600 border border-amber-100",
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`text-[11px] ${
            i < full
              ? "fa-solid fa-star text-amber-400"
              : i === full && half
                ? "fa-solid fa-star-half-stroke text-amber-400"
                : "fa-regular fa-star text-gray-300"
          }`}
        />
      ))}
      <span className="text-xs font-semibold text-gray-700 ml-1">{rating}</span>
    </div>
  );
}

export default function Hospitals() {
  return (
    <div className="min-h-screen bg-slate-50 pb-28 font-sans ">
      {/* ── HEADER BANNER ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-5 pt-8 pb-20 overflow-hidden">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-500/20 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/15 rounded-full" />

        <div className="relative z-10 flex items-start justify-between">
          <div>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-1">
              Admin Panel
            </p>
            <h1 className="text-white text-2xl font-bold leading-tight">
              Hospital Directory
            </h1>
            <p className="text-white/50 text-sm mt-1">
              {hospitals.length} registered facilities
            </p>
          </div>

          <Link
            to="/admin/add/hospital"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-xl backdrop-blur-sm transition-all duration-200 active:scale-95"
          >
            <i className="fa-solid fa-plus text-xs" />
            Add Hospital
          </Link>
        </div>

        {/* Summary stat chips */}
        <div className="relative z-10 flex gap-3 mt-6 flex-wrap">
          {[
            {
              icon: "fa-solid fa-hospital",
              label: "Total",
              value: hospitals.length,
            },
            {
              icon: "fa-solid fa-bed",
              label: "Total Beds",
              value: hospitals.reduce((a, b) => a + b.beds, 0),
            },
            {
              icon: "fa-solid fa-star",
              label: "Avg Rating",
              value: (
                hospitals.reduce((a, b) => a + b.rating, 0) / hospitals.length
              ).toFixed(1),
            },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 backdrop-blur-sm"
            >
              <i className={`${s.icon} text-blue-300 text-sm`} />
              <div>
                <p className="text-white/50 text-[10px] font-medium leading-none">
                  {s.label}
                </p>
                <p className="text-white text-sm font-bold leading-tight">
                  {s.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CARD LIST ── */}
      <div className="px-4 -mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 mx-auto max-w-5xl ">
        {hospitals.map((h, i) => {
          const tc = typeColors[h.type] || typeColors["Multi Speciality"];
          return (
            <div
              key={h.id}
              className="bg-white rounded-2xl  shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ animation: `fadeUp 0.4s ease ${i * 0.1}s both` }}
            >
              {/* Image + type badge */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Type badge — top left */}
                <div
                  className={`absolute top-3 left-3 flex items-center gap-1.5 ${tc.bg} ${tc.text} text-xs font-semibold px-2.5 py-1 rounded-full`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tc.dot}`} />
                  {h.type}
                </div>

                {/* Rating — top right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <i className="fa-solid fa-star text-amber-400 text-[10px]" />
                  <span className="text-xs font-bold text-gray-800">
                    {h.rating}
                  </span>
                </div>

                {/* Hospital name overlaid on image bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-lg font-bold leading-tight drop-shadow">
                    {h.name}
                  </h3>
                  <p className="text-white/75 text-xs flex items-center gap-1 mt-0.5">
                    <i className="fa-solid fa-location-dot text-red-400 text-[10px]" />
                    {h.location} · {h.address}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pt-3.5 pb-4">
                {/* Info row */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <i className="fa-solid fa-bed text-indigo-400 text-[11px]" />
                    <span>
                      <span className="font-semibold text-gray-700">
                        {h.beds}
                      </span>{" "}
                      beds
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <i className="fa-solid fa-phone text-green-500 text-[11px]" />
                    <span className="font-medium text-gray-700">{h.phone}</span>
                  </div>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {h.specializations.map((s, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${specColors[idx % specColors.length]}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2.5">
                  <Link
                    to={`/admin/hospital/${h.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-2.5 rounded-xl text-center transition-all duration-200 active:scale-95"
                  >
                    View Details
                  </Link>

                  <a
                    href={`tel:${h.phone}`}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-50 border border-green-100 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200"
                  >
                    <i className="fa-solid fa-phone text-sm" />
                  </a>

                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 border border-red-100 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200">
                    <i className="fa-solid fa-trash text-sm" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
