import React, { useState, useEffect } from "react";
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
  assetDetailsContent
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
import SideBar from "../../components/SideBar/SideBar";
import MobileNav from "../../components/MobileNav/MobileNav";
import NavBar from "../../components/NavBar/NavBar";
import DashboardHeader from "../../components/DashoboardHeader/DashboardHeader";
import AssetDetail from "../../components/AssetDetail/AssetDetail";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("asset");
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleTabClick = (tabPill) => {
    setActiveTab(tabPill);
  };

  const handleHamburgerClick = () => {
    setIsSidebarVisible(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.dashboard}>
       {windowWidth < 800 ? (
        <SideBar isVisible={isSidebarVisible} onClose={handleCloseSidebar} isMobile={true} />
      ) : (
        <SideBar isVisible={true} onClose={handleCloseSidebar} isMobile={false} />
      )}
      <div className={styles.dashboardHeader}>
        {windowWidth < 800 ? <MobileNav onHamburgerClick={handleHamburgerClick} /> : <NavBar name="John Doe" info="Admin" />}
        <div className={styles.dashboardContainer}>
        <DashboardHeader Heading="Portfolio Dashboard" buttonHeading="Ask AI assistant" isMobile={windowWidth < 800} />
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

          <div className={styles.assetsContainer}>
            <div className={styles.assetsBlock1}>
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
            </div>
            <div className={styles.assetsBlock2}>
              <AssetDetail assetHeading="Net assets" assetContent={assetDetailsContent}/>
            </div>
          </div>

          <div className={styles.portfolioConatiner}>
            <div className={styles.portfolioBlock}>
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
            </div>

            <GrossIncomeCard {...grossCardMockData} />
          </div>

          {windowWidth < 700 ? (
            <>
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
            </>
          ) : (
            <>
              <div className={styles.queriesContainer}>
                <div className={styles.queriesHeader}>
                  <div className={styles.suggestionTitle}>
                    AI suggested queries
                  </div>
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
