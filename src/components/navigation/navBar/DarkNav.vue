<script lang="ts" setup>
import { ref } from "vue";
import { ShoppingBag, Bell, UserCircle, Menu, Search } from "lucide-vue-next";

const navData = ["Home", "About Us", "Service", "Blog", "Contact"];
const activeNav = ref("Home");
</script>
<template>
  <h6 class="mb-4 mt-7 text-16">Dark Navbar</h6>

  <nav
    class="group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:dark:border-zink-500 flex items-center h-16 px-4 py-2 mb-4 rounded-md shadow-md bg-slate-900 dark:bg-zink-600 navbar"
  >
    <div class="shrink-0">
      <a href="#!"
        ><img src="@/assets/images/logo-light.png" alt="" class="h-5"
      /></a>
    </div>
    <ul
      id="navbar3"
      class="overflow-x-auto absolute inset-x-0 z-20 items-center hidden py-3 mx-auto bg-white shadow-lg dark:bg-zink-600 dark:md:bg-transparent md:z-0 navbar-menu rounded-b-md md:shadow-none md:flex top-full md:relative md:bg-transparent md:rounded-none md:top-auto md:py-0"
    >
      <li v-for="item in navData">
        <a
          href="#!"
          class="block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-400 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500"
          :class="{
            active: item === activeNav
          }"
          @click="activeNav = item"
          >{{ item }}
        </a>
      </li>
    </ul>
    <ul id="navbar4" class="flex items-center ltr:ml-auto rtl:mr-auto">
      <li>
        <a
          href="#!"
          class="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-400 hover:text-custom-500 active:text-custom-500 group/item dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500"
        >
          <Search
            class="size-4 fill-slate-50/10 group-hover/item:fill-custom-400/20 dark:fill-zink-500"
        /></a>
      </li>
      <li>
        <a
          href="#!"
          class="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-400 hover:text-custom-500 active:text-custom-500 group/item dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500"
        >
          <ShoppingBag
            class="size-4 fill-slate-50/10 group-hover/item:fill-custom-400/20 dark:fill-zink-500"
        /></a>
      </li>
      <li>
        <a
          href="#!"
          class="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-400 hover:text-custom-500 active:text-custom-500 group/item dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500"
        >
          <Bell
            class="size-4 fill-slate-50/10 group-hover/item:fill-custom-400/20 dark:fill-zink-500"
        /></a>
      </li>
      <li>
        <a
          href="#!"
          class="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-400 hover:text-custom-500 active:text-custom-500 group/item dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500"
        >
          <UserCircle
            data-lucide="user-circle"
            class="size-4 fill-slate-50/10 group-hover/item:fill-custom-400/20 dark:fill-zink-500"
          />
        </a>
      </li>
    </ul>
    <div class="md:hidden navbar-toggale-button">
      <button
        type="button"
        class="flex items-center justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
      >
        <Menu />
      </button>
    </div>
  </nav>
</template>
