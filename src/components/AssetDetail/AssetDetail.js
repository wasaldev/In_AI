import React from "react";
import styles from "./AssetDetail.module.scss";

const AssetDetail = ({ assetHeading, assetContent }) => {
  return (
    <>
      <span className={styles.assetsHeading} >{assetHeading}</span>
      <span
      className={styles.assetsContent}
      dangerouslySetInnerHTML={{ __html: assetContent }}
    />
    </>
  );
};

export default AssetDetail;
