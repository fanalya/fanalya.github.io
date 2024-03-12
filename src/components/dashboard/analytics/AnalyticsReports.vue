<script lang="ts" setup>
import {
  lineWithDataLabelChart,
  subscriptionDistribution,
  items,
  trafficSourceData
} from "@/components/dashboard/analytics/utils.ts";
</script>

<template>
  <TCard title="Analytics Reports" class="order-12 col-span-12 lg:col-span-6 2xl:order-1 2xl:col-span-3">
    <apexchart class="apex-charts" height="235" dir="ltr" :series="lineWithDataLabelChart.series"
      :options="lineWithDataLabelChart.chartOptions" />
  </TCard>
  <TCard title="Status of Monthly Campaign" class="col-span-12 lg:col-span-6 order-[13] 2xl:order-1 2xl:col-span-3">
    <ul class="flex flex-col gap-5">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-3">
        <div :class="`flex items-center justify-center size-8 rounded-md ${item.iconColor
          } ${item.bgColor} dark:bg-${item.iconColor.replace(
            'text-',
            ''
          )}/20 shrink-0`">
          <component :is="item.icon" class="size-4" />
        </div>
        <h6 class="grow">{{ item.title }}</h6>
        <p class="text-slate-500 dark:text-zink-200">{{ item.value }}</p>
        <div :class="`w-12 ${item.percentageColor} ltr:text-right rtl:text-left`">
          {{ item.percentageValue }}
        </div>
      </li>
    </ul>
  </TCard>
  <TCard title="Subscription Distribution" class="col-span-12 lg:col-span-6 order-[14] 2xl:order-1 card 2xl:col-span-3">
    <apexchart class="apex-charts" height="270" dir="ltr" :series="subscriptionDistribution.series"
      :options="subscriptionDistribution.chartOptions" />
  </TCard>
  <TCard title="Traffic Source" class="col-span-12 lg:col-span-6 order-[15] 2xl:order-1 2xl:col-span-3">
    <template #titleAction>
      <a href="#!" class="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-700">See
        More</a>
    </template>
    <div class="flex flex-col gap-5">
      <div v-for="(item, index) in trafficSourceData" :key="index">
        <div class="flex items-center justify-between gap-4 mb-2">
          <h6>{{ item.category }}</h6>
          <span class="text-slate-500 dark:text-zink-200">54,963</span>
        </div>
        <div class="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
          <TProgressBar :color="item.progressBar.color" :width="item.progressBar.width" :height="item.progressBar.height"
            rounded />
        </div>
      </div>
    </div>
  </TCard>
</template>
