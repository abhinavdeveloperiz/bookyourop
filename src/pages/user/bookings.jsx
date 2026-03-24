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
    <div className="bg-sky-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pb-24">
        {/* HEADER */}
        <div className="pt-6 pb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            My Appointments
          </h1>
          <p className="text-gray-500 text-sm">
            Track and manage your consultations
          </p>
        </div>

        {/* STICKY TABS (Mobile UX boost) */}
        <div className="sticky top-0 z-10 bg-sky-50 pb-4">
          <div className="flex bg-white p-1 rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "upcoming"
                  ? "bg-sky-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Upcoming
            </button>

            <button
              onClick={() => setActiveTab("past")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "past" ? "bg-sky-500 text-white" : "text-gray-600"
              }`}
            >
              History
            </button>
          </div>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {filteredBookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow-sm p-4 active:scale-[0.99] transition"
            >
              {/* Doctor */}
              <div className="flex items-center gap-4">
                <img
                  src={b.image}
                  alt={b.doctor}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{b.doctor}</h3>
                  <p className="text-sky-600 text-sm">{b.speciality}</p>
                  <p className="text-gray-500 text-xs">{b.hospital}</p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${statusStyles(
                    b.status,
                  )}`}
                >
                  <i className={`fa-solid ${statusIcon(b.status)}`}></i>
                  {b.status}
                </span>
              </div>

              {/* Date & Time */}
              <div className="flex gap-3 mt-4 text-sm">
                <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full text-gray-600">
                  <i className="fa-regular fa-calendar text-sky-500"></i>
                  {b.date}
                </div>

                <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full text-gray-600">
                  <i className="fa-regular fa-clock text-sky-500"></i>
                  {b.time}
                </div>
              </div>

              {/* Actions */}
              {b.status === "upcoming" && (
                <button className="mt-4 w-full py-2 rounded-full border border-red-400 text-red-500 font-medium hover:bg-red-50 transition">
                  Cancel Appointment
                </button>
              )}
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBookings.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center mt-10">
            <i className="fa-regular fa-calendar-xmark text-4xl text-sky-300 mb-3"></i>
            <p className="text-gray-500">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
