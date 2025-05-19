// styles.js
export const pageContainer = {
  width: '85%',
  margin: '50px auto 0 auto',
  display: 'flex',
  flexDirection: 'column', // Центровка по горизонтали
};

export const headerTabs = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '24px',
};


export const header = {
    fontFamily: 'sans-serif',
     width: '100%',
  display: 'flex',
  justifyContent: 'center',// или любое нужное значение, например '8px', '24px'
};
export const filtersGrid = {

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr) 10px',
  columnGap: '16px',
  rowGap: '16px',
  alignItems: 'start',
};

export const inputWithRemove = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '12px'
};

export const fieldWrapper = {
  display: 'flex',
  flexDirection: 'column',
};

export const fieldWrapperOther = {

  width: '650px',

};

export const fieldLabel = {
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '8px',
};

export const inlineFields = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export const separator = {
  alignSelf: 'center',
  color: '#6B7280',
};

export const dropdownWidth = {

  height: '20px',
};

export const margin ={
    marginTop: '10px',
}

export const dropdownWidthOther = {
 width: '100%',
 height: '20px',

};

export const tabsWrapper = {
  gridColumn: '5 / span 1',
};


export const addPlacesRow = {
  display: 'flex',
  gap: '16px',
  marginTop: '24px',
};
