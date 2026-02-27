
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Arjun Nair",
    speciality: "Cardiology",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Meera Das",
    speciality: "Dermatology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Rahul Kumar",
    speciality: "Pediatrics",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Suresh Pillai",
    speciality: "Orthopedics",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Dr. Anitha Menon",
    speciality: "Gynecology",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Joseph Mathew",
    speciality: "ENT",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Dr. Vivek Sharma",
    speciality: "Neurology",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dr. Riya Paul",
    speciality: "Dentist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-sky-50 min-h-screen flex flex-col">

      {/* HERO BANNER */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/027/298/490/large_2x/doctor-posing-portrait-free-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight uppercase">
            Book Trusted Doctors Anytime, Anywhere
          </h1>

          <p className="mt-4 text-sky-100 text-md">
            Consult experienced doctors - schedule appointments - and manage
            your health easily.
          </p>

          <Link to="/doctors">
            <button className="mt-6 bg-sky-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-400 transition">
              Book Appointment
            </button>
          </Link>

          <Link></Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="rounded-xl p-6 ">
          <i className="fa fa-user-md text-sky-500 text-3xl mb-3"></i>
          <p className="font-medium text-gray-700">Expert Doctors</p>
        </div>

        <div className="rounded-xl p-6">
          <i className="fa fa-clock text-sky-500 text-3xl mb-3"></i>
          <p className="font-medium text-gray-700">24/7 Support</p>
        </div>

        <div className="rounded-xl p-6">
          <i className="fa fa-calendar-check text-sky-500 text-3xl mb-3"></i>
          <p className="font-medium text-gray-700">Easy Booking</p>
        </div>

        <div className="rounded-xl p-6">
          <i className="fa fa-hospital text-sky-500 text-3xl mb-3"></i>
          <p className="font-medium text-gray-700">Verified Clinics</p>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-16 pb-16">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-10">
          Doctors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {doctors.map((doc, i) => (
            <div key={i} className="text-center group">
              {/* Avatar */}
              <div className="relative w-36 h-36 mx-auto">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md group-hover:shadow-xl transition duration-300"
                />

                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  {doc.speciality}
                </span>
              </div>

              {/* Doctor Info */}
              <h3 className="mt-6 font-semibold text-gray-800 text-lg">
                {doc.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">Specialist Doctor</p>

              <Link to="/doctordetails">
                <button className="mt-4 px-6 py-2 text-sm font-medium text-sky-600 border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 text-white py-16 mx-4 md:mx-10 rounded-4xl">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Need Medical Help Today?
          </h2>

          <p className="mt-3 text-sky-100">
            Book an appointment with trusted doctors in minutes.
          </p>

          <Link
            to="/doctors"
            className="inline-block mt-6 bg-white text-sky-600 px-8 py-3 rounded-lg font-medium hover:bg-sky-100 transition"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>

      {/* SPECIALITIES */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-10">
            Explore by Speciality
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Cardiology", icon: "fa-heart-pulse" },
              { name: "Dermatology", icon: "fa-user" },
              { name: "Pediatrics", icon: "fa-baby" },
              { name: "Orthopedics", icon: "fa-bone" },
              { name: "Dentist", icon: "fa-tooth" },
              { name: "Neurology", icon: "fa-brain" },
              { name: "Gynecology", icon: "fa-user-nurse" },
              { name: "ENT", icon: "fa-ear-listen" },
            ].map((item, i) => (
              <div key={i} className=" p-6 transition cursor-pointer">
                <Link to="/doctors">
                  <i
                    className={`fa-solid ${item.icon} text-sky-500 text-2xl mb-3`}
                  ></i>
                </Link>

                <p className="font-medium text-gray-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
