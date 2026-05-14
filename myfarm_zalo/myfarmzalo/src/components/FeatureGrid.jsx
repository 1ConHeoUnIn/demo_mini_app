// ─── FeatureGrid.jsx ──────────────────────────────────────────────────────────
// Lưới 2×4 tính năng chính trang chủ.
// Bấm "Cửa hàng" → navigate('/store')  |  route === null → alert tạm thời
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { useNavigate } from "zmp-ui";
import { FEATURE_ITEMS } from "../pages/mockData";

const FeatureGrid = () => {
  const navigate = useNavigate();

  const handleTap = (item) => {
    if (item.route) {
      navigate(item.route);
    } else {
      // Giữ chỗ cho Backend – xóa alert khi có route thật
      alert(`"${item.label}" – tính năng đang phát triển`);
    }
  };

  return (
    <div className="feature-grid">
      {FEATURE_ITEMS.map((f) => (
        <div
          key={f.id}
          className="feature-item"
          onClick={() => handleTap(f)}
        >
          <div className="feature-item__icon">{f.icon}</div>
          <div className="feature-item__label">{f.label}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;