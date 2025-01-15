import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Article 1",
    excerpt: "This is a short summary of Article 1.",
    image: "/path/to/image1.jpg", // Replace with the actual path to the image
  },
  {
    id: 2,
    title: "Article 2",
    excerpt: "This is a short summary of Article 2.",
    image: "/path/to/image2.jpg", // Replace with the actual path to the image
  },
  {
    id: 3,
    title: "Article 3",
    excerpt: "This is a short summary of Article 3.",
    image: "/path/to/image3.jpg", // Replace with the actual path to the image
  },
];

function Artikel() {
  return (
    <section style={{ padding: '50px 0', background: 'linear-gradient(to bottom, #FFC300, #001D3D)' }}>
      <Container>
        <Row>
          {articles.map((article) => (
            <Col md={4} key={article.id} style={{ marginBottom: '20px' }}>
              <Card style={{ backgroundColor: 'white' }}>
                <Card.Img variant="top" src={article.image} alt={article.title} />
                <Card.Body>
                  <Card.Title style={{ color: '#001D3D' }}>{article.title}</Card.Title>
                  <Card.Text style={{ color: '#001D3D' }}>{article.excerpt}</Card.Text>
                  <Link to={`/lp-news/${article.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Artikel;