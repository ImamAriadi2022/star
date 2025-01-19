import React, { useState, useEffect } from 'react';
import { Button, Form, Card, Dropdown, DropdownButton, Row, Col, Spinner, Modal, Container, Image } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';

function Marketplace() {
  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState('');
  const [category, setCategory] = useState('');
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [proposalDeadline, setProposalDeadline] = useState('');
  const [brief, setBrief] = useState('');
  const [showOngoing, setShowOngoing] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const categories = ['Kategori 1', 'Kategori 2', 'Kategori 3']; // Ganti dengan kategori yang sebenarnya

  const influencers = [
    { id: 1, name: 'Influencer 1', price: 'Rp 1.000.000', accountNumber: '1234567890', followers: '5K Followers', image: 'landing/influencer/art1.png', type: 'Entertainment', platform: 'Instagram' },
    { id: 2, name: 'Influencer 2', price: 'Rp 2.000.000', accountNumber: '0987654321', followers: '6K Followers', image: 'landing/influencer/art1.png', type: 'Entertainment', platform: 'Instagram' },
    { id: 3, name: 'Influencer 3', price: 'Rp 3.000.000', accountNumber: '1122334455', followers: '7K Followers', image: 'landing/influencer/art1.png', type: 'Entertainment', platform: 'Instagram' },
  ]; // Ganti dengan influencer yang sebenarnya

  const ongoingCampaigns = [
    { id: 1, name: 'Kampanye 1', status: 'Berlangsung' },
    { id: 2, name: 'Kampanye 2', status: 'Berlangsung' },
  ]; // Ganti dengan kampanye yang sedang berlangsung

  const campaignHistory = [
    { id: 1, name: 'Kampanye 3', status: 'Selesai' },
    { id: 2, name: 'Kampanye 4', status: 'Selesai' },
  ]; // Ganti dengan riwayat kampanye

  const handleCreateCampaign = () => {
    setStep(2);
  };

  const handleSelectInfluencer = (influencer) => {
    setSelectedInfluencer(influencer);
  };

  const handleSaveChanges = () => {
    setStep(5); // Set step to 5 to show the waiting page
  };

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    alert('Pembayaran berhasil. Kampanye dibuat.');
    // Logika tambahan setelah pembayaran berhasil
  };

  // Simulasi persetujuan influencer setelah 3 detik
  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        setStep(6); // Set step to 6 to show the payment page
      }, 3000); // 3 detik

      return () => clearTimeout(timer);
    }
  }, [step]);

  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const contentStyle = {
    backgroundColor: '#FFC300',
    color: '#001D3D',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1000px',
    position: 'relative',
    marginTop: '60px',
    marginLeft: '15px', // Menyesuaikan margin untuk memindahkan konten ke kiri
  };

  const adminAccountNumber = '9876543210'; // Nomor rekening yang diatur oleh admin

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {step === 1 && (
          <>
            <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Kampanye</h2>
            <Row>
              <Col>
                <h3 style={{ cursor: 'pointer' }} onClick={() => setShowOngoing(true)}>Kampanye Berlangsung</h3>
                {showOngoing && ongoingCampaigns.map((campaign) => (
                  <Card key={campaign.id} style={{ margin: '10px 0' }}>
                    <Card.Body>
                      <Card.Title>{campaign.name}</Card.Title>
                      <Card.Text>Status: {campaign.status}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
              <Col>
                <h3 style={{ cursor: 'pointer' }} onClick={() => setShowOngoing(false)}>Riwayat Kampanye</h3>
                {!showOngoing && campaignHistory.map((campaign) => (
                  <Card key={campaign.id} style={{ margin: '10px 0' }}>
                    <Card.Body>
                      <Card.Title>{campaign.name}</Card.Title>
                      <Card.Text>Status: {campaign.status}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
            <Button onClick={handleCreateCampaign}>Buat Kampanye</Button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Buat Kampanye</h2>
            <Form>
              <Form.Group controlId="campaignName">
                <Form.Label>Nama Kampanye</Form.Label>
                <Form.Control
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Kategori</Form.Label>
                <DropdownButton
                  title={category || 'Pilih Kategori'}
                  onSelect={(e) => setCategory(e)}
                >
                  {categories.map((cat, index) => (
                    <Dropdown.Item key={index} eventKey={cat}>
                      {cat}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
              <Button onClick={() => setStep(3)}>Lanjut</Button>
            </Form>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Pilih Influencer</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {influencers.map((influencer) => (
                <Card key={influencer.id} className="mb-4" style={{ backgroundColor: 'white', borderRadius: '12px', width: '18rem', margin: '10px' }}>
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
                        <Button className="btn btn-book-now" onClick={() => handleSelectInfluencer(influencer)}>
                          Pilih
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
            {selectedInfluencer && (
              <Button onClick={() => setStep(4)}>Lanjut</Button>
            )}
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Unggah Brief</h2>
            <Form>
              <Form.Group controlId="startDate">
                <Form.Label>Tanggal Mulai</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label>Tanggal Selesai</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="proposalDeadline">
                <Form.Label>Batas Waktu Proposal</Form.Label>
                <Form.Control
                  type="date"
                  value={proposalDeadline}
                  onChange={(e) => setProposalDeadline(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="brief">
                <Form.Label>Brief</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                />
              </Form.Group>
              <Button onClick={handleSaveChanges}>Simpan Perubahan</Button>
            </Form>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Menunggu Persetujuan Influencer</h2>
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              <p>Menunggu persetujuan dari influencer...</p>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Pembayaran</h2>
            <p>Silakan lanjutkan pembayaran untuk menyelesaikan pembuatan kampanye.</p>
            <Button onClick={handlePayment}>Bayar</Button>
          </>
        )}

        <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Gateway Pembayaran</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="brandName">
                <Form.Label>Nama Brand</Form.Label>
                <Form.Control type="text" value="Nama Brand" readOnly />
              </Form.Group>
              <Form.Group controlId="influencerName">
                <Form.Label>Nama Influencer</Form.Label>
                <Form.Control type="text" value={selectedInfluencer?.name} readOnly />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" value={selectedInfluencer?.price} readOnly />
              </Form.Group>
              <Form.Group controlId="accountNumber">
                <Form.Label>Nomor Rekening</Form.Label>
                <Form.Control type="text" value={adminAccountNumber} readOnly />
              </Form.Group>
              <Button variant="success" onClick={handlePaymentSuccess}>Bayar Sekarang</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Marketplace;