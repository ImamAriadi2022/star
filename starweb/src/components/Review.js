import React from "react";
import "../css/Review.css"; // Pastikan Anda membuat file CSS terpisah

function Review() {
  return (
    <section className="review-section">
      <div className="review-container">
        <div className="review-item">
          <div className="review-icon">
            <img src="/path-to-influencer-icon.svg" alt="Influencer Icon" />
          </div>
          <h2 className="review-number">10.000 +</h2>
          <p className="review-label">Influencer</p>
        </div>
        <div className="review-item">
          <div className="review-icon">
            <img src="/path-to-brands-icon.svg" alt="Brands Icon" />
          </div>
          <h2 className="review-number">5.000 +</h2>
          <p className="review-label">Brands</p>
        </div>
      </div>
    </section>
  );
}

export default Review;
