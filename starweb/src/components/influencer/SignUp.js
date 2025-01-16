import React, { useState } from 'react';
import { Form, Button, InputGroup, Modal } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SignUp() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    birthDate: '',
    gender: '',
    influencerCategory: '',
    phoneNumber: '',
    referralCode: '',
    ktpNumber: '',
    npwpNumber: '',
    instagramLink: '',
    followersCount: '',
  });
  const [isValidated, setIsValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleValidationChange = (e) => {
    setIsValidated(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle final form submission
      console.log('Form submitted:', formData);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div style={{ padding: '50px 0', backgroundColor: '#001D3D', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '500px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100px', backgroundColor: '#FFC300', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="/landing/navbar/logo.png" alt="Logo" style={{ width: '80px', height: '40px' }} />
          </div>
          <h2 className="text-center mb-4" style={{ marginTop: '60px' }}>Daftar</h2>
          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Kata Sandi</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="input-group-append">
                      <Button variant="outline-secondary" onClick={handleTogglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </div>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="formValidation">
                  <Form.Check
                    type="checkbox"
                    label="Saya mengonfirmasi bahwa data yang dimasukkan sudah benar"
                    checked={isValidated}
                    onChange={handleValidationChange}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!isValidated}
                  style={{ backgroundColor: '#FFC300', color: 'blue' }}
                >
                  Daftar
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <Form.Group controlId="formFullName">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBirthDate">
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formGender">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                    <option value="other">Lainnya</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formInfluencerCategory">
                  <Form.Label>Kategori Influencer</Form.Label>
                  <Form.Control
                    as="select"
                    name="influencerCategory"
                    value={formData.influencerCategory}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Kategori Influencer</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Lifestyle and Travel">Lifestyle and Travel</option>
                    <option value="Family and Parenting">Family and Parenting</option>
                    <option value="Beauty and Fashion">Beauty and Fashion</option>
                    <option value="Health and Support">Health and Support</option>
                    <option value="Technology">Technology</option>
                    <option value="Food and Beverages">Food and Beverages</option>
                    <option value="Gaming">Gaming</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formReferralCode">
                  <Form.Label>Kode Referal (Opsional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formKtpNumber">
                  <Form.Label>Nomor KTP</Form.Label>
                  <Form.Control
                    type="text"
                    name="ktpNumber"
                    value={formData.ktpNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formNpwpNumber">
                  <Form.Label>Nomor NPWP</Form.Label>
                  <Form.Control
                    type="text"
                    name="npwpNumber"
                    value={formData.npwpNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formInstagramLink">
                  <Form.Label>Link Instagram</Form.Label>
                  <Form.Control
                    type="text"
                    name="instagramLink"
                    value={formData.instagramLink}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formFollowersCount">
                  <Form.Label>Jumlah Followers</Form.Label>
                  <Form.Control
                    type="number"
                    name="followersCount"
                    value={formData.followersCount}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ backgroundColor: '#FFC300', color: 'blue' }}
                >
                  Daftar
                </Button>
              </>
            )}
          </Form>
          <Link to="/influencer/login" className="btn btn-link mt-3">
            <FaArrowLeft /> Kembali
          </Link>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registrasi Berhasil</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <FaCheckCircle size={50} color="green" />
          <p className="mt-3">Anda telah berhasil mendaftar sebagai influencer!</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/influencer/service">
            <Button variant="primary" onClick={handleCloseModal}>
              OK
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;