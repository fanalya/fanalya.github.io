<script lang="ts" setup>
import { colors } from "@/app/utils";
const getDefaultSpinnerColor = (color: string) => {
  switch (color) {
    case "custom":
      return "border-custom-500";
    case "yellow":
      return "border-yellow-500";
    case "green":
      return "border-green-500";
    case "red":
      return "border-red-500";
    case "orange":
      return "border-orange-500";
    case "purple":
      return "border-purple-500";
    case "sky":
      return "border-sky-500";
    case "slate":
      return "border-slate-500";

    default:
      return "border-custom-500";
  }
};

const getPingColor = (color: string) => {
  switch (color) {
    case "custom":
      return "bg-custom-500";
    case "yellow":
      return "bg-yellow-500";
    case "green":
      return "bg-green-500";
    case "red":
      return "bg-red-500";
    case "orange":
      return "bg-orange-500";
    case "purple":
      return "bg-purple-500";
    case "sky":
      return "bg-sky-500";
    case "slate":
      return "bg-slate-500";

    default:
      return "bg-custom-500";
  }
};
</script>
<template>
  <div class="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
    <TCard title="Default Spinner">
      <div class="flex gap-2 flex-wrap">
        <div
          v-for="color in colors"
          class="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent"
          :class="getDefaultSpinnerColor(color.value)"
        />
      </div>
    </TCard>
    <TCard title="Ping Animation">
      <div class="flex gap-5 flex-wrap">
        <div
          v-for="color in colors"
          class="inline-flex size-4 rounded-full opacity-75 animate-ping"
          :class="getPingColor(color.value)"
        />
      </div>
    </TCard>
  </div>
  <TCard title="Bounce Animation">
    <div class="flex gap-5 flex-wrap">
      <div
        v-for="color in colors"
        class="inline-flex size-6 rounded-full opacity-75 animate-bounce"
        :class="getPingColor(color.value)"
      />
    </div>
  </TCard>
  <TCard title="Sizes Animation">
    <div class="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="flex gap-5 items-center flex-wrap">
        <div
          class="inline-block size-4 border-2 rounded-full animate-spin border-l-transparent border-custom-500"
        />
        <div
          class="inline-block size-6 border-2 rounded-full animate-spin border-l-transparent border-custom-500"
        />
        <div
          class="inline-block size-8 border-2 rounded-full animate-spin border-l-transparent border-custom-500"
        />
        <div
          class="inline-block size-10 border-2 rounded-full animate-spin border-l-transparent border-custom-500"
        />
      </div>
      <div class="flex gap-6 items-center flex-wrap">
        <div
          class="size-4 inline-flex rounded-full opacity-75 animate-bounce bg-custom-500"
        />
        <div
          class="size-6 inline-flex rounded-full opacity-75 animate-bounce bg-custom-500"
        />
        <div
          class="size-8 inline-flex rounded-full opacity-75 animate-bounce bg-custom-500"
        />
        <div
          class="size-10 inline-flex rounded-full opacity-75 animate-bounce bg-custom-500"
        />
      </div>
      <div class="flex gap-7 items-center flex-wrap">
        <div
          class="inline-flex size-2 rounded-full opacity-75 animate-ping bg-custom-500"
        />
        <div
          class="inline-flex size-4 rounded-full opacity-75 animate-ping bg-custom-500"
        />
        <div
          class="inline-flex size-6 rounded-full opacity-75 animate-ping bg-custom-500"
        />
        <div
          class="inline-flex size-8 rounded-full opacity-75 animate-ping bg-custom-500"
        />
      </div>
    </div>
  </TCard>
</template>
