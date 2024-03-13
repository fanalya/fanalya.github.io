<script lang="ts" setup>
import { Smile, Download, Monitor, Clock4 } from "lucide-vue-next";
</script>
<template>
  <TCard title="Counter with Card Colors">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        class="px-3 py-6 text-center border rounded-md dark:border-zink-500 border-slate-200"
      >
        <div
          class="flex items-center justify-center size-12 mx-auto mb-4 rounded-md text-15 bg-custom-50 dark:bg-custom-500/20"
        >
          <Smile
            class="text-custom-500 fill-custom-200 dark:fill-custom-500/30"
          />
        </div>
        <h4 class="mb-2 fs-4xl">
          <TCountTo :endVal="8000" suffix="k" />
        </h4>
        <p class="mb-0 text-slate-500 dark:text-zink-200">Happy Clients</p>
      </div>
      <div
        class="px-3 py-6 text-center bg-red-100 border border-red-200 rounded-md dark:bg-red-500/20 dark:border-red-800"
      >
        <div
          class="flex items-center justify-center size-12 mx-auto mb-4 rounded-md bg-red-50 text-15 dark:bg-red-400/20"
        >
          <Download class="text-red-500 fill-red-200 dark:fill-red-500/30" />
        </div>
        <h4 class="mb-1 text-red-500 fs-4xl">
          <TCountTo :endVal="3000" suffix="k" />
        </h4>
        <p class="mb-0 text-red-400">Downloads</p>
      </div>
      <div
        class="px-3 py-6 text-center bg-green-100 border border-green-100 rounded-md dark:bg-green-900 dark:border-zink-800"
      >
        <div
          class="flex items-center justify-center size-12 mx-auto mb-4 rounded-md bg-green-50 text-15 dark:bg-green-400/20"
        >
          <Monitor
            class="text-green-500 fill-green-200 dark:fill-green-500/20"
          />
        </div>
        <h4 class="mb-1 text-green-500 fs-4xl">
          <TCountTo :endVal="4645" suffix="k" />
        </h4>
        <p class="mb-0 text-green-400">Project Completed</p>
      </div>
      <div
        class="px-3 py-6 text-center border rounded-md bg-sky-500 border-sky-500 dark:bg-sky-900 dark:border-zink-800"
      >
        <div
          class="flex items-center justify-center size-12 mx-auto mb-4 rounded-md bg-white/90 text-15 dark:bg-sky-400/20"
        >
          <Clock4 class="text-sky-500 fill-sky-200 dark:fill-sky-500/20" />
        </div>
        <h4 class="mb-1 text-sky-50 fs-4xl">
          <TCountTo :endVal="365" />
        </h4>
        <p class="mb-0 text-sky-200">Working Days</p>
      </div>
    </div>
  </TCard>
</template>
