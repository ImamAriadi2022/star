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

  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const contentStyle = {
    backgroundColor: '#FFC300',
    color: '#001D3D',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1000px',
    position: 'relative',
    marginTop: '60px',
    marginLeft: '15px', // Adjusted margin to move content to the left
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 className="text-center mb-4" style={{ color: '#001D3D' }}>Notifications</h2>
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
      </div>
    </div>
  );
}

export default Notifikasi;