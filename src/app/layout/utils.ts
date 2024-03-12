import {
  MonitorDot,
  PictureInPicture2,
  MessagesSquare,
  Mail,
  CalendarDays,
  ShoppingBag,
  CircuitBoard,
  ScrollText,
  RadioTower,
  FileText,
  User2,
  Award,
  Codesandbox,
  LifeBuoy,
  PackagePlus,
  LocateFixed,
  Table,
  PieChart,
  Trophy,
  Map,
  Share2
} from "lucide-vue-next";
import { MenuItemType } from "@/app/layout/types";

export const menuItems: MenuItemType[] = [
  { isHeader: true, title: "menu" },
  {
    icon: MonitorDot,
    title: "dashboards",

    subMenu: [
      { title: "analytics", path: "/dashboards/analytics" },
      { title: "ecommerce", path: "/" },
      { title: "email", path: "/dashboards/email" },
      { title: "hr", path: "/dashboards/hr" },
      { title: "social", path: "/dashboards/social-media" }
    ]
  },
  {
    icon: PictureInPicture2,
    title: "landing-page",

    subMenu: [
      { title: "one-page", path: "/onepage/landing" },
      { title: "product", path: "/product/landing" }
    ]
  },
  { isHeader: true, title: "apps" },
  {
    icon: MessagesSquare,
    title: "chat",
    path: "/chat"
  },
  {
    icon: Mail,
    title: "email",
    path: "/mailbox"
  },
  {
    icon: CalendarDays,
    title: "calendar",

    subMenu: [
      { title: "default", path: "/calendar" },
      { title: "month-grid", path: "/calendar/month-grid" },
      { title: "multi-month-stack", path: "/calendar/multi-month-stack" }
    ]
  },
  {
    icon: ShoppingBag,
    title: "ecommerce",
    subMenu: [
      {
        title: "products",

        subMenu: [
          { path: "/ecommerce/product-list", title: "list-view" },
          { path: "/ecommerce/product-grid", title: "grid-view" },
          { path: "/ecommerce/product-overview", title: "overview" },
          { path: "/ecommerce/product-create", title: "add-new" }
        ]
      },
      { title: "shopping-cart", path: "/ecommerce/cart" },
      { title: "checkout", path: "/ecommerce/checkout" },
      { title: "orders", path: "/ecommerce/orders" },
      { title: "order-overview", path: "/ecommerce/order-overview" },
      { title: "sellers", path: "/ecommerce/sellers" }
    ]
  },
  {
    icon: CircuitBoard,
    title: "hr-management",
    subMenu: [
      { title: "employees-list", path: "/hr/employee" },
      { title: "holidays", path: "/hr/holidays" },
      {
        title: "leaves-manage",
        subMenu: [
          { title: "by-employee", path: "/hr/leave-employee" },
          { title: "add-leave-employee", path: "/hr/create-leave-employee" },
          { title: "by-hr", path: "/hr/leave" },
          { title: "add-leave-hr", path: "/hr/create-leave" }
        ]
      },
      {
        title: "attendance",
        subMenu: [
          { path: "/hr/attendance", title: "attendance-hr" },
          { path: "/hr/attendance/main", title: "main-attendance" }
        ]
      },
      {
        title: "department",
        path: "/hr/department"
      },
      {
        title: "sales",
        subMenu: [
          { path: "/hr/sales/estimates", title: "estimates" },
          { path: "/hr/sales/payments", title: "payments" },
          { path: "/hr/sales/expenses", title: "expenses" }
        ]
      },
      {
        title: "payroll",
        subMenu: [
          { path: "/hr/payroll/employee-salary", title: "employee-salary" },
          { path: "/hr/payroll/payslip", title: "payslip" },
          { path: "/hr/payroll/create-payslip", title: "create-payslip" }
        ]
      }
    ]
  },
  {
    title: "notes",
    icon: ScrollText,
    path: "/notes"
  },
  {
    title: "social",
    icon: RadioTower,
    subMenu: [
      { path: "/social/friends", title: "friends" },
      { path: "/social/event", title: "event" },
      { path: "/social/video", title: "watch-video" },
      { path: "/social/marketplace", title: "marketplace" }
    ]
  },
  {
    title: "invoices",
    icon: FileText,
    subMenu: [
      { path: "/invoice/list", title: "list-view" },
      { path: "/invoice/add-new", title: "add-new" },
      { path: "/invoice/overview", title: "overview" }
    ]
  },
  {
    title: "users",
    icon: User2,
    subMenu: [
      { path: "/users/list", title: "list-view" },
      { path: "/users/grid", title: "grid-view" }
    ]
  },
  { isHeader: true, title: "pages" },
  {
    title: "authentication",
    icon: Award,
    subMenu: [
      {
        title: "login",
        subMenu: [
          { path: "/login/basic", title: "basic" },
          { path: "/login/cover", title: "cover" },
          { path: "/login/boxed", title: "boxed" },
          { path: "/login/modern", title: "modern" }
        ]
      },
      {
        title: "register",
        subMenu: [
          { path: "/register/basic", title: "basic" },
          { path: "/register/cover", title: "cover" },
          { path: "/register/boxed", title: "boxed" },
          { path: "/register/modern", title: "modern" }
        ]
      },
      {
        title: "verify-email",
        subMenu: [
          { path: "/verify-email/basic", title: "basic" },
          { path: "/verify-email/cover", title: "cover" },
          { path: "/verify-email/modern", title: "modern" }
        ]
      },
      {
        title: "two-steps",
        subMenu: [
          { path: "/two-steps/basic", title: "basic" },
          { path: "/two-steps/cover", title: "cover" },
          { path: "/two-steps/boxed", title: "boxed" },
          { path: "/two-steps/modern", title: "modern" }
        ]
      },
      {
        title: "logout",
        subMenu: [
          { path: "/logout/basic", title: "basic" },
          { path: "/logout/cover", title: "cover" },
          { path: "/logout/boxed", title: "boxed" },
          { path: "/logout/modern", title: "modern" }
        ]
      },
      {
        title: "reset-password",
        subMenu: [
          { path: "/reset-password/basic", title: "basic" },
          { path: "/reset-password/cover", title: "cover" },
          { path: "/reset-password/boxed", title: "boxed" },
          { path: "/reset-password/modern", title: "modern" }
        ]
      },
      {
        title: "create-password",
        subMenu: [
          { path: "/create-password/basic", title: "basic" },
          { path: "/create-password/cover", title: "cover" },
          { path: "/create-password/boxed", title: "boxed" },
          { path: "/create-password/modern", title: "modern" }
        ]
      }
    ]
  },
  {
    title: "pages",
    icon: Codesandbox,
    subMenu: [
      { path: "/pages/account", title: "account" },
      { path: "/pages/settings", title: "settings" },
      { path: "/pages/pricing", title: "pricing" },
      { path: "/pages/faqs", title: "faqs" },
      { path: "/pages/contact-us", title: "contact-us" },
      { path: "/pages/coming-soon", title: "coming-soon" },
      {
        title: "error-pages",
        subMenu: [
          { path: "/pages/404", title: "404" },
          { path: "/pages/offline", title: "offline" }
        ]
      },
      { path: "/pages/maintenance", title: "maintenance" }
    ]
  },
  { isHeader: true, title: "components" },
  {
    title: "ui-elements",
    icon: LifeBuoy,
    subMenu: [
      { path: "/ui/alerts", title: "alerts" },
      { path: "/ui/avatar", title: "avatar" },
      { path: "/ui/buttons", title: "buttons" },
      { path: "/ui/label", title: "label" },
      { path: "/ui/cards", title: "cards" },
      { path: "/ui/collapse", title: "collapse" },
      { path: "/ui/countdown", title: "countdown" },
      { path: "/ui/drawer", title: "drawer" },
      { path: "/ui/dropdown", title: "dropdown" },
      { path: "/ui/gallery", title: "gallery" },
      { path: "/ui/lists", title: "lists" },
      { path: "/ui/notification", title: "notification" },
      { path: "/ui/modal", title: "modal" },
      { path: "/ui/spinners", title: "spinners" },
      { path: "/ui/timeline", title: "timeline" },
      { path: "/ui/progress-bar", title: "progress-bar" },
      { path: "/ui/tooltip", title: "tooltip" },
      { path: "/ui/video", title: "video" }
    ]
  },
  {
    title: "plugins",
    icon: PackagePlus,
    subMenu: [
      { path: "/plugins/sweetalert", title: "sweetalert" },
      { path: "/plugins/simplebar", title: "simplebar" },
      { path: "/plugins/lightbox", title: "lightbox" },
      { path: "/plugins/swiper-slider", title: "swiper-slider" },
      { path: "/plugins/scroll-hint", title: "scroll-hint" },
      { path: "/plugins/video-player", title: "video-player" }
    ]
  },
  {
    title: "navigation",
    icon: LocateFixed,
    subMenu: [
      { path: "/navigation/navbars", title: "navbar" },
      { path: "/navigation/tabs", title: "tabs" },
      { path: "/navigation/breadcrumb", title: "breadcrumb" },
      { path: "/navigation/pagination", title: "pagination" }
    ]
  },
  {
    title: "forms",
    icon: FileText,
    subMenu: [
      { path: "/forms/basic", title: "basic" },
      { path: "/forms/validation", title: "validation" },
      { path: "/forms/input-mask", title: "input-mask" },
      { path: "/forms/select", title: "select" },
      { path: "/forms/checkbox-radio", title: "checkbox-radio" },
      { path: "/forms/switches", title: "switches" },
      { path: "/forms/wizard", title: "wizards" },
      { path: "/forms/file-upload", title: "file-upload" },
      { path: "/forms/datepicker", title: "date-picker" },
      { path: "/forms/timepicker", title: "time-picker" },
      { path: "/forms/colorpicker", title: "color-picker" },
      { path: "/forms/multi-select", title: "multi-select" },
      { path: "/forms/input-spin", title: "input-spin" },
      { path: "/forms/clipboard", title: "clipboard" },
      {
        title: "editor",
        subMenu: [
          // { title: "balloon", path: "/forms/editor-balloon" },
          { title: "classic", path: "/forms/editor-classic" },
          // { title: "inline", path: "/forms/editor-inline" }
        ]
      }
    ]
  },
  {
    title: "tables",
    icon: Table,
    subMenu: [
      { path: "/tables/basic", title: "basic-table" },
      { path: "/tables/datatable", title: "datatable" },
      { path: "/tables/listjs", title: "listjs" },
      { path: "/tables/gridjs", title: "grid-js" }
    ]
  },
  {
    title: "apexcharts",
    icon: PieChart,
    subMenu: [
      { path: "/charts/apex-area", title: "area" },
      { path: "/charts/apex-bar", title: "bar" },
      { path: "/charts/apex-boxplot", title: "boxplot" },
      { path: "/charts/apex-bubble", title: "bubble" },
      { path: "/charts/apex-candlstick", title: "candlstick" },
      { path: "/charts/apex-column", title: "column" },
      { path: "/charts/apex-funnel", title: "funnel" },
      { path: "/charts/apex-heatmap", title: "heatmap" },
      { path: "/charts/apex-line", title: "line" },
      { path: "/charts/apex-mixed", title: "mixed" },
      { path: "/charts/apex-pie", title: "pie" },
      { path: "/charts/apex-polar", title: "polar-area" },
      { path: "/charts/apex-radar", title: "radar" },
      { path: "/charts/apex-radialbar", title: "radialbar" },
      { path: "/charts/apex-range-area", title: "range-area" },
      { path: "/charts/apex-scatter", title: "scatter" },
      { path: "/charts/apex-timeline", title: "timeline" },
      { path: "/charts/apex-treemap", title: "treemap" }
    ]
  },
  {
    title: "icons",
    icon: Trophy,
    subMenu: [
      { path: "/icons/remix", title: "remix" },
      { path: "/icons/lucide", title: "lucide" }
    ]
  },
  {
    title: "maps",
    icon: Map,
    subMenu: [
      { path: "/maps/google", title: "google-maps" },
      { path: "/maps/amcharts", title: "amcharts" }
    ]
  },
  {
    title: "multi-level",
    icon: Share2,
    subMenu: [
      { path: "#", title: "level-1.1" },
      {
        title: "level-1.2",
        subMenu: [
          { title: "level-2.1", path: "#" },
          { title: "level-2.2", path: "#" }
        ]
      }
    ]
  }
];
