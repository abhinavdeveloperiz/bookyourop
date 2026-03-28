export default function Hospitals() {
  const hospitals = [
    {
      name: "City Hospital",
      location: "Thiruvananthapuram",
      address: "MG Road, Kerala",
      phone: "+91 9876543210",
      type: "Multi Speciality",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },

    {
      name: "Apollo Hospital",
      location: "Kochi",
      address: "Marine Drive, Kochi",
      phone: "+91 9988776655",
      type: "Super Speciality",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Hospitals</h1>

          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {hospitals.length} Hospitals
          </span>
        </div>

        {/* LIST */}
        <div className="space-y-5">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur border border-white/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={h.image}
                alt={h.name}
                className="w-full h-40 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4">
                {/* NAME */}
                <h3 className="text-lg font-bold text-gray-800">{h.name}</h3>

                {/* TYPE */}
                <p className="text-xs text-blue-600 font-medium mt-1">
                  {h.type}
                </p>

                {/* LOCATION */}
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-red-500"></i>
                  {h.location}, {h.address}
                </p>

                {/* PHONE */}
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                  <i className="fa-solid fa-phone text-green-500"></i>
                  {h.phone}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                    View Details
                  </button>

                  <button className="px-3 py-2 bg-green-100 rounded-lg hover:bg-green-200 transition">
                    <i className="fa-solid fa-phone text-green-600"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
