import React, { useState } from 'react';
import * as styles from './styles';
import DropdownMenu from '../../components/dropdown-menu';
import { useNavigate } from 'react-router-dom';

const FromWhere = ({ text }) => {

  return (
   <div>
          <div style={styles.marginBlock}>
          <div style={styles.divmargin}><label style={styles.fieldLabel}>{text}</label></div>
          <DropdownMenu
            {...styles.dropdownWidth}
            placeholder="Все страны"
          />
          </div>
          <div style={styles.marginBlock}>
            <DropdownMenu
            {...styles.dropdownWidth}
            placeholder="Все города"
          />
          </div>
          <div style={styles.marginBlock}>
            <DropdownMenu
            {...styles.dropdownWidth}
            placeholder="Все области"
          />
          </div>
    </div>
  );
};

export default FromWhere;
