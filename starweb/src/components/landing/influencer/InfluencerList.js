import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../css/influencer/InfluencerList.css"; // Pastikan untuk mengimpor file CSS

function InfluencerList({ filter }) {
  // Data influencer berdasarkan filter
  const influencers = {
    Home: [],
    Entertainment: [],
    "Lifestyle and Travel": [],
    "Family and Parenting": [],
    "Beauty and Fashion": [],
    "Health and Support": [],
    Technology: [],
    "Food and Beverages": [],
    Gaming: [],
  };

  const renderHomeContent = () => (
    <div className="home-content">
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className="text-center text-dark mb-4 bg-white-rounded">Tentang Influencer Marketing</h2>
        <Row className="pt-5">
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start bg-white-rounded">Apa itu Influencer Marketing</h4>
            <p className="text-dark text-start">Influencer Marketing adalah strategi pemasaran yang dilakukan secara daring dengan melibatkan kolaborasi antara influencer dan perusahaan. Tujuan utamanya adalah untuk meningkatkan kesadaran merek dan kredibilitas produk, serta meningkatkan penjualan sesuai dengan target pasar yang ditentukan.</p>
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start bg-white-rounded">Daftar Influencer Marketing</h4>
            <p className="text-dark text-start">Platform Starpowers sebagai penyedia layanan Influencer Marketing di Indonesia menawarkan beragam influencer dari berbagai bidang. Kami mengelompokkan influencer Indonesia ke dalam kategori-kategori seperti entertainment, sports & healthy, lifestyle/travel, technology/gadget, family & parenting, food and beverages, beauty and fashion, serta gaming.</p>
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start bg-white-rounded">KOL Strategy</h4>
            <p className="text-dark text-start">Strategi Key Opinion Leader (KOL) merupakan salah satu pendekatan yang efektif dalam Influencer Marketing. Dengan memanfaatkan pengaruh influencer yang memiliki jumlah pengikut yang besar, diharapkan kesadaran merek dapat tersebar lebih luas.</p>
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="text-dark text-start bg-white-rounded">Influencer Indonesia</h4>
            <p className="text-dark text-start">Influencer kami tersebar di seluruh Indonesia, mencakup berbagai daerah dari kota besar seperti Jakarta, Bandung, Yogyakarta, Medan, Makassar, hingga wilayah seperti Bali, Mataram, dan banyak lagi. Dengan Starpowers, Anda dapat memilih influencer yang memiliki jangkauan pengikut sesuai dengan lokasi bisnis Anda.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <section className={`influencer-list ${filter === "Home" ? "home-section" : ""}`}>
      <Container>
        {filter === "Home" ? (
          renderHomeContent()
        ) : (
          <>
            <h2 className="text-center text-white mb-5">{filter}</h2>
            <Row>
              {influencers[filter].map((influencer, index) => (
                <Col md={4} key={index}>
                  <Card>
                    <Card.Img variant="top" src={influencer.image} alt={influencer.name} />
                    <Card.Body>
                      <Card.Title>{influencer.name}</Card.Title>
                      <Card.Text>{influencer.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </section>
  );
}

export default InfluencerList;