import { Link } from "react-router-dom";

export default function UserProfile() {
  const bookings = [
    {
      doctor: "Dr. Arjun Nair",
      speciality: "Cardiology",
      date: "Mar 03, 2026",
      time: "10:00 AM",
      hospital: "City Heart Care",
      status: "Upcoming",
    },
    {
      doctor: "Dr. Meera Das",
      speciality: "Dermatology",
      date: "Feb 20, 2026",
      time: "3:30 PM",
      hospital: "SkinCare Clinic",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-sky-50 min-h-screen pb-16">
      {/* PROFILE INFO */}
      <section className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Profile Information
              </h3>
              <p className="text-sm text-gray-500">
                Manage your personal details
              </p>
            </div>

            <button className="bg-sky-500 text-white px-5 py-2 rounded-lg hover:bg-sky-600 transition">
              Edit Profile
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">Abhinav M</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium">May 12, 1999</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">Male</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">Trivandrum, Kerala, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKINGS */}
      <section className="max-w-5xl mx-auto px-6 mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          My Appointments
        </h3>

        <div className="space-y-4">
          {bookings.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.doctor}</p>
                <p className="text-sm text-gray-500">
                  {item.speciality} • {item.hospital}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {item.date} at {item.time}
                </p>
              </div>

              <span
                className={`mt-3 md:mt-0 text-sm px-4 py-1 rounded-full ${
                  item.status === "Upcoming"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <Link to="/bookings">
          <button className="mt-6 text-sky-600 font-medium hover:underline">
            View All Bookings →
          </button>
        </Link>
      </section>

      {/* MEDICAL INFO */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Medical Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Blood Group</p>
              <p className="font-medium">O+</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Allergies</p>
              <p className="font-medium">None</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">Existing Conditions</p>
              <p className="font-medium">No chronic illnesses reported</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
