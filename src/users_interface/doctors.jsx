import { useState } from "react";
import { Link } from "react-router-dom";

export default function Doctors() {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Ajith Kumar",
      speciality: "General Physician",
      hospital: "City Care Hospital, Ottappalam",
      tokens: "0/130",
      time: "9:30 AM",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Dr. Anita Menon",
      speciality: "Pediatrician",
      hospital: "Sunrise Medical Center, Shoranur",
      tokens: "10/25",
      time: "10:00 AM",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Rahul Shinde",
      speciality: "Dentist",
      hospital: "Malabar Health Clinic, Perinthalmanna",
      tokens: "9/125",
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

  return (
    <div className="bg-slate-100 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* SEARCH */}
        <div className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-2 mb-4">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>

          <input
            type="text"
            placeholder="Search hospital or doctor"
            className="flex-1 outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <i className="fa-solid fa-filter text-sky-500"></i>
        </div>

        {/* MORNING / EVENING */}
        <div className="flex gap-2 mb-4">
          <button className="bg-sky-500 text-white text-xs px-4 py-2 rounded-full">
            Morning
          </button>

          <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full">
            Evening
          </button>

          <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full">
            Sort By
          </button>
        </div>

        {/* SPECIALITY FILTER */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {specialities.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className={`text-xs px-4 py-2 rounded-full whitespace-nowrap ${
                active === item
                  ? "bg-sky-500 text-white"
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

        {/* DOCTOR LIST */}
        <div className="space-y-3">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-sm p-3 flex gap-3"
            >
              {/* Doctor Image */}
              <img
                src={doc.image}
                className="w-16 h-16 rounded-lg object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  {doc.name}
                </h3>

                <p className="text-xs text-gray-500">{doc.speciality}</p>

                <p className="text-xs text-sky-600 mt-1">{doc.hospital}</p>

                {/* Tokens + Time */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-3 text-xs text-gray-600">
                    <span className="bg-slate-100 px-2 py-1 rounded">
                      🎫 {doc.tokens}
                    </span>

                    <span className="bg-slate-100 px-2 py-1 rounded">
                      Morning: {doc.time}
                    </span>
                  </div>

                  <Link to="/doctordetails">
                    <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg">
                      Book Appointment
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
