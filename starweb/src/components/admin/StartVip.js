import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Container, Row, Col, Form, Table, Alert } from 'react-bootstrap';
import Chart from 'chart.js/auto';

function StartVip() {
  const influencerChartRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [timeRange, setTimeRange] = useState('all');

  const allTimeData = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Influencers',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const lastYearData = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Influencers',
        data: [10, 15, 8, 12, 7, 9],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const lastMonthData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Influencers',
        data: [3, 5, 2, 4],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const lastWeekData = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    datasets: [
      {
        label: 'Influencers',
        data: [1, 2, 1, 3, 2, 1, 2],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const influencers = [
    { username: 'influencer1', type: 'Fashion', followers: 12000 },
    { username: 'influencer2', type: 'Tech', followers: 19000 },
    { username: 'influencer3', type: 'Food', followers: 3000 },
    { username: 'influencer4', type: 'Travel', followers: 5000 },
    { username: 'influencer5', type: 'Fitness', followers: 2000 },
    { username: 'influencer6', type: 'Fashion', followers: 3000 },
  ];

  const getDataByTimeRange = useCallback((range) => {
    switch (range) {
      case 'week':
        return lastWeekData;
      case 'month':
        return lastMonthData;
      case 'year':
        return lastYearData;
      case 'all':
      default:
        return allTimeData;
    }
  }, [allTimeData, lastMonthData, lastWeekData, lastYearData]);

  useEffect(() => {
    const influencerChart = new Chart(influencerChartRef.current, {
      type: 'line',
      data: getDataByTimeRange(timeRange),
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
      influencerChart.destroy();
    };
  }, [timeRange, getDataByTimeRange]);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const filteredInfluencers = influencers.filter((influencer) => {
    return (
      influencer.followers >= 10000 &&
      (filterType === '' || influencer.type.toLowerCase().includes(filterType.toLowerCase())) &&
      (searchTerm === '' || influencer.username.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <h2>Data Influencer VIP</h2>
          <Form.Group controlId="timeRange">
            <Form.Label>Filter berdasarkan Waktu</Form.Label>
            <Form.Control
              as="select"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="all">Semua Waktu</option>
              <option value="week">1 Minggu Terakhir</option>
              <option value="month">1 Bulan Terakhir</option>
              <option value="year">1 Tahun Terakhir</option>
            </Form.Control>
          </Form.Group>
          <canvas ref={influencerChartRef}></canvas>
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
          <h3>Daftar Influencer VIP</h3>
          {filteredInfluencers.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Tipe</th>
                  <th>Pengikut</th>
                </tr>
              </thead>
              <tbody>
                {filteredInfluencers.map((influencer, index) => (
                  <tr key={index}>
                    <td>{influencer.username}</td>
                    <td>{influencer.type}</td>
                    <td>{influencer.followers}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="warning">Influencer tidak ditemukan</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default StartVip;