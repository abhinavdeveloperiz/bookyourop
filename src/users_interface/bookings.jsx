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

  const statusStyles = (status) => {
    if (status === "completed") return "bg-green-100 text-green-600";
    if (status === "cancelled") return "bg-red-100 text-red-600";
    return "bg-blue-100 text-blue-600";
  };

  const statusIcon = (status) => {
    if (status === "completed") return "fa-check";
    if (status === "cancelled") return "fa-xmark";
    return "fa-clock";
  };

  return (
    <div className="bg-sky-50 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              My Appointments
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage and track your consultations
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "upcoming"
                  ? "bg-sky-500 text-white shadow"
                  : "bg-sky-50 text-gray-600 hover:bg-sky-100"
              }`}
            >
              Upcoming
            </button>

            <button
              onClick={() => setActiveTab("past")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "past"
                  ? "bg-sky-500 text-white shadow"
                  : "bg-sky-50 text-gray-600 hover:bg-sky-100"
              }`}
            >
              History
            </button>
          </div>
        </div>

        {/* BOOKINGS LIST */}
        <div className="space-y-6">
          {filteredBookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 md:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                {/* DOCTOR INFO */}
                <div className="flex items-center gap-4">
                  <img
                    src={b.image}
                    alt={b.doctor}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {b.doctor}
                    </h3>
                    <p className="text-sky-600 text-sm">{b.speciality}</p>
                    <p className="text-gray-500 text-sm">{b.hospital}</p>
                  </div>
                </div>

                {/* DATE & TIME */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar text-sky-500"></i>
                    {b.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-clock text-sky-500"></i>
                    {b.time}
                  </div>
                </div>

                {/* STATUS & ACTIONS */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <span
                    className={`flex items-center gap-2 px-3 py-1 text-xs rounded-full font-medium ${statusStyles(
                      b.status,
                    )}`}
                  >
                    <i className={`fa-solid ${statusIcon(b.status)}`}></i>
                    {b.status}
                  </span>

                  {b.status === "upcoming" && (
                    <div className="flex gap-2">
                      <button className="px-4 py-1 text-sm rounded-full border text-red-500 hover:bg-red-50">
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBookings.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center mt-10">
            <i className="fa-regular fa-calendar-xmark text-5xl text-sky-300 mb-4"></i>
            <p className="text-gray-500 text-lg">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
