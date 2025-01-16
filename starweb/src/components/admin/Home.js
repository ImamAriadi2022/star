import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chart from 'chart.js/auto';

function Home() {
  const influencerChartRef = useRef(null);
  const brandChartRef = useRef(null);

  const influencerData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Influencers',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const brandData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Brands',
        data: [2, 3, 20, 5, 1, 4],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  useEffect(() => {
    const influencerChart = new Chart(influencerChartRef.current, {
      type: 'line',
      data: influencerData,
    });

    const brandChart = new Chart(brandChartRef.current, {
      type: 'line',
      data: brandData,
    });

    return () => {
      influencerChart.destroy();
      brandChart.destroy();
    };
  }, [influencerData, brandData]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Influencer Data</h2>
          <canvas ref={influencerChartRef}></canvas>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Brand Data</h2>
          <canvas ref={brandChartRef}></canvas>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;