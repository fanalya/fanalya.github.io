<script lang="ts" setup>
import { iconsData } from "@/components/icons/remix/utils.ts";
</script>
<template>
  <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
    <TAlert class="mb-4" color="red">
      <a
        href="https://remixicon.com"
        class="font-semibold underline"
        target="_blank"
      >
        https://remixicon.com
      </a>
      Open-source neutral-style system symbols elaborately crafted for designers
      and developers. All of the icons are free for both personal and commercial
      use.
    </TAlert>

    <TCard title="Simple Icons (2500+)">
      <div class="flex flex-wrap justify-center gap-4 mb-5">
        <div
          v-for="(icon, index) in iconsData"
          :key="index"
          class="flex items-center justify-center size-12 text-lg border rounded-md border-slate-200 text-slate-500 dark:border-zink-500 dark:text-zink-200"
          v-tippy="icon.content"
        >
          <i :class="icon.iconClass" />
        </div>
      </div>

      <div class="text-center">
        <a
          href="https://remixicon.com/"
          class="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100"
        >
          Remix Icons Library
        </a>
      </div>
    </TCard>
  </div>
</template>
