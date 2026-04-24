import { useState } from "react";

export default function Bookings() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const bookings = [
    {
      id: 1,
      doctor: "Dr. Arjun Nair",
      speciality: "Cardiologist",
      date: "Mar 03, 2026",
      time: "10:00 AM",
      hospital: "City Heart Care Hospital",
      status: "upcoming",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      doctor: "Dr. Meera Das",
      speciality: "Dermatologist",
      date: "Feb 15, 2026",
      time: "02:00 PM",
      hospital: "SkinCare Clinic",
      status: "completed",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      doctor: "Dr. Rahul Kumar",
      speciality: "Pediatrician",
      date: "Jan 20, 2026",
      time: "11:30 AM",
      hospital: "Children Care Center",
      status: "cancelled",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  const filteredBookings =
    activeTab === "upcoming"
      ? bookings.filter((b) => b.status === "upcoming")
      : bookings.filter((b) => b.status !== "upcoming");

  const statusStyles = {
    completed: "bg-green-100 text-green-600",
    cancelled: "bg-red-100 text-red-600",
    upcoming: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      {/* 🔥 HERO BANNER (MATCH CONTACT STYLE) */}
      <div className="relative bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 px-6 pt-10 pb-24 overflow-hidden">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-900/30 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/35 rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-indigo-900 text-xs uppercase font-semibold mb-1">
            Appointments
          </p>

          <h1 className="text-indigo-950 text-3xl font-bold">My Bookings</h1>

          <p className="text-indigo-900/70 text-sm mt-2">
            Track and manage your consultations easily
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-10">
        {/* 🔥 TABS (UPGRADED) */}
        <div className="mb-6">
          <div className="flex bg-white/80 backdrop-blur p-1 rounded-full shadow">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "upcoming"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              Upcoming
            </button>

            <button
              onClick={() => setActiveTab("past")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "past"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              History
            </button>
          </div>
        </div>

        {/* 🔥 BOOKING CARDS */}
        <div className="space-y-4">
          {filteredBookings.map((b) => (
            <div
              key={b.id}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-4 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {/* TOP */}
              <div className="flex items-center gap-4">
                <img
                  src={b.image}
                  alt={b.doctor}
                  className="w-14 h-14 rounded-full object-cover border"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{b.doctor}</h3>
                  <p className="text-blue-600 text-sm">{b.speciality}</p>
                  <p className="text-gray-500 text-xs">{b.hospital}</p>
                </div>

                {/* STATUS */}
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${statusStyles[b.status]}`}
                >
                  <i className="fa-solid fa-circle text-[8px]"></i>
                  {b.status}
                </span>
              </div>

              {/* DATE & TIME */}
              <div className="flex gap-3 mt-4 text-xs">
                <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full">
                  <i className="fa-regular fa-calendar text-sky-500"></i>
                  {b.date}
                </div>

                <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full">
                  <i className="fa-regular fa-clock text-sky-500"></i>
                  {b.time}
                </div>
              </div>

              {/* ACTION */}
              {b.status === "upcoming" && (
                <button className="mt-4 w-full py-2 rounded-xl bg-red-50 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
                  Cancel Appointment
                </button>
              )}
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBookings.length === 0 && (
          <div className="bg-white rounded-2xl shadow p-10 text-center mt-10">
            <i className="fa-regular fa-calendar-xmark text-4xl text-sky-300 mb-3"></i>
            <p className="text-gray-500">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
