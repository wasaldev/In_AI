import React from "react";
import { Wand, ArrowRight, SearchGrey } from "../../assets";
import styles from "./DashboardHeader.module.scss";

const DashboardHeader = ({ isMobile, Heading, buttonHeading }) => {
  return isMobile ? (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <span className={styles.heroHeader}>
          {Heading}
        </span>
        <SearchGrey className={styles.icon} />
      </div>
      <div className={styles.buttonContent}>
        <Wand />
        <span className={styles.buttonHeading}>{buttonHeading}</span>
        <ArrowRight />
      </div>
    </div>
  ) : (
    <div className={styles.dashboardContent}>
      <div className={styles.contentHeading}> {Heading}</div>
      <div className={styles.dashboardContentButton}>
        <Wand />
        <span className={styles.buttonHeading}>{buttonHeading}</span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default DashboardHeader;