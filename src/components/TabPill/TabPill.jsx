import React from 'react';
import styles from './TabPill.module.scss';

const TabPill = ({ label, active, onClick }) => {
  return (
    <div
      className={active ? styles.activeTab : styles.inactiveTab}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default TabPill;