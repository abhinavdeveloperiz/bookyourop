const bookingsData = [
  {
    id: 1,
    patient: "Rahul Kumar",
    age: 28,
    time: "10:30 AM",
    date: "Today",
  },
  {
    id: 2,
    patient: "Anjali Nair",
    age: 34,
    time: "11:15 AM",
    date: "Today",
  },
  {
    id: 3,
    patient: "Arjun Das",
    age: 45,
    time: "01:00 PM",
    date: "Tomorrow",
  },
];

export default function DoctorBookings() {
  return (
    <div className="bg-blue-50 min-h-screen pb-28 px-4 md:px-6">
      
      {/* HEADER */}
      <div className="pt-6 mb-5 flex items-center gap-2">
        <i className="fa-solid fa-calendar-check text-sky-500 text-lg"></i>
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Appointments
          </h1>
          <p className="text-sm text-gray-400">
            Your scheduled patients
          </p>
        </div>
      </div>

      {/* BOOKINGS LIST */}
      <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
        {bookingsData.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 hover:shadow-md transition-all"
          >
            {/* PATIENT */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                <i className="fa-solid fa-user"></i>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  {b.patient}
                </h3>
                <p className="text-xs text-gray-400">
                  Age {b.age}
                </p>
              </div>
            </div>

            {/* DATE & TIME */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <i className="fa-solid fa-calendar text-sky-400"></i>
                {b.date}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <i className="fa-solid fa-clock text-sky-400"></i>
                {b.time}
              </div>
            </div>

            {/* STATUS */}
            <div className="mt-4">
              <span className="text-[10px] px-3 py-1 rounded-full bg-green-100 text-green-600 font-semibold">
                Confirmed
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {bookingsData.length === 0 && (
        <div className="text-center mt-10 text-gray-400 text-sm">
          <i className="fa-solid fa-calendar-xmark text-2xl mb-2"></i>
          <p>No appointments yet</p>
        </div>
      )}
    </div>
  );
}