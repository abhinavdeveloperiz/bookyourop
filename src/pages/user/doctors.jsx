import { useState } from "react";
import { Link } from "react-router-dom";

export default function Doctors() {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Ajith Kumar",
      speciality: "General Physician",
      hospital: "City Care Hospital, Ottappalam",
      rating: 4.5,
      time: "9:30 AM",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Dr. Anita Menon",
      speciality: "Pediatrician",
      hospital: "Sunrise Medical Center, Shoranur",
      rating: 4.8,
      time: "10:00 AM",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Rahul Shinde",
      speciality: "Dentist",
      hospital: "Malabar Health Clinic, Perinthalmanna",
      rating: 4.2,
      time: "9:15 AM",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  const specialities = ["All", "General Physician", "Pediatrician", "Dentist"];

  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchSpec = active === "All" || doc.speciality === active;
    return matchSearch && matchSpec;
  });

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1 text-yellow-400 text-xs">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`${
              i < full
                ? "fa-solid fa-star"
                : i === full && half
                  ? "fa-solid fa-star-half-stroke"
                  : "fa-regular fa-star text-gray-300"
            }`}
          />
        ))}
        <span className="text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* 🔥 HERO BANNER */}
      <div className="relative bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 px-6 pt-10 pb-24 overflow-hidden">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-900/30 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/35 rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-indigo-900 text-xs uppercase font-semibold mb-1">
            Doctors
          </p>

          <h1 className="text-indigo-950 text-3xl font-bold">
            Find Your Doctor
          </h1>

          <p className="text-indigo-900/70 text-sm mt-2">
            Book appointments with trusted specialists nearby
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        {/* 🔥 SEARCH */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow p-3 flex items-center gap-2 mb-4">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>

          <input
            type="text"
            placeholder="Search hospital or doctor"
            className="flex-1 outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <i className="fa-solid fa-filter text-blue-500"></i>
        </div>

        {/* 🔥 QUICK FILTER */}
        <div className="flex gap-2 mb-4 pt-10">
          <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full shadow">
            Morning
          </button>

          <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full">
            Evening
          </button>

          <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full">
            Sort By
          </button>
        </div>

        {/* 🔥 SPECIALITY */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {specialities.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className={`text-xs px-4 py-2 rounded-full whitespace-nowrap ${
                active === item
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-gray-600 border"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Nearby Hospitals
        </h2>

        {/* 🔥 DOCTOR CARDS */}
        <div className="space-y-4">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-4 flex gap-4 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {/* IMAGE */}
              <img
                src={doc.image}
                className="w-16 h-16 rounded-xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  {doc.name}
                </h3>

                <p className="text-xs text-gray-500">{doc.speciality}</p>

                <p className="text-xs text-blue-600 mt-1">{doc.hospital}</p>

                {/* RATING + TIME */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 text-xs">
                    <div className="bg-slate-100 px-2 py-1 rounded">
                      {renderStars(doc.rating)}
                    </div>

                    <span className="bg-slate-100 px-2 py-1 rounded">
                      🕒 {doc.time}
                    </span>
                  </div>

                  <Link to="/doctordetails">
                    <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-xl shadow">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
