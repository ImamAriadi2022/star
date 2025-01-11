import React from "react";
import NavigationBar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import Review from "../components/landing/Review";
import StarpowersVIP from "../components/landing/StarpowersVIP";
import AboutStarpowers from "../components/landing/AboutStarpowers";
import WhyStarpowers from "../components/landing/WhyStarpowers";
import DiscountSection from "../components/landing/DiscountSection";

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
