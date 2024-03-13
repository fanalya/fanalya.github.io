<script lang="ts" setup>
import {
  Boxes,
  PackagePlus,
  Loader,
  Truck,
  PackageCheck,
  PackageX
} from "lucide-vue-next";
import { orderOverviewOption } from "@/components/eCommerce/orders/utils.ts";
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 2xl:grid-cols-12">
    <div class="2xl:col-span-2 2xl:row-span-1">
      <div class="card">
        <div class="flex items-center gap-3 card-body">
          <div
            class="flex items-center justify-center size-12 rounded-md text-15 bg-custom-50 text-custom-500 dark:bg-custom-500/20 shrink-0"
          >
            <Boxes />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16 counter-value">
              <TCountTo :endVal="15101" class="mb-1 text-16 counter-value" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">Total Orders</p>
          </div>
        </div>
      </div>
    </div>
    <div class="2xl:col-span-2 2xl:row-span-1">
      <div class="card">
        <div class="flex items-center gap-3 card-body">
          <div
            class="flex items-center justify-center size-12 rounded-md text-15 bg-sky-50 text-sky-500 dark:bg-sky-500/20 shrink-0"
          >
            <PackagePlus />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16 counter-value">
              <TCountTo :endVal="3874" class="mb-1 text-16 counter-value" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">New Orders</p>
          </div>
        </div>
      </div>
    </div>
    <TCard
      class="order-last md:col-span-2 2xl:col-span-8 2xl:row-span-3 2xl:order-none"
      title="Orders Overview"
    >
      <apexchart
        class="apex-charts"
        height="238"
        dir="ltr"
        :series="orderOverviewOption.series"
        :options="orderOverviewOption.chartOptions"
      />
    </TCard>
    <div class="2xl:col-span-2 2xl:row-span-1">
      <div class="card">
        <div class="flex items-center gap-3 card-body">
          <div
            class="flex items-center justify-center size-12 text-yellow-500 rounded-md text-15 bg-yellow-50 dark:bg-yellow-500/20 shrink-0"
          >
            <Loader />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16 counter-value">
              <TCountTo :endVal="1548" class="mb-1 text-16 counter-value" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">Pending Orders</p>
          </div>
        </div>
      </div>
    </div>
    <div class="2xl:col-span-2 2xl:row-span-1">
      <div class="card">
        <div class="flex items-center gap-3 card-body">
          <div
            class="flex items-center justify-center size-12 text-purple-500 rounded-md text-15 bg-purple-50 dark:bg-purple-500/20 shrink-0"
          >
            <Truck />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16 counter-value">
              <TCountTo :endVal="9543" class="mb-1 text-16 counter-value" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">Shipping Orders</p>
          </div>
        </div>
      </div>
    </div>
    <div class="2xl:col-span-2 2xl:row-span-1">
      <div class="card">
        <div class="flex items-center gap-3 card-body">
          <div
            class="flex items-center justify-center size-12 text-green-500 rounded-md text-15 bg-green-50 dark:bg-green-500/20 shrink-0"
          >
            <PackageCheck />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16 counter-value">
              <TCountTo :endVal="30914" class="mb-1 text-16 counter-value" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">Delivered Orders</p>
          </div>
        </div>
      </div>
    </div>
    <div class="2xl:col-span-2 2xl:row-span-1">
      <div class="card">
        <div class="flex items-center gap-3 card-body">
          <div
            class="flex items-center justify-center size-12 text-red-500 rounded-md text-15 bg-red-50 dark:bg-red-500/20 shrink-0"
          >
            <PackageX />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16 counter-value">
              <TCountTo :endVal="3863" class="mb-1 text-16 counter-value" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">Cancelled Orders</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
