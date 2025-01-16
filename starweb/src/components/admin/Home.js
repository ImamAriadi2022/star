import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Form, Table, Alert } from 'react-bootstrap';
import Chart from 'chart.js/auto';

function Home() {
  const transactionChartRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  const transactionData = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Transaksi',
        data: [150, 200, 300, 250, 400, 350],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.8)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const transactions = [
    { brand: 'Brand1', influencer: 'Influencer1', campaign: 'Kampanye A', price: 150000 },
    { brand: 'Brand2', influencer: 'Influencer2', campaign: 'Kampanye B', price: 200000 },
    { brand: 'Brand3', influencer: 'Influencer3', campaign: 'Kampanye C', price: 300000 },
    { brand: 'Brand4', influencer: 'Influencer4', campaign: 'Kampanye D', price: 250000 },
    { brand: 'Brand5', influencer: 'Influencer5', campaign: 'Kampanye E', price: 400000 },
    { brand: 'Brand6', influencer: 'Influencer6', campaign: 'Kampanye F', price: 350000 },
  ];

  useEffect(() => {
    const transactionChart = new Chart(transactionChartRef.current, {
      type: 'line',
      data: transactionData,
      options: {
        scales: {
          x: {
            ticks: {
              color: '#333',
            },
          },
          y: {
            ticks: {
              color: '#333',
            },
          },
        },
      },
    });

    return () => {
      transactionChart.destroy();
    };
  }, [transactionData]);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      searchTerm === '' ||
      transaction.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.influencer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <h2>Data Transaksi</h2>
          <canvas ref={transactionChartRef}></canvas>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form>
            <Form.Group controlId="searchTerm">
              <Form.Label>Cari berdasarkan Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Daftar Transaksi</h3>
          {filteredTransactions.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Influencer</th>
                  <th>Kampanye</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.brand}</td>
                    <td>{transaction.influencer}</td>
                    <td>{transaction.campaign}</td>
                    <td>{transaction.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="warning">Transaksi tidak ditemukan</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;