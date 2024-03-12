<script lang="ts" setup>
import {
  ChevronDown,
  Kanban,
  Users,
  ListFilter,
  Cog,
  Coins
} from "lucide-vue-next";
import { platformPerspectiveChart } from "@/components/dashboard/analytics/utils.ts";
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
    class="order-1 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-green-100 dark:bg-green-500/20 2xl:col-span-2 group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden"
  >
    <Kanban
      class="absolute top-0 size-32 stroke-1 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"
    >
    </Kanban>
    <div
      class="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50"
    >
      <Users></Users>
    </div>
    <h5 class="mt-5 mb-2">
      <TCountTo :endVal="15876" />
    </h5>
    <p class="text-slate-500 dark:text-slate-200">Total Users</p>
  </TCard>
  <TCard
    class="order-2 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-orange-100 dark:bg-orange-500/20 2xl:col-span-2 group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden"
  >
    <ListFilter
      class="absolute top-0 size-32 stroke-1 text-orange-200/50 dark:text-orange-500/20 ltr:-right-10 rtl:-left-10"
    >
    </ListFilter>
    <div
      class="flex items-center justify-center size-12 bg-orange-500 rounded-md text-15 text-orange-50"
    >
      <Cog></Cog>
    </div>
    <h5 class="mt-5 mb-2">
      <TCountTo :endVal="103.15" suffix="k" :decimals="2" />
    </h5>
    <p class="text-slate-500 dark:text-slate-200">Sessions</p>
  </TCard>
  <TCard class="order-5 col-span-12 2xl:order-1 2xl:row-span-2 2xl:col-span-8">
    <div class="flex items-center gap-2 mb-3">
      <h6 class="text-15 grow">Platform Perspective</h6>
      <div class="relative dropdown shrink-0" style="display: contents">
        <span class="ltr:mr-1 rtl:ml-1 text-slate-500 dark:zink-200">
          Sort by
        </span>
        <TList :items="dropdownData" placement="bottom-end" color="slate">
          <template #title>
            <TButton
              color="slate"
              variant="dashed"
              class="px-2 py-1.5 text-xs bg-white text-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100 dropdown-toggle"
            >
              This Yearly
              <ChevronDown
                class="inline-block size-4 ltr:ml-1 rlt:mr-1 ms-2"
              />
            </TButton>
          </template>
        </TList>
      </div>
    </div>
    <apexchart
      class="apex-charts"
      height="270"
      dir="ltr"
      :series="platformPerspectiveChart.series"
      :options="platformPerspectiveChart.chartOptions"
    />
  </TCard>
  <TCard
    class="order-3 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-sky-100 dark:bg-sky-500/20 2xl:col-span-2 group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden"
  >
    <ListFilter
      class="absolute top-0 size-32 stroke-1 text-sky-200/50 dark:text-sky-500/20 ltr:-right-10 rtl:-left-10"
    >
    </ListFilter>
    <div
      class="flex items-center justify-center size-12 rounded-md bg-sky-500 text-15 text-sky-50"
    >
      <Coins></Coins>
    </div>
    <h5 class="mt-5 mb-2">
      <TCountTo :endVal="1" suffix="M " />
      <TCountTo :endVal="29" suffix="sec" />
    </h5>
    <p class="text-slate-500 dark:text-slate-200">Avg. Visit Duration</p>
  </TCard>
  <TCard
    class="order-4 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-purple-100 dark:bg-purple-500/20 2xl:col-span-2 group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden"
  >
    <Kanban
      class="absolute top-0 size-32 stroke-1 text-purple-200/50 dark:text-purple-500/20 ltr:-right-10 rtl:-left-10"
    >
    </Kanban>
    <div
      class="flex items-center justify-center size-12 bg-purple-500 rounded-md text-15 text-purple-50"
    >
      <Users></Users>
    </div>
    <h5 class="mt-5 mb-2">
      <TCountTo :endVal="49.77" suffix="%" :decimals="2" />
    </h5>
    <p class="text-slate-500 dark:text-slate-200">Bounce Rate</p>
  </TCard>
</template>
