<script lang="ts" setup>
import Dashboard from "@/assets/images/dashboard.png";
import { MoveRight } from "lucide-vue-next";
import { cards, orderStatisticsChart } from "@/components/dashboard/eCommerce/utils.ts";
import EcommercBg from "@/assets/images/svg/ECommerceBg.vue"
</script>

<template>
    <div class="relative col-span-12 overflow-hidden card 2xl:col-span-8 bg-slate-900">
        <div class="absolute inset-0">
            <EcommercBg />
        </div>
        <div class="relative card-body">
            <div class="grid items-center grid-cols-12">
                <div class="col-span-12 lg:col-span-8 2xl:col-span-7">
                    <h5 class="mb-3 font-normal tracking-wide text-slate-200">Welcome Paula Keenan 🎉</h5>
                    <p class="mb-5 text-slate-400">An ecommerce dashboard has just that purpose. It provides your ecommerce
                        team with a clear overview of key financial and website KPIs at any time.</p>
                    <button type="button"
                        class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-500/20 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-500/20 dark:ring-custom-400/20">Take
                        a Product</button>
                </div>
                <div class="hidden col-span-12 2xl:col-span-3 lg:col-span-2 lg:col-start-11 2xl:col-start-10 lg:block">
                    <img :src="Dashboard" alt="" class="h-40 ltr:2xl:ml-auto rtl:2xl:mr-auto">
                </div>
            </div>
        </div>
    </div>
    <TCard title="Order Statistics" class="col-span-12 2xl:col-span-4 2xl:row-span-2">
        <template #titleAction>
            <div class="relative">
                <a href="#!"
                    class="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600">View
                    All
                    <MoveRight class="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1" />
                </a>
            </div>
        </template>
        <apexchart class="apex-charts" height="310" dir="ltr" :series="orderStatisticsChart.series"
            :options="orderStatisticsChart.chartOptions" />
    </TCard>
    <TCard v-for="(card, index) in cards" :key="index" class="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-2">
        <div class="text-center">
            <div :class="['flex items-center justify-center mx-auto rounded-full size-14', card.iconColorClass]">
                <component :is="card.iconComponent" />
            </div>
            <h5 class="mt-4 mb-2">
                <TCountTo :endVal="card.value" :prefix="card.prefix" :suffix="card.suffix" :decimals="card.decimals" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">{{ card.title }}</p>
        </div>
    </TCard>
</template>