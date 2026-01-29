import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import TourPackages from "./pages/TourPackages";

import Places from "./pages/Places";
import Services from "./pages/Services";
import Battalangunduwa from "./pages/places/Battalangunduwa";
import DamroTea from "./pages/places/DamroTea";
import Ambuluwawa from "./pages/places/Ambuluwawa";
import Pasikuda from "./pages/places/Pasikuda";
import NuwaraEliya from "./pages/places/NuwaraEliya";
import AdamPeak from "./pages/places/AdamPeak";
import Kalmunai from "./pages/places/Kalmunai";
import Negombo from "./pages/places/Negombo";
import Tangalle from "./pages/places/Tangalle";
import Pinnawala from "./pages/places/Pinnawala";
import Jaffna from "./pages/places/Jaffna";
import DiyalumaFalls from "./pages/places/DiyalumaFalls";
import Trincomalee from "./pages/places/Trincomalee";
import Ella from "./pages/places/Ella";
import Mirissa from "./pages/places/Mirissa";
import GalleFace from "./pages/places/GalleFace";
import Anuradhapura from "./pages/places/Anuradhapura";
import Hikkaduwa from "./pages/places/Hikkaduwa";
import Yala from "./pages/places/Yala";
import Galle from "./pages/places/Galle";
import Udawalawe from "./pages/places/Udawalawe";
import ArugamBay from "./pages/places/ArugamBay";
import Katharagama from "./pages/places/Katharagama";
import Polonnaruwa from "./pages/places/Polonnaruwa";
import CustomTourPackages from "./pages/CustomTourPackages";
import RentCar from "./pages/RentCar";
import VehicleRecoveryService from "./pages/VehicleRecoveryService";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/custom-tour-packages" element={<CustomTourPackages />} />
        <Route path="/rent-a-car" element={<RentCar />} />
        <Route path="/vehicle-recovery-service" element={<VehicleRecoveryService />} />
        
        <Route path="/places" element={<Places />} />
        <Route path="/services" element={<Services />} />

        {/* places */}
        <Route path="/places/battalangunduwa" element={<Battalangunduwa />} />
        <Route path="/places/damro-tea" element={<DamroTea />} />
        <Route path="/places/ambuluwawa" element={<Ambuluwawa />} />
        <Route path="/places/pasikuda" element={<Pasikuda />} />
        <Route path="/places/nuwara-eliya" element={<NuwaraEliya />} />
        <Route path="/places/adam’s-peak" element={<AdamPeak />} />
        <Route path="/places/kalmunai" element={<Kalmunai />} />
        <Route path="/places/negombo" element={<Negombo />} />
        <Route path="/places/tangalle" element={<Tangalle />} />
        <Route path="/places/pinnawala" element={<Pinnawala />} />
        <Route path="/places/jaffna" element={<Jaffna />} />
        <Route path="/places/diyaluma-falls" element={<DiyalumaFalls />} />
        <Route path="/places/trincomalee" element={<Trincomalee />} />
        <Route path="/places/ella" element={<Ella />} />
        <Route path="/places/mirissa" element={<Mirissa />} />
        <Route path="/places/galleface" element={<GalleFace />} />
        <Route path="/places/anuradhapura" element={<Anuradhapura />} />
        <Route path="/places/hikkaduwa" element={<Hikkaduwa />} />
        <Route path="/places/yala" element={<Yala />} />
        <Route path="/places/galle" element={<Galle />} />
        <Route path="/places/udawalawe" element={<Udawalawe />} />
        <Route path="/places/arugam-bay" element={<ArugamBay />} />
        <Route path="/places/katharagama" element={<Katharagama />} />
        <Route path="/places/polonnaruwa" element={<Polonnaruwa />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
