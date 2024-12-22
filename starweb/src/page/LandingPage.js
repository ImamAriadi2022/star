import React from "react";
import NavigationBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Review from "../components/Review";
import StarpowersVIP from "../components/StarpowersVIP";
import AboutStarpowers from "../components/AboutStarpowers";
import WhyStarpowers from "../components/WhyStarpowers";
import DiscountSection from "../components/DiscountSection";

function LandingPage() {
  return (
    <>
        <NavigationBar />
        <HeroSection />
        <Review />
        <StarpowersVIP />
        <AboutStarpowers />
        <WhyStarpowers />
        <DiscountSection />
    </>
  );
}

export default LandingPage;
