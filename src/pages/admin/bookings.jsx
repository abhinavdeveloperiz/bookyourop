import { useState, useEffect } from "react";

const initialBookings = [
  {
    id: 1,
    patient: "Rahul",
    phone: "+91 9876543210",
    doctor: "Dr. Arjun",
    doctorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Cardiologist",
    hospital: "City Hospital",
    date: "2026-03-28",
    displayDate: "28 Mar 2026",
    time: "10:30 AM",
    payment: "paid",
  },
  {
    id: 2,
    patient: "Meera",
    phone: "+91 9123456780",
    doctor: "Dr. Das",
    doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "Dermatologist",
    hospital: "Apollo Hospital",
    date: "2026-03-29",
    displayDate: "29 Mar 2026",
    time: "2:00 PM",
    payment: "unpaid",
  },
  {
    id: 3,
    patient: "Anandhu",
    phone: "+91 9988776655",
    doctor: "Dr. Ajith",
    doctorImg: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "Dermatologist",
    hospital: "City Hospital",
    date: "2026-03-29",
    displayDate: "29 Mar 2026",
    time: "3:00 PM",
    payment: "paid",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState(initialBookings);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [tempFilters, setTempFilters] = useState({
    hospital: "",
    doctor: "",
    dateFrom: "",
    dateTo: "",
  });
  const [activeFilters, setActiveFilters] = useState({
    hospital: "",
    doctor: "",
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  const hospitals = [...new Set(initialBookings.map((b) => b.hospital))];
  const doctors = [...new Set(initialBookings.map((b) => b.doctor))];

  const filtered = bookings.filter((b) => {
    if (activeFilters.hospital && b.hospital !== activeFilters.hospital)
      return false;
    if (activeFilters.doctor && b.doctor !== activeFilters.doctor) return false;
    if (activeFilters.status && b.payment !== activeFilters.status)
      return false;
    if (activeFilters.dateFrom && b.date < activeFilters.dateFrom) return false;
    if (activeFilters.dateTo && b.date > activeFilters.dateTo) return false;
    return true;
  });

  const hasActiveFilter = Object.values(activeFilters).some(Boolean);
  const paidCount = filtered.filter((b) => b.payment === "paid").length;
  const unpaidCount = filtered.filter((b) => b.payment === "unpaid").length;

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const openDrawer = () => {
    setTempFilters({
      hospital: activeFilters.hospital,
      doctor: activeFilters.doctor,
      dateFrom: activeFilters.dateFrom,
      dateTo: activeFilters.dateTo,
    });
    setSelectedStatus(activeFilters.status);
    setDrawerOpen(true);
  };

  const closeDrawer = () => setDrawerOpen(false);

  const applyFilters = () => {
    setActiveFilters({ ...tempFilters, status: selectedStatus });
    setDrawerOpen(false);
  };

  const clearFilters = () => {
    const empty = {
      hospital: "",
      doctor: "",
      status: "",
      dateFrom: "",
      dateTo: "",
    };
    setTempFilters({ hospital: "", doctor: "", dateFrom: "", dateTo: "" });
    setActiveFilters(empty);
    setSelectedStatus("");
    setDrawerOpen(false);
  };

  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const statusOptions = [
    {
      label: "All",
      value: "",
      activeClass: "bg-gray-900 text-white border-gray-900",
    },
    {
      label: "Paid",
      value: "paid",
      activeClass: "bg-green-100 text-green-700 border-green-300",
    },
    {
      label: "Unpaid",
      value: "unpaid",
      activeClass: "bg-red-100 text-red-600 border-red-300",
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-50 relative overflow-x-hidden pb-24">
      {/* ── OVERLAY ── */}
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* ── FILTER DRAWER ── */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-50 flex flex-col shadow-2xl
          transition-transform duration-300 ease-in-out
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <i className="fa-solid fa-sliders text-white text-xs" />
            </div>
            <span className="text-gray-900 font-bold text-lg">Filters</span>
          </div>
          <button
            onClick={closeDrawer}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all duration-200"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-6">
          {/* Hospital */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Hospital
            </label>
            <div className="relative">
              <select
                value={tempFilters.hospital}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, hospital: e.target.value })
                }
                className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 pr-9 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent cursor-pointer"
              >
                <option value="">All Hospitals</option>
                {hospitals.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Doctor */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Doctor
            </label>
            <div className="relative">
              <select
                value={tempFilters.doctor}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, doctor: e.target.value })
                }
                className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 pr-9 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent cursor-pointer"
              >
                <option value="">All Doctors</option>
                {doctors.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Payment Status */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Payment Status
            </label>
            <div className="flex gap-2 flex-wrap">
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedStatus(opt.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                    ${
                      selectedStatus === opt.value
                        ? opt.activeClass
                        : "bg-gray-50 text-gray-500 border-gray-200 hover:border-indigo-300"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <input
                type="date"
                value={tempFilters.dateFrom}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, dateFrom: e.target.value })
                }
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
              <input
                type="date"
                value={tempFilters.dateTo}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, dateTo: e.target.value })
                }
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex gap-3 shrink-0">
          <button
            onClick={clearFilters}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 text-sm font-medium hover:border-indigo-400 hover:text-indigo-500 transition-all duration-200"
          >
            Clear All
          </button>
          <button
            onClick={applyFilters}
            className="flex-[2] py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            <i className="fa-solid fa-check mr-2 text-xs" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 px-6 pt-7 pb-6 relative overflow-hidden">
        <div className="absolute -top-14 -right-14 w-56 h-56 bg-indigo-500/20 rounded-full" />
        <div className="absolute -bottom-10 left-[40%] w-36 h-36 bg-purple-500/15 rounded-full" />

        <div className="relative z-10 flex items-start justify-between mb-5">
          <div>
            <h1 className="text-white text-xl font-bold">Booking Management</h1>
            <p className="text-white/50 text-xs mt-1">
              Track and manage all appointments
            </p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
            <i className="fa-solid fa-bell text-white text-sm" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-3">
          {[
            { label: "Total", value: filtered.length, cls: "text-white" },
            { label: "Paid", value: paidCount, cls: "text-green-400" },
            { label: "Unpaid", value: unpaidCount, cls: "text-red-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/10 border border-white/15 rounded-xl px-3 py-3"
            >
              <p className="text-white/50 text-xs font-medium mb-1">
                {s.label}
              </p>
              <p className={`text-2xl font-bold ${s.cls}`}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TOOLBAR ── */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-100">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-800">{filtered.length}</span>{" "}
          bookings
        </p>
        <button
          onClick={openDrawer}
          className="relative flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-xl text-sm font-semibold text-indigo-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-200"
        >
          <i className="fa-solid fa-sliders text-sm" />
          Filters
          {hasActiveFilter && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          )}
        </button>
      </div>

      {/* ── BOOKING CARDS ── */}
      <div className="px-4 py-4 pb-10 flex flex-col gap-3.5">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <i className="fa-regular fa-calendar-xmark text-4xl text-gray-300 block mb-3" />
            <p className="text-sm">No bookings match your filters</p>
          </div>
        ) : (
          filtered.map((b, i) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{ animation: `fadeUp 0.35s ease ${i * 0.07}s both` }}
            >
              {/* Card Top */}
              <div className="flex items-start gap-3.5 px-4 pt-4 pb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {getInitials(b.patient)}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">
                    {b.patient}
                  </p>
                  <a
                    href={`tel:${b.phone}`}
                    className="text-md p-2 border w-40 rounded-3xl bg-blue-100 text-gray-900 flex items-center gap-1 mt-0.5"
                  >
                    <i className="fa-solid fa-phone text-green-600 text-md " />
                    {b.phone}
                  </a>
                </div>

                <span
                  className={`shrink-0 mt-0.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                    ${
                      b.payment === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                >
                  {b.payment}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-indigo-50 mx-4" />

              {/* Doctor Row */}
              <div className="flex items-center gap-3 px-4 py-3">
                <img
                  src={b.doctorImg}
                  alt={b.doctor}
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">
                    {b.doctor}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs flex-wrap">
                    <span className="text-purple-600 font-medium">
                      {b.category}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-indigo-500">{b.hospital}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-t border-gray-100">
                <div className="flex items-center gap-3.5">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <i className="fa-regular fa-calendar text-indigo-400 text-[11px]" />
                    {b.displayDate}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <i className="fa-regular fa-clock text-indigo-400 text-[11px]" />
                    {b.time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                    <i className="fa-solid fa-circle-check text-[10px]" />
                    Confirmed
                  </span>
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 text-xs"
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
