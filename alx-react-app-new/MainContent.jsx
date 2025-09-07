//MainContent Component with Inline Styling

jsx
// MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    }}>
      <p style={{ fontSize: '18px' }}>This is the main content section.</p>
      <p style={{ fontSize: '18px' }}>You can add more content here.</p>
    </main>
  );
};

export default MainContent;
