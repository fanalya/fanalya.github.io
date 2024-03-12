<script lang="ts" setup>
import LogoDark from "@/assets/images/logo-dark.png";
import LogoLight from "@/assets/images/logo-light.png";
import {
  Facebook,
  ChevronUp,
  Linkedin,
  Instagram,
  Twitter,
  Youtube
} from "lucide-vue-next";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { contactData } from "@/components/landing/products/utils.ts";
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
const currentYear = ref<number>(0);
const isBactToTopEle = ref(false);
const handleScroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    isBactToTopEle.value = true;
  } else {
    isBactToTopEle.value = false;
  }
};
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  currentYear.value = new Date().getFullYear();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section
    class="relative py-20 border-t border-slate-200 dark:border-zinc-800"
  >
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="grid items-center grid-cols-1 gap-5 lg:grid-cols-12">
        <div class="lg:col-span-8" data-aos="fade-right">
          <h1 class="mb-4 leading-normal capitalize">
            Sign up for update & newsletter
          </h1>
          <p class="text-lg text-slate-500 dark:text-zinc-400">
            Tell us which describes you, and we'll get in touch with next steps.
          </p>
        </div>
        <div class="ltr:lg:text-right rtl:lg:text-left lg:col-span-4">
          <form action="#!" class="relative" data-aos="fade-left">
            <input
              type="email"
              id="subscribeInput"
              class="py-3 ltr:pr-40 rtl:pl-40 bg-slate-100 dark:bg-zinc-800/40 form-input text-slate-200 border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-custom-500 dark:focus:border-custom-500 placeholder:text-slate-500 dark:placeholder:text-zinc-400 backdrop-blur-md"
              autocomplete="off"
              placeholder="tailwick@themesdesign.com"
              required
            />
            <button
              type="submit"
              class="absolute px-6 py-2 text-base transition-all duration-200 ease-linear border-0 ltr:right-1 rtl:left-1 text-custom-50 btn top-1 bottom-1 bg-gradient-to-r from-custom-500 to-purple-500 hover:text-white hover:from-purple-500 hover:to-custom-500"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer
    class="relative pt-20 pb-12 border-t border-slate-200 dark:border-zinc-800"
  >
    <div
      class="absolute left-0 size-64 bg-purple-500 -top-16 opacity-10 blur-3xl"
    ></div>
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="relative z-10 grid grid-cols-12 gap-5 xl:grid-cols-12">
        <div class="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4">
          <div class="mb-5">
            <a href="#!"
              ><img :src="LogoLight" alt="" class="hidden h-7 dark:block"
            /></a>
            <a href="#!"
              ><img :src="LogoDark" alt="" class="block h-7 dark:hidden"
            /></a>
          </div>
          <p class="mb-5 text-slate-500 dark:text-zinc-400">
            Premium Multipurpose Admin & Dashboard Template You can build any
            type of web application like eCommerce, CRM, CMS, Project management
            apps, Admin Panels, etc using Tailwick.
          </p>
          <ul class="flex items-center gap-3">
            <li>
              <a
                href="#!"
                class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500"
              >
                <Facebook class="size-4" />
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500"
              >
                <Linkedin class="size-4" />
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500"
              >
                <Instagram class="size-4" />
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500"
              >
                <Twitter data-lucide="twitter" class="size-4" />
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-500 border-slate-200 dark:text-zinc-400 dark:border-zinc-800 hover:text-custom-500 dark:hover:text-custom-500"
              >
                <Youtube class="size-4" />
              </a>
            </li>
          </ul>
        </div>
        <div
          v-for="(section, index) in contactData"
          :key="index"
          :class="`col-span-12 md:col-span-4 lg:col-span-4 ${section.class}`"
        >
          <h5 class="mb-4 font-medium tracking-wider dark:text-zink-50">
            {{ section.title }}
          </h5>
          <ul class="flex flex-col gap-3 text-15">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <a
                :href="link.url"
                class="relative inline-block transition-all duration-200 ease-linear text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-50 before:absolute before:border-b before:border-slate-200 dark:before:border-zinc-700 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="pt-10 mt-16 text-center border-t text-slate-500 dark:text-zinc-400 dark:border-zinc-800 text-16"
    >
      <p>
        {{ currentYear }}
        © Tailwick. Design & Develop by
        <a href="#!" class="underline text-slate-800 dark:text-zinc-100"
          >Themesdesign</a
        >
      </p>
    </div>
  </footer>

  <TButton
    v-if="isBactToTopEle"
    id="back-to-top"
    @click="topFunction"
    color="purple"
    classes="fixed !w-10 !h-10 p-0 bottom-10 right-10"
  >
    <ChevronUp class="animate animate-icons right-3" />
  </TButton>
</template>
