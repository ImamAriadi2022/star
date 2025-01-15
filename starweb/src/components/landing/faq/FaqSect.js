import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

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

  return (
    <section style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row>
          <Col md={4}>
            <Button
              variant={selectedCategory === 'influencer' ? 'primary' : 'outline-primary'}
              onClick={() => handleCategoryChange('influencer')}
              className="mb-3 w-100"
            >
              Influencer
            </Button>
            <Button
              variant={selectedCategory === 'brand' ? 'primary' : 'outline-primary'}
              onClick={() => handleCategoryChange('brand')}
              className="w-100"
            >
              Brand
            </Button>
          </Col>
          <Col md={8}>
            {faqData[selectedCategory].map((faq, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <div
                  onClick={() => toggleAnswer(index)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div
                    style={{
                      backgroundColor: 'white',
                      padding: '10px',
                      border: '1px solid #007bff',
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