import DefaultLayout from "@/layouts/Default.vue";
import { defineAsyncComponent } from "vue";
import { LAYOUT_TYPES } from "@/layouts/types.ts";

const BasicLayout = defineAsyncComponent(() => import("@/layouts/Basic.vue"));
const BoxedLayout = defineAsyncComponent(() => import("@/layouts/Boxed.vue"));
const CoverLayout = defineAsyncComponent(() => import("@/layouts/Cover.vue"));
const ModernLayout = defineAsyncComponent(() => import("@/layouts/Modern.vue"));

const accountRoutes = [
  {
    path: "/login",
    name: "SignInAccount",
    component: () => import("@/views/account/Login.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Sign In",
      authRequired: false,
      layout: BasicLayout
    }
  }
];

const dashboardRoutes = [
  {
    path: "/",
    name: "ECommerce",
    component: () => import("@/views/dashboard/Ecommerce.vue"),
    meta: {
      title: "ECommerce",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/dashboards/analytics",
    name: "Analytics",
    component: () => import("@/views/dashboard/Analytics.vue"),
    meta: {
      title: "Analytics",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/dashboards/email",
    name: "Email",
    component: () => import("@/views/dashboard/Email.vue"),
    meta: {
      title: "Email",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/dashboards/hr",
    name: "HR",
    component: () => import("@/views/dashboard/HR.vue"),
    meta: {
      title: "HR",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/dashboards/social-media",
    name: "SocialMedia",
    component: () => import("@/views/dashboard/SocialMedia.vue"),
    meta: {
      title: "Social Media",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const landingRoutes = [
  {
    path: "/onepage/landing",
    name: "OnePage",
    component: () => import("@/views/landing/OnePage.vue"),
    meta: {
      title: "One Page",
      authRequired: true
    }
  },
  {
    path: "/product/landing",
    name: "Product",
    component: () => import("@/views/landing/Product.vue"),
    meta: {
      title: "Product",
      authRequired: true
    }
  }
];
const calendarRoutes = [
  {
    path: "/calendar",
    name: "Default Calendar",
    component: () => import("@/views/calendar/Default.vue"),
    meta: {
      title: "Calendar",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/calendar/month-grid",
    name: "Calendar Month Grid",
    component: () => import("@/views/calendar/MonthGrid.vue"),
    meta: {
      title: "Calendar Monthl",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/calendar/multi-month-stack",
    name: "Calendar Month",
    component: () => import("@/views/calendar/MultiMonth.vue"),
    meta: {
      title: "Calendar Month",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const eCommerceRoutes = [
  {
    path: "/ecommerce/product-list",
    name: "ProductsListView",
    component: () => import("@/views/eCommerce/products/ListView.vue"),
    meta: {
      title: "List View",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/product-grid",
    name: "ProductsGridView",
    component: () => import("@/views/eCommerce/products/GridView.vue"),
    meta: {
      title: "Grid View",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/product-overview",
    name: "ProductsOverview",
    component: () => import("@/views/eCommerce/products/Overview.vue"),
    meta: {
      title: "Overview",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/product-create",
    name: "ProductsCreate",
    component: () => import("@/views/eCommerce/products/AddNewProduct.vue"),
    meta: {
      title: "Add New",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/cart",
    name: "ECommerceCart",
    component: () => import("@/views/eCommerce/Cart.vue"),
    meta: {
      title: "Shopping Cart",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/checkout",
    name: "ECommerceCheckout",
    component: () => import("@/views/eCommerce/Checkout.vue"),
    meta: {
      title: "Checkout",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/orders",
    name: "ECommerceOrders",
    component: () => import("@/views/eCommerce/Orders.vue"),
    meta: {
      title: "Order Lists",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/order-overview",
    name: "ECommerceOverview",
    component: () => import("@/views/eCommerce/OrderOverview.vue"),
    meta: {
      title: "Order Overview",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ecommerce/sellers",
    name: "ECommerceSellers",
    component: () => import("@/views/eCommerce/Sellers.vue"),
    meta: {
      title: "Sellers",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const hrManagementRoutes = [
  {
    path: "/hr/employee",
    name: "Employee List",
    component: () => import("@/views/hr/Employee.vue"),
    meta: {
      title: "Employee List",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/holidays",
    name: "Holiday",
    component: () => import("@/views/hr/Holidays.vue"),
    meta: {
      title: "Holiday",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/leave-employee",
    name: "Leave Manage (Employee)",
    component: () => import("@/views/hr/LeavebyEmployee.vue"),
    meta: {
      title: "Leave Manage (Employee)",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/create-leave-employee",
    name: "Leave Create (Employee)",
    component: () => import("@/views/hr/CreateLeaveEmployee.vue"),
    meta: {
      title: "Leave Create (Employee)",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/leave",
    name: "Leave Manage (HR)",
    component: () => import("@/views/hr/LeavebyHR.vue"),
    meta: {
      title: "Leave Manage (HR)",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/create-leave",
    name: "Leave Create (HR)",
    component: () => import("@/views/hr/CreateLeaveHR.vue"),
    meta: {
      title: "Leave Create (HR)",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/attendance",
    name: "Attendance",
    component: () => import("@/views/hr/AttendanceHR.vue"),
    meta: {
      title: "Attendance",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/attendance/main",
    name: "Main Attendance",
    component: () => import("@/views/hr/AttendanceMain.vue"),
    meta: {
      title: "Main Attendance",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/department",
    name: "Departments",
    component: () => import("@/views/hr/Departments.vue"),
    meta: {
      title: "Departments",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/sales/estimates",
    name: "Estimates",
    component: () => import("@/views/hr/SalesEstimates.vue"),
    meta: {
      title: "Estimates",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/sales/payments",
    name: "Payments",
    component: () => import("@/views/hr/SalesPayments.vue"),
    meta: {
      title: "Payments",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/payroll/payslip",
    name: "Payslip",
    component: () => import("@/views/hr/SalesPaySlip.vue"),
    meta: {
      title: "Payslip",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/payroll/create-payslip",
    name: "CreatePayslip",
    component: () => import("@/views/hr/CreatePayslip.vue"),
    meta: {
      title: "Create Payslip",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/payroll/employee-salary",
    name: "Employee-salary",
    component: () => import("@/views/hr/SalesEmployeeSalary.vue"),
    meta: {
      title: "Employee-salary",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/hr/sales/expenses",
    name: "Expenses",
    component: () => import("@/views/hr/SalesExpenses.vue"),
    meta: {
      title: "Expenses",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const socialRoutes = [
  {
    path: "/social/friends",
    name: "Friends",
    component: () => import("@/views/social/Friends.vue"),
    meta: {
      title: "Friends",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/social/event",
    name: "Event",
    component: () => import("@/views/social/Event.vue"),
    meta: {
      title: "Event",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/social/video",
    name: "WatchVideo",
    component: () => import("@/views/social/WatchVideo.vue"),
    meta: {
      title: "Watch Video",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/social/marketplace",
    name: "Marketplace",
    component: () => import("@/views/social/Marketplace.vue"),
    meta: {
      title: "Marketplace",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const invoiceRoutes = [
  {
    path: "/invoice/list",
    name: "InvoiceList",
    component: () => import("@/views/invoice/ListView.vue"),
    meta: {
      title: "List View",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/invoice/add-new",
    name: "AddInvoice",
    component: () => import("@/views/invoice/AddNew.vue"),
    meta: {
      title: "Add New",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/invoice/overview",
    name: "InvoiceOverview",
    component: () => import("@/views/invoice/Overview.vue"),
    meta: {
      title: "Overview",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const usersRoutes = [
  {
    path: "/users/list",
    name: "UsersList",
    component: () => import("@/views/users/List.vue"),
    meta: {
      title: "List View",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/users/grid",
    name: "UsersGrid",
    component: () => import("@/views/users/Grid.vue"),
    meta: {
      title: "Grid View",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];

const authRoutes = [
  {
    path: "/login/basic",
    name: "SignInBasic",
    component: () => import("@/views/authentication/Login.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Sign In",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/login/cover",
    name: "SignInCover",
    component: () => import("@/views/authentication/Login.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Sign In",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/login/boxed",
    name: "SignInBoxed",
    component: () => import("@/views/authentication/Login.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BOXED }),
    meta: {
      title: "Sign In",
      authRequired: false,
      layout: BoxedLayout
    }
  },
  {
    path: "/login/modern",
    name: "SignInModern",
    component: () => import("@/views/authentication/Login.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Sign In",
      authRequired: false,
      layout: ModernLayout
    }
  },
  {
    path: "/register/basic",
    name: "RegisterBasic",
    component: () => import("@/views/authentication/Register.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Register",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/register/cover",
    name: "RegisterCover",
    component: () => import("@/views/authentication/Register.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Register",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/register/boxed",
    name: "RegisterBoxed",
    component: () => import("@/views/authentication/Register.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BOXED }),
    meta: {
      title: "Register",
      authRequired: false,
      layout: BoxedLayout
    }
  },
  {
    path: "/register/modern",
    name: "RegisterModern",
    component: () => import("@/views/authentication/Register.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Register",
      authRequired: false,
      layout: ModernLayout
    }
  },
  {
    path: "/verify-email/basic",
    name: "VerifyEmailBasic",
    component: () => import("@/views/authentication/VerifyEmail.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Verify Email",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/verify-email/cover",
    name: "VerifyEmailCover",
    component: () => import("@/views/authentication/VerifyEmail.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Verify Email",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/verify-email/modern",
    name: "VerifyEmailModern",
    component: () => import("@/views/authentication/VerifyEmail.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Verify Email",
      authRequired: false,
      layout: ModernLayout
    }
  },
  {
    path: "/two-steps/basic",
    name: "TwoStepBasic",
    component: () => import("@/views/authentication/TwoStep.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Two Steps",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/two-steps/cover",
    name: "TwoStepCover",
    component: () => import("@/views/authentication/TwoStep.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Two Step",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/two-steps/boxed",
    name: "TwoStepBoxed",
    component: () => import("@/views/authentication/TwoStep.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BOXED }),
    meta: {
      title: "Two Step",
      authRequired: false,
      layout: BoxedLayout
    }
  },
  {
    path: "/two-steps/modern",
    name: "TwoStepModern",
    component: () => import("@/views/authentication/TwoStep.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Two Step",
      authRequired: false,
      layout: ModernLayout
    }
  },
  {
    path: "/logout/basic",
    name: "LogoutBasic",
    component: () => import("@/views/authentication/Logout.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Logout",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/logout/cover",
    name: "LogoutCover",
    component: () => import("@/views/authentication/Logout.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Logout",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/logout/boxed",
    name: "LogoutBoxed",
    component: () => import("@/views/authentication/Logout.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BOXED }),
    meta: {
      title: "Logout",
      authRequired: false,
      layout: BoxedLayout
    }
  },
  {
    path: "/logout/modern",
    name: "LogoutModern",
    component: () => import("@/views/authentication/Logout.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Logout",
      authRequired: false,
      layout: ModernLayout
    }
  },
  {
    path: "/reset-password/basic",
    name: "ResetPasswordBasic",
    component: () => import("@/views/authentication/ResetPassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Reset Password",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/reset-password/cover",
    name: "ResetPasswordCover",
    component: () => import("@/views/authentication/ResetPassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Reset Password",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/reset-password/boxed",
    name: "ResetPasswordBoxed",
    component: () => import("@/views/authentication/ResetPassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BOXED }),
    meta: {
      title: "Reset Password",
      authRequired: false,
      layout: BoxedLayout
    }
  },
  {
    path: "/reset-password/modern",
    name: "ResetPasswordModern",
    component: () => import("@/views/authentication/ResetPassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Reset Password",
      authRequired: false,
      layout: ModernLayout
    }
  },
  {
    path: "/create-password/basic",
    name: "CreatePasswordBasic",
    component: () => import("@/views/authentication/CreatePassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BASIC }),
    meta: {
      title: "Create Password",
      authRequired: false,
      layout: BasicLayout
    }
  },
  {
    path: "/create-password/cover",
    name: "CreatePasswordCover",
    component: () => import("@/views/authentication/CreatePassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.COVER }),
    meta: {
      title: "Create Password",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/create-password/boxed",
    name: "CreatePasswordBoxed",
    component: () => import("@/views/authentication/CreatePassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.BOXED }),
    meta: {
      title: "Create Password",
      authRequired: false,
      layout: BoxedLayout
    }
  },
  {
    path: "/create-password/modern",
    name: "CreatePasswordModern",
    component: () => import("@/views/authentication/CreatePassword.vue"),
    props: () => ({ layout: LAYOUT_TYPES.MODERN }),
    meta: {
      title: "Create Password",
      authRequired: false,
      layout: ModernLayout
    }
  }
];
const pagesRoutes = [
  {
    path: "/pages/account",
    name: "Account",
    component: () => import("@/views/pages/Account.vue"),
    meta: {
      title: "Account",
      authRequired: false,
      layout: DefaultLayout
    }
  },
  {
    path: "/pages/settings",
    name: "Settings",
    component: () => import("@/views/pages/Settings.vue"),
    meta: {
      title: "Settings",
      authRequired: false,
      layout: DefaultLayout
    }
  },
  {
    path: "/pages/pricing",
    name: "Pricing",
    component: () => import("@/views/pages/Pricing.vue"),
    meta: {
      title: "Pricing",
      authRequired: false,
      layout: DefaultLayout
    }
  },
  {
    path: "/pages/faqs",
    name: "Faqs",
    component: () => import("@/views/pages/Faqs.vue"),
    meta: {
      title: "Faqs",
      authRequired: false,
      layout: DefaultLayout
    }
  },
  {
    path: "/pages/contact-us",
    name: "ContactUs",
    component: () => import("@/views/pages/ContactUs.vue"),
    meta: {
      title: "Contact Us",
      authRequired: false,
      layout: DefaultLayout
    }
  },
  {
    path: "/pages/coming-soon",
    name: "ComingSoon",
    component: () => import("@/views/pages/ComingSoon.vue"),
    meta: {
      title: "Coming Soon",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/pages/404",
    name: "Error404",
    component: () => import("@/views/pages/error/404.vue"),
    meta: {
      title: "404",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/pages/offline",
    name: "ErrorOffline",
    component: () => import("@/views/pages/error/Offline.vue"),
    meta: {
      title: "Offline",
      authRequired: false,
      layout: CoverLayout
    }
  },
  {
    path: "/pages/maintenance",
    name: "Maintenance",
    component: () => import("@/views/pages/Maintenance.vue"),
    meta: {
      title: "Maintenance",
      authRequired: false,
      layout: CoverLayout
    }
  }
];
const uiRoutes = [
  {
    path: "/ui/alerts",
    name: "Alerts",
    component: () => import("@/views/ui/Alerts.vue"),
    meta: {
      title: "Alerts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/avatar",
    name: "Avatar",
    component: () => import("@/views/ui/Avatar.vue"),
    meta: {
      title: "Avatar",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    component: () => import("@/views/ui/Buttons.vue"),
    meta: {
      title: "Buttons",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/label",
    name: "Label",
    component: () => import("@/views/ui/Label.vue"),
    meta: {
      title: "Label",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/cards",
    name: "Cards",
    component: () => import("@/views/ui/Cards.vue"),
    meta: {
      title: "Cards",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/collapse",
    name: "Collapse",
    component: () => import("@/views/ui/Collapse.vue"),
    meta: {
      title: "Collapse",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/countdown",
    name: "Countdown",
    component: () => import("@/views/ui/Countdown.vue"),
    meta: {
      title: "Countdown",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/drawer",
    name: "Drawer",
    component: () => import("@/views/ui/Drawer.vue"),
    meta: {
      title: "Drawer",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/dropdown",
    name: "Dropdown",
    component: () => import("@/views/ui/Dropdown.vue"),
    meta: {
      title: "Dropdown",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/gallery",
    name: "Gallery",
    component: () => import("@/views/ui/Gallery.vue"),
    meta: {
      title: "Gallery",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/lists",
    name: "Lists",
    component: () => import("@/views/ui/Lists.vue"),
    meta: {
      title: "Lists",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/notification",
    name: "Notification",
    component: () => import("@/views/ui/Notification.vue"),
    meta: {
      title: "Notification",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/modal",
    name: "Modal",
    component: () => import("@/views/ui/Modal.vue"),
    meta: {
      title: "Modal",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/spinners",
    name: "Spinner",
    component: () => import("@/views/ui/Spinner.vue"),
    meta: {
      title: "Spinner",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/timeline",
    name: "Timeline",
    component: () => import("@/views/ui/Timeline.vue"),
    meta: {
      title: "Timeline",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/progress-bar",
    name: "ProgressBar",
    component: () => import("@/views/ui/ProgressBar.vue"),
    meta: {
      title: "Progress Bar",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/tooltip",
    name: "Tooltip",
    component: () => import("@/views/ui/Tooltip.vue"),
    meta: {
      title: "Tooltip",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/ui/video",
    name: "Video",
    component: () => import("@/views/ui/Video.vue"),
    meta: {
      title: "Video",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const pluginsRoutes = [
  {
    path: "/plugins/sweetalert",
    name: "SweetAlert",
    component: () => import("@/views/plugins/Sweetalert.vue"),
    meta: {
      title: "SweetAlert",
      authRequired: true,
      layout: DefaultLayout
    }
  },

  {
    path: "/plugins/simplebar",
    name: "SimpleBar",
    component: () => import("@/views/plugins/Simplebar.vue"),
    meta: {
      title: "Simplebar",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/plugins/lightbox",
    name: "lightbox",
    component: () => import("@/views/plugins/Lightbox.vue"),
    meta: {
      title: "Lightbox",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/plugins/swiper-slider",
    name: "Swiperslider",
    component: () => import("@/views/plugins/Swiperslider.vue"),
    meta: {
      title: "Swiper Slider",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/plugins/scroll-hint",
    name: "Scrollhint",
    component: () => import("@/views/plugins/Scrollhint.vue"),
    meta: {
      title: "Scrollhint",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/plugins/video-player",
    name: "Videoplayer",
    component: () => import("@/views/plugins/Videoplayer.vue"),
    meta: {
      title: "Videoplayer",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];

const navigationRoutes = [
  {
    path: "/navigation/navbars",
    name: "Navbar",
    component: () => import("@/views/navigation/NavBar.vue"),
    meta: {
      title: "Navbar",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/navigation/tabs",
    name: "Tabs",
    component: () => import("@/views/navigation/Tabs.vue"),
    meta: {
      title: "Tabs",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/navigation/breadcrumb",
    name: "Breadcrumb",
    component: () => import("@/views/navigation/Breadcrumb.vue"),
    meta: {
      title: "Breadcrumb",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/navigation/pagination",
    name: "Pagination",
    component: () => import("@/views/navigation/Pagination.vue"),
    meta: {
      title: "Pagination",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];

const formsRoutes = [
  {
    path: "/forms/basic",
    name: "BasicElement",
    component: () => import("@/views/forms/Basic.vue"),
    meta: {
      title: "Basic Elements",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/validation",
    name: "FormValidation",
    component: () => import("@/views/forms/FormValidation.vue"),
    meta: {
      title: "Forms Validation",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/input-mask",
    name: "InputMask",
    component: () => import("@/views/forms/InputMask.vue"),
    meta: {
      title: "Input Mask",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/select",
    name: "FormSelect",
    component: () => import("@/views/forms/FormSelect.vue"),
    meta: {
      title: "Form Select",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/checkbox-radio",
    name: "Radio&Checkbox",
    component: () => import("@/views/forms/RadioCheckbox.vue"),
    meta: {
      title: "Checkbox & Radio",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/switches",
    name: "Switches",
    component: () => import("@/views/forms/Switches.vue"),
    meta: {
      title: "Switch",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/wizard",
    name: "RegisterWizard",
    component: () => import("@/views/forms/Wizard.vue"),
    meta: {
      title: "Register Wizard",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/file-upload",
    name: "FileUpload",
    component: () => import("@/views/forms/FileUpload.vue"),
    meta: {
      title: "File Upload",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/datepicker",
    name: "Datepicker",
    component: () => import("@/views/forms/Datepicker.vue"),
    meta: {
      title: "Datepicker",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/timepicker",
    name: "Timepicker",
    component: () => import("@/views/forms/Timepicker.vue"),
    meta: {
      title: "Time picker",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/colorpicker",
    name: "ColorPicker",
    component: () => import("@/views/forms/ColorPicker.vue"),
    meta: {
      title: "Color picker",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/multi-select",
    name: "MultiSelect",
    component: () => import("@/views/forms/MultiSelect.vue"),
    meta: {
      title: "Multi Select",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/input-spin",
    name: "Input Spin",
    component: () => import("@/views/forms/InputSpin.vue"),
    meta: {
      title: "Input Spin",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/forms/clipboard",
    name: "Clipboard",
    component: () => import("@/views/forms/Clipboard.vue"),
    meta: {
      title: "Clipboard",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  // {
  //   path: "/forms/editor-balloon",
  //   name: "BalloonEditor",
  //   component: () => import("@/views/forms/editors/BalloonEditor.vue"),
  //   meta: {
  //     title: "Ballon Editor",
  //     authRequired: true,
  //     layout: DefaultLayout
  //   }
  // },
  {
    path: "/forms/editor-classic",
    name: "ClassicEditor",
    component: () => import("@/views/forms/editors/ClassicEditor.vue"),
    meta: {
      title: "Classic Editor",
      authRequired: true,
      layout: DefaultLayout
    }
  }
  // {
  //   path: "/forms/editor-inline",
  //   name: "InlineEditor",
  //   component: () => import("@/views/forms/editors/InlineEditor.vue"),
  //   meta: {
  //     title: "Inline Editor",
  //     authRequired: true,
  //     layout: DefaultLayout
  //   }
  // }
];
const tableRoutes = [
  {
    path: "/tables/basic",
    name: "BasicTable",
    component: () => import("@/views/tables/Basic.vue"),
    meta: {
      title: "Basic Table",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/tables/datatable",
    name: "DataTable",
    component: () => import("@/views/tables/DataTable.vue"),
    meta: {
      title: "DataTable",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/tables/listjs",
    name: "ListJs",
    component: () => import("@/views/tables/ListJs.vue"),
    meta: {
      title: "ListJs",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/tables/gridjs",
    name: "GridJS",
    component: () => import("@/views/tables/GridJs.vue"),
    meta: {
      title: "Grid Js",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const apexChartRoutes = [
  {
    path: "/charts/apex-area",
    name: "AreaCharts",
    component: () => import("@/views/apexcharts/Area.vue"),
    meta: {
      title: "Area Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-bar",
    name: "BarCharts",
    component: () => import("@/views/apexcharts/Bar.vue"),
    meta: {
      title: "Bar Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-boxplot",
    name: "BoxplotCharts",
    component: () => import("@/views/apexcharts/Boxplot.vue"),
    meta: {
      title: "Boxplot Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-bubble",
    name: "BubbleCharts",
    component: () => import("@/views/apexcharts/Bubble.vue"),
    meta: {
      title: "Bubble Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-candlstick",
    name: "CandlstickCharts",
    component: () => import("@/views/apexcharts/Candlstick.vue"),
    meta: {
      title: "Candlstick Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-column",
    name: "ColumnCharts",
    component: () => import("@/views/apexcharts/Column.vue"),
    meta: {
      title: "Column Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-funnel",
    name: "FunnelCharts",
    component: () => import("@/views/apexcharts/Funnel.vue"),
    meta: {
      title: "Funnel Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-heatmap",
    name: "HeatmapCharts",
    component: () => import("@/views/apexcharts/Heatmap.vue"),
    meta: {
      title: "Heatmap Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-line",
    name: "LineCharts",
    component: () => import("@/views/apexcharts/Line.vue"),
    meta: {
      title: "Line Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-mixed",
    name: "MixedCharts",
    component: () => import("@/views/apexcharts/Mixed.vue"),
    meta: {
      title: "Mixed Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-pie",
    name: "PieCharts",
    component: () => import("@/views/apexcharts/Pie.vue"),
    meta: {
      title: "Pie Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-polar",
    name: "PolarCharts",
    component: () => import("@/views/apexcharts/Polar.vue"),
    meta: {
      title: "Polar Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-radar",
    name: "RadarCharts",
    component: () => import("@/views/apexcharts/Radar.vue"),
    meta: {
      title: "Radar Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-radialbar",
    name: "RadialbarCharts",
    component: () => import("@/views/apexcharts/Radialbar.vue"),
    meta: {
      title: "Radialbar Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-range-area",
    name: "RangeAreaCharts",
    component: () => import("@/views/apexcharts/RangeArea.vue"),
    meta: {
      title: "Range Area Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-scatter",
    name: "ScatterCharts",
    component: () => import("@/views/apexcharts/Scatter.vue"),
    meta: {
      title: "Scatter Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-timeline",
    name: "TimelineCharts",
    component: () => import("@/views/apexcharts/Timeline.vue"),
    meta: {
      title: "Timeline Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/charts/apex-treemap",
    name: "TreemapCharts",
    component: () => import("@/views/apexcharts/Treemap.vue"),
    meta: {
      title: "Treemap Charts",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const iconRoutes = [
  {
    path: "/icons/remix",
    name: "Remix Icons",
    component: () => import("@/views/icons/Remix.vue"),
    meta: {
      title: "Remix Icons",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/icons/lucide",
    name: "Lucide Icons",
    component: () => import("@/views/icons/Lucide.vue"),
    meta: {
      title: "Lucide Icons",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
const mapRoutes = [
  {
    path: "/maps/google",
    name: "Google Maps",
    component: () => import("@/views/maps/Google.vue"),
    meta: {
      title: "Google Maps",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/maps/amcharts",
    name: "Amcharts Maps",
    component: () => import("@/views/maps/Amcharts.vue"),
    meta: {
      title: "Amcharts Maps",
      authRequired: true,
      layout: DefaultLayout
    }
  }
];
export const routes = [
  ...dashboardRoutes,
  ...landingRoutes,
  ...calendarRoutes,
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/Chat.vue"),
    meta: {
      title: "Chat",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/mailbox",
    name: "Mailbox",
    component: () => import("@/views/Mailbox.vue"),
    meta: {
      title: "Mailbox",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  {
    path: "/notes",
    name: "Notes",
    component: () => import("@/views/Notes.vue"),
    meta: {
      title: "Notes",
      authRequired: true,
      layout: DefaultLayout
    }
  },
  ...eCommerceRoutes,
  ...hrManagementRoutes,
  ...socialRoutes,
  ...invoiceRoutes,
  ...usersRoutes,
  ...authRoutes,
  ...pagesRoutes,
  ...uiRoutes,
  ...pluginsRoutes,
  ...navigationRoutes,
  ...formsRoutes,
  ...tableRoutes,
  ...apexChartRoutes,
  ...iconRoutes,
  ...mapRoutes,
  ...uiRoutes,
  ...accountRoutes
];
