<script lang="ts" setup>
import { sections, cards } from "@/components/dashboard/email/utils.ts";
import { Info } from "lucide-vue-next";
</script>

<template>
    <TCard class="col-span-12 2xl:col-span-12">
        <div
            class="grid grid-cols-1 gap-5 divide-y md:divide-x md:divide-y-0 md:grid-cols-2 2xl:grid-cols-4 rtl:divide-x-reverse divide-slate-200 dark:divide-zink-500">
            <div v-for="(section, index) in sections" :key="index"
                class="py-5 first:pt-0 md:first:pt-5 md:last:pb-5 last:pb-0 md:px-5 md:ltr:first:pl-0 md:rtl:first:pr-0 md:ltr:last:pr-0 md:rtl:last:pl-0">
                <div class="flex mb-4">
                    <div class="w-36 shrink-0">
                        <p class="mb-6 uppercase text-slate-500 dark:text-zink-200">
                            <component :is="section.icon" class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
                            <span class="align-middle ms-1">{{ section.title }}</span>
                        </p>
                        <h5 class="mb-0">
                            <TCountTo :endVal="section.countTo" :suffix="section.suffix" :decimals="section.decimals" />
                        </h5>
                    </div>
                    <apexchart class="apex-charts" height="80" dir="ltr" :series="section.chartData.series"
                        :options="section.chartData.chartOptions" />
                </div>
                <p class="text-slate-500 dark:text-zink-200">{{ section.description }}</p>
            </div>
        </div>
    </TCard>

    <TCard v-for="(card, index) in cards" :key="index" class="col-span-12 md:col-span-6 2xl:col-span-3">
        <a href="#" data-tooltip="Taking the number of delivered emails and dividing it by the total number of emails sent"
            class="ltr:float-right rtl:float-left text-slate-500 dark:text-zink-200">
            <Info class="size-4" />
        </a>
        <p class="mb-3 text-slate-500 dark:text-zink-200">{{ card.title }}</p>
        <h5 class="mb-4">
            <TCountTo :endVal="card.countTo" :suffix="card.suffix" :decimals="card.decimals" />
        </h5>
        <apexchart class="grow apex-charts" height="80" dir="ltr" :series="card.chartData.series"
            :options="card.chartData.chartOptions" />
    </TCard>
</template>