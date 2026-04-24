import { useParams, Link } from "react-router-dom";

export default function HospitalDetails() {
  const { id } = useParams();

  const hospital = {
    name: "Apollo Hospital",
    location: "Kochi",
    address: "Marine Drive, Kochi",
    phone: "+91 9988776655",
    type: "Super Speciality",
    beds: 580,
    // rating: 4.9,
    specializations: ["Cardiology", "Neurology", "Orthopedic", "Dermatology"],
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80",

    doctors: [
      {
        id: 1,
        name: "Dr. Rahul Kumar",
        category: "Cardiologist",
        experience: "12 years",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Dr. Meera Singh",
        category: "Dermatologist",
        experience: "8 years",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 3,
        name: "Dr. Arun Nair",
        category: "Neurologist",
        experience: "10 years",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        id: 4,
        name: "Dr. Priya Verma",
        category: "Orthopedic",
        experience: "9 years",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
      },
    ],
  };

  const typeColors = {
    "Super Speciality": {
      bg: "bg-violet-100",
      text: "text-violet-700",
      dot: "bg-violet-500",
    },
    "Multi Speciality": {
      bg: "bg-sky-100",
      text: "text-sky-700",
      dot: "bg-sky-500",
    },
  };

  const tc = typeColors[hospital.type] || typeColors["Multi Speciality"];

  return (
    <div className="min-h-screen bg-slate-50 pb-28 font-sans">
      {/* ── HERO BANNER ── */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Back button - top left */}
        <Link
          to="/admin/hospitals"
          className="absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-200"
        >
          <i className="fa-solid fa-chevron-left text-sm"></i>
        </Link>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`flex items-center gap-1.5 ${tc.bg} ${tc.text} text-xs font-semibold px-3 py-1.5 rounded-full`}
              >
                <span className={`w-2 h-2 rounded-full ${tc.dot}`}></span>
                {hospital.type}
              </div>
              {/* <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                <i className="fa-solid fa-star text-amber-300"></i>
                {hospital.rating}
              </div> */}
            </div>
            <h1 className="text-white text-3xl font-bold leading-tight mb-1">
              {hospital.name}
            </h1>
            <p className="text-white/80 text-sm flex items-center gap-1">
              <i className="fa-solid fa-location-dot text-red-400"></i>
              {hospital.location}
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="px-4 -mt-12 relative z-10 max-w-4xl mx-auto">
        {/* QUICK INFO CARDS */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: "fa-solid fa-bed", label: "Beds", value: hospital.beds },
            { icon: "fa-solid fa-phone", label: "Call", value: "Available" },
            {
              icon: "fa-solid fa-stethoscope",
              label: "Specialties",
              value: hospital.specializations.length,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-all duration-200"
            >
              <i
                className={`${item.icon} text-2xl mb-2 ${idx === 0 ? "text-indigo-600" : idx === 1 ? "text-green-600" : "text-blue-600"}`}
              ></i>
              <p className="text-xs text-gray-500 mb-1">{item.label}</p>
              <p className="text-lg font-bold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>

        {/* DETAILS CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          {/* CONTACT INFO */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-blue-600 w-5"></i>
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50">
                  <i className="fa-solid fa-location-dot text-blue-600"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Address</p>
                  <p className="text-sm font-medium text-gray-800">
                    {hospital.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50">
                  <i className="fa-solid fa-phone text-green-600"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <a
                    href={`tel:${hospital.phone}`}
                    className="text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    {hospital.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SPECIALIZATIONS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <i className="fa-solid fa-stethoscope text-indigo-600 w-5"></i>
              Specializations ({hospital.specializations.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {hospital.specializations.map((spec, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 text-xs font-semibold px-3.5 py-2 rounded-full border border-indigo-100 hover:shadow-md transition-all duration-200"
                >
                  <i className="fa-solid fa-check-circle text-indigo-500 text-[10px]"></i>
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DOCTORS SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-user-doctor text-purple-600 w-6 h-6 flex items-center justify-center"></i>
            Our Doctors ({hospital.doctors.length})
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {hospital.doctors.map((doc) => (
              <div
                key={doc.id}
                className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-white"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="fa-solid fa-check text-white text-[10px]"></i>
                  </div>
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-600 mb-2">{doc.category}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                    <i className="fa-solid fa-briefcase text-gray-400 text-[10px]"></i>
                    {doc.experience} experience
                  </p>
                  <Link
                    to={`/admin/doctors`}
                    className="inline-flex items-center gap-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                  >
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid md:grid-cols-2 gap-3 mt-6">
          <a
            href={`tel:${hospital.phone}`}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
          >
            <i className="fa-solid fa-phone"></i>
            Call Hospital
          </a>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg">
            <i className="fa-solid fa-envelope"></i>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
