import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Table, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Brand() {
  const [campaigns, setCampaigns] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [influencers, setInfluencers] = useState([]);
  const [services, setServices] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    type: '',
    influencer_id: '',
    brief: '',
    start_date: '',
    end_date: '',
    proposal_deadline: ''
  });

  useEffect(() => {
    // Fetch campaigns from API
    axios.get('http://localhost/star-1/backend/coba/get_campaigns.php')
      .then(response => {
        const campaignsArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
        setCampaigns(campaignsArray);
      })
      .catch(error => {
        console.error('There was an error fetching the campaigns!', error);
      });

    // Fetch influencers from API
    axios.get('http://localhost/star-1/backend/coba/get_influencers.php')
      .then(response => {
        const influencersArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
        setInfluencers(influencersArray);
      })
      .catch(error => {
        console.error('There was an error fetching the influencers!', error);
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

  const handleCreateCampaign = async () => {
    try {
      const response = await axios.post('http://localhost/star-1/backend/coba/create_campaign.php', newCampaign);
      const newCampaignData = response.data;
      setCampaigns([...campaigns, newCampaignData]);
      setNewCampaign({
        name: '',
        type: '',
        influencer_id: '',
        brief: '',
        start_date: '',
        end_date: '',
        proposal_deadline: ''
      });
    } catch (error) {
      console.error('There was an error creating the campaign!', error);
    }
  };

  const handleSelectInfluencer = async (influencer_id) => {
    try {
      const response = await axios.post('http://localhost/star-1/backend/coba/get_services.php', { influencer_id });
      const servicesArray = Array.isArray(response.data) ? response.data : Object.values(response.data);
      setServices(servicesArray);
    } catch (error) {
      console.error('There was an error fetching the services!', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Riwayat Kampanye</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nama Kampanye</th>
                <th>Tipe</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={index}>
                  <td>{campaign.name}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.status}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleShowModal(campaign)}>
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Buat Kampanye Baru</h2>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nama Kampanye</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama kampanye"
                value={newCampaign.name}
                onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Tipe Influencer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan tipe influencer"
                value={newCampaign.type}
                onChange={(e) => setNewCampaign({ ...newCampaign, type: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="influencer_id">
              <Form.Label>Pilih Influencer</Form.Label>
              <Form.Control
                as="select"
                value={newCampaign.influencer_id}
                onChange={(e) => {
                  setNewCampaign({ ...newCampaign, influencer_id: e.target.value });
                  handleSelectInfluencer(e.target.value);
                }}
              >
                <option value="">Pilih Influencer</option>
                {influencers.map((influencer) => (
                  <option key={influencer.id} value={influencer.id}>
                    {influencer.username}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="brief">
              <Form.Label>Brief</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan brief"
                value={newCampaign.brief}
                onChange={(e) => setNewCampaign({ ...newCampaign, brief: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="start_date">
              <Form.Label>Tanggal Mulai</Form.Label>
              <Form.Control
                type="date"
                value={newCampaign.start_date}
                onChange={(e) => setNewCampaign({ ...newCampaign, start_date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="end_date">
              <Form.Label>Tanggal Selesai</Form.Label>
              <Form.Control
                type="date"
                value={newCampaign.end_date}
                onChange={(e) => setNewCampaign({ ...newCampaign, end_date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="proposal_deadline">
              <Form.Label>Batas Waktu Proposal</Form.Label>
              <Form.Control
                type="date"
                value={newCampaign.proposal_deadline}
                onChange={(e) => setNewCampaign({ ...newCampaign, proposal_deadline: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleCreateCampaign}>
              Buat Kampanye
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Kampanye</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCampaign && (
            <>
              <p>Nama Kampanye: {selectedCampaign.name}</p>
              <p>Tipe: {selectedCampaign.type}</p>
              <p>Brief: {selectedCampaign.brief}</p>
              <p>Tanggal Mulai: {selectedCampaign.start_date}</p>
              <p>Tanggal Selesai: {selectedCampaign.end_date}</p>
              <p>Batas Waktu Proposal: {selectedCampaign.proposal_deadline}</p>
              <h5>Influencer:</h5>
              <p>{selectedCampaign.influencer}</p>
              <h5>Services:</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nama Layanan</th>
                    <th>Harga</th>
                    <th>Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index}>
                      <td>{service.name}</td>
                      <td>{service.price}</td>
                      <td>{service.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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

export default Brand;