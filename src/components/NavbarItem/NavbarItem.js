import React from "react";
import styles from "./NavbarItem.module.scss";

const NavBarItem = ({ icon: Icon, label, isActive, handleClick,  }) => {
  return (
    <div
      className={`${styles.navItemContainer} ${isActive ? styles.active : ""}`}
    >
      <div
        className={styles.navItem}
        onClick={() => {
          handleClick(label);
        }}
      >
        <Icon className={styles.icon} />
        <span className={styles.navHeading}>{label}</span>
      </div>
    </div>
  );
};

export default NavBarItem;
