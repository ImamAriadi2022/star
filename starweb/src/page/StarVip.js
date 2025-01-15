import React from 'react';
import NavigationBar from '../components/landing/influencer/Navbar';
import HeroVip from '../components/landing/vip/HeroVip';
import VipSect from '../components/landing/vip/VipSect';
import DiscountSection from '../components/landing/DiscountSection';
import Footer from '../components/landing/Footer';

function StarVip() {
  return (
    <div>
      <NavigationBar />
      <HeroVip />
      <VipSect />
      <DiscountSection />
      <Footer />
    </div>
  );
}

export default StarVip;