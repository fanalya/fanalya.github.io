import { defineStore } from "pinia";
import { setAttribute } from "@/app/utils.js";
import {
  LAYOUTS,
  LAYOUT_WIDTH,
  SITE_MODE,
  TOP_BAR,
  SIDEBAR_SIZE,
  SIDEBAR_COLOR,
  SKIN_LAYOUT,
  DIR,
  NAV_BAR_TYPE
} from "@/app/const";

export const useLayoutStore = defineStore("layout-store", {
  state: () => ({
    mode: SITE_MODE.DARK,
    layoutType: LAYOUTS.HORIZONTAL,
    layoutWidth: LAYOUT_WIDTH.FLUID,
    topBarColor: TOP_BAR.DARK,
    sideBarSize: SIDEBAR_SIZE.DEFAULT,
    sideBarColor: SIDEBAR_COLOR.DARK,
    dir: DIR.LTR,
    skinLayout: SKIN_LAYOUT.DEFAULT,
    navType: NAV_BAR_TYPE.STICKY
  }),
  actions: {
    changeSiteMode(mode) {
      this.mode = mode;
      this.topBarColor = mode;
      this.sideBarColor = mode;
      setAttribute("data-mode", this.mode);
      setAttribute("data-topbar", this.mode);
      setAttribute("data-sidebar", this.mode);
    },
    changeLayoutType(layoutType) {
      this.layoutType = layoutType;
      if (layoutType === LAYOUTS.HORIZONTAL) {
        this.changeSideBarSize(SIDEBAR_SIZE.DEFAULT);
        if (this.sideBarColor === SIDEBAR_COLOR.MODERN) {
          this.changeSideBarColor(this.topBarColor);
        }
      } else {
        this.changeSideBarColor(this.sideBarColor);
      }
      setAttribute("data-layout", layoutType);
    },
    changeTopBarColor(topBarColor) {
      this.topBarColor = topBarColor;
      setAttribute("data-topbar", topBarColor);
    },
    changeSkinLayout(skinLayout) {
      this.skinLayout = skinLayout;
      setAttribute("data-skin", skinLayout);
    },
    changeDir(dir) {
      this.dir = dir;
      setAttribute("dir", dir);
    },
    changeLayoutWidth(layoutWidth) {
      this.layoutWidth = layoutWidth;
      setAttribute("data-content", layoutWidth);
    },
    changeSideBarSize(sideBarSize) {
      this.sideBarSize = sideBarSize;
      setAttribute("data-sidebar-size", sideBarSize);
    },
    changeNavType(navType) {
      this.navType = navType;
      setAttribute("data-navbar", navType);
    },
    changeSideBarColor(sideBarColor) {
      this.sideBarColor = sideBarColor;
      setAttribute("data-sidebar", sideBarColor);
    }
  }
});
