export const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '600px',
  margin: '10px auto',
  fontFamily: 'sans-serif',
};

export const navButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#374151',
  fontSize: '14px',
  cursor: 'pointer',
};

export const navButtonDisabledStyle = {
  ...navButtonStyle,
  color: '#D1D5DB',
  cursor: 'default',
};

export const pagesWrapperStyle = {
  display: 'flex',
  gap: '10px',
};

export const pageButtonStyle = {
  padding: '6px 10px',
  borderRadius: '8px',
  border: 'none',
  background: 'none',
  fontSize: '14px',
  cursor: 'pointer',
  color: '#111827',
};

export const activePageButtonStyle = {
  ...pageButtonStyle,
  backgroundColor: '#F1F5F9',
  color: '#2563EB',
  fontWeight: 'bold',
};

export const ellipsisStyle = {
  padding: '6px 10px',
  color: '#9CA3AF',
};
