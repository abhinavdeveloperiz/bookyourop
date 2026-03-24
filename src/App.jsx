import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/user/login";
import Home from "./pages/user/home";
import DoctorDetails from "./pages/user/doctor_details";
import Doctors from "./pages/user/doctors";
import Bookings from "./pages/user/bookings";
import Contact from "./pages/user/contact";
import UserProfile from "./pages/user/userprofile";

import ScrollToTop from "./pages/user/components/ScrollToTop";
import Footer from "./pages/user/components/Footer";
import Navbar from "./pages/user/components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <FlotingButton /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
