import React from 'react';

const UserAvatar = ({ name, photoUrl }) => {
  const defaultImage = '/default-avatar.jpg'; // Замени на путь к твоей дефолтной аватарке

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f2f2f2',
      objectFit: 'cover',
    },
    name: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#3c3c3c',
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={photoUrl || defaultImage}
        alt={name}
        style={styles.avatar}
      />
      <span style={styles.name}>{name}</span>
    </div>
  );
};

export default UserAvatar;
