import { Link } from "react-router-dom";

export default function SlotsPage() {
  // Dummy data (later from API)
  const slotData = [
    {
      date: "2026-03-25",
      slots: ["09:00 AM", "10:30 AM", "12:00 PM"],
    },
    {
      date: "2026-03-26",
      slots: ["11:00 AM", "01:00 PM", "04:00 PM"],
    },
    {
      date: "2026-03-27",
      slots: ["09:30 AM", "02:30 PM"],
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen pb-28 px-4 md:px-6">
      {/* HEADER */}
      <div className="pt-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fa-solid fa-calendar-days text-sky-500"></i>
            My Slots
          </h1>
          <p className="text-sm text-gray-400">Manage your availability</p>
        </div>

        {/* ADD SLOT BUTTON */}
        <Link to="/doctor/add-slot">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 shadow-sm">
            <i className="fa-solid fa-plus"></i>
            Add Slot
          </button>
        </Link>
      </div>

      {/* SLOT LIST */}
      <div className="space-y-5">
        {slotData.map((day, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm p-4">
            {/* DATE */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-semibold text-gray-800">
                {day.date}
              </h2>

              <span className="text-xs text-gray-400">
                {day.slots.length} slots
              </span>
            </div>

            {/* SLOTS */}
            <div className="flex flex-wrap gap-2">
              {day.slots.map((time, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs text-gray-700"
                >
                  <i className="fa-solid fa-clock text-sky-500"></i>
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {slotData.length === 0 && (
        <div className="text-center mt-10 text-gray-400 text-sm">
          <i className="fa-solid fa-calendar-xmark text-2xl mb-2"></i>
          <p>No slots added yet</p>

          <Link to="/doctor/add-slot">
            <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-xl text-sm">
              Add First Slot
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
