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

  // ⭐ Star Renderer
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1 text-yellow-400 text-xs">
        {[...Array(fullStars)].map((_, i) => (
          <i key={"full" + i} className="fa-solid fa-star"></i>
        ))}

        {halfStar && <i className="fa-solid fa-star-half-stroke"></i>}

        {[...Array(emptyStars)].map((_, i) => (
          <i key={"empty" + i} className="fa-regular fa-star text-gray-300"></i>
        ))}

        <span className="text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchSpec = active === "All" || doc.speciality === active;
    return matchSearch && matchSpec;
  });

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
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

        {/* FILTER BUTTONS */}
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
              {/* Image */}
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

                {/* Rating + Time */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-3 items-center text-xs text-gray-600">
                    {/* ⭐ Rating */}
                    <div className="bg-slate-100 px-2 py-1 rounded">
                      {renderStars(doc.rating)}
                    </div>

                    {/* Time */}
                    <span className="bg-slate-100 px-2 py-1 rounded">
                      🕒 {doc.time}
                    </span>
                  </div>

                  <Link to="/doctordetails">
                    <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg">
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
