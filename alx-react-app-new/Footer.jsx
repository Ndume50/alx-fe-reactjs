//Footer Component with Inline Styling

jsx
// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: '0',
      width: '100%',
    }}>
      <p style={{ fontSize: '16px' }}>&copy; 2024 My Favorite Cities</p>
    </footer>
  );
};

export default Footer;

