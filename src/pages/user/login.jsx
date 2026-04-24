import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-[100vh]  bg-gradient-to-br from-sky-50 via-white to-green-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
        {/* Brand */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-sky-600">Book My OP</h1>
          <p className="text-xs text-gray-400 mt-1">
            Connect with nearby doctors
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to continue</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Email */}
          <div className="group">
            <label className="text-xs text-gray-500">Email</label>
            <div className="mt-1 flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 group-focus-within:bg-white group-focus-within:border-sky-500 group-focus-within:ring-2 ring-sky-100 transition">
              <i className="fa fa-envelope text-gray-400 mr-3 text-sm"></i>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div className="group">
            <label className="text-xs text-gray-500">Password</label>
            <div className="mt-1 flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 group-focus-within:bg-white group-focus-within:border-sky-500 group-focus-within:ring-2 ring-sky-100 transition">
              <i className="fa fa-lock text-gray-400 mr-3 text-sm"></i>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-xs mt-1">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="accent-sky-600" />
              Remember me
            </label>

            <Link to="#" className="text-sky-600 hover:underline">
              Forgot?
            </Link>
          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-sky-600 hover:to-blue-700 transition-all duration-300 active:scale-95">
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-xs">or continue with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition">
            <i className="fab fa-google text-red-500"></i>
            Google
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition">
            <i className="fab fa-whatsapp text-green-500"></i>
            WhatsApp
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="#" className="text-sky-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
