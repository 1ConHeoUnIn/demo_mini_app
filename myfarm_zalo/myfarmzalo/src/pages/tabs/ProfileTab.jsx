// ─── ProfileTab.jsx ───────────────────────────────────────────────────────────
// Tab Cá nhân: Hero avatar, Ví MyPoint & Voucher, Menu list, Đăng xuất
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Box, Icon, Button } from "zmp-ui";
import './ProfileTab.css';
import { PROFILE_MENU } from "../mockData";

// ── Tab chính: ProfileTab ────────────────────────────────────────────────────
const ProfileTab = () => (
  <Box className="profile-tab">
    {/* ── Hero Avatar ── */}
    <div className="profile-hero">
      <div className="profile-avatar">
        <Icon icon="zi-user" size={36} />
      </div>
      <div className="profile-hero__name">Thành viên MyFarm</div>
      <div className="profile-hero__rank">⭐ Thành viên Vàng</div>
    </div>

    {/* ── Ví điểm MyPoint & Voucher ── */}
    <div className="profile-wallet-row">
      <div className="wallet-card wallet-card--point">
        <div className="wallet-card__icon">⭐</div>
        <div className="wallet-card__value">150</div>
        <div className="wallet-card__label">MyPoint của tôi</div>
      </div>
      <div className="wallet-card wallet-card--voucher">
        <div className="wallet-card__icon">🎁</div>
        <div className="wallet-card__value">3</div>
        <div className="wallet-card__label">Voucher khả dụng</div>
      </div>
    </div>

    {/* ── Menu List – Flat Style ── */}
    <div className="profile-menu-wrap">
      {PROFILE_MENU.map((item) => (
        <div key={item.id} className="profile-menu-item">
          <div className="profile-menu__icon">
            <Icon icon={item.icon} size={20} />
          </div>
          <span className="profile-menu__label">{item.label}</span>
          <span className="profile-menu__chevron">›</span>
        </div>
      ))}
    </div>

    {/* ── Nút Đăng xuất ── */}
    <div className="profile-logout-wrap">
      <Button
        fullWidth
        style={{
          background: "#fff0f0",
          color: "#c62828",
          borderRadius: 10,
          fontWeight: 700,
          border: "1px solid #ffd0d0",
        }}
      >
        Đăng xuất
      </Button>
    </div>
  </Box>
);

export default ProfileTab;