//Header Component with Inline Styling

jsx
// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '36px' }}>My Favorite Cities</h1>
    </header>
  );
};

export default Header;

