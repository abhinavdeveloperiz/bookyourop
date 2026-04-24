import { Link } from "react-router-dom";

export default function Users() {
  const users = [
    { name: "Abhinav M", email: "abhinav@mail.com" },
    { name: "Rahul Kumar", email: "rahul@mail.com" },
    { name: "Anjali Nair", email: "anjali@mail.com" },
    { name: "Vikram Das", email: "vikram@mail.com" },
    { name: "Sneha Roy", email: "sneha@mail.com" },
    { name: "Arjun Menon", email: "arjun@mail.com" },
    { name: "Priya Sharma", email: "priya@mail.com" },
    { name: "Kiran Patel", email: "kiran@mail.com" },
    { name: "Meera Joseph", email: "meera@mail.com" },
    { name: "Rohit Verma", email: "rohit@mail.com" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      {/* HEADER (CONSISTENT DESIGN) */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-5 pt-8 pb-20">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-500/20 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/15 rounded-full" />

        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-300 text-xs uppercase font-semibold">
              Admin Panel
            </p>
            <h1 className="text-white text-2xl font-bold">Users Management</h1>
            <p className="text-white/50 text-sm">
              {users.length} registered users
            </p>
          </div>
        </div>
      </div>

      {/* USER CARDS */}
      <div
        className="px-4 -mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 z-10 relative max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {users.map((user, i) => {
          const initials = user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2);

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* TOP */}
              <div className="flex items-center gap-4 mb-4">
                {/* AVATAR */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-sm shadow">
                  {initials}
                </div>

                {/* INFO */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">
                {/* DETAILS BUTTON */}
                <Link
                  to="/admin/user/details"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm py-2 rounded-xl text-center hover:from-blue-700 hover:to-indigo-700 transition"
                >
                  View Details
                </Link>

                {/* DELETE */}
                <button className="w-10 h-10 bg-red-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
