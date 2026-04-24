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
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      {/* 🔥 HERO HEADER */}
      <div className="relative bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 px-6 pt-10 pb-24 overflow-hidden">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-900/30 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/35 rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-indigo-900 text-xs uppercase tracking-widest font-semibold mb-1">
            Support
          </p>

          <h1 className="text-indigo-950 text-3xl font-bold">
            Contact & Assistance
          </h1>

          <p className="text-indigo-900/70 text-sm mt-2 max-w-lg">
            Need help with appointments or services? Reach out to our support
            team anytime.
          </p>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 -mt-16 relative z-10"
        data-aos="fade-up"
      >
        {/* 🔥 CONTACT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white backdrop-blur rounded-2xl p-5 shadow hover:shadow-lg transition text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-3">
              <i className="fa-solid fa-phone"></i>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Call Us</h3>
            <p className="text-gray-500 text-xs mt-1">+91 98765 43210</p>
          </div>

          <div className="bg-white backdrop-blur rounded-2xl p-5 shadow hover:shadow-lg transition text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-3">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
            <p className="text-gray-500 text-xs mt-1">support@doctorcare.com</p>
          </div>

          <div className="bg-white backdrop-blur rounded-2xl p-5 shadow hover:shadow-lg transition text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-red-100 text-red-500 mb-3">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Location</h3>
            <p className="text-gray-500 text-xs mt-1">Kochi, Kerala, India</p>
          </div>
        </div>

        {/* 🔥 FORM + MAP */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* FORM */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>

            <form onSubmit={sendToWhatsApp} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="text-xs text-gray-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-xs text-gray-500">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs text-gray-500">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 rounded-xl font-semibold hover:scale-[1.02] transition shadow-md">
                <i className="fa-brands fa-whatsapp mr-2"></i>
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
