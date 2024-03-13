// import DefaultLayout from "@/layouts/Default.vue";
import { defineAsyncComponent } from "vue";
import { LAYOUT_TYPES } from "@/layouts/types.js";

const BasicLayout = defineAsyncComponent(() => import("@/layouts/Basic.vue"));
// const BoxedLayout = defineAsyncComponent(() => import("@/layouts/Boxed.vue"));
// const CoverLayout = defineAsyncComponent(() => import("@/layouts/Cover.vue"));
// const ModernLayout = defineAsyncComponent(() => import("@/layouts/Modern.vue"));

const accountRoutes = [
  {
    path: "/",
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


export const routes = [
...accountRoutes
];
