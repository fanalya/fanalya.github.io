<script lang="ts" setup>
import { onMounted } from "vue";
import { Home } from "lucide-vue-next";

onMounted(() => {
  document.body.setAttribute(
    "class",
    "flex items-center justify-center min-h-screen py-16 bg-cover bg-auth-pattern dark:bg-auth-pattern-dark font-public"
  );
});
</script>
<template>
  <div class="mt-10">
    <img src="@/assets/images/auth/error-404.png" alt="" class="h-64 mx-auto" />
  </div>
  <div class="mt-8 text-center">
    <h4 class="mb-2 text-purple-500">OPPS, PAGE NOT FOUND</h4>
    <p class="mb-6 text-slate-500 dark:text-zink-200">
      It will be as straightforward as Occidental; in fact, it will be just like
      Occidental to an English speaker.
    </p>
    <router-link
      to="/"
      class="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
    >
      <Home class="inline-block size-3 mr-2 rtl:ml-1"></Home>
      <span class="align-middle">Back to Home</span>
    </router-link>
  </div>
</template>
