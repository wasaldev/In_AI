import React from 'react';
import styles from './StatusCard.module.scss';
import { WhiteUpwardIcon } from '../../assets';

const StatusCard = ({ label, value, percentage }) => {
  return (
    <div className={styles.statusCard}>
      <div className={styles.label}>{label}</div>
      <div className={styles.pillInfoContainer}>
        <div className={styles.value}>{value}</div>
        <div className={styles.pill}>
          <WhiteUpwardIcon className={styles.icon} />
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;