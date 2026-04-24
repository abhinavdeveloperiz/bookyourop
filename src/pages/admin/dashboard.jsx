import { Link } from "react-router-dom";

export default function Dashboard() {
  const stats = [
    {
      title: "Users",
      value: "1,200",
      icon: "fa-users",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Doctors",
      value: "320",
      icon: "fa-user-doctor",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Hospitals",
      value: "45",
      icon: "fa-hospital",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Bookings",
      value: "860",
      icon: "fa-calendar-check",
      color: "from-sky-500 to-sky-600",
    },
    {
      title: "Todays Bookings",
      value: "20",
      icon: "fa-calendar-check",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const activities = [
    {
      type: "user_created",
      message: "registered a new account",
      user: "abhinav",
      time: "2 min ago",
    },
    {
      type: "booking_created",
      message: "booked with Dr. Rahul",
      user: "john_doe",
      time: "10 min ago",
    },
    {
      type: "doctor_added",
      message: "added new doctor",
      user: "admin",
      time: "1 hour ago",
    },
    {
      type: "booking_cancelled",
      message: "cancelled booking",
      user: "rahul123",
      time: "2 hours ago",
    },
  ];

  const actions = [
    { name: "Users", path: "/admin/users", icon: "fa-users" },
    { name: "Doctors", path: "/admin/doctors", icon: "fa-user-doctor" },
    { name: "Hospitals", path: "/admin/hospitals", icon: "fa-hospital" },
    { name: "Bookings", path: "/admin/bookings", icon: "fa-calendar-check" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      {/* 🔥 HEADER */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-5 pt-8 pb-20 overflow-hidden">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-500/20 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/15 rounded-full" />

        <div className="relative z-10">
          <p className="text-blue-300 text-xs uppercase font-semibold">
            Admin Panel
          </p>
          <h1 className="text-white text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-white/50 text-sm mt-1">Welcome back, Admin 👋</p>
        </div>
      </div>

      <div
        className="px-4 -mt-10 max-w-6xl mx-auto z-10 relative"
        data-aos="fade-up"
      >
        {/* 🔥 STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-4 text-white shadow-lg bg-gradient-to-br ${s.color} hover:shadow-xl hover:-translate-y-1 transition`}
            >
              <div className="flex justify-between items-center">
                <p className="text-xs opacity-80">{s.title}</p>
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h2 className="text-2xl font-bold mt-3">{s.value}</h2>
            </div>
          ))}
        </div>

        {/* 🔥 QUICK ACTIONS */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-3">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {actions.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col items-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-xl mb-2">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* 🔥 DOCTORS WITHOUT SLOTS */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-red-500 mb-3">
            Doctors Without Slots Today
          </h2>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow p-4 border border-red-500 space-y-3">
            {[
              {
                name: "Dr. Rahul",
                specialization: "Cardiologist",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Dr. Meera",
                specialization: "Dermatologist",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Dr. Arun",
                specialization: "Orthopedic",
                image: "https://randomuser.me/api/portraits/men/76.jpg",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={doc.image}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-100"
                  />
                  <div>
                    <p className="text-sm font-semibold">{doc.name}</p>
                    <p className="text-xs text-gray-500">
                      {doc.specialization}
                    </p>
                  </div>
                </div>

                <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  No Slots
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 ACTIVITY */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-3">
            Recent Activity
          </h2>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow p-3 space-y-2">
            {activities.map((item, i) => {
              let icon = "fa-circle";
              let color = "text-gray-400";

              if (item.type === "user_created") {
                icon = "fa-user-plus";
                color = "text-blue-500";
              }
              if (item.type === "booking_created") {
                icon = "fa-calendar-check";
                color = "text-green-500";
              }
              if (item.type === "doctor_added") {
                icon = "fa-user-doctor";
                color = "text-purple-500";
              }
              if (item.type === "booking_cancelled") {
                icon = "fa-calendar-xmark";
                color = "text-red-500";
              }

              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className={`p-2 rounded-lg bg-gray-100 ${color}`}>
                    <i className={`fa-solid ${icon}`}></i>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">{item.user}</span>{" "}
                      {item.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
