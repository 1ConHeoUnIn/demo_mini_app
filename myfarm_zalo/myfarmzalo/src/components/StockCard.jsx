// ─── StockCard.jsx ────────────────────────────────────────────────────────────
// Hiển thị thẻ tồn kho: icon, tên, số lượng, mini progress bar
// Props: item { id, icon, name, current, total, unit }
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

const StockCard = ({ item }) => {
  const pct   = Math.round((item.current / item.total) * 100);
  const isLow = pct < 40;

  return (
    <div className="stock-card">
      <div className="stock-card__icon">{item.icon}</div>
      <div className="stock-card__name">{item.name}</div>
      <div className="stock-card__qty">
        Còn <span>{item.current}{item.unit}</span> / {item.total}{item.unit}
      </div>
      <div className="stock-mini-bar-wrap">
        <div
          className={`stock-mini-bar${isLow ? " stock-mini-bar--low" : ""}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default StockCard;