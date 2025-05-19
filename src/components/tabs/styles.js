// styles.js
export const container = {
  display: 'inline-flex',
  borderRadius: '4px',
  overflow: 'hidden',
  width: '260px',
  border: '1px solid #D1D5DB',
  background: '#F3F4F6',
};

export const tab = {
  flex: 1,
  padding: '4px 12px',
  height: '40px',
  lineHeight: '24px',
  background: 'transparent',
  border: 'none',
  fontSize: '14px',
  fontFamily: 'sans-serif',
  color: '#6B7280',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
};

export const activeTab = {
  background: '#FFFFFF',
  color: '#111827',
  fontWeight: 500,
};
