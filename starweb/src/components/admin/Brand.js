import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Table, Alert, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Brand() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch brands from API
    axios.get('http://localhost/star-1/backend/admin/get_brands.php')
      .then(response => {
        console.log('Data from backend:', response.data); // Log data from backend
        const brandsArray = Object.values(response.data); // Convert object to array
        setBrands(brandsArray);
      })
      .catch(error => {
        console.error('There was an error fetching the brands!', error);
      });
  }, []);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const filteredBrands = brands.filter((brand) => {
    return (
      (filterType === '' || brand.type.toLowerCase().includes(filterType.toLowerCase())) &&
      (searchTerm === '' || brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleShowModal = (brand) => {
    setSelectedBrand(brand);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBrand(null);
    setShowModal(false);
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <h2>Data Brand</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form>
            <Form.Group controlId="searchTerm">
              <Form.Label>Cari berdasarkan Nama Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama brand"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="filterType" className="mt-3">
              <Form.Label>Filter berdasarkan Tipe</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan tipe"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Daftar Brand</h3>
          {filteredBrands.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nama Brand</th>
                  <th>Email</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredBrands.map((brand, index) => (
                  <tr key={index}>
                    <td>{brand.brand_name}</td>
                    <td>{brand.email}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleShowModal(brand)}>
                        Detail Profil
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="warning">Brand tidak ditemukan</Alert>
          )}
        </Col>
      </Row>

      {selectedBrand && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detail Profil Brand</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Email:</strong> {selectedBrand.email}</p>
            <p><strong>Image:</strong> <img src={selectedBrand.image} alt="Brand" style={{ width: '100px' }} /></p>
            <p><strong>Phone:</strong> {selectedBrand.phone}</p>
            <p><strong>PIC Name:</strong> {selectedBrand.pic_name}</p>
            <p><strong>City:</strong> {selectedBrand.city}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Brand;