import React from 'react';

function UserProfile() {
  const styles = {
    name: {
      color: 'blue',
      fontSize: '10px',
    },
  };

  return (
    <div>
      <span style={styles.name}>Davis Kibet</span>
    </div>
  );
}

export default UserProfile;
