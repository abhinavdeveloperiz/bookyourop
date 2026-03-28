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
    <div className="min-h-screen bg-blue-50 pb-24">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome, Admin 👋</p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-4 text-white shadow-md bg-gradient-to-br ${s.color} hover:scale-[1.02] transition`}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm opacity-80">{s.title}</p>
                <i className={`fa-solid ${s.icon} text-lg`}></i>
              </div>

              <h2 className="text-2xl font-bold mt-3">{s.value}</h2>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-8">
          <h2 className="text-md font-semibold text-gray-700 mb-3">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {actions.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="bg-white/70 backdrop-blur rounded-2xl p-4 shadow hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center"
              >
                <div className="bg-sky-100 text-sky-600 p-3 rounded-xl mb-2">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="mt-8">
          <h2 className="text-md font-semibold text-gray-700 mb-3">
            Recent Activity
          </h2>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow p-2">
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
                  className="flex items-start gap-3 px-3 py-3 hover:bg-gray-100  rounded-xl transition"
                >
                  <div className={`p-2 rounded-lg bg-gray-100 ${color}`}>
                    <i className={`fa-solid ${icon}`}></i>
                  </div>

                  <div className="flex-1 ">
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
