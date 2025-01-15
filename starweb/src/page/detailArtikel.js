import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const articles = {
  1: {
    title: "Article 1",
    content: "This is the content of Article 1.",
  },
  2: {
    title: "Article 2",
    content: "This is the content of Article 2.",
  },
  3: {
    title: "Article 3",
    content: "This is the content of Article 3.",
  },
};

function DetailArtikel() {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return (
      <div>
        <NavigationBar />
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: 'white', color: '#001D3D', minHeight: '100vh' }}>
          <h2>Article not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ padding: '50px', backgroundColor: 'white', color: '#001D3D', minHeight: '100vh' }}>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
      <Footer />
    </div>
  );
}

export default DetailArtikel;