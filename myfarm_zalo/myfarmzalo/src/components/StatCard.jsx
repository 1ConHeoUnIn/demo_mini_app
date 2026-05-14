// ─── StatCard.jsx ─────────────────────────────────────────────────────────────
// Thẻ thống kê nhanh: icon zmp-ui, số liệu lớn, nhãn
// Props: stat { id, icon, label, value, color }
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Icon } from "zmp-ui";

const StatCard = ({ stat }) => (
  <div className="stat-card">
    <div className="stat-card__icon" style={{ color: stat.color }}>
      <Icon icon={stat.icon} size={24} />
    </div>
    <div className="stat-card__value" style={{ color: stat.color }}>
      {stat.value}
    </div>
    <div className="stat-card__label">{stat.label}</div>
  </div>
);

export default StatCard;