// ─── mockData.js ──────────────────────────────────────────────────────────────
// Toàn bộ dữ liệu mock cho MyFarm Mini App
// Backend sẽ thay thế các hằng số này bằng API calls
// ─────────────────────────────────────────────────────────────────────────────

export const CAMPAIGNS = [
  {
    id: 1,
    name: "Bưởi da xanh",
    status: "Đang thu hoạch",
    tagType: "hot",
    tagLabel: "🔥 Hot",
    progress: 72,
    barClass: "",
    location: "Phú Lý",
  },
  {
    id: 2,
    name: "Sầu riêng",
    status: "Đang tăng trưởng",
    tagType: "growing",
    tagLabel: "🌱 Tăng trưởng",
    progress: 45,
    barClass: "progress-bar--blue",
    location: "Phú Lý",
  },
  {
    id: 3,
    name: "Tổ ong",
    status: "Sắp thu hoạch",
    tagType: "soon",
    tagLabel: "⏳ Sắp xong",
    progress: 88,
    barClass: "",
    location: "Huế",
  },
];

export const CATEGORY_CHIPS = [
  "Tất cả",
  "Hợp tác nông trại",
  "Cây ăn trái",
  "Chăn nuôi",
  "Thủy sản",
];

export const STOCK_ITEMS = [
  { id: 1, icon: "🌾", name: "Gạo ST25",     current: 15, total: 20, unit: "kg"   },
  { id: 2, icon: "🥬", name: "Rau hữu cơ",   current: 3,  total: 10, unit: "kg"   },
  { id: 3, icon: "🍊", name: "Bưởi da xanh", current: 28, total: 30, unit: "quả"  },
  { id: 4, icon: "🌽", name: "Bắp nếp",       current: 5,  total: 25, unit: "kg"   },
];

export const HISTORY_ITEMS = [
  { id: 1, date: "05/05/2026", name: "Gạo ST25 – 5kg",        status: "delivered", label: "✓ Đã giao"           },
  { id: 2, date: "03/05/2026", name: "Rau hữu cơ – 2kg",      status: "delivered", label: "✓ Đã giao"           },
  { id: 3, date: "08/05/2026", name: "Bưởi da xanh – 10 quả", status: "shipping",  label: "🚚 Đang vận chuyển"  },
  { id: 4, date: "10/05/2026", name: "Bắp nếp – 5kg",          status: "pending",   label: "⏳ Chờ xử lý"        },
];

export const QUICK_STATS = [
  { id: 1, icon: "zi-list-bulleted", label: "Chiến dịch", value: "3",   color: "#00868B" },
  { id: 2, icon: "zi-info-circle",   label: "Nông trại",  value: "2",   color: "#00ACAC" },
  { id: 3, icon: "zi-bag",           label: "Đơn hàng",   value: "5",   color: "#1565c0" },
  { id: 4, icon: "zi-star",          label: "MyPoint",    value: "150", color: "#FF9F1C" },
];

// ── BANNERS: dữ liệu slider quảng cáo ──────────────────────────────────────
// Backend thay bằng API: GET /api/banners
export const BANNERS = [
  {
    id: 1,
    image: "https://picsum.photos/seed/farm1/900/360",
    title: "Nông sản sạch tận vườn",
    subtitle: "Đặt hàng ngay hôm nay",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/farm2/900/360",
    title: "Chiến dịch mùa hè 2026",
    subtitle: "Cùng nhau canh tác bền vững",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/farm3/900/360",
    title: "Ưu đãi thành viên Vàng",
    subtitle: "Giảm 20% cho đơn đầu tiên",
  },
];

// ── FEATURE_ITEMS: 8 tính năng chính xác của MyFarm ────────────────────────
export const FEATURE_ITEMS = [
  { id: 1, icon: "🛒", label: "Cửa hàng",              route: "/store"   },
  { id: 2, icon: "🌱", label: "Khám phá chiến dịch",   route: "/campaign"},
  { id: 3, icon: "🤝", label: "Giới thiệu",             route: "/referral"},
  { id: 4, icon: "📖", label: "Câu chuyện đồng hành",  route: "/stories" },
  { id: 5, icon: "🏢", label: "Đối tác",                route: "/partner" },
  { id: 6, icon: "💬", label: "Hỗ trợ người dùng",     route: "/support" },
  { id: 7, icon: "⚙️", label: "Tính năng 7",            route: null       },
  { id: 8, icon: "🔧", label: "Tính năng 8",            route: null       },
];

export const RECENT_ACTIVITIES = [
  { id: 1, icon: "💧", title: "Mới tưới cây tại vườn A",                  time: "2 giờ trước"  },
  { id: 2, icon: "📈", title: "Dự án Bưởi da xanh cập nhật tiến độ 88%", time: "Hôm qua"      },
  { id: 3, icon: "📦", title: "Đơn hàng Gạo ST25 – 5kg đang vận chuyển", time: "2 ngày trước" },
];

export const PROFILE_MENU = [
  { id: 1, icon: "zi-user",     label: "Thông tin tài khoản" },
  { id: 2, icon: "zi-location", label: "Địa chỉ nhận hàng"  },
  { id: 3, icon: "zi-star",     label: "Lịch sử MyPoint"     },
  { id: 4, icon: "zi-bell",     label: "Cài đặt thông báo"  },
  { id: 5, icon: "zi-call",     label: "Liên hệ hỗ trợ"     },
];