<script lang="ts" setup>
import { pricingData } from "@/components/landing/onePage/utils.ts";
</script>

<template>
  <TCard
    v-for="(plan, index) in pricingData"
    :key="index"
    :class="`${plan.badgeClass} !shadow-lg text-15`"
  >
    <div
      v-if="plan.badge"
      class="absolute top-0 size-16 ltr:right-0 rtl:left-0"
    >
      <div
        class="absolute transform ltr:rotate-45 rtl:-rotate-45 bg-sky-500 text-center text-white font-medium py-1 ltr:-right-12 rtl:-left-12 top-6 w-[170px]"
      >
        25% Sale
      </div>
    </div>
    <h5 class="mb-2">
      <component
        :is="plan.icon"
        class="inline-block size-5"
        :class="plan.color"
      ></component>
      <span class="align-middle ms-2">{{ plan.title }}</span>
    </h5>
    <p class="mb-4 text-slate-500 dark:text-zink-200">{{ plan.description }}</p>
    <h1 class="mb-4 font-normal">
      <span class="text-slate-400 dark:text-zink-200">$</span>{{ plan.price
      }}<small class="text-15 text-slate-500 dark:text-zink-200"
        >/Monthly</small
      >
    </h1>
    <TButton variant="dashed" classes="w-full">
      <span class="align-middle">{{ plan.buttonText }}</span>
    </TButton>
    <ul class="flex flex-col gap-3 mt-5">
      <li
        v-for="(feature, i) in plan.features"
        :key="i"
        :class="`flex items-center gap-2 ${feature.class}`"
      >
        <component
          :is="feature.icon"
          v-if="feature.strikethrough"
          class="inline-block size-4 text-green-500 fill-green-100 dark:fill-green-500/20"
        />
        <component
          :is="feature.icon"
          v-else
          class="inline-block size-4 text-red-500 fill-green-100"
        />
        <span v-html="feature.text"></span>
      </li>
    </ul>
  </TCard>
</template>
