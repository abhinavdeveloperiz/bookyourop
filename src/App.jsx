import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// USER PAGES
import Login from "./pages/user/login";
import Home from "./pages/user/home";
import DoctorDetails from "./pages/user/doctor_details";
import Doctors from "./pages/user/doctors";
import Bookings from "./pages/user/bookings";
import Contact from "./pages/user/contact";
import UserProfile from "./pages/user/userprofile";

import Navbar from "./pages/user/components/Navbar";
import Footer from "./pages/user/components/Footer";
import ScrollToTop from "./pages/user/components/ScrollToTop";

// DOCTOR COMPONENTS
import DoctorNavbar from "./pages/doctor/components/Navbar";
import DoctorFooter from "./pages/doctor/components/Footer";

import AddSlot from "./pages/doctor/add_slot";
import Slots from "./pages/doctor/slots";
import DoctorBookings from "./pages/doctor/bookings";
import DoctorProfile from "./pages/doctor/profile";

function Layout() {
  const location = useLocation();

  // ✅ FIXED CONDITION (IMPORTANT)
  const isDoctorRoute =
    location.pathname === "/doctor" || location.pathname.startsWith("/doctor/");

  return (
    <>
      <ScrollToTop />

      {/* NAVBAR */}
      {isDoctorRoute ? <DoctorNavbar /> : <Navbar />}

      {/* ROUTES */}
      <Routes>
        {/* ================= USER ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* ================= DOCTOR ROUTES ================= */}
        <Route path="/doctor/appointments" element={<DoctorBookings />} />
        <Route path="/doctor/add-slot" element={<AddSlot />} />
        <Route path="/doctor/slots" element={<Slots />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
      </Routes>

      {/* FOOTER */}
      {isDoctorRoute ? <DoctorFooter /> : <Footer />}
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
