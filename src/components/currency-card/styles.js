export const styles = {
  card: {
    display: 'flex',
    alignItems: 'stretch', // Щоб info розтягувалась по висоті
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    padding: '10px 14px',
    width: '120px',
    height: '60px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif'
  },
  flag: {
    width: '52px',
    height: '40px',
    borderRadius: '4px',
    marginRight: '12px',
    objectFit: 'cover',
    alignSelf: 'center'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Розміщує code вгорі, amount внизу
    flexGrow: 1 // Щоб info займала весь доступний простір
  },
  code: {
    fontSize: '14px',
    color: '#555',
    alignSelf: 'flex-end' // Вправо
  },
  amount: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-end' // Вправо
  }
};
