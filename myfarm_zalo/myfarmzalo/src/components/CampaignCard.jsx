// ─── CampaignCard.jsx ─────────────────────────────────────────────────────────
// Hiển thị một thẻ chiến dịch: tên, tag, địa điểm, progress bar
// Props: campaign { id, name, tagType, tagLabel, location, progress, barClass }
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

const CampaignCard = ({ campaign }) => (
  <div className="campaign-card">
    <div className="campaign-card__name">{campaign.name}</div>
    <div className="campaign-card__meta">
      <span className={`tag tag--${campaign.tagType}`}>
        {campaign.tagLabel}
      </span>
      <span style={{ fontSize: 12, color: "#5f8080" }}>
        📍 {campaign.location}
      </span>
    </div>
    <div className="progress-wrap">
      <div
        className={`progress-bar ${campaign.barClass}`}
        style={{ width: `${campaign.progress}%` }}
      />
    </div>
    <div className="progress-label">{campaign.progress}% hoàn thành</div>
  </div>
);

export default CampaignCard;