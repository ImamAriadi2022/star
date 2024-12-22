import React from "react";
import "../css/HeroSection.css"; // Pastikan Anda membuat file CSS terpisah

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1 className="hero-title">
          Elevate Your Brand<br />Expand Your Influence
        </h1>
        <p className="hero-description">
          Starpowers, menghubungkan merek Anda dengan influencer yang tepat, mempromosikan 
          produk/jasa Anda dan memperluas jangkauan pasar, dari bisnis kecil hingga besar.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-brand">Saya Pemilik Brand</button>
          <button className="btn btn-influencer">Saya Seorang Influencer</button>
        </div>
        <button className="btn btn-promo">PROMOSIKAN IKLAN BRAND KAMU DISINI</button>
      </div>
    </section>
  );
}

export default HeroSection;
