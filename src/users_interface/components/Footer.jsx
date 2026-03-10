import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sky-500 mt-16 mx-4 md:mx-12 rounded-t-3xl shadow-inner text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold text-white">Book Your OP</h2>

            <p className="text-sky-100 mt-3 text-sm leading-relaxed">
              Connecting you with trusted doctors and seamless healthcare
              services anytime, anywhere.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-sky-200 text-lg">
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2 text-sky-100 text-sm">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <Link to="/doctors" className="hover:text-white">
                Doctors
              </Link>
              <Link to="/bookings" className="hover:text-white">
                Bookings
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>

            <div className="flex flex-col gap-2 text-sky-100 text-sm">
              <p>Online Consultation</p>
              <p>Clinic Appointments</p>
              <p>Health Checkups</p>
              <p>Emergency Support</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>

            <div className="flex flex-col gap-3 text-sky-100 text-sm">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-sky-200"></i>
                +91 98765 43210
              </p>

              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-sky-200"></i>
                support@name.com
              </p>

              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-sky-200"></i>
                Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sky-100 text-sm">
          © {new Date().getFullYear()} Book Your OP. All rights reserved.
        </div>
        <div className="mb-24 pt-6 text-center text-white text-sm">
          Developed By{" "}
          <a href="https://www.inspirezesttechnologies.com/" target="_blank">
            InspireZest Technologies Pvt Ltd
          </a>
        </div>
      </div>
    </footer>
  );
}
