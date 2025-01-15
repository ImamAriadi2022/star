// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Influencer from "./page/Influencer";
import StarVip from "./page/StarVip";
import Faq from "./page/Faq";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/lp-influencer" element={<Influencer />} />
        <Route path="/lp-vip" element={<StarVip />} />
        <Route path="/lp-faq" element={<Faq />} />





        {/* Tambahkan route lain di sini */}
      </Routes>
    </Router>
  );
}

export default App;
