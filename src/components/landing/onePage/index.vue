<script lang="ts" setup>
import { onMounted } from "vue";
import Navbar from "@/components/landing/onePage/Navbar.vue";
import Home from "@/components/landing/onePage/Home.vue";
import Features from "@/components/landing/onePage/Features.vue";
import About from "@/components/landing/onePage/About.vue";
import Pricing from "@/components/landing/onePage/Pricing.vue";
import Contact from "@/components/landing/onePage/Contact.vue";

onMounted(() => {
  document.body.setAttribute(
    "class",
    "text-base bg-white text-body font-public dark:text-zink-50 dark:bg-zink-800"
  );
  document.documentElement.setAttribute(
    "class",
    "overflow-x-hidden scroll-smooth group"
  );
});
</script>

<template>
  <Navbar />
  <Home />
  <Features />
  <About />
  <section class="relative pb-32" id="pricing">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="mx-auto text-center xl:max-w-3xl">
        <h1 class="mb-4 leading-normal capitalize">
          Tailored Website Design Package
        </h1>
        <p class="text-lg text-slate-500 dark:text-zink-200">
          A good web design package will include designing a logo, ingratiation
          with local SEO, linking a site to a social media presence, and more.
        </p>
      </div>
      <div class="grid grid-cols-1 mt-16 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
        <Pricing />
      </div>
    </div>
  </section>
  <Contact />
</template>
