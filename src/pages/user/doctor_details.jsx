import { useState } from "react";

export default function DoctorDetails() {
  const doctor = {
    name: "Dr. Arjun Nair",
    speciality: "Cardiologist",
    qualification: "MBBS, MD Cardiology",
    experience: "12+ Years Experience",
    hospital: "City Heart Care Hospital",
    fee: 500,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    about:
      "Dr. Arjun Nair is a leading cardiologist specializing in heart disease prevention, diagnosis, and advanced treatment. He has successfully treated thousands of patients and is known for compassionate care.",
  };

  const dates = ["Mar 02", "Mar 03", "Mar 04", "Mar 05", "Mar 06"];
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div className="bg-sky-50 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Doctor Profile */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:flex gap-6 items-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 rounded-xl object-cover"
            />

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {doctor.name}
              </h2>

              <p className="text-sky-600 font-medium">{doctor.speciality}</p>

              <p className="text-gray-500 mt-1">{doctor.qualification}</p>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-briefcase-medical text-sky-500"></i>
                  {doctor.experience}
                </span>

                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-hospital text-sky-500"></i>
                  {doctor.hospital}
                </span>

                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-indian-rupee-sign text-sky-500"></i>
                  ₹{doctor.fee} Consultation
                </span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              About Doctor
            </h3>
            <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Availability
            </h3>

            {/* Dates */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Select Date</p>
              <div className="flex flex-wrap gap-3">
                {dates.map((date, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date)}
                    className={`px-4 py-2 rounded-lg border transition ${
                      selectedDate === date
                        ? "bg-sky-500 text-white border-sky-500"
                        : "border-gray-300 hover:bg-sky-50"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Select Time</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((time, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 rounded-lg border transition ${
                        selectedTime === time
                          ? "bg-sky-500 text-white border-sky-500"
                          : "border-gray-300 hover:bg-sky-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          {selectedTime && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Payment Method
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod("book_now")}
                  className={`w-full p-4 rounded-lg border-2 transition text-left ${
                    paymentMethod === "book_now"
                      ? "bg-sky-50 border-sky-500"
                      : "border-gray-300 hover:border-sky-300"
                  }`}
                >
                  <p className="font-semibold text-gray-800">Book Now</p>
                  <p className="text-sm text-gray-600">
                    Pay now to confirm booking
                  </p>
                </button>

                <button
                  onClick={() => setPaymentMethod("pay_hospital")}
                  className={`w-full p-4 rounded-lg border-2 transition text-left ${
                    paymentMethod === "pay_hospital"
                      ? "bg-sky-50 border-sky-500"
                      : "border-gray-300 hover:border-sky-300"
                  }`}
                >
                  <p className="font-semibold text-gray-800">Pay at Hospital</p>
                  <p className="text-sm text-gray-600">
                    Pay during consultation visit
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE BOOKING PANEL */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
          <h3 className="font-semibold text-lg text-gray-800">
            Book Appointment
          </h3>

          <div className="mt-4 text-sm text-gray-600 space-y-2">
            <p className="flex justify-between">
              <span>Consultation Fee</span>
              <span className="font-semibold text-gray-800">₹{doctor.fee}</span>
            </p>

            <p className="flex justify-between">
              <span>Selected Date</span>
              <span className="font-medium">{selectedDate || "--"}</span>
            </p>

            <p className="flex justify-between">
              <span>Selected Time</span>
              <span className="font-medium">{selectedTime || "--"}</span>
            </p>

            <p className="flex justify-between">
              <span>Payment Method</span>
              <span className="font-medium">
                {paymentMethod === "book_now"
                  ? "Book Now"
                  : paymentMethod === "pay_hospital"
                    ? "Pay at Hospital"
                    : "--"}
              </span>
            </p>
          </div>

          <button
            disabled={!paymentMethod}
            className={`mt-6 w-full py-3 rounded-lg text-white font-medium transition ${
              paymentMethod
                ? paymentMethod === "book_now"
                  ? "bg-sky-500 hover:bg-sky-600"
                  : "bg-green-500 hover:bg-green-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {paymentMethod === "book_now"
              ? "Proceed to Payment"
              : "Confirm Booking"}
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            Secure & confidential consultation
          </p>
        </div>
      </div>
    </div>
  );
}
