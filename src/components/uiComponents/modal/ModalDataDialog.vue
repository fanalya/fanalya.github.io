<script lang="ts" setup>
import { X } from "lucide-vue-next";
const emit = defineEmits(["onClose"]);
</script>
<template>
  <div class="bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
    <div
      class="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
    >
      <h5 class="text-16">Modal Heading</h5>
      <button
        data-modal-close="bottomModal"
        class="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500"
        @click="emit('onClose')"
      >
        <X class="size-5" />
      </button>
    </div>
    <div
      class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
    >
      <h5 class="mb-3 text-16">Modal Content</h5>
      <p class="text-slate-500 dark:text-zink-200">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic.
      </p>
    </div>
    <div
      class="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500"
    >
      <h5 class="text-16">Modal Footer</h5>
    </div>
  </div>
</template>
