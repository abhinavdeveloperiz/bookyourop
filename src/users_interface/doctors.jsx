import { useState } from "react";
import { Link } from "react-router-dom";

export default function Doctors() {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Arjun Nair",
      speciality: "Cardiology",
      experience: "12 Years",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Dr. Meera Das",
      speciality: "Dermatology",
      experience: "8 Years",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Rahul Kumar",
      speciality: "Pediatrics",
      experience: "10 Years",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 4,
      name: "Dr. Suresh Pillai",
      speciality: "Orthopedics",
      experience: "15 Years",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: 5,
      name: "Dr. Anitha Menon",
      speciality: "Gynecology",
      experience: "9 Years",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 6,
      name: "Dr. Joseph Mathew",
      speciality: "ENT",
      experience: "11 Years",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  const specialities = [
    "All",
    "Cardiology",
    "Dermatology",
    "Pediatrics",
    "Orthopedics",
    "Gynecology",
    "ENT",
  ];

  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());

    const matchesSpeciality = active === "All" || doc.speciality === active;

    return matchesSearch && matchesSpeciality;
  });

  return (
    <div className="bg-sky-50 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Find Doctors
        </h1>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
            <input
              type="text"
              placeholder="Search doctor by name..."
              className="w-full outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Speciality Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {specialities.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className={`px-4 py-2 rounded-full border transition ${
                active === item
                  ? "bg-sky-500 text-white border-sky-500"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-sky-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className=" rounded-2xl p-6 text-center transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-28 h-28 rounded-full object-cover mx-auto"
              />

              <h3 className="mt-4 font-semibold text-gray-800 text-lg">
                {doc.name}
              </h3>

              <p className="text-sky-600 text-sm">{doc.speciality}</p>

              <p className="text-gray-500 text-sm mt-1">{doc.experience}</p>

              <Link to={`/doctordetails`}>
                <button className="mt-4 px-5 py-2 text-sm font-medium text-sky-600 border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No doctors found.</p>
        )}
      </div>
    </div>
  );
}
