export default function UserDetails() {
  const user = {
    name: "Abhinav M",
    email: "abhinav@mail.com",
    joined: "12 Jan 2026",
    totalBookings: 8,
    doctorsVisited: 5,
  };

  const bookings = [
    {
      doctor: "Dr. Arjun",
      hospital: "Apollo Hospital",
      date: "25 Mar 2026",
      status: "Completed",
    },
    {
      doctor: "Dr. Meera",
      hospital: "City Care",
      date: "28 Mar 2026",
      status: "Upcoming",
    },
    {
      doctor: "Dr. Rahul",
      hospital: "KIMS",
      date: "15 Mar 2026",
      status: "Cancelled",
    },
  ];

  const statCards = [
    {
      label: "Total Bookings",
      value: user.totalBookings,
      icon: "fa-calendar-check",
      color: "from-blue-500 to-indigo-600",
    },
    {
      label: "Doctors Consulted",
      value: user.doctorsVisited,
      icon: "fa-user-doctor",
      color: "from-green-500 to-emerald-600",
    },
    {
      label: "Member Since",
      value: user.joined,
      icon: "fa-user-clock",
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      {/* 🔥 HEADER (UNCHANGED) */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-5 pt-8 pb-20">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-500/20 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/15 rounded-full" />

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">{user.name}</h1>
            <p className="text-white/70 text-sm">{user.email}</p>
            <p className="text-white/50 text-xs mt-1">
              Joined on {user.joined}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-10 max-w-6xl mx-auto relative z-10">
        {/* 🔥 STATS (UPGRADED) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {statCards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-4 text-white shadow-lg bg-gradient-to-br ${card.color} hover:shadow-xl hover:-translate-y-1 transition`}
            >
              <div className="flex justify-between items-center">
                <p className="text-xs opacity-80">{card.label}</p>
                <i className={`fa-solid ${card.icon}`}></i>
              </div>

              <h2 className="text-xl font-bold mt-3">{card.value}</h2>
            </div>
          ))}
        </div>

        {/* 🔥 BOOKINGS LIST */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-3">
            Booking History
          </h2>

          <div className="space-y-4">
            {bookings.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex justify-between items-center">
                  {/* LEFT */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {b.doctor}
                    </p>

                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <i className="fa-solid fa-hospital text-green-600"></i>
                      {b.hospital}
                    </p>

                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <i className="fa-regular fa-calendar text-red-600"></i>
                      {b.date}
                    </p>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      b.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : b.status === "Upcoming"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
