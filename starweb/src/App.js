import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Influencer from "./page/Influencer";
import StarVip from "./page/StarVip";
import Faq from "./page/Faq";
import NewsPage from "./page/news";
import DetailArtikel from "./page/detailArtikel";

// import influencer
import LoginPage from "./page/influencer/LoginPage";
import SignUpPage from "./page/influencer/SignUpPage";
import Service from "./page/influencer/Service";
import FormLogin from "./page/influencer/FormLogin";
import Dashboard from "./page/influencer/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/lp-influencer" element={<Influencer />} />
        <Route path="/lp-vip" element={<StarVip />} />
        <Route path="/lp-faq" element={<Faq />} />
        <Route path="/lp-news" element={<NewsPage />} />
        <Route path="/lp-news/:id" element={<DetailArtikel />} />

        {/* Influencer Page Route */}
        <Route path="/influencer/login" element={<LoginPage />} />
        <Route path="/influencer/signup" element={<SignUpPage />} />
        <Route path="/influencer/service" element={<Service />} />
        <Route path="/influencer/formlogin" element={<FormLogin />} />
        <Route path="/influencer/dashboard/*" element={<Dashboard />} />

        {/* Tambahkan route lain di sini */}
      </Routes>
    </Router>
  );
}

export default App;