import React, { useState } from "react";
import GrossCycleTab from "../../components/GrossCycleTab/GrossCycleTab";
import { GreyOptionsIcon, UpwardIcon, RoundedNextIcon } from "../../assets";
import styles from "./GrossIncomeCard.module.scss";

const GrossIncomeCard = ({
  netAssets,
  changePercentage,
  timeframe,
  grossAssets,
  liabilities,
}) => {
  const [grossActiveTab, setGrossActiveTab] = useState("FY 2024");

  const handleGrossTabClick = (grossTabPill) => {
    setGrossActiveTab(grossTabPill);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Gross income</div>
      <div className={styles.assetsInfoSection}>
        <div className={styles.assetsInfoContainer}>
          <div className={styles.netAssets}>{netAssets}</div>
          <div className={styles.changeContainer}>
            <div className={styles.change}>
              <UpwardIcon /> {changePercentage}
            </div>
            <div className={styles.timeframe}>{timeframe}</div>
          </div>
        </div>
        <RoundedNextIcon className={styles.nextIcon} />
      </div>

      <div>
        <div className={styles.grossAssets}>
          Less expenses:
          <span className={styles.grossAssetsValue}>{grossAssets}</span>
        </div>
        <div className={styles.liabilities}>
          Liabilities:
          <span className={styles.liabilitiesValue}>{liabilities}</span>
        </div>
      </div>

      <div className={styles.optionsIcon}>
        <GreyOptionsIcon />
      </div>

      <div className={styles.grossTabContainer}>
        <GrossCycleTab
          label="Day"
          active={grossActiveTab === "Day"}
          onClick={() => handleGrossTabClick("Day")}
        />
        <GrossCycleTab
          label="Month"
          active={grossActiveTab === "Month"}
          onClick={() => handleGrossTabClick("Month")}
        />
        <GrossCycleTab
          label="Quarter"
          active={grossActiveTab === "Quarter"}
          onClick={() => handleGrossTabClick("Quarter")}
        />
        <GrossCycleTab
          label="FY 2024"
          active={grossActiveTab === "FY 2024"}
          onClick={() => handleGrossTabClick("FY 2024")}
        />
      </div>
    </div>
  );
};

export default GrossIncomeCard;
