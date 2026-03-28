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
    <div className="min-h-screen bg-blue-50 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage all registered users
          </p>
        </div>

        {/* USERS LIST */}
        <div className="bg-white rounded-2xl shadow-sm divide-y">
          {users.map((user, i) => {
            const initials = user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 transition"
              >
                {/* AVATAR */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 font-semibold">
                  {initials}
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>

                {/* ICON */}
                <i className="fa-solid fa-trash text-red-500 hover:text-red-700 hover:scale-[1.40] transform duration-200"></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
