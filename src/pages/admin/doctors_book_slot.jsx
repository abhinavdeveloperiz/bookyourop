import { useState } from "react";

export default function DoctorsBookSlot() {
  const [form, setForm] = useState({
    dateFrom: "",
    dateTo: "",
  });

  const [selectedSlots, setSelectedSlots] = useState([]);

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "02:00 - 03:00",
    "03:00 - 04:00",
    "04:00 - 05:00",
    "05:00 - 06:00",
  ];

  const toggleSlot = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter((s) => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      {/* 🔥 HEADER */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-5 pt-8 pb-20">
        <h1 className="text-white text-2xl font-bold">Allocate Doctor Slots</h1>
        <p className="text-white/50 text-sm mt-1">
          Set available time slots for doctor
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 space-y-6">
        {/* 🔥 DATE RANGE */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Select Date Range
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">From Date</label>
              <input
                type="date"
                value={form.dateFrom}
                onChange={(e) => setForm({ ...form, dateFrom: e.target.value })}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">To Date</label>
              <input
                type="date"
                value={form.dateTo}
                onChange={(e) => setForm({ ...form, dateTo: e.target.value })}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* 🔥 TIME SLOT SELECTOR */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Select Time Slots
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeSlots.map((slot, i) => (
              <button
                key={i}
                onClick={() => toggleSlot(slot)}
                className={`text-sm px-3 py-2 rounded-xl border transition ${
                  selectedSlots.includes(slot)
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-gray-50 text-gray-700 hover:bg-blue-50"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 SELECTED PREVIEW */}
        {selectedSlots.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              Selected Slots
            </h2>

            <div className="flex flex-wrap gap-2">
              {selectedSlots.map((slot, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 🔥 ACTION */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl shadow hover:scale-[1.02] transition">
            Save Slots
          </button>
        </div>
      </div>
    </div>
  );
}
