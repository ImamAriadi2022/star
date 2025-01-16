import React, { useState } from 'react';
import { Form, Button, Modal, Alert, ListGroup } from 'react-bootstrap';
import SetService from '../../components/influencer/SetService'; // Import SetService component

function AkunInf() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [showEditSuccess, setShowEditSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [editServiceId, setEditServiceId] = useState(null);

  const [profileData, setProfileData] = useState({
    name: '@entertainment_influencer1',
    type: 'Entertainment',
    platform: 'Instagram',
    followers: '5K Followers',
    image: 'landing/influencer/art1.png',
  });

  const [services, setServices] = useState([
    { id: 1, name: 'Service A', description: 'Deskripsi Service A', price: 'Rp 50.000', duration: '1 Jam' },
    { id: 2, name: 'Service B', description: 'Deskripsi Service B', price: 'Rp 100.000', duration: '2 Jam' },
  ]);

  const [newService, setNewService] = useState({ name: '', description: '', price: '', duration: '' });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleServiceChange = (e, id) => {
    const { name, value } = e.target;
    setServices(services.map(service => service.id === id ? { ...service, [name]: value } : service));
  };

  const handleNewServiceChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const addService = () => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
    setNewService({ name: '', description: '', price: '', duration: '' });
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
    setShowDeleteSuccess(true);
  };

  const handleLogout = () => {
    setShowLogoutAlert(false);
    window.location.href = '/';
  };

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

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '10px 0',
    backgroundColor: '#001D3D',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Edit Akun</h2>
        <div style={buttonContainerStyle}>
          <Button style={buttonStyle} onClick={() => setShowProfileModal(true)}>Edit Profile</Button>
          <Button style={buttonStyle} onClick={() => setShowPasswordModal(true)}>Ubah Password</Button>
          <Button style={buttonStyle} onClick={() => setShowServiceModal(true)}>Edit Service</Button>
          <Button style={buttonStyle} onClick={() => setShowLogoutAlert(true)}>Logout</Button>
        </div>

        {/* Profile Modal */}
        <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formProfileName">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" name="name" value={profileData.name} onChange={handleProfileChange} />
              </Form.Group>
              <Form.Group controlId="formProfileType">
                <Form.Label>Jenis</Form.Label>
                <Form.Control type="text" name="type" value={profileData.type} onChange={handleProfileChange} />
              </Form.Group>
              <Form.Group controlId="formProfilePlatform">
                <Form.Label>Platform</Form.Label>
                <Form.Control type="text" name="platform" value={profileData.platform} onChange={handleProfileChange} />
              </Form.Group>
              <Form.Group controlId="formProfileFollowers">
                <Form.Label>Followers</Form.Label>
                <Form.Control type="text" name="followers" value={profileData.followers} onChange={handleProfileChange} />
              </Form.Group>
              <Form.Group controlId="formProfileImage">
                <Form.Label>Gambar</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
                {profileData.image && <img src={profileData.image} alt="Profile" style={{ width: '100px', marginTop: '10px' }} />}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowProfileModal(false)}>Tutup</Button>
            <Button variant="primary" onClick={() => setShowProfileModal(false)}>Simpan</Button>
          </Modal.Footer>
        </Modal>

        {/* Password Modal */}
        <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Ubah Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formOldPassword">
                <Form.Label>Password Lama</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password Lama" />
              </Form.Group>
              <Form.Group controlId="formNewPassword">
                <Form.Label>Password Baru</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password Baru" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>Tutup</Button>
            <Button variant="primary" onClick={() => setShowPasswordModal(false)}>Simpan</Button>
          </Modal.Footer>
        </Modal>

        {/* Service Modal */}
        <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {services.map(service => (
                <ListGroup.Item key={service.id}>
                  {editServiceId === service.id ? (
                    <Form>
                      <Form.Group controlId={`formServiceName${service.id}`}>
                        <Form.Label>Nama Service</Form.Label>
                        <Form.Control type="text" name="name" value={service.name} onChange={(e) => handleServiceChange(e, service.id)} />
                      </Form.Group>
                      <Form.Group controlId={`formServiceDescription${service.id}`}>
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control type="text" name="description" value={service.description} onChange={(e) => handleServiceChange(e, service.id)} />
                      </Form.Group>
                      <Form.Group controlId={`formServicePrice${service.id}`}>
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="text" name="price" value={service.price} onChange={(e) => handleServiceChange(e, service.id)} />
                      </Form.Group>
                      <Form.Group controlId={`formServiceDuration${service.id}`}>
                        <Form.Label>Durasi</Form.Label>
                        <Form.Control type="text" name="duration" value={service.duration} onChange={(e) => handleServiceChange(e, service.id)} />
                      </Form.Group>
                      <Button variant="primary" onClick={() => { setEditServiceId(null); setShowEditSuccess(true); }}>Simpan</Button>
                    </Form>
                  ) : (
                    <>
                      <div><strong>Nama Service:</strong> {service.name}</div>
                      <div><strong>Deskripsi:</strong> {service.description}</div>
                      <div><strong>Harga:</strong> {service.price}</div>
                      <div><strong>Durasi:</strong> {service.duration}</div>
                      <Button variant="warning" onClick={() => setEditServiceId(service.id)}>Edit</Button>
                      <Button variant="danger" onClick={() => deleteService(service.id)}>Hapus</Button>
                    </>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h5 className="mt-4">Tambah Service Baru</h5>
            <Form>
              <Form.Group controlId="formNewServiceName">
                <Form.Label>Nama Service</Form.Label>
                <Form.Control type="text" name="name" value={newService.name} onChange={handleNewServiceChange} />
              </Form.Group>
              <Form.Group controlId="formNewServiceDescription">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control type="text" name="description" value={newService.description} onChange={handleNewServiceChange} />
              </Form.Group>
              <Form.Group controlId="formNewServicePrice">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" name="price" value={newService.price} onChange={handleNewServiceChange} />
              </Form.Group>
              <Form.Group controlId="formNewServiceDuration">
                <Form.Label>Durasi</Form.Label>
                <Form.Control type="text" name="duration" value={newService.duration} onChange={handleNewServiceChange} />
              </Form.Group>
              <Button variant="primary" onClick={addService}>Tambah Service</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowServiceModal(false)}>Tutup</Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Success Modal */}
        <Modal show={showEditSuccess} onHide={() => setShowEditSuccess(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Berhasil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Service berhasil diedit.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowEditSuccess(false)}>Tutup</Button>
          </Modal.Footer>
        </Modal>

        {/* Delete Success Modal */}
        <Modal show={showDeleteSuccess} onHide={() => setShowDeleteSuccess(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Hapus Berhasil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Service berhasil dihapus.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowDeleteSuccess(false)}>Tutup</Button>
          </Modal.Footer>
        </Modal>

        {/* Logout Alert */}
        <Alert show={showLogoutAlert} variant="danger">
          <Alert.Heading>Apakah Anda yakin ingin keluar?</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowLogoutAlert(false)} variant="outline-secondary" className="mr-2">
              Batal
            </Button>
            <Button onClick={handleLogout} variant="danger">
              Keluar
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
}

export default AkunInf;