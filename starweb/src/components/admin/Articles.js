import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';

const initialArticles = [
  {
    id: 1,
    title: "Article 1",
    excerpt: "This is a short summary of Article 1.",
    content: "This is the content of Article 1.",
    image: "/path/to/image1.jpg", // Replace with the actual path to the image
  },
  {
    id: 2,
    title: "Article 2",
    excerpt: "This is a short summary of Article 2.",
    content: "This is the content of Article 2.",
    image: "/path/to/image2.jpg", // Replace with the actual path to the image
  },
  {
    id: 3,
    title: "Article 3",
    excerpt: "This is a short summary of Article 3.",
    content: "This is the content of Article 3.",
    image: "/path/to/image3.jpg", // Replace with the actual path to the image
  },
];

const initialFormState = { id: null, title: '', excerpt: '', content: '', image: '' };

function Articles() {
  const [articles, setArticles] = useState(initialArticles);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(initialFormState);

  const handleCreate = () => {
    setForm(initialFormState);
    setIsEditing(true);
  };

  const handleEdit = (article) => {
    setForm(article);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (form.id) {
      setArticles(articles.map(article => article.id === form.id ? form : article));
    } else {
      setForm({ ...form, id: articles.length + 1 });
      setArticles([...articles, { ...form, id: articles.length + 1 }]);
    }
    setIsEditing(false);
  };

  return (
    <Container style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {isEditing ? (
        <Row className="mt-4">
          <Col>
            <h2>{form.id ? 'Edit Artikel' : 'Buat Artikel Baru'}</h2>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Judul</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Masukkan judul artikel"
                />
              </Form.Group>
              <Form.Group controlId="formExcerpt" className="mt-3">
                <Form.Label>Ringkasan</Form.Label>
                <Form.Control
                  type="text"
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  placeholder="Masukkan ringkasan artikel"
                />
              </Form.Group>
              <Form.Group controlId="formContent" className="mt-3">
                <Form.Label>Konten</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  placeholder="Masukkan konten artikel"
                />
              </Form.Group>
              <Form.Group controlId="formImage" className="mt-3">
                <Form.Label>Gambar</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="Masukkan URL gambar"
                />
              </Form.Group>
              <Button variant="primary" className="mt-3" onClick={handleSave}>Simpan</Button>{' '}
              <Button variant="secondary" className="mt-3" onClick={() => setIsEditing(false)}>Batal</Button>
            </Form>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="mt-4">
            <Col>
              <Button variant="primary" onClick={handleCreate}>Buat Artikel Baru</Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>Daftar Artikel</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Judul</th>
                    <th>Ringkasan</th>
                    <th>Konten</th>
                    <th>Gambar</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td>{article.title}</td>
                      <td>{article.excerpt}</td>
                      <td>{article.content}</td>
                      <td><img src={article.image} alt={article.title} style={{ width: '100px' }} /></td>
                      <td>
                        <Button variant="warning" onClick={() => handleEdit(article)}>Edit</Button>{' '}
                        <Button variant="danger" onClick={() => handleDelete(article.id)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Articles;