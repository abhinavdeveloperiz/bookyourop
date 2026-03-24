export default function DoctorFooter() {
  return (
    <footer className="bg-sky-500 mt-16 mx-4 md:mx-12 rounded-t-3xl text-white sm:block hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h2 className="text-lg font-semibold">Doctor Panel</h2>

        <p className="text-sky-100 mt-2 text-sm">
          Manage appointments, availability, and patient interactions easily.
        </p>

        <div className="border-t border-white/20 mt-6 pt-4 text-sm">
          © {new Date().getFullYear()} Book Your OP
        </div>
      </div>
    </footer>
  );
}