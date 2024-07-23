import React, { useState } from "react";

import { InAI } from "../../assets";

import NavBarItem from "../NavbarItem/NavbarItem";
import { sidebarLinks } from "../../utils";

import styles from "./SideBar.module.scss";

const SideBar = ({ isVisible, onClose, isMobile }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className={`${styles.sideBar} ${isVisible ? styles.visible : ""} ${
        isMobile ? styles.mobile : ""
      }`}
    >
      <div className={styles.logoContainer}>
        <InAI />
      </div>
      <div className={styles.closeIcon} onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </div>
      <nav className={styles.nav}>
        {sidebarLinks.map(({ icon, label, key, type }) =>
          type === "separator" ? (
            <div key={key} className={styles.horizontalLine}></div>
          ) : (
            <NavBarItem
              key={key}
              icon={icon}
              label={label}
              isActive={activeItem === label}
              handleClick={handleItemClick}
            />
          )
        )}
      </nav>
    </div>
  );
};

export default SideBar;
