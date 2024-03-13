<script lang="ts" setup>
import {
  basicData,
  counterWithSymbols
} from "@/components/uiComponents/countdown/utils";
import CounterWithIcons from "@/components/uiComponents/countdown/CounterWithIcons.vue";
import CounterWithCardColor from "@/components/uiComponents/countdown/CounterWithCardColor.vue";
</script>
<template>
  <TCard title="Basic Examples">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        class="text-center"
        v-for="(item, index) in basicData"
        :key="'basic-data-' + index"
      >
        <h4 class="mb-2 fs-4xl">
          <TCountTo :endVal="item.endVal" />
        </h4>
        <p class="mb-0 text-slate-500 dark:text-zink-200">{{ item.title }}</p>
      </div>
    </div>
  </TCard>
  <TCard title="Counter with Symbols">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        class="text-center"
        v-for="(item, index) in counterWithSymbols"
        :key="'counter-with-symbol-' + index"
      >
        <h4 class="mb-2 fs-4xl">
          <TCountTo
            :endVal="item.endVal"
            :suffix="item.suffix"
            :prefix="item.prefix"
            :decimals="item.decimals"
          />
        </h4>
        <p class="mb-0 text-slate-500 dark:text-zink-200">{{ item.title }}</p>
      </div>
    </div>
  </TCard>
  <TCard title="Counter with Grid">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        class="text-center px-3 py-6 border rounded-md border-slate-200 dark:border-zink-500"
        v-for="(item, index) in counterWithSymbols"
        :key="'counter-with-grid-' + index"
      >
        <h4 class="mb-2 fs-4xl">
          <TCountTo
            :endVal="item.endVal"
            :suffix="item.suffix"
            :prefix="item.prefix"
            :decimals="item.decimals"
          />
        </h4>
        <p class="mb-0 text-slate-500 dark:text-zink-200">{{ item.title }}</p>
      </div>
    </div>
  </TCard>
  <CounterWithIcons />
  <CounterWithCardColor />
</template>
