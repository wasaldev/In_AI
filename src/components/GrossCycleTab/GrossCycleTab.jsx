import React from "react";
import styles from "./GrossCycleTab.module.scss";

const GrossCycleTab = ({ label, active, onClick }) => {
  return (
    <div
      className={active ? styles.activeTab : styles.inactiveTab}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default GrossCycleTab;
