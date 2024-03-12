<script lang="ts" setup>
import SimpleCards from "@/components/uiComponents/cards/SimpleCards.vue";
import HorizontalCards from "@/components/uiComponents/cards/HorizontalCards.vue";
import CardAnimation from "@/components/uiComponents/cards/CardAnimation.vue";
import GroupCard from "@/components/uiComponents/cards/GroupCard.vue";

import { colors } from "@/app/utils";
import { ChevronRight } from "lucide-vue-next";
</script>
<template>
  <SimpleCards />
  <HorizontalCards />
  <CardAnimation />
  <h5 class="mb-5 underline">Border Card</h5>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    <TCard
      v-for="color in colors"
      :key="'border-color-card-' + color.value"
      variant="bordered"
      :color="color.value"
      :title="`${color.title} Card`"
    >
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <TButton variant="link" class="mt-3 text-sm p-0 gap-2">
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
  </div>
  <h5 class="mb-5 underline">Dashed Border Card</h5>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    <TCard
      v-for="color in colors"
      :key="'border-color-card-' + color.value"
      variant="dashed-bordered"
      :color="color.value"
      :title="`${color.title} Card`"
    >
      <p class="mb-4 text-slate-500 dark:text-zink-200">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <TButton variant="link" class="mt-3 text-sm p-0 gap-2">
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
  </div>
  <h5 class="mb-5 underline">Fill Card</h5>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    <TCard
      v-for="color in colors"
      :key="'border-color-card-' + color.value"
      variant="fill"
      :color="color.value"
      :title="`${color.title} Card`"
    >
      With supporting text below as a natural lead-in to additional content.
      <TButton
        class="mt-3 text-sm p-0 gap-2"
        :color="color.value"
        variant="plain-fill"
      >
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
  </div>
  <h5 class="mb-5 underline">Modern Card</h5>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    <TCard
      v-for="color in colors"
      :key="'border-color-card-' + color.value"
      variant="soft"
      :color="color.value"
      :title="`${color.title} Card`"
    >
      With supporting text below as a natural lead-in to additional content.
      <TButton
        class="mt-3 text-sm p-0 gap-2"
        :color="color.value"
        variant="plain-soft"
      >
        Card link
        <ChevronRight class="inline-block size-4" />
      </TButton>
    </TCard>
  </div>
  <GroupCard />
</template>
