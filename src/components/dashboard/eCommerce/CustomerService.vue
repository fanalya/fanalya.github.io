<script lang="ts" setup>
import {
  MoreVertical,
  CalendarDays,
  TrendingUp,
  ShoppingCart
} from "lucide-vue-next";
import {
  users,
  salesThisMonthChart,
  products,
  audienceChart
} from "@/components/dashboard/eCommerce/utils.ts";
const dropdownData = [
  "1 Weekly",
  "1 Monthly",
  "3 Monthly",
  "6 Monthly",
  "This Yearly"
];
</script>

<template>
  <TCard title="Customer Service" class="col-span-12 lg:col-span-6 2xl:col-span-3">
    <template #titleAction>
      <TList :items="dropdownData" placement="bottom-start">
        <template #title>
          <TButton variant="ghost" color="slate" classes="px-2 py-1.5 text-xs">
            <MoreVertical class="inline-block size-4" />
          </TButton>
        </template>
      </TList>
    </template>
    <div>
      <div class="flex items-center justify-between mt-5 mb-2">
        <p class="text-slate-500 dark:text-zink-200">
          28% of the Goal Reached ($25k)
        </p>
      </div>
      <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-zink-600">
        <TProgressBar color="green" :width="28" :height="2" rounded-full />
      </div>
      <div class="grid mt-3 xl:grid-cols-2">
        <div class="flex items-center gap-2">
          <div class="shrink-0">
            <CalendarDays class="inline-block size-4 mb-1 align-middle" />
          </div>
          <p class="mb-0 text-slate-500 dark:text-zink-200">
            This Month:
            <span class="font-medium text-slate-800 dark:text-zink-50">$13,741</span>
          </p>
        </div>
      </div>
    </div>
    <h6 class="mt-4 mb-3">Top Customer</h6>
    <ul class="divide-y divide-slate-200 dark:divide-zink-500">
      <li v-for="(user, index) in users" :key="index" class="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
        <div class="size-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
          <img :src="user.avatar" alt="" class="size-8 rounded-full" />
        </div>
        <div class="grow">
          <h6 class="font-medium">{{ user.name }}</h6>
          <p class="text-slate-500 dark:text-zink-200">{{ user.email }}</p>
        </div>
        <div class="shrink-0">
          <h6>{{ user.amount }}</h6>
        </div>
      </li>
    </ul>
  </TCard>

  <TCard title="Sales This Month" class="col-span-12 lg:col-span-6 2xl:col-span-3">
    <template #titleAction>
      <TList :items="dropdownData" placement="bottom-start">
        <template #title>
          <TButton variant="ghost" color="slate" classes="px-2 py-1.5 text-xs">
            <MoreVertical class="inline-block size-4" />
          </TButton>
        </template>
      </TList>
    </template>
    <div class="flex items-center gap-3 my-3">
      <div
        class="flex items-center justify-center size-12 text-green-500 rounded-md bg-green-50 shrink-0 dark:bg-green-500/10">
        <TrendingUp />
      </div>
      <div class="grow">
        <p class="mb-1 text-slate-500 dark:text-zink-200">Total Profit</p>
        <h5 class="text-15">
          <TCountTo :endVal="746.84" prefix="$" suffix="k" :decimals="2" />
        </h5>
      </div>
    </div>
    <apexchart class="apex-charts" height="285" dir="ltr" :series="salesThisMonthChart.series"
      :options="salesThisMonthChart.chartOptions" />
  </TCard>

  <TCard title="Top Selling Products" class="col-span-12 lg:col-span-6 2xl:col-span-3">
    <template #titleAction>
      <TList :items="dropdownData" placement="bottom-start">
        <template #title>
          <TButton variant="ghost" color="slate" classes="px-2 py-1.5 text-xs">
            <MoreVertical class="inline-block size-4" />
          </TButton>
        </template>
      </TList>
    </template>
    <ul class="flex flex-col gap-5">
      <li v-for="(product, index) in products" :key="index" class="flex items-center gap-3">
        <div class="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
          <img :src="product.image" alt="" class="h-6" />
        </div>
        <div class="overflow-hidden grow">
          <h6 class="truncate">{{ product.name }}</h6>
          <div class="text-yellow-500">
            <template v-for="i in Math.floor(product.rating)">
              <i class="ri-star-fill"></i>
              <span class="hidden"> {{ i }} </span>
            </template>
            <template v-if="product.rating % 1 !== 0">
              <i key="half" class="ri-star-half-fill"></i>
            </template>
          </div>
        </div>
        <h6 class="shrink-0">
          <ShoppingCart class="inline-block size-4 align-middle text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1" />
          {{ product.cartCount }}
        </h6>
      </li>
    </ul>
  </TCard>
  <TCard class="col-span-12 lg:col-span-6 2xl:col-span-3" title="Audience">
    <apexchart class="-mt-9 apex-charts" height="390" dir="ltr" :series="audienceChart.series"
      :options="audienceChart.chartOptions" />
  </TCard>
</template>
