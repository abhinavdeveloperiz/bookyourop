import { useState } from "react";

export default function AddSlot() {
  const [date, setDate] = useState("");

  // ✅ Dummy slots added initially
  const [slots, setSlots] = useState([
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:00 PM",
  ]);

  const [newTime, setNewTime] = useState("");

  // Convert 24hr → 12hr format
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${minute} ${ampm}`;
  };

  // Add slot
  const addSlot = () => {
    if (!newTime) return;

    const formatted = formatTime(newTime);

    if (slots.includes(formatted)) {
      alert("Slot already exists");
      return;
    }

    setSlots([...slots, formatted]);
    setNewTime("");
  };

  // Remove slot
  const removeSlot = (time) => {
    setSlots(slots.filter((s) => s !== time));
  };

  // Save
  const handleSubmit = () => {
    if (!date || slots.length === 0) {
      alert("Select date & add slots");
      return;
    }

    console.log("Saved Slots:", { date, slots });

    alert("Slots added successfully!");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-28 px-4 md:px-6">

      {/* HEADER */}
      <div className="pt-6 mb-6">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <i className="fa-solid fa-clock text-sky-500"></i>
          Add Availability
        </h1>
        <p className="text-sm text-gray-400">
          Manage your consultation slots
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-3xl shadow-sm p-5 space-y-5">

        {/* DATE */}
        <div>
          <label className="text-xs text-gray-500">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 w-full p-3 rounded-xl bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* TIME INPUT */}
        <div>
          <label className="text-xs text-gray-500">Add Time Slot</label>

          <div className="flex gap-2 mt-2">
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="flex-1 p-3 rounded-xl bg-slate-100 focus:outline-none"
            />

            <button
              onClick={addSlot}
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 rounded-xl flex items-center justify-center"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold shadow-sm"
        >
          Save Slots
        </button>
      </div>

      {/* SLOT LIST */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Added Slots
        </h3>

        {slots.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-6">
            <i className="fa-solid fa-clock text-xl mb-2"></i>
            <p>No slots added yet</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {slots.map((time, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full text-sm text-gray-700"
              >
                <i className="fa-solid fa-clock text-sky-500"></i>
                {time}

                <button onClick={() => removeSlot(time)}>
                  <i className="fa-solid fa-xmark text-red-500 text-xs ml-1"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}