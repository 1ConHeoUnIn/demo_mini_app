// ─── index.jsx ────────────────────────────────────────────────────────────────
// App Root: khung chính, Header và BottomNavigation
// Các Tab được import từ ./tabs/
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { Page, Header, BottomNavigation, Icon, Box } from "zmp-ui";
import "./myfarm.css";

import HomeTab     from "./tabs/HomeTab";
import CampaignTab from "./tabs/CampaignTab";
import FarmTab     from "./tabs/FarmTab";
import ProfileTab  from "./tabs/ProfileTab";

// ── Cấu hình điều hướng ──────────────────────────────────────────────────────
const TAB_CONFIG = [
  {
    key:       "home",
    label:     "MyFarm - Trang chủ",
    icon:      "zi-home",
    component: <HomeTab />,
  },
  {
    key:       "campaign",
    label:     "MyFarm - Chiến dịch",
    icon:      "zi-list-bulleted",
    component: <CampaignTab />,
  },
  {
    key:       "farm",
    label:     "MyFarm - Nông trại",
    icon:      "zi-info-circle",
    component: <FarmTab />,
  },
  {
    key:       "profile",
    label:     "MyFarm - Cá nhân",
    icon:      "zi-user",
    component: <ProfileTab />,
  },
];

// ── App Root ─────────────────────────────────────────────────────────────────
const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const currentTab = TAB_CONFIG.find((tab) => tab.key === activeTab);

  return (
    <Page className="app-container">
      <Header title={currentTab?.label ?? ""} />

      <Box className="page-content">
        {currentTab?.component}
      </Box>

      <BottomNavigation
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        {TAB_CONFIG.map((tab) => (
          <BottomNavigation.Item
            key={tab.key}
            label={tab.label}
            icon={<Icon icon={tab.icon} />}
          />
        ))}
      </BottomNavigation>
    </Page>
  );
};

export default App;