import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${form.name}.
Phone: ${form.phone}
Message: ${form.message}`;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Contact Us</h1>
          <p className="text-gray-500 text-sm mt-1">
            We're here to help with your consultations & bookings
          </p>
        </div>

        {/* CONTACT INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <i className="fa-solid fa-phone text-sky-500 text-2xl mb-3"></i>
            <h3 className="font-semibold text-gray-700">Call Us</h3>
            <p className="text-gray-500 text-sm mt-1">+91 98765 43210</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <i className="fa-solid fa-envelope text-sky-500 text-2xl mb-3"></i>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-500 text-sm mt-1">
              support@doctorcare.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <i className="fa-solid fa-location-dot text-sky-500 text-2xl mb-3"></i>
            <h3 className="font-semibold text-gray-700">Location</h3>
            <p className="text-gray-500 text-sm mt-1">
              Kochi, Kerala, India
            </p>
          </div>

        </div>

        {/* CONTACT FORM + MAP */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>

            <form onSubmit={sendToWhatsApp} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none"
              ></textarea>

              <button className="w-full bg-sky-500 text-white py-2 rounded-lg font-medium hover:bg-sky-600 transition">
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px]"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* WHATSAPP QUICK BUTTON */}
        <div className="fixed bottom-6 right-6">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
          </a>
        </div>

      </div>
    </div>
  );
}