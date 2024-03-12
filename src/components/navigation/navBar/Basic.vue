<script lang="ts" setup>
import { ref } from "vue";
import { Menu } from "lucide-vue-next";
const navData = ["Home", "About us", "Service", "Blog", "Contact"];
const basicNav = ref("Home");
</script>
<template>
  <h6 class="mb-4 text-15">Basic Navbar</h6>
  <nav
    class="group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:dark:border-zink-500 relative flex items-center h-16 px-4 py-2 bg-white rounded-md shadow-md navbar dark:bg-zink-700"
  >
    <div class="shrink-0">
      <a href="#!">
        <img
          src="@/assets/images/logo-dark.png"
          alt=""
          class="block h-5 dark:hidden"
        />
      </a>
      <a href="#!">
        <img
          src="@/assets/images/logo-light.png"
          alt=""
          class="hidden h-5 dark:block"
        />
      </a>
    </div>
    <ul
      id="navbar7"
      class="absolute inset-x-0 z-20 items-center hidden py-3 bg-white shadow-lg dark:bg-zink-600 dark:md:bg-transparent md:z-0 navbar-menu rounded-b-md md:shadow-none md:flex top-full ltr:ml-auto rtl:mr-auto md:relative md:bg-transparent md:rounded-none md:top-auto md:py-0"
    >
      <li v-for="item in navData">
        <a
          href="#!"
          class="block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500"
          :class="{
            active: item === basicNav
          }"
          @click="basicNav = item"
        >
          {{ item }}
        </a>
      </li>
    </ul>
    <div class="ltr:ml-auto rtl:mr-auto md:hidden navbar-toggale-button">
      <button
        type="button"
        class="flex items-center justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
      >
        <Menu />
      </button>
    </div>
  </nav>
</template>
