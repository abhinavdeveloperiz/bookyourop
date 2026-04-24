import { useState } from "react";

export default function AddDoctor() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    fee: "",
    phone: "",
    experience: "",
    description: "",
    image: null,
    hospital: "",
    doctor_type: "hospital",
    fee_type: "admin",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data:", form);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-6 px-4 mb-12">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur border border-white/40 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add Doctor
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* IMAGE */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <i className="fa-solid fa-user-doctor text-3xl text-gray-400"></i>
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

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-600">Doctor Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* DOCTOR TYPE */}
          <div>
            <label className="text-sm text-gray-600">Doctor Type</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="doctor_type"
                  value="hospital"
                  checked={form.doctor_type === "hospital"}
                  onChange={handleChange}
                />
                Hospital
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="doctor_type"
                  value="individual"
                  checked={form.doctor_type === "individual"}
                  onChange={handleChange}
                />
                Individual
              </label>
            </div>
          </div>

          {/* HOSPITAL (CONDITIONAL) */}
          {form.doctor_type === "hospital" && (
            <div>
              <label className="text-sm text-gray-600">Hospital</label>
              <select
                name="hospital"
                value={form.hospital}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              >
                <option value="">Select Hospital</option>
                <option value="apollo">Apollo Hospital</option>
                <option value="aster">Aster Medcity</option>
                <option value="kims">KIMS Hospital</option>
              </select>
            </div>
          )}

          {/* CATEGORY */}
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* FEE */}
          <div>
            <label className="text-sm text-gray-600">
              Consultation Fee (₹)
            </label>
            <input
              type="number"
              name="fee"
              value={form.fee}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* FEE TYPE */}
          <div>
            <label className="text-sm text-gray-600">
              Fee Collection Type
            </label>

            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fee_type"
                  value="admin"
                  checked={form.fee_type === "admin"}
                  onChange={handleChange}
                />
                Admin Collects
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fee_type"
                  value="doctor"
                  checked={form.fee_type === "doctor"}
                  onChange={handleChange}
                />
                Doctor Collects Directly
              </label>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              If doctor collects, payment is handled offline.
            </p>
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
            />
          </div>

          {/* EXPERIENCE */}
          <div>
            <label className="text-sm text-gray-600">Experience</label>
            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}