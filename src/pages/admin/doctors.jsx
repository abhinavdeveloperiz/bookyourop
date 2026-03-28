import { Link } from "react-router-dom";

export default function DoctorsAdmin() {
  const doctors = [
    {
      name: "Dr. Arjun",
      age: 42,
      experience: "15 yrs",
      category: "Cardiologist",
      hospital: "Apollo Hospital",
      fee: "₹800",
    },
    {
      name: "Dr. Meera",
      age: 36,
      experience: "10 yrs",
      category: "Dermatologist",
      hospital: "City Care",
      fee: "₹500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-24">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Doctors</h1>
            <p className="text-sm text-gray-500">
              Manage doctors and their details
            </p>
          </div>

          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm shadow-md transition flex items-center gap-2">
            <i className="fa-solid fa-plus"></i>
            Add Doctor
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {doctors.map((d, i) => {
            const initials = d.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* LEFT */}
                  <div className="flex gap-4">
                    {/* AVATAR */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 font-semibold text-lg">
                      {initials}
                    </div>

                    {/* INFO */}
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {d.name} • {d.age} yrs
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {d.category} • {d.experience}
                      </p>

                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <i className="fa-solid fa-hospital text-gray-300"></i>
                        {d.hospital}
                      </p>

                      {/* CONSULTATION FEE */}
                      <p className="text-sm text-sky-600 font-medium mt-2">
                        Consultation Fee:{" "}
                        <span className="text-green-600">{d.fee}</span>
                      </p>
                    </div>
                  </div>

                  {/* RIGHT ACTIONS */}
                  <div className="flex items-center gap-2">
                    {/* EDIT */}
                    <button className="px-3 py-1.5 text-xs bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition flex items-center gap-1">
                      <i className="fa-solid fa-pen"></i>
                      Edit
                    </button>

                    {/* DELETE */}
                    <button className="px-3 py-1.5 text-xs bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition flex items-center gap-1">
                      <i className="fa-solid fa-trash"></i>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
