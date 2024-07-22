import React from "react";
import { OptionsIcon, UpwardIcon, NextIcon } from "../../assets";
import styles from "./AssetCard.module.scss";

const AssetCard = ({
  netAssets,
  changePercentage,
  timeframe,
  grossAssets,
  liabilities,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Net assets</div>
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
        <NextIcon className={styles.nextIcon} />
      </div>

      <div>
        <div className={styles.grossAssets}>
          Gross assets:
          <span className={styles.grossAssetsValue}>{grossAssets}</span>
        </div>
        <div className={styles.liabilities}>
          Liabilities:
          <span className={styles.liabilitiesValue}>{liabilities}</span>
        </div>
      </div>

      <div className={styles.optionsIcon}>
        <OptionsIcon />
      </div>
    </div>
  );
};

export default AssetCard;
