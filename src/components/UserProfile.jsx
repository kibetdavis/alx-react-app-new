import React from 'react';

function UserProfile() {
  const profileStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  };

  const spanStyle = {
    color: 'blue',
    fontSize: '10px',
  };

  return (
    <div style={profileStyle}>
      <img
        src="https://via.placeholder.com/100"
        alt="User"
        style={imageStyle}
      />
      <h2>Davis Kibet</h2>
      <p>Aspiring Civil Engineer & Front-End Developer</p>
      <span style={spanStyle}>Inline styled span</span>
    </div>
  );
}

export default UserProfile;
