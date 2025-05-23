import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Container, Row, Col, Form, Table, Alert } from 'react-bootstrap';
import { Chart } from 'chart.js';
import axios from 'axios';

function StartVip() {
  const influencerChartRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [timeRange, setTimeRange] = useState('all');
  const [influencers, setInfluencers] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch influencers from API
    axios.get('http://localhost/star-1/backend/signinfluencer.php')
      .then(response => {
        setInfluencers(response.data);
        // Assuming the response contains chart data
        setChartData(response.data.chartData);
      })
      .catch(error => {
        console.error('There was an error fetching the influencers!', error);
      });

    // Fetch provinces from API
    axios.get('https://alamat.thecloudalert.com/api/provinsi/get/')
      .then(response => {
        setProvinces(response.data.result);
      })
      .catch(error => {
        console.error('There was an error fetching the provinces!', error);
      });
  }, []);

  useEffect(() => {
    // Fetch cities for each province
    provinces.forEach(province => {
      axios.get(`https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${province.id}`)
        .then(response => {
          setCities(prevCities => [...prevCities, ...response.data.result]);
        })
        .catch(error => {
          console.error('There was an error fetching the cities!', error);
        });
    });
  }, [provinces]);

  useEffect(() => {
    if (chartData) {
      const influencerChart = new Chart(influencerChartRef.current, {
        type: 'line',
        data: chartData,
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
    }
  }, [chartData]);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const getProvinceName = (provinceId) => {
    const province = provinces.find(p => p.id === provinceId);
    console.log('Province ID:', provinceId, 'Province:', province); // Debugging log
    return province ? province.text : 'Unknown';
  };

  const getCityName = (cityId) => {
    const city = cities.find(c => c.id === cityId);
    console.log('City ID:', cityId, 'City:', city); // Debugging log
    return city ? city.text : 'Unknown';
  };

  const filteredInfluencers = influencers.filter((influencer) => {
    return (
      influencer.followers_count > 10000 &&
      (filterType === '' || influencer.influencer_category.toLowerCase().includes(filterType.toLowerCase())) &&
      (searchTerm === '' || influencer.full_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <h2>Data Influencer VIP</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form>
            <Form.Group controlId="searchTerm">
              <Form.Label>Cari berdasarkan Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="filterType" className="mt-3">
              <Form.Label>Filter berdasarkan Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan kategori"
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
                  <th>Nama</th>
                  <th>Kategori</th>
                  <th>Pengikut</th>
                  <th>Provinsi</th>
                  <th>Kota</th>
                </tr>
              </thead>
              <tbody>
                {filteredInfluencers.map((influencer, index) => (
                  <tr key={index}>
                    <td>{influencer.full_name}</td>
                    <td>{influencer.influencer_category}</td>
                    <td>{influencer.followers_count}</td>
                    <td>{getProvinceName(influencer.province)}</td>
                    <td>{getCityName(influencer.city)}</td>
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