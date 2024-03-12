<script lang="ts" setup>
import {
  BarChart,
  TrendingUp,
  MoveRight,
  TrendingDown,
  CalendarRange
} from "lucide-vue-next";
import {
  salesRevenueChart,
  trafficResourcesChart
} from "@/components/dashboard/eCommerce/utils.ts";
</script>

<template>
  <TCard title="Sales Revenue Overview" class="col-span-12 2xl:col-span-8">
    <template #titleAction>
      <div class="relative">
        <TFlatPicker
          hide-details
          class="flex items-center" 
          :config="{ dateFormat: 'd M, Y' }"
          inputClass="ltr:pl-8 rtl:pr-8"
        >
          <CalendarRange
            class="size-4 text-slate-500 dark:text-zink-200 absolute mx-3"
          />
        </TFlatPicker>
      </div>
    </template>
    <div class="grid grid-cols-12 gap-4 mb-3">
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="flex items-center gap-3">
          <div
            class="flex items-center justify-center size-12 rounded-md text-sky-500 bg-sky-50 shrink-0 dark:bg-sky-500/10">
            <BarChart />
          </div>
          <div class="grow">
            <p class="mb-1 text-slate-500 dark:text-zink-200">Total Sales</p>
            <h5 class="text-15">
              <TCountTo :endVal="1517.36" prefix="$" suffix="k" :decimals="2" />
            </h5>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="flex items-center gap-3">
          <div
            class="flex items-center justify-center size-12 text-green-500 rounded-md bg-green-50 shrink-0 dark:bg-green-500/10">
            <TrendingUp />
          </div>
          <div class="grow">
            <p class="mb-1 text-slate-500 dark:text-zink-200">Total Profit</p>
            <h5 class="text-15">
              <TCountTo class="counter-value" :endVal="746.84" prefix="$" suffix="k" :decimals="2" />
            </h5>
          </div>
        </div>
      </div>
    </div>
    <apexchart class="apex-charts" height="300" dir="ltr" :series="salesRevenueChart.series"
      :options="salesRevenueChart.chartOptions" />
  </TCard>
  <div class="col-span-12 2xl:col-span-4">
    <div class="grid grid-cols-12 gap-x-5">
      <TCard title="Traffic Resources" class="col-span-12 lg:col-span-6 2xl:col-span-12">
        <template #titleAction>
          <div class="relative">
            <a href="#!" class="transition-all duration-300 ease-linear text-custom-500 hover:text-custom-700">View Status
              <MoveRight class="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1" />
            </a>
          </div>
        </template>
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-6 2xl:col-span-7">
            <apexchart class="apex-charts" height="222" dir="ltr" :series="trafficResourcesChart.series"
              :options="trafficResourcesChart.chartOptions" />
          </div>
          <div class="col-span-12 md:col-span-6 2xl:col-span-5">
            <ul class="flex flex-col gap-3">
              <li class="flex items-center gap-2">
                <div class="size-3 bg-green-500 shrink-0 clip-triangle"></div>
                <p class="text-green-500">Search Engine (22%)</p>
              </li>
              <li class="flex items-center gap-2">
                <div class="size-3 bg-purple-500 shrink-0 clip-triangle"></div>
                <p class="text-purple-500">Referral (34%)</p>
              </li>
              <li class="flex items-center gap-2">
                <div class="size-3 bg-sky-500 shrink-0 clip-triangle"></div>
                <p class="text-sky-500">Direct (44%)</p>
              </li>
            </ul>
          </div>
        </div>
      </TCard>
      <TCard class="col-span-12 lg:col-span-6 2xl:col-span-12">
        <div class="flex items-center mb-2">
          <h5 class="grow">
            <TCountTo class="counter-value" :endVal="1596" />
          </h5>
          <TLabel color="red" variant="soft-outlined">
            <TrendingDown class="inline-block size-3 ltr:mr-1 rtl:ml-1" />
            6.8%
          </TLabel>
        </div>
        <h6 class="mb-0">Monthly Orders Goal (20000+)</h6>
        <div>
          <div class="flex items-center justify-between mt-5 mb-2">
            <p class="text-slate-500 dark:text-zink-200">Total Orders</p>
            <h6 class="mb-0 text-custom-500">85%</h6>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2.54 dark:bg-zink-600">
            <TProgressBar :width="85" :height="2.5" />
          </div>
        </div>
      </TCard>
    </div>
  </div>
</template>
