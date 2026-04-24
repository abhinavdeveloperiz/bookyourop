import { useState } from "react";

export default function AddHospital() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    location: "",
    address: "",
    phone: "",
    beds: "",
    image: null,
    specializations: "",
    gmapUrl: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hospitalData = {
      ...form,
      specializations: form.specializations
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s),
    };
    console.log("Hospital Data:", hospitalData);
  };

  return (
    <div className="min-h-screen bg-blue-50 to-indigo-100 py-6 px-4 mb-12">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur border border-white/40 rounded-2xl shadow-lg p-6">
        {/* HEADER */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Hospital</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* IMAGE UPLOAD */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  alt="hospital preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <i className="fa-solid fa-hospital text-3xl text-gray-400"></i>
              )}
            </div>

            <label className="text-sm text-blue-600 cursor-pointer">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>
          </div>

          {/* HOSPITAL NAME */}
          <div>
            <label className="text-sm text-gray-600">Hospital Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter hospital name"
              required
            />
          </div>

          {/* TYPE */}
          <div>
            <label className="text-sm text-gray-600">Type</label>
            <input
              type="text"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Multi Speciality"
            />
          </div>

          {/* BEDS */}
          <div>
            <label className="text-sm text-gray-600">Number of Beds</label>
            <input
              type="number"
              name="beds"
              value={form.beds}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter number of beds"
              min="1"
            />
          </div>

          {/* CITY */}
          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="City"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="+91..."
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Full address"
            />
          </div>

          {/* SPECIALIZATIONS */}
          <div>
            <label className="text-sm text-gray-600">Specializations</label>
            <input
              type="text"
              name="specializations"
              value={form.specializations}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Cardiologist, Gynecologist, Neurologist (comma separated)"
            />
          </div>

          {/* GOOGLE MAP LOCATION */}
          <div>
            <label className="text-sm text-gray-600">Google Maps URL</label>
            <input
              type="url"
              name="gmapUrl"
              value={form.gmapUrl}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="https://maps.google.com/..."
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Add Hospital
          </button>
        </form>
      </div>
    </div>
  );
}
