// ─── CampaignTab.jsx ──────────────────────────────────────────────────────────
// Tab Chiến dịch: Search Bar, Category Chips, danh sách CampaignCard
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { Box, Button } from "zmp-ui";

import CampaignCard from "../../components/CampaignCard";
import './CampaignTab.css';

import { CAMPAIGNS, CATEGORY_CHIPS } from "../mockData";


const CampaignTab = () => {
  const [activeChip, setActiveChip] = useState("Tất cả");
  const [query, setQuery]           = useState("");

  const filtered = CAMPAIGNS.filter(
    (c) =>
      (activeChip === "Tất cả" || c.status.includes(activeChip)) &&
      c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box p={4}>
      {/* ── Campaign Header ── */}
      <div className="campaign-header">
        <div className="campaign-header__title">Chiến dịch của tôi</div>
        <div className="campaign-header__subtitle">
          {CAMPAIGNS.length} chiến dịch đang hoạt động
        </div>
      </div>

      {/* ── Search Bar ── */}
      <div className="search-bar-wrap">
        <span className="search-bar-icon">🔍</span>
        <input
          className="search-bar-input"
          placeholder="Tìm chiến dịch..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* ── Category Chips ── */}
      <div className="chip-scroll-wrap">
        {CATEGORY_CHIPS.map((chip) => (
          <div
            key={chip}
            className={`chip${activeChip === chip ? " chip--active" : ""}`}
            onClick={() => setActiveChip(chip)}
          >
            {chip}
          </div>
        ))}
      </div>

      {/* ── Campaign List ── */}
      {filtered.length > 0 ? (
        filtered.map((c) => <CampaignCard key={c.id} campaign={c} />)
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "#99b3b3",
            padding: "32px 0",
            fontSize: 14,
          }}
        >
          Không tìm thấy chiến dịch
        </div>
      )}

      {/* ── CTA Button ── */}
      <Button
        fullWidth
        style={{
          background: "#00868B",
          color: "#fff",
          borderRadius: 10,
          marginTop: 8,
          fontWeight: 700,
        }}
      >
        + Tạo chiến dịch mới
      </Button>
    </Box>
  );
};

export default CampaignTab;