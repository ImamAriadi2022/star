import React, { useState } from 'react';
import { Button, Form, Card, Dropdown, DropdownButton } from 'react-bootstrap';

function Marketplace() {
  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState('');
  const [category, setCategory] = useState('');
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [proposalDeadline, setProposalDeadline] = useState('');
  const [brief, setBrief] = useState('');

  const categories = ['Category 1', 'Category 2', 'Category 3']; // Replace with actual categories

  const influencers = [
    { id: 1, name: 'Influencer 1' },
    { id: 2, name: 'Influencer 2' },
    { id: 3, name: 'Influencer 3' },
  ]; // Replace with actual influencers

  const handleCreateCampaign = () => {
    setStep(2);
  };

  const handleSelectInfluencer = (influencer) => {
    setSelectedInfluencer(influencer);
    setStep(3);
  };

  const handleSaveChanges = () => {
    // Save campaign logic here
    alert('Campaign saved. Waiting for influencer approval.');
    setStep(4);
  };

  const handlePayment = () => {
    // Payment logic here
    alert('Payment successful. Campaign created.');
  };

  return (
    <div style={{ padding: '20px' }}>
      {step === 1 && (
        <>
          <h2>Ongoing Campaigns</h2>
          {/* Display ongoing campaigns here */}
          <Button onClick={handleCreateCampaign}>Create Campaign</Button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Create Campaign</h2>
          <Form>
            <Form.Group controlId="campaignName">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <DropdownButton
                title={category || 'Select Category'}
                onSelect={(e) => setCategory(e)}
              >
                {categories.map((cat, index) => (
                  <Dropdown.Item key={index} eventKey={cat}>
                    {cat}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Button onClick={() => setStep(3)}>Next</Button>
          </Form>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Select Influencer</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {influencers.map((influencer) => (
              <Card key={influencer.id} style={{ width: '18rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>{influencer.name}</Card.Title>
                  <Button onClick={() => handleSelectInfluencer(influencer)}>Select</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2>Upload Brief</h2>
          <Form>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="proposalDeadline">
              <Form.Label>Proposal Deadline</Form.Label>
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
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          </Form>
        </>
      )}

      {step === 5 && (
        <>
          <h2>Payment</h2>
          <p>Please proceed with the payment to complete the campaign creation.</p>
          <Button onClick={handlePayment}>Pay</Button>
        </>
      )}
    </div>
  );
}

export default Marketplace;