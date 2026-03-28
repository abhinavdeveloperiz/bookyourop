import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// scroll to top
import ScrollToTop from "./pages/scrolltotop/ScrollToTop";

//USER
import Login from "./pages/user/login";
import Home from "./pages/user/home";
import DoctorDetails from "./pages/user/doctor_details";
import Doctors from "./pages/user/doctors";
import Bookings from "./pages/user/bookings";
import Contact from "./pages/user/contact";
import UserProfile from "./pages/user/userprofile";

import Navbar from "./pages/user/components/Navbar";
import Footer from "./pages/user/components/Footer";

// DOCTOR
import DoctorNavbar from "./pages/doctor/components/Navbar";
import DoctorFooter from "./pages/doctor/components/Footer";

import AddSlot from "./pages/doctor/add_slot";
import Slots from "./pages/doctor/slots";
import DoctorBookings from "./pages/doctor/bookings";
import DoctorProfile from "./pages/doctor/profile";

// ADMIN
import Dashboard from "./pages/admin/dashboard";
import Users from "./pages/admin/users";
import DoctorsAdmin from "./pages/admin/doctors";
import Hospitals from "./pages/admin/hospitals";
import AdminBookings from "./pages/admin/bookings";

import AddDoctor from "./pages/admin/add_doctor";
import AddHospital from "./pages/admin/add_hospital";

import AdminNavbar from "./pages/admin/components/Navbar";

function Layout() {
  const location = useLocation();

  // ================= ROUTE CHECK =================
  const isDoctorRoute =
    location.pathname === "/doctor" || location.pathname.startsWith("/doctor/");

  const isAdminRoute =
    location.pathname === "/admin" || location.pathname.startsWith("/admin/");

  return (
    <>
      <ScrollToTop />

      {isAdminRoute ? (
        <AdminNavbar />
      ) : isDoctorRoute ? (
        <DoctorNavbar />
      ) : (
        <Navbar />
      )}

      {/* ROUTES  */}
      <Routes>
        {/* USER */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* DOCTOR  */}
        <Route path="/doctor/appointments" element={<DoctorBookings />} />
        <Route path="/doctor/add-slot" element={<AddSlot />} />
        <Route path="/doctor/slots" element={<Slots />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="/admin/doctors" element={<DoctorsAdmin />} />
        <Route path="/admin/add/doctor" element={<AddDoctor/>}></Route>

        <Route path="/admin/hospitals" element={<Hospitals />} />
        <Route path="/admin/add/hospital" element={<AddHospital/>}></Route>

        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>

      {!isAdminRoute && (isDoctorRoute ? <DoctorFooter /> : <Footer />)}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
