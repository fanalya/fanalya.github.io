<script lang="ts" setup>
import { ref } from "vue";
import { Menu } from "lucide-vue-next";
const navData = ["Home", "About us", "Service", "Blog", "Contact"];
const activeNav = ref("Home");
const isMenu = ref(false);
</script>
<template>
  <h6 class="mb-4 mt-7 text-16">Hamburger menu</h6>
  <nav
    class="group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:dark:border-zink-500 relative flex items-center h-16 px-4 py-2 bg-white rounded-md shadow-md navbar dark:bg-zink-700"
  >
    <div class="shrink-0">
      <a href="#!">
        <img
          src="@/assets/images/logo-dark.png"
          alt=""
          class="block h-5 dark:hidden"
      /></a>
      <a href="#!">
        <img
          src="@/assets/images/logo-light.png"
          alt=""
          class="hidden h-5 dark:block"
      /></a>
    </div>
    <ul
      id="navbar8"
      class="absolute inset-x-0 z-20 items-center py-3 bg-white shadow-lg dark:bg-zink-600 navbar-menu rounded-b-md top-full ltr:ml-auto rtl:mr-auto"
      :class="{
        hidden: !isMenu
      }"
    >
      <li v-for="item in navData">
        <a
          href="#!"
          class="block px-4 py-2.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500"
          :class="{
            active: item === activeNav
          }"
          @click="activeNav = item"
          >{{ item }}
        </a>
      </li>
    </ul>
    <div class="ltr:ml-auto rtl:mr-auto navbar-toggale-button">
      <TButton icon class="p-1" @click="isMenu = !isMenu">
        <Menu />
      </TButton>
    </div>
  </nav>
</template>
