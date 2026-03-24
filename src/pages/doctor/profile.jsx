import { useState } from "react";

export default function DoctorProfile() {
  const [isEdit, setIsEdit] = useState(false);

  const [doctor, setDoctor] = useState({
    name: "Dr. Arjun Nair",
    speciality: "Cardiologist",
    experience: "12 Years",
    hospital: "City Care Hospital",
    fee: 500,
    about:
      "Experienced cardiologist specializing in advanced heart care and patient-centered treatment.",
    phone: "+91 9876543210",
    email: "doctor@mail.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-blue-50 min-h-screen pb-28 px-4 md:px-6">
      {/* HEADER */}
      <div className="pt-6 mb-5">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <i className="fa-solid fa-user-doctor text-sky-500"></i>
          My Profile
        </h1>
        <p className="text-sm text-gray-400">
          Manage your professional details
        </p>
      </div>

      {/* HERO CARD */}
      <div className="bg-white rounded-3xl shadow-sm  p-5 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={doctor.image}
            alt=""
            className="w-24 h-24 rounded-2xl object-cover border"
          />

          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-800">{doctor.name}</h2>

            <p className="text-sky-500 text-sm font-medium">
              {doctor.speciality}
            </p>

            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              <span className="bg-sky-50 text-sky-600 px-2 py-1 rounded-full">
                {doctor.experience}
              </span>

              <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full">
                ₹{doctor.fee} Fee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK INFO CARDS */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm ">
          <p className="text-xs text-gray-400">Hospital</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">
            {doctor.hospital}
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm ">
          <p className="text-xs text-gray-400">Consultation Fee</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">
            ₹{doctor.fee}
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-white rounded-2xl shadow-sm  p-4 mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">About</h3>

        {isEdit ? (
          <textarea
            name="about"
            value={doctor.about}
            onChange={handleChange}
            className="w-full p-3 rounded-xl "
          />
        ) : (
          <p className="text-sm text-gray-600 leading-relaxed">
            {doctor.about}
          </p>
        )}
      </div>

      {/* CONTACT */}
      <div className="bg-white rounded-2xl shadow-sm  p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Contact Details</h3>

        <div className="flex items-center gap-2 text-sm">
          <i className="fa-solid fa-phone text-sky-500"></i>
          {isEdit ? (
            <input
              name="phone"
              value={doctor.phone}
              onChange={handleChange}
              className=" rounded-lg px-2 py-1 w-full"
            />
          ) : (
            doctor.phone
          )}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <i className="fa-solid fa-envelope text-sky-500"></i>
          {isEdit ? (
            <input
              name="email"
              value={doctor.email}
              onChange={handleChange}
              className=" rounded-lg px-2 py-1 w-full"
            />
          ) : (
            doctor.email
          )}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-6 flex gap-3">
        {!isEdit ? (
          <button
            onClick={() => setIsEdit(true)}
            className="w-full bg-sky-500 text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-pen"></i>
            Edit Profile
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEdit(false)}
              className="w-full bg-gray-300 text-gray-700 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              onClick={() => setIsEdit(false)}
              className="w-full bg-green-500 text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-check"></i>
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
