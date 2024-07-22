import React, { useState } from "react";
import {
  AssetCard,
  Button,
  TabPill,
  StatusCard,
  GrossIncomeCard,
  GlobalButton,
} from "../../components";

import {
  assetCardMockData,
  statusCardMockData,
  grossCardMockData,
} from "../../utils";

import {
  ActiveAddAssetIcon,
  InActiveAddAssetIcon,
  ActiveAddEntityIcon,
  InActiveAddEntityIcon,
  SuggestionIcon,
  ActiveSuggestionIcon,
  ActiveCustomiseIcon,
  CustomiseIcon,
  ActiveWidgetIcon,
  WidgetIcon,
  GlobalWorld,
  Australia,
  America,
  Europe,
  ActiveGlobalWorld,
} from "../../assets";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("asset");
  const [activeTab, setActiveTab] = useState("All");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleTabClick = (tabPill) => {
    setActiveTab(tabPill);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.regionContainer}>
        <GlobalButton
          activeIcon={ActiveGlobalWorld}
          inactiveIcon={GlobalWorld}
          label="All"
          active={activeButton === "global"}
          onClick={() => handleButtonClick("global")}
        />
        <GlobalButton
          activeIcon={Australia}
          inactiveIcon={Australia}
          label="Australia"
          active={activeButton === "australia"}
          onClick={() => handleButtonClick("australia")}
        />
        <GlobalButton
          activeIcon={America}
          inactiveIcon={America}
          label="USA"
          active={activeButton === "usa"}
          onClick={() => handleButtonClick("usa")}
        />
        <GlobalButton
          activeIcon={Europe}
          inactiveIcon={Europe}
          label="Europe"
          active={activeButton === "europe"}
          onClick={() => handleButtonClick("europe")}
        />
      </div>

      <AssetCard {...assetCardMockData} />

      <div className={styles.assetIconContainer}>
        <Button
          activeIcon={ActiveAddAssetIcon}
          inactiveIcon={InActiveAddAssetIcon}
          label="Add new asset"
          active={activeButton === "asset"}
          onClick={() => handleButtonClick("asset")}
        />
        <Button
          activeIcon={ActiveAddEntityIcon}
          inactiveIcon={InActiveAddEntityIcon}
          label="Add new entity"
          active={activeButton === "entity"}
          onClick={() => handleButtonClick("entity")}
        />
      </div>
      
      <div className={styles.portfolioTitle}>Portfolio performance</div>

      <div className={styles.tabContainer}>
        <TabPill
          label="All"
          active={activeTab === "All"}
          onClick={() => handleTabClick("All")}
        />
        <TabPill
          label="Realised gains"
          active={activeTab === "Realised gains"}
          onClick={() => handleTabClick("Realised gains")}
        />
        <TabPill
          label="Unrealised gains"
          active={activeTab === "Unrealised gains"}
          onClick={() => handleTabClick("Unrealised gains")}
        />
      </div>

      <div>
        {statusCardMockData.map((data, index) => (
          <div key={index}>
            <StatusCard
              label={data.label}
              value={data.value}
              percentage={data.percentage}
            />
            {index < statusCardMockData.length - 1 && (
              <hr color="#E2E8F0" style={{ margin: 0 }} />
            )}
          </div>
        ))}
      </div>

      <GrossIncomeCard {...grossCardMockData} />

      <div className={styles.suggestionTitle}>AI suggested queries</div>

      <div className={styles.suggestionContainer}>
        <Button
          activeIcon={ActiveSuggestionIcon}
          inactiveIcon={SuggestionIcon}
          label="Listed shares balances per  month?"
          active={activeButton === "balance"}
          onClick={() => handleButtonClick("balance")}
        />
        <Button
          activeIcon={ActiveSuggestionIcon}
          inactiveIcon={SuggestionIcon}
          label="Liquid  assets per account?"
          active={activeButton === "queryAsset"}
          onClick={() => handleButtonClick("queryAsset")}
        />
        <Button
          activeIcon={ActiveSuggestionIcon}
          inactiveIcon={SuggestionIcon}
          label="What are current portfolio risks?"
          active={activeButton === "risks"}
          onClick={() => handleButtonClick("risks")}
        />
      </div>
      <hr color="#E2E8F0" style={{ margin: 0 }} />

      <div className={styles.customOptionsContainer}>
        <Button
          activeIcon={ActiveCustomiseIcon}
          inactiveIcon={CustomiseIcon}
          label="Customise"
          active={activeButton === "customise"}
          onClick={() => handleButtonClick("customise")}
        />
        <Button
          activeIcon={ActiveWidgetIcon}
          inactiveIcon={WidgetIcon}
          label="Add Widget"
          active={activeButton === "widget"}
          onClick={() => handleButtonClick("widget")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
