<script lang="ts" setup>
import { Info, MoreVertical } from "lucide-vue-next";
import {
  userDeviceCharts,
  satisfactionRateChart,
  dailyVisitInsightsChart
} from "@/components/dashboard/analytics/utils.ts";
const dropdownData = [
  "1 Weekly",
  "1 Monthly",
  "3 Monthly",
  "6 Monthly",
  "This Yearly"
];
</script>

<template>
  <TCard class="order-8 col-span-12 lg:col-span-6 2xl:order-1 2xl:col-span-4">
    <div class="flex items-center gap-2 mb-3">
      <h6 class="text-15 grow">
        User Device
        <a href="#!" data-tooltip="default"
          data-tooltip-content="You can see your number of desktop, mobile, and tablet users."
          class="inline-block align-middle ltr:ml-1 rtl:mr-1 text-slate-500 dark:text-zink-200">
          <Info class="size-4" />
        </a>
      </h6>
      <div class="relative dropdown shrink-0">
        <TList :items="dropdownData" placement="bottom-start">
          <template #title>
            <TButton variant="link" color="slate" classes="px-2 py-1.5 text-xs">
              <MoreVertical class="inline-block size-4" />
            </TButton>
          </template>
        </TList>
      </div>
    </div>
    <apexchart class="apex-charts" height="240" dir="ltr" :series="userDeviceCharts.series"
      :options="userDeviceCharts.chartOptions" />
  </TCard>
  <TCard class="order-9 col-span-12 lg:col-span-6 2xl:order-1 2xl:col-span-4">
    <div class="flex items-center gap-2 mb-3">
      <h6 class="text-15 grow">
        Satisfaction Level
        <a href="#!" data-tooltip="default"
          data-tooltip-content="The 1-to-5 satisfaction scale is used for measuring customer satisfaction"
          class="inline-block align-middle ltr:ml-1 rtl:mr-1 text-slate-500 dark:text-zink-200">
          <Info class="size-4" />
        </a>
      </h6>
      <div class="relative dropdown shrink-0">
        <TList :items="dropdownData" placement="bottom-start">
          <template #title>
            <TButton variant="link" color="slate" classes="px-2 py-1.5 text-xs">
              <MoreVertical class="inline-block size-4" />
            </TButton>
          </template>
        </TList>
      </div>
    </div>
    <apexchart class="apex-charts" height="450" dir="ltr" :series="satisfactionRateChart.series"
      :options="satisfactionRateChart.chartOptions" />
    <p class="text-center text-15 text-slate-500 dark:text-zink-200">
      Based on Likes 💖
    </p>
  </TCard>
  <TCard class="order-10 col-span-12 2xl:order-1 2xl:col-span-4">
    <div class="flex items-center gap-2 mb-3">
      <h6 class="text-15 grow">
        Daily Visit Insights
        <a href="#!" data-tooltip="default"
          data-tooltip-content="Analyst or business user discovering a pattern in data or a relationship between variables"
          class="inline-block align-middle ltr:ml-1 rtl:mr-1 text-slate-500 dark:text-zink-200">
          <Info class="size-4" />
        </a>
      </h6>
      <div class="relative dropdown shrink-0">
        <TList :items="dropdownData" placement="bottom-end">
          <template #title>
            <TButton variant="link" color="slate" classes="px-2 py-1.5 text-xs">
              <MoreVertical class="inline-block size-4" />
            </TButton>
          </template>
        </TList>
      </div>
    </div>
    <apexchart class="apex-charts" height="238" dir="ltr" :series="dailyVisitInsightsChart.series"
      :options="dailyVisitInsightsChart.chartOptions" />
  </TCard>
</template>
