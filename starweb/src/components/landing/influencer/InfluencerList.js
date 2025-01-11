import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button, Image } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";

function InfluencerList({ filter }) {
  const [show, setShow] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (influencer) => {
    setSelectedInfluencer(influencer);
    setShow(true);
  };

  const influencers = {
    Home: [],
    Entertainment: [
      {
        id: 1,
        name: "@entertainment_influencer1",
        type: "Entertainment",
        platform: "Instagram",
        followers: "5K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 2,
        name: "@entertainment_influencer2",
        type: "Entertainment",
        platform: "Instagram",
        followers: "6K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 3,
        name: "@entertainment_influencer3",
        type: "Entertainment",
        platform: "Instagram",
        followers: "7K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    "Lifestyle and Travel": [
      {
        id: 4,
        name: "@lifestyle_travel_influencer1",
        type: "Lifestyle and Travel",
        platform: "Instagram",
        followers: "10K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 5,
        name: "@lifestyle_travel_influencer2",
        type: "Lifestyle and Travel",
        platform: "Instagram",
        followers: "12K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 6,
        name: "@lifestyle_travel_influencer3",
        type: "Lifestyle and Travel",
        platform: "Instagram",
        followers: "14K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    "Family and Parenting": [
      {
        id: 7,
        name: "@family_parenting_influencer1",
        type: "Family and Parenting",
        platform: "Instagram",
        followers: "8K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 8,
        name: "@family_parenting_influencer2",
        type: "Family and Parenting",
        platform: "Instagram",
        followers: "9K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 9,
        name: "@family_parenting_influencer3",
        type: "Family and Parenting",
        platform: "Instagram",
        followers: "10K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    "Beauty and Fashion": [
      {
        id: 10,
        name: "@beauty_fashion_influencer1",
        type: "Beauty and Fashion",
        platform: "Instagram",
        followers: "12K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 11,
        name: "@beauty_fashion_influencer2",
        type: "Beauty and Fashion",
        platform: "Instagram",
        followers: "14K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 12,
        name: "@beauty_fashion_influencer3",
        type: "Beauty and Fashion",
        platform: "Instagram",
        followers: "16K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    "Health and Support": [
      {
        id: 13,
        name: "@health_support_influencer1",
        type: "Health and Support",
        platform: "Instagram",
        followers: "7K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 14,
        name: "@health_support_influencer2",
        type: "Health and Support",
        platform: "Instagram",
        followers: "8K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 15,
        name: "@health_support_influencer3",
        type: "Health and Support",
        platform: "Instagram",
        followers: "9K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    Technology: [
      {
        id: 16,
        name: "@technology_influencer1",
        type: "Technology",
        platform: "Instagram",
        followers: "15K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 17,
        name: "@technology_influencer2",
        type: "Technology",
        platform: "Instagram",
        followers: "17K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 18,
        name: "@technology_influencer3",
        type: "Technology",
        platform: "Instagram",
        followers: "19K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    "Food and Beverages": [
      {
        id: 19,
        name: "@food_beverages_influencer1",
        type: "Food and Beverages",
        platform: "Instagram",
        followers: "20K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 20,
        name: "@food_beverages_influencer2",
        type: "Food and Beverages",
        platform: "Instagram",
        followers: "22K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 21,
        name: "@food_beverages_influencer3",
        type: "Food and Beverages",
        platform: "Instagram",
        followers: "24K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
    Gaming: [
      {
        id: 22,
        name: "@gaming_influencer1",
        type: "Gaming",
        platform: "Instagram",
        followers: "25K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 23,
        name: "@gaming_influencer2",
        type: "Gaming",
        platform: "Instagram",
        followers: "27K Followers",
        image: "landing/influencer/art1.png",
      },
      {
        id: 24,
        name: "@gaming_influencer3",
        type: "Gaming",
        platform: "Instagram",
        followers: "29K Followers",
        image: "landing/influencer/art1.png",
      },
    ],
  };

  const renderHomeContent = () => (
    <div className="home-content" style={{ textAlign: 'center', height: '50vh', margin: '0 10%' }}>
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className="text-center text-dark mb-4" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>Tentang Influencer Marketing</h2>
        <Row>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>Apa itu Influencer Marketing</h4>
            <p className="text-dark text-start">Influencer Marketing adalah strategi pemasaran yang dilakukan secara daring dengan melibatkan kolaborasi antara influencer dan perusahaan. Tujuan utamanya adalah untuk meningkatkan kesadaran merek dan kredibilitas produk, serta meningkatkan penjualan sesuai dengan target pasar yang ditentukan.</p>
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>Daftar Influencer Marketing</h4>
            <p className="text-dark text-start">Platform Starpowers sebagai penyedia layanan Influencer Marketing di Indonesia menawarkan beragam influencer dari berbagai bidang. Kami mengelompokkan influencer Indonesia ke dalam kategori-kategori seperti entertainment, sports & healthy, lifestyle/travel, technology/gadget, family & parenting, food and beverages, beauty and fashion, serta gaming.</p>
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>KOL Strategy</h4>
            <p className="text-dark text-start">Strategi Key Opinion Leader (KOL) merupakan salah satu pendekatan yang efektif dalam Influencer Marketing. Dengan memanfaatkan pengaruh influencer yang memiliki jumlah pengikut yang besar, diharapkan kesadaran merek dapat tersebar lebih luas.</p>
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>Influencer Indonesia</h4>
            <p className="text-dark text-start">Influencer kami tersebar di seluruh Indonesia, mencakup berbagai daerah dari kota besar seperti Jakarta, Bandung, Yogyakarta, Medan, Makassar, hingga wilayah seperti Bali, Mataram, dan banyak lagi. Dengan Starpowers, Anda dapat memilih influencer yang memiliki jangkauan pengikut sesuai dengan lokasi bisnis Anda.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <section className={`influencer-list ${filter === "Home" ? "home-section" : ""}`} style={{ backgroundColor: filter === "Home" ? '#FFC300' : 'transparent', height: filter === "Home" ? '150vh' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container className="h-100 d-flex flex-column justify-content-center">
        {filter === "Home" ? (
          renderHomeContent()
        ) : (
          <>
            <h2 className="text-center pt-5 text-white mb-5">{filter}</h2>
            <Row className="pb-5">
              {influencers[filter].map((influencer, index) => (
                <Col md={4} key={index}>
                  <Card className="mb-4" style={{ backgroundColor: 'white', borderRadius: '12px' }}>
                    <Card.Img variant="top" src={influencer.image} alt={influencer.name} className="p-3 custom-border-radius" />
                    <Card.Body>
                      <div className="row text-start px-4">
                        <div className="col-12 d-flex align-items-center">
                          <p className="content-type jenis text-light">{influencer.type}</p>
                          <br className="mx-1" />
                          <p className="content-type medsos mx-2 text-dark">{influencer.platform}</p>
                        </div>
                        <div className="col-12">
                          <h5 className="creator-name text-dark">{influencer.name}</h5>
                        </div>
                        <div className="col-12">
                          <p className="platform-name text-dark">{influencer.platform}</p>
                        </div>
                        <div className="col-6">
                          <p className="text-dark">{influencer.followers}</p>
                        </div>
                        <div className="col-6">
                          <Button className="btn btn-book-now" onClick={() => handleShow(influencer)}>
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Influencer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedInfluencer && (
            <Container fluid className="p-4" style={{ backgroundColor: '#0D1B2A', color: '#ffffff' }}>
              <Row>
                <Col md={5} className="text-center">
                  <Image src={selectedInfluencer.image} className="mb-3 custom-image" />
                </Col>
                <Col md={7}>
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

export default InfluencerList;