// ─── ActivityRow.jsx ──────────────────────────────────────────────────────────
// Một dòng hoạt động gần đây: emoji, tiêu đề, thời gian
// Props: item { id, icon, title, time }
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

const ActivityRow = ({ item }) => (
  <div className="activity-item">
    <div className="activity-item__emoji">{item.icon}</div>
    <div className="activity-item__info">
      <div className="activity-item__title">{item.title}</div>
      <div className="activity-item__time">{item.time}</div>
    </div>
  </div>
);

export default ActivityRow;