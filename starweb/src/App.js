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

// admin
import Login from "./page/admin/Login";
import DashboardAdmin from "./page/admin/Dashboard";

// brand
import StartPage from "./page/brand/Start";
import FormLoginBrand from "./page/brand/Login";
import Sign from "./page/brand/Sign";
import DashboardBrand from "./page/brand/Dashboard";


// debuging
import InfluencerPage from "./coba/inf";
import Admin from "./coba/adminPg";
import Brand from "./coba/brandPg";
import LoginCoba from "./coba/Login";
import SignupCoba from "./coba/Signup";

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

        {/* admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard/*" element={<DashboardAdmin />} />

        {/* brand */}
        <Route path="/brand" element={<StartPage />} />
        <Route path="/brand/formlogin" element={<FormLoginBrand />} />
        <Route path="/brand/signup" element={<Sign />} />
        <Route path="/brand/dashboard/*" element={<DashboardBrand />} />


        {/* debug */}
        <Route path="/inf" element={<InfluencerPage />} />
        <Route path="/admincoba" element={<Admin />} />
        <Route path="/brandcoba" element={<Brand />} />
        <Route path="/logincoba" element={<LoginCoba />} />
        <Route path="/signupcoba" element={<SignupCoba />} />


        {/* Tambahkan route lain di sini */}
      </Routes>
    </Router>
  );
}

export default App;