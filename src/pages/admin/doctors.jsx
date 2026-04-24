import { Link } from "react-router-dom";
import { useState } from "react";

export default function DoctorsAdmin() {
  const [doctors, setDoctors] = useState([
    {
      name: "Dr. Arjun",
      age: 42,
      experience: "15 yrs",
      category: "Cardiologist",
      hospital: "Apollo Hospital",
      fee: "₹800",
      active: true,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    },
    {
      name: "Dr. Meera",
      age: 36,
      experience: "10 yrs",
      category: "Dermatologist",
      hospital: "City Care",
      fee: "₹500",
      active: false,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    },
  ]);

  const toggleStatus = (index) => {
    const updated = [...doctors];
    updated[index].active = !updated[index].active;
    setDoctors(updated);
  };

  const specColors = {
    Cardiologist: "bg-red-100 text-red-600",
    Dermatologist: "bg-pink-100 text-pink-600",
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-28 overflow-x-hidden">
      {/* HEADER (MATCH HOSPITAL STYLE) */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-5 pt-8 pb-20">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-500/20 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/15 rounded-full" />

        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-300 text-xs uppercase font-semibold">
              Admin Panel
            </p>
            <h1 className="text-white text-2xl font-bold">Doctors Directory</h1>
            <p className="text-white/50 text-sm">
              {doctors.length} doctors registered
            </p>
          </div>

          <Link
            to="/admin/add/doctor"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl backdrop-blur-sm transition"
          >
            <i className="fa-solid fa-plus text-xs"></i>
            Add Doctor
          </Link>
        </div>
      </div>

      {/* DOCTOR CARDS */}
      <div className="px-4 -mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {doctors.map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* IMAGE SECTION */}
            <div className="relative h-60">
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* CATEGORY BADGE */}
              <span
                className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-semibold ${specColors[d.category]}`}
              >
                {d.category}
              </span>

              {/* RATING */}
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold shadow">
                ⭐ {d.rating}
              </div>

              {/* NAME + HOSPITAL */}
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-bold">{d.name}</h3>
                <p className="text-white/70 text-xs">{d.hospital}</p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="p-4">
              {/* INFO */}
              <div className="flex justify-between text-sm mb-3">
                <span>Exp: {d.experience}</span>
                <span className="font-semibold text-green-600">{d.fee}</span>
              </div>

              {/* STATUS + TOGGLE */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    d.active
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {d.active ? "Active" : "Inactive"}
                </span>

                {/* SWITCH */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={d.active}
                    onChange={() => toggleStatus(i)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">
                <Link
                  to="/admin/add/doctor"
                  className="flex-1 flex items-center justify-center bg-yellow-100 text-yellow-700 text-sm py-2 rounded-xl hover:bg-yellow-200 transition"
                >
                  <i className="fa-solid fa-pen mr-1"></i>
                  Edit
                </Link>

                <Link
                  to="/admin/addslot/doctor"
                  className="flex-1 flex items-center justify-center bg-blue-200 text-black text-sm py-2 rounded-xl hover:bg-blue-400 transition"
                >
                  <i className="fa-solid fa-pen mr-1"></i>
                  Add Slot
                </Link>

                <button className="w-10 h-10 bg-red-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
