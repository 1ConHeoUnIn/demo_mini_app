// ─── FarmTab.jsx ──────────────────────────────────────────────────────────────
// Tab Nông trại: Quick Actions, Stock scroll, Lịch sử nhận hàng
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Box } from "zmp-ui";

import StockCard  from "../../components/StockCard";
import HistoryRow from "../../components/HistoryRow";
import './FarmTab.css';

import { STOCK_ITEMS, HISTORY_ITEMS } from "../mockData";

const FarmTab = () => (
  <Box p={4}>
    {/* ── Quick Action Buttons ── */}
    <div className="farm-quick-actions">
      <div className="farm-action-btn">
        <div className="farm-action-btn__icon">🚚</div>
        <div className="farm-action-btn__label">Yêu cầu giao hàng</div>
      </div>
      <div className="farm-action-btn">
        <div className="farm-action-btn__icon">📷</div>
        <div className="farm-action-btn__label">Tra cứu QR</div>
      </div>
      <div className="farm-action-btn">
        <div className="farm-action-btn__icon">📋</div>
        <div className="farm-action-btn__label">Lịch thu hoạch</div>
      </div>
    </div>

    {/* ── Tồn kho ── */}
    <div className="farm-section-title">🏚️ Số dư tồn kho</div>
    <div className="farm-card-wrap" style={{ padding: "14px 12px" }}>
      <div className="stock-scroll-wrap">
        {STOCK_ITEMS.map((item) => (
          <StockCard key={item.id} item={item} />
        ))}
      </div>
    </div>

    {/* ── Lịch sử nhận hàng ── */}
    <div className="farm-section-title">📦 Lịch sử nhận hàng</div>
    <div className="farm-card-wrap">
      {HISTORY_ITEMS.map((item) => (
        <HistoryRow key={item.id} item={item} />
      ))}
    </div>
  </Box>
);

export default FarmTab;