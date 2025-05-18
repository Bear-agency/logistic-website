export const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0px',
  width: '100%',
  marginTop: '20px',
};

export const stepWrapper = {
  display: 'flex',
  alignItems: 'center',
};

export const activeCircle = {
  backgroundColor: '#4267B2',
  color: 'white',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 'bold',
  zIndex: 1,
};

export const inactiveCircle = {
  ...activeCircle,
  backgroundColor: '#e0e0e0',
  color: '#aaa',
};

export const activeLine = {
  height: '2px',
  width: '200px',
  backgroundColor: '#4267B2',
  margin: '0 5px',
};

export const inactiveLine = {
  ...activeLine,
  backgroundColor: '#e0e0e0',
};
