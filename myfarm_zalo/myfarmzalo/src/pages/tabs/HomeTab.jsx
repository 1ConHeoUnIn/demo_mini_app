// ─── HomeTab.jsx ──────────────────────────────────────────────────────────────
// Tab Trang chủ – [CHẶNG 8]
//   • Banner Swiper tự động chạy (zmp-ui Swiper)
//   • Floating Point Widget đè lên cạnh dưới banner
//   • Feature Grid 2×4 với navigate
//   • Promo Banner
//   • Recent Activities
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Box, Swiper } from "zmp-ui";

import ActivityRow from "../../components/ActivityRow";
import FeatureGrid from "../../components/FeatureGrid";
import './HomeTab.css';

import { BANNERS, RECENT_ACTIVITIES } from "../mockData";

// ── Sub-component: BannerSlide ───────────────────────────────────────────────
const BannerSlide = ({ banner }) => (
  <div style={{ position: "relative", width: "100%", lineHeight: 0 }}>
    <img
      className="home-banner-img"
      src={banner.image}
      alt={banner.title}
    />
    {/* Caption overlay */}
    <div className="home-banner-caption">
      <div className="home-banner-caption__title">{banner.title}</div>
      <div className="home-banner-caption__sub">{banner.subtitle}</div>
    </div>
  </div>
);

// ── Sub-component: FloatingPointWidget ───────────────────────────────────────
const FloatingPointWidget = () => (
  <div className="home-point-widget">
    {/* Bên trái – tên & hạng */}
    <div className="home-point-widget__left">
      <div className="home-point-widget__name">Khách</div>
      <div className="home-point-widget__rank">⭐ Thành viên Vàng</div>
    </div>

    {/* Gạch ngăn */}
    <div className="home-point-widget__divider" />

    {/* Bên phải – điểm */}
    <div className="home-point-widget__right">
      <div className="home-point-widget__point-value">150</div>
      <div className="home-point-widget__point-label">MyPoint</div>
    </div>
  </div>
);

// ── Tab chính: HomeTab ───────────────────────────────────────────────────────
const HomeTab = () => (
  <Box className="home-tab">

    {/* ── 1. Banner Swiper ── */}
    <div className="home-banner-wrap">
      <Swiper
        autoplay               /* tự động chạy */
        duration={3500}        /* đổi slide mỗi 3.5 giây */
        loop                   /* lặp vô tận */
      >
        {BANNERS.map((banner) => (
          <Swiper.Slide key={banner.id}>
            <BannerSlide banner={banner} />
          </Swiper.Slide>
        ))}
      </Swiper>
    </div>

    {/* ── 2. Floating Point Widget (đè lên banner) ── */}
    <FloatingPointWidget />

    {/* ── 3. Phần thân – Feature Grid + Promo + Activities ── */}
    <div className="home-body">

      {/* Feature Grid 2×4 */}
      <div className="farm-section-title">⚡ Tính năng</div>
      <FeatureGrid />

      {/* Promo Banner */}
      <div className="promo-banner">
        <div className="promo-banner__deco">🌾</div>
        <div className="promo-banner__text">
          <div className="promo-banner__title">Ưu đãi mùa vụ mới!</div>
          <div className="promo-banner__sub">Giảm 20% đơn hàng đầu tiên</div>
        </div>
        <div className="promo-banner__cta">Xem ngay</div>
      </div>

      {/* Recent Activities */}
      <div className="farm-section-title">🔔 Hoạt động gần đây</div>
      <div className="farm-card-wrap" style={{ padding: "4px 16px" }}>
        {RECENT_ACTIVITIES.map((a) => (
          <ActivityRow key={a.id} item={a} />
        ))}
      </div>

    </div>
  </Box>
);

export default HomeTab;