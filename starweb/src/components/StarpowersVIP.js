import React from "react";

function StarpowersVIP() {
  return (
    <section className="starpowers-vip py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Starpowers VIP</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <img src="link-to-image" alt="Influencer" className="card-img-top" />
              <div className="card-body">
                <h5>@dvvspyfff_</h5>
                <p>3.6K Followers</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          {/* Tambahkan influencer lainnya */}
        </div>
      </div>
    </section>
  );
}

export default StarpowersVIP;
