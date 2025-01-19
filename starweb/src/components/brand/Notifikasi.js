import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

function Notifikasi() {
  const notifications = [
    { id: 1, influencer: 'Influencer 1', status: 'accepted' },
    { id: 2, influencer: 'Influencer 2', status: 'rejected' },
    { id: 3, influencer: 'Influencer 3', status: 'pending' },
  ]; // Replace with actual notifications

  const getStatusStyle = (status) => {
    switch (status) {
      case 'accepted':
        return { color: 'green' };
      case 'rejected':
        return { color: 'red' };
      case 'pending':
        return { color: 'orange' };
      default:
        return {};
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <h2>Notifications</h2>
      <ListGroup>
        {notifications.map((notification) => (
          <ListGroup.Item key={notification.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{notification.influencer}</span>
              <span style={getStatusStyle(notification.status)}>
                {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
              </span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Notifikasi;