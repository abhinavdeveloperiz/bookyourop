export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      {/* Center Section */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-sky-500 rounded-xl p-8">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center text-sky-700">
            Sign in to your account
          </h2>

          {/* Username Login */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center border border-sky-400 rounded-lg px-3 py-2 focus-within:ring-2 ring-sky-400">
              <i className="fa fa-user text-sky-400 mr-2"></i>
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none bg-transparent"
              />
            </div>

            <div className="flex items-center border border-sky-400 rounded-lg px-3 py-2 focus-within:ring-2 ring-sky-400">
              <i className="fa fa-lock text-sky-400 mr-2"></i>
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none bg-transparent"
              />
            </div>

            <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition">
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-sky-100"></div>
            <span className="px-3 text-sky-400 text-sm">or</span>
            <div className="flex-1 h-px bg-sky-100"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-6">
            {/* Google */}
            <button className="w-12 h-12 flex items-center justify-center border border-sky-100 rounded-full hover:bg-sky-50 transition">
              <i className="fab fa-google text-red-500 text-lg"></i>
            </button>

            {/* WhatsApp */}
            <button className="w-12 h-12 flex items-center justify-center border border-sky-100 rounded-full hover:bg-sky-50 transition">
              <i className="fab fa-whatsapp text-green-500 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
