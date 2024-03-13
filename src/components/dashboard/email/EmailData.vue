<script lang="ts" setup>
import { ChevronDown, MoreHorizontal } from "lucide-vue-next";
import { emailDataChart, emailMarketingChart } from "@/components/dashboard/email/utils.ts";
import EmailDashboard from "@/assets/images/email-dashboard.png";
const dropdownData = [
    "1 Weekly",
    "1 Monthly",
    "3 Monthly",
    "6 Monthly",
    "This Yearly"
];
const dropdownData1 = [
    "This Year",
    "Last Year"
];
</script>

<template>
    <TCard title="Email Data" class="col-span-12 card 2xl:col-span-6">
        <template #titleAction>
            <div class="relative dropdown">
                <TList :items="dropdownData" placement="bottom-start">
                    <template #title>
                        <TButton variant="dashed" color="custom" classes="px-2 py-1.5 text-xs">
                            This Yearly
                            <ChevronDown class="inline-block size-4 ms-2" />
                        </TButton>
                    </template>
                </TList>
            </div>
        </template>
        <apexchart class="apex-charts" height="350" dir="ltr" :series="emailDataChart.series"
            :options="emailDataChart.chartOptions" />
    </TCard>
    <TCard title="Email Marketing" class="col-span-12 card lg:col-span-6 2xl:col-span-3">
        <template #titleAction>
            <div class="relative dropdown shrink-0">
                <TList :items="dropdownData1" placement="bottom-start">
                    <template #title>
                        <TButton variant="ghost" color="slate" classes="px-2 py-1.5 text-xs">
                            <MoreHorizontal class="lucide lucide-more-horizontal size-3" />
                        </TButton>
                    </template>
                </TList>
            </div>
        </template>
        <apexchart class="apex-charts" height="410" dir="ltr" :series="emailMarketingChart.series"
            :options="emailMarketingChart.chartOptions" />
    </TCard>
    <div class="col-span-12 lg:col-span-6 2xl:col-span-3 card">
        <div class="flex flex-col h-full card-body">
            <div class="mb-auto">
                <h4 class="mb-2">Experience Our Fresh Email Composition Interface</h4>
                <p class="mb-5 text-slate-500 dark:text-zink-200">A local-part, the symbol @, and a domain, which may be a
                    domain name or an IP address enclosed in brackets.</p>
                <router-link to="/mailbox"
                    class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Compose
                    Email</router-link>
            </div>
            <div>
                <img :src="EmailDashboard" alt="" class="h-48 ltr:ml-auto rtl:mr-auto -scale-x-100">
            </div>
        </div>
    </div>
</template>