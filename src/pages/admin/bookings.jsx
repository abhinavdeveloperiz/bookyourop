export default function AdminBookings() {
  const bookings = [
    {
      patient: "Rahul",
      phone: "+91 9876543210",
      doctor: "Dr. Arjun",
      doctorImg: "https://randomuser.me/api/portraits/men/32.jpg",
      category: "Cardiologist",
      date: "28 Mar 2026",
      time: "10:30 AM",
      payment: "paid",
    },
    {
      patient: "Meera",
      phone: "+91 9123456780",
      doctor: "Dr. Das",
      doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
      category: "Dermatologist",
      date: "29 Mar 2026",
      time: "2:00 PM",
      payment: "unpaid",
    },
    {
      patient: "Anandhu",
      phone: "+91 9988776655",
      doctor: "Dr. Ajith",
      doctorImg: "https://randomuser.me/api/portraits/men/50.jpg",
      category: "Dermatologist",
      date: "29 Mar 2026",
      time: "3:00 PM",
      payment: "paid",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Booking Management
          </h1>

          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {bookings.length} Bookings
          </span>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {bookings.map((b, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-lg border border-white/40 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* TOP SECTION */}
              <div className="flex justify-between gap-4">
                {/* LEFT SIDE */}
                <div className="flex-1">
                  {/* PATIENT */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <i className="fa-solid fa-user text-blue-500"></i>
                      {b.patient}
                    </h3>

                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <i className="fa-solid fa-phone text-green-500"></i>
                      {b.phone}
                    </p>
                  </div>

                  {/* DOCTOR */}
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
                    <img
                      src={b.doctorImg}
                      alt="doctor"
                      className="w-12 h-12 rounded-full object-cover border"
                    />

                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {b.doctor}
                      </p>
                      <p className="text-xs text-gray-500">{b.category}</p>
                    </div>
                  </div>

                  {/* DATE + TIME */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
                    <span className="flex items-center gap-1">
                      <i className="fa-regular fa-calendar"></i>
                      {b.date}
                    </span>

                    <span className="flex items-center gap-1">
                      <i className="fa-regular fa-clock"></i>
                      {b.time}
                    </span>
                  </div>
                </div>

                {/* PAYMENT BADGE */}
                <span
                  className={`h-fit text-xs font-medium px-3 py-1 rounded-full ${
                    b.payment === "paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {b.payment}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between mt-4 border-t pt-3">
                {/* STATUS */}
                <p className="text-xs text-gray-400">
                  <i className="fa-solid fa-circle-check text-green-500 mr-1"></i>
                  Booking confirmed
                </p>

                {/* DELETE */}
                <button className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition">
                  <i className="fa-solid fa-trash text-red-600 text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
