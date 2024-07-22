import React from 'react';
import styles from './GlobalButton.module.scss';

const GlobalButton = ({ activeIcon: ActiveIcon, inactiveIcon: InactiveIcon, label, active, onClick }) => {
    const Icon = active ? ActiveIcon : InactiveIcon;
    return (
      <button
        className={active ? styles.active : styles.inactive}
        onClick={onClick}
      >
        {Icon && <Icon className={styles.icon} />}
        <span className={styles.label}>{label}</span>
      </button>
    );
  };

export default GlobalButton;
