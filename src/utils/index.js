import { S1, S2, S3, S4, S5, S6, Setting, Logout } from "../assets";

const assetCardMockData = {
  netAssets: "$74,769,618",
  changePercentage: "+0.1%",
  timeframe: "last day",
  grossAssets: "$78,789,618",
  liabilities: "$4,020,000",
};

const grossCardMockData = {
  netAssets: "$1,210,000",
  changePercentage: "+4.4%",
  timeframe: "vs last year",
  grossAssets: "-$608,950",
  liabilities: "$601,050",
};


const statusCardMockData = [
  { label: 'Month', value: '+$401,321', percentage: '+0.5%' },
  { label: 'Quarter', value: '+$1,203,963', percentage: '+1.5%' },
  { label: 'Year', value: '+$4,812,547', percentage: '+4.0%' },
];

const sidebarLinks = [
  { icon: S1, label: "Dashboard", key: "Dashboard" },
  { icon: S2, label: "Products", key: "Products" },
  { icon: S3, label: "Favorites", key: "Favorites" },
  { icon: S4, label: "Inbox", key: "Inbox" },
  { icon: S5, label: "Order Lists", key: "OrderLists" },
  { icon: S6, label: "Product Stock", key: "ProductStock" },
  { type: "separator", key: "separator" },
  { icon: Setting, label: "Settings", key: "Settings" },
  { icon: Logout, label: "Logout", key: "Logout" },
];;

const assetDetailsContent = `
Lorem ipsum dolor sit amet consectetur. Etiam faucibus quis tellus pharetra nibh facilisi. Imperdiet diam aliquet sagittis
at. Diam faucibus bibendum mi tellus porta. Eu quis ac cras blandit mattis hendrerit.Lorem ipsum dolor sit amet consectetur.
Etiam faucibus quis tellus pharetra nibh facilisi. Imperdiet diam aliquet sagittis at. Diam faucibus bibendum mi tellus
porta. <br /> <br />
Eu quis ac cras blandit mattis hendrerit.Lorem ipsum dolor sit amet consectetur. Etiam faucibus quis tellus pharetra nibh
facilisi. Imperdiet diam aliquet sagittis at. Diam faucibus bibendum mi tellus porta. Eu quis ac cras blandit mattis
hendrerit.i. Imperdiet diam aliquet sagittis at. Imperdiet diam aliquet sagittis at. Diam faucibus bibendum mi tellus porta.
`;


export { assetCardMockData, statusCardMockData,grossCardMockData, sidebarLinks, assetDetailsContent };
