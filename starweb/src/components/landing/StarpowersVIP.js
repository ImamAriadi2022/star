import React from "react";
import "../css/StarpowersVIP.css"

function StarpowersVIP() {
  return (
    <section className="starpowers-vip py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Starpowers VIP</h2>
        <button className="btn btn-influence mt-4">Influence</button>
        <div className="row text-center pt-5">
          <div className="col-md-4">
            <div className="card">
              <img src="landing/influencer/art1.png" alt="Influencer" className="card-img-top p-3 custom-border-radius" />
              <div className="card-body">
                <div className="row text-start px-4">
                  <div className="col-12 d-flex align-items-center">
                    <p className="content-type jenis">Beuty</p>
                    <br className="mx-1" />
                    <p className="content-type medsos">Instagram</p>
                  </div>
                  <div className="col-12">
                    <h5 className="creator-name">@dvvspyfff_</h5>
                  </div>
                  <div className="col-12">
                    <p className="platform-name">Instagram</p>
                  </div>
                  <div className="col-6">
                    <p>3.6K Followers</p>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-book-now">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="landing/influencer/art1.png" alt="Influencer" className="card-img-top p-3 custom-border-radius" />
              <div className="card-body">
                <div className="row text-start px-4">
                  <div className="col-12 d-flex align-items-center">
                    <p className="content-type jenis">Beuty</p>
                    <br className="mx-1" />
                    <p className="content-type medsos">Instagram</p>
                  </div>
                  <div className="col-12">
                    <h5 className="creator-name">@dvvspyfff_</h5>
                  </div>
                  <div className="col-12">
                    <p className="platform-name">Instagram</p>
                  </div>
                  <div className="col-6">
                    <p>3.6K Followers</p>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-book-now">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="landing/influencer/art1.png" alt="Influencer" className="card-img-top p-3 custom-border-radius" />
              <div className="card-body">
                <div className="row text-start px-4">
                  <div className="col-12 d-flex align-items-center">
                    <p className="content-type jenis">Beuty</p>
                    <br className="mx-1" />
                    <p className="content-type medsos">Instagram</p>
                  </div>
                  <div className="col-12">
                    <h5 className="creator-name">@dvvspyfff_</h5>
                  </div>
                  <div className="col-12">
                    <p className="platform-name">Instagram</p>
                  </div>
                  <div className="col-6">
                    <p>3.6K Followers</p>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-book-now">Book Now</button>
                  </div>
                </div>
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
