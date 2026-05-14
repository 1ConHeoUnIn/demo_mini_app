// ─── HistoryRow.jsx ───────────────────────────────────────────────────────────
// Một dòng lịch sử nhận hàng: dot màu, ngày, tên sản phẩm, badge trạng thái
// Props: item { id, date, name, status, label }
//   status: "delivered" | "shipping" | "pending"
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

const HistoryRow = ({ item }) => (
  <div className="history-item">
    <div className={`history-item__dot history-item__dot--${item.status}`} />
    <div className="history-item__info">
      <div className="history-item__date">{item.date}</div>
      <div className="history-item__name">{item.name}</div>
    </div>
    <span className={`history-item__badge history-item__badge--${item.status}`}>
      {item.label}
    </span>
  </div>
);

export default HistoryRow;