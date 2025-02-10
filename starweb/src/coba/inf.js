import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function InfluencerPage() {
  const [offers, setOffers] = useState([]);
  const [approvedCampaigns, setApprovedCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch ongoing offers
    axios.get('http://localhost/star-1/backend/coba/get_offers.php')
      .then(response => {
        const offersArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
        setOffers(offersArray);
      })
      .catch(error => {
        console.error('There was an error fetching the offers!', error);
      });

    // Fetch approved campaigns
    axios.get('http://localhost/star-1/backend/coba/get_approved_campaigns.php')
      .then(response => {
        const campaignsArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
        setApprovedCampaigns(campaignsArray);
      })
      .catch(error => {
        console.error('There was an error fetching the approved campaigns!', error);
      });
  }, []);

  const handleShowModal = (campaign) => {
    setSelectedCampaign(campaign);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCampaign(null);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Penawaran yang Sedang Berlangsung</h2>
          {offers.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nama Kampanye</th>
                  <th>Brand</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer, index) => (
                  <tr key={index}>
                    <td>{offer.name}</td>
                    <td>{offer.brand_name}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleShowModal(offer)}>
                        Lihat Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Tidak ada penawaran yang sedang berlangsung.</p>
          )}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Kampanye yang Disetujui</h2>
          {approvedCampaigns.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nama Kampanye</th>
                  <th>Brand</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {approvedCampaigns.map((campaign, index) => (
                  <tr key={index}>
                    <td>{campaign.name}</td>
                    <td>{campaign.brand_name}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleShowModal(campaign)}>
                        Lihat Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Tidak ada kampanye yang disetujui.</p>
          )}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Kampanye</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCampaign && (
            <>
              <p><strong>Nama Kampanye:</strong> {selectedCampaign.name}</p>
              <p><strong>Brand:</strong> {selectedCampaign.brand_name}</p>
              <p><strong>Brief:</strong> {selectedCampaign.brief}</p>
              <p><strong>Tanggal Mulai:</strong> {selectedCampaign.start_date}</p>
              <p><strong>Tanggal Selesai:</strong> {selectedCampaign.end_date}</p>
              <p><strong>Batas Waktu Proposal:</strong> {selectedCampaign.proposal_deadline}</p>
              <p><strong>Kontak Brand:</strong> {selectedCampaign.brand_contact}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default InfluencerPage;