import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Campain() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaigns = [
    { id: 1, name: 'Brand A', title: 'Proyek A', description: 'Deskripsi Proyek A', deadline: '2023-12-31', posts: 3, brief: 'briefA.pdf', price: 'Rp 70.000' },
    { id: 2, name: 'Brand B', title: 'Proyek B', description: 'Deskripsi Proyek B', deadline: '2024-01-15', posts: 5, brief: 'briefB.pdf', price: 'Rp 129.000' },
  ];

  const containerStyle = {
    padding: '50px 0',
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
    marginLeft: '200px',
  };

  const downloadButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '10px 0',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 className="text-center mb-4">Proyek & Penawaran</h2>
        {campaigns.length === 0 ? (
          <p className="text-center">Tidak ada proyek yang tersedia.</p>
        ) : (
          campaigns.map((campaign) => (
            <Card key={campaign.id} className="mb-3">
              <Card.Body>
                <Card.Title>{campaign.name}</Card.Title>
                <Card.Text>{campaign.title}</Card.Text>
                {selectedCampaign === campaign.id ? (
                  <>
                    <Row>
                      <Col><strong>Tenggat Waktu:</strong></Col>
                      <Col>{campaign.deadline}</Col>
                    </Row>
                    <Row>
                      <Col><strong>Jumlah Post:</strong></Col>
                      <Col>{campaign.posts}</Col>
                    </Row>
                    <Row>
                      <Col><strong>Deskripsi:</strong></Col>
                      <Col>{campaign.description}</Col>
                    </Row>
                    <Row>
                      <Col><strong>Harga:</strong></Col>
                      <Col>{campaign.price}</Col>
                    </Row>
                    <Row>
                      <Col><strong>Brief:</strong></Col>
                      <Col><a href={campaign.brief} download style={downloadButtonStyle}>Unduh Brief</a></Col>
                    </Row>
                    <div style={buttonGroupStyle}>
                      <Button variant="success">Terima</Button>
                      <Button variant="danger">Tolak</Button>
                    </div>
                  </>
                ) : (
                  <Button onClick={() => setSelectedCampaign(campaign.id)}>Lihat Detail</Button>
                )}
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default Campain;