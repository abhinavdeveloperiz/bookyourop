import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./users_interface/login";
import Home from "./users_interface/home";
import DoctorDetails from "./users_interface/doctor_details";
import FlotingButton from "./users_interface/components/FloatingContact"
import Doctors from "./users_interface/doctors";
import Bookings from "./users_interface/bookings";
import Contact from "./users_interface/contact";
import ScrollToTop from "./users_interface/components/ScrollToTop";
import Footer from "./users_interface/components/Footer";
import Navbar from "./users_interface/components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FlotingButton />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}