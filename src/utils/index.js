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

export { assetCardMockData, statusCardMockData,grossCardMockData };
