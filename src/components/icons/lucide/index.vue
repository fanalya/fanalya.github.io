<script lang="ts" setup>
import { icons, iconData } from "@/components/icons/lucide/utils.ts";
</script>

<template>
  <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
    <TAlert color="red" class="mb-3">
      <span class="text-wrap">
        The
        <a
          href="https://lucide.dev/guide/packages/lucide"
          class="font-semibold underline"
          target="_blank"
        >
          https://lucide.dev/guide/packages/lucide
        </a>
        provides even more options and customization possibilities for creating
        engaging carousels. Remember to adjust image URLs and content according
        to your project.
      </span>
    </TAlert>
    <TCard title="Simple Icons (1000+)">
      <div class="flex flex-wrap justify-center gap-4 mb-5">
        <div
          v-for="(icon, index) in icons"
          :key="'icon-' + index"
          class="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500"
          v-tippy="icon.content"
        >
          <component
            :is="icon.icon"
            class="inline-block size-5 text-slate-500 dark:text-zink-200"
          />
        </div>
      </div>
      <div class="text-center">
        <a
          href="https://lucide.dev/icons"
          class="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100"
          >Lucide Icons Library</a
        >
      </div>
    </TCard>

    <TCard title="Dual Color Variant Icons">
      <div class="flex flex-wrap gap-4">
        <div
          v-for="(icon, index) in iconData"
          :key="index"
          class="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500"
          v-tippy="icon.content"
        >
          <component
            :is="icon.icon"
            :class="[
              'inline-block size-5',
              icon.textColor,
              icon.fillColor,
              icon.animateClass,
              icon.darkFillColor
            ]"
          />
        </div>
      </div>
    </TCard>

    <TCard title="Animation Icons">
      <div class="flex flex-wrap gap-4">
        <div
          v-for="(icon, index) in iconData"
          :key="index"
          class="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500"
          v-tippy="icon.content"
        >
          <component
            :is="icon.icon"
            :class="[
              'inline-block size-5',
              icon.textColor,
              icon.fillColor,
              icon.animateClass,
              icon.darkFillColor,
              'animate animate-icons '
            ]"
          />
        </div>
      </div>
    </TCard>
  </div>
</template>
