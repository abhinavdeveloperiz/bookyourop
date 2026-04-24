import { useParams } from "react-router-dom";

export default function HospitalDetails() {
  const { id } = useParams();

  const hospital = {
    name: "Apollo Hospital",
    location: "Kochi",
    address: "Marine Drive, Kochi",
    phone: "+91 9988776655",
    type: "Super Speciality",
    specializations: ["Cardiology", "Neurology", "Orthopedic", "Dermatology"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    description:
      "Apollo Hospital is a leading healthcare provider offering advanced medical facilities and expert doctors.",
    doctors: [
      {
        name: "Dr. Rahul",
        category: "Cardiologist",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Dr. Meera",
        category: "Dermatologist",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-blue-50 pb-24">
      {/* HERO IMAGE */}
      <div className="relative">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-64 object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* TITLE OVER IMAGE */}
        <div className="absolute bottom-4 left-5 text-white">
          <h1 className="text-2xl font-bold">{hospital.name}</h1>
          <p className="text-sm opacity-90">{hospital.type}</p>
        </div>
      </div>

      <div className="mx-auto  -mt-10">
        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-5 space-y-5">
          {/* LOCATION + PHONE */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              {hospital.location}, {hospital.address}
            </p>

            <p className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-green-500"></i>
              {hospital.phone}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-blue-500"></i>
              About Hospital
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {hospital.description}
            </p>
          </div>

          {/* SPECIALIZATIONS */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <i className="fa-solid fa-stethoscope text-blue-500"></i>
              Specializations
            </h2>

            <div className="flex flex-wrap gap-2">
              {hospital.specializations.map((s, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* DOCTORS */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fa-solid fa-user-doctor text-purple-500"></i>
              Doctors
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              {hospital.doctors.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 hover:shadow transition"
                >
                  {/* IMAGE */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {doc.name}
                    </p>
                    <p className="text-xs text-gray-500">{doc.category}</p>
                  </div>

                  {/* VIEW */}
                  <button className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-200">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT BUTTON */}
          <div className="pt-3">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone"></i>
              Contact Hospital
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
