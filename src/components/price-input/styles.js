export const priceInputWrapper = {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  gap: 0,
};

export const currencySelectLeft = {
  height: '100%',
  border: '1px solid #ccc',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
  padding: '0 12px',
  fontSize: '1rem',
  cursor: 'pointer',
  backgroundColor: 'white',
  outline: 'none',
  borderRight: 'none', // убираем правую границу, чтобы присоединить к input
  boxSizing: 'border-box',
};

export const priceInputFieldRight = {
  flex: 1,
  height: '100%',
  fontSize: '1.2rem',
  padding: '0 10px',
  border: '1px solid #ccc',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  outline: 'none',
  boxSizing: 'border-box',
  borderLeft: 'none', // убираем левую границу, чтобы не было двойной
};
