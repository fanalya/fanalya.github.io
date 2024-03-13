<script lang="ts" setup>
import { MoveRight, ChevronDown } from "lucide-vue-next";
import {
  responseTimesChart,
  pagesInteractionChart
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
  <TCard
    title="Location-Based Response Times"
    class="order-6 col-span-12 2xl:order-1 2xl:col-span-5"
  >
    <template #titleAction>
      <div class="shrink-0">
        <TButton variant="soft" class="!px-2 !py-1.5 !text-xs">
          View More
          <MoveRight
            class="inline-block size-4 ltr:ml-1 rlt:mr-1 rtl:-rotate-180 ms-2"
          />
        </TButton>
      </div>
    </template>
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="responseTimesChart.series"
      :options="responseTimesChart.chartOptions"
    />
  </TCard>
  <TCard
    title="Pages Interaction"
    class="order-7 col-span-12 2xl:order-1 2xl:col-span-7"
  >
    <template #titleAction>
      <TList :items="dropdownData" placement="bottom-end">
        <template #title>
          <TButton variant="soft" color="slate" classes="px-2 py-1.5 text-xs">
            This Yearly
            <ChevronDown class="inline-block size-4 ltr:ml-1 rtl:mr-1" />
          </TButton>
        </template>
      </TList>
    </template>
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="pagesInteractionChart.series"
      :options="pagesInteractionChart.chartOptions"
    />
  </TCard>
</template>
