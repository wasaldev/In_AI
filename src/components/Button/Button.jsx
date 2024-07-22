import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  activeIcon: ActiveIcon,
  inactiveIcon: InactiveIcon,
  label,
  active,
  onClick,
}) => {
  const Icon = active ? ActiveIcon : InactiveIcon;

  return (
    <button
      className={active ? styles.active : styles.inactive}
      onClick={onClick}
    >
      {Icon && <Icon className={styles.icon} />}
      {label}
    </button>
  );
};

export default Button;
