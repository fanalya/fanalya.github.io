<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LogoDark from "@/assets/images/logo-dark.png";
import LogoLight from "@/assets/images/logo-light.png";
import { Menu, ShoppingBag, LogIn } from "lucide-vue-next";

const activeSection = ref("home");
const routes = [
  { title: "Home", value: "home" },
  { title: "Our Product", value: "product" },
  { title: "Features", value: "features" },
  { title: "About Us", value: "about" },
  { title: "Feedback", value: "feedback" }
];

const handleScroll = (ev: Event) => {
  ev.preventDefault();
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }
};

const scrollToSection = (sectionId: string) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

const toggleMenu = () => {
  document.getElementById("navbar7")?.classList.toggle("hidden");
};
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 flex items-center justify-center h-20 py-3 [&.is-sticky]:bg-white dark:[&.is-sticky]:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 [&.is-sticky]:shadow-lg [&.is-sticky]:shadow-slate-200/25 dark:[&.is-sticky]:shadow-zinc-700/30 navbar w-screen"
    id="navbar"
  >
    <div
      class="container 2xl:max-w-[87.5rem] px-4 mx-auto flex items-center self-center w-full"
    >
      <div class="shrink-0">
        <a href="#!">
          <img :src="LogoDark" alt="" class="block h-6 dark:hidden" />
          <img :src="LogoLight" alt="" class="hidden h-6 dark:block" />
        </a>
      </div>
      <div class="mx-auto">
        <ul
          id="navbar7"
          class="absolute inset-x-0 z-20 items-center hidden py-3 mt-px bg-white shadow-lg md:mt-0 dark:bg-zinc-800 dark:md:bg-transparent md:z-0 navbar-menu rounded-b-md md:shadow-none md:flex top-full ltr:ml-auto rtl:mr-auto md:relative md:bg-transparent md:rounded-none md:top-auto md:py-0"
        >
          <li v-for="route in routes" :key="route.value">
            <a
              :href="`#${route.value}`"
              class="block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zinc-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500"
              :class="{
                active: activeSection === route.value
              }"
              @click.prevent="scrollToSection(route.value)"
              >{{ route.title }}</a
            >
          </li>
        </ul>
      </div>
      <div class="flex gap-2">
        <div class="ltr:ml-auto rtl:mr-auto md:hidden navbar-toggale-button">
          <TButton
            icon
            classes="flex items-center  justify-center size-[37.5px] p-0"
            @click="toggleMenu"
          >
            <Menu />
          </TButton>
        </div>
        <TButton variant="link" color="slate">
          <ShoppingBag
            data-lucide="shopping-bag"
            class="inline-block size-4"
          />
        </TButton>
        <TButton
          classes="text-white border-0 btn bg-gradient-to-r from-custom-500 to-purple-500 hover:text-white hover:from-purple-500 hover:to-custom-500"
        >
          <span class="align-middle">Sign In</span>
          <LogIn class="inline-block size-4 ltr:ml-1 rtl:mr-1" />
        </TButton>
      </div>
    </div>
  </nav>
</template>
