import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const faqData = {
  influencer: [
    {
      question: "How do I become an influencer?",
      answer: "To become an influencer, you need to create engaging content and grow your audience on social media platforms.",
    },
    {
      question: "What are the benefits of being an influencer?",
      answer: "As an influencer, you can earn money through brand partnerships, sponsorships, and affiliate marketing.",
    },
  ],
  brand: [
    {
      question: "How do I collaborate with influencers?",
      answer: "To collaborate with influencers, you can reach out to them directly or use influencer marketing platforms.",
    },
    {
      question: "What are the benefits of influencer marketing?",
      answer: "Influencer marketing helps increase brand awareness, reach a targeted audience, and drive sales.",
    },
  ],
};

function FaqSect() {
  const [selectedCategory, setSelectedCategory] = useState('influencer');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveIndex(null); // Reset active index when category changes
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const buttonStyle = (isSelected) => ({
    backgroundColor: isSelected ? '#FFC300' : 'transparent',
    color: isSelected ? '#001D3D' : '#FFC300',
    fontWeight: 'bold',
    borderColor: '#FFC300',
    width: '100%',
    marginBottom: '10px',
  });

  const buttonHoverStyle = {
    backgroundColor: '#FFC300',
    color: '#001D3D',
  };

  return (
    <section style={{ padding: '50px 0', backgroundColor: '#001D3D' }}>
      <Container>
        <Row>
          <Col md={4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Button
                variant="outline-warning"
                onClick={() => handleCategoryChange('influencer')}
                style={buttonStyle(selectedCategory === 'influencer')}
                onMouseEnter={(e) => (e.target.style = buttonHoverStyle)}
                onMouseLeave={(e) => (e.target.style = buttonStyle(selectedCategory === 'influencer'))}
              >
                Influencer
              </Button>
              <Button
                variant="outline-warning"
                onClick={() => handleCategoryChange('brand')}
                style={buttonStyle(selectedCategory === 'brand')}
                onMouseEnter={(e) => (e.target.style = buttonHoverStyle)}
                onMouseLeave={(e) => (e.target.style = buttonStyle(selectedCategory === 'brand'))}
              >
                Brand
              </Button>
            </div>
          </Col>
          <Col md={8}>
            {faqData[selectedCategory].map((faq, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <div
                  onClick={() => toggleAnswer(index)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#FFC300',
                    color: '#001D3D',
                    padding: '10px',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div
                    style={{
                      backgroundColor: 'white',
                      color: '#001D3D',
                      padding: '10px',
                      border: '1px solid #FFC300',
                      borderRadius: '5px',
                      marginTop: '5px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FaqSect;