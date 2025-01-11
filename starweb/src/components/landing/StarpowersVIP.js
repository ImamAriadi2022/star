import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import "../css/StarpowersVIP.css";

const influencers = [
  {
    id: 1,
    name: "@dvvspyfff_",
    type: "Beauty",
    platform: "Instagram",
    followers: "3.6K Followers",
    image: "landing/influencer/art1.png",
  },
  {
    id: 2,
    name: "@another_influencer",
    type: "Fashion",
    platform: "Instagram",
    followers: "5.2K Followers",
    image: "landing/influencer/art1.png",
  },
  {
    id: 3,
    name: "@third_influencer",
    type: "Travel",
    platform: "Instagram",
    followers: "10K Followers",
    image: "landing/influencer/art1.png",
  },
];

function StarpowersVIP() {
  const [show, setShow] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (influencer) => {
    setSelectedInfluencer(influencer);
    setShow(true);
  };

  return (
    <section className="starpowers-vip py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Starpowers VIP</h2>
        <div className="row text-center pt-5">
          {influencers.map((influencer) => (
            <div className="col-md-4" key={influencer.id}>
              <div className="card">
                <img
                  src={influencer.image}
                  alt="Influencer"
                  className="card-img-top p-3 custom-border-radius"
                />
                <div className="card-body">
                  <div className="row text-start px-4">
                    <div className="col-12 d-flex align-items-center">
                      <p className="content-type jenis">{influencer.type}</p>
                      <br className="mx-1" />
                      <p className="content-type medsos">{influencer.platform}</p>
                    </div>
                    <div className="col-12">
                      <h5 className="creator-name">{influencer.name}</h5>
                    </div>
                    <div className="col-12">
                      <p className="platform-name">{influencer.platform}</p>
                    </div>
                    <div className="col-6">
                      <p>{influencer.followers}</p>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-book-now"
                        onClick={() => handleShow(influencer)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Influencer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedInfluencer && (
            <Container fluid className="p-4" style={{ backgroundColor: '#0D1B2A', color: '#ffffff' }}>
              <Row>
                <Col md={4} className="text-center">
                  <Image
                    src={selectedInfluencer.image}
                    className="mb-3 custom-image"
                  />
                </Col>
                <Col md={8}>
                  <Row className="mb-3">
                    <Col>
                      <FaInstagram style={{ width: '30px', height: '30px' }} />
                      <h5 className="d-inline-block ms-2">{selectedInfluencer.name}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <p>Jenis Kelamin: Pria</p>
                      <p>Asal Kota: Bandung</p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={3}>
                      <h6>Followers</h6>
                      <p className="text-warning">{selectedInfluencer.followers}</p>
                    </Col>
                    <Col md={3}>
                      <h6>Likes</h6>
                      <p className="text-warning">1000</p>
                    </Col>
                    <Col md={3}>
                      <h6>Comments</h6>
                      <p className="text-warning">100</p>
                    </Col>
                    <Col md={3}>
                      <h6>Engagement</h6>
                      <p className="text-warning">10%</p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <h6>Service</h6>
                      <p>Instagram Story</p>
                    </Col>
                    <Col>
                      <h6>Kategori</h6>
                      <p>Entertainment</p>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <h5 className="text-warning">HIGHLY RECOMMENDED</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default StarpowersVIP;