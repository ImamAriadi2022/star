import React from "react";
import "../css/HeroSection.css"; // Pastikan Anda membuat file CSS terpisah

function HeroSection() {
  return (
    <section className="hero-section text-start">
      <div className="container text-start hero">
        <h1 className="hero-title">
          Elevate Your Brand<br />Expand Your Influence
        </h1>
        <p className="hero-description text-start">
          Starpowers, menghubungkan merek Anda dengan influencer yang tepat, mempromosikan 
          produk/jasa Anda dan memperluas jangkauan pasar, dari bisnis kecil hingga besar.
        </p>
        <div className="hero-search d-flex justify-content-between">
          <div className="hero-buttons d-flex">
            <button className="btn btn-brand">Saya Pemilik Brand</button>
            <button className="btn btn-influencer">Saya Seorang Influencer</button>
          </div>
          <button className="btn btn-promo">PROMOSIKAN IKLAN BRAND KAMU DISINI</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;