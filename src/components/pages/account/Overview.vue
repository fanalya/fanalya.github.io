<script lang="ts" setup>
import { recentStatisticsChart, personalInfoData, earningsData, tableHeader, tableData, paymentCards } from "@/components/pages/account/utils.ts";
import { MoveRight } from "lucide-vue-next";
</script>

<template>
    <div class="grid grid-cols-1 gap-x-5 2xl:grid-cols-12">
        <div class="2xl:col-span-9">
            <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                <div class="xl:col-span-9">
                    <TCard title="Recent Statistics">
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="recentStatisticsChart.series"
                            :options="recentStatisticsChart.chartOptions" />
                    </TCard>
                </div>
                <div class="text-center card bg-custom-500 xl:col-span-3">
                    <div class="flex flex-col h-full card-body">
                        <img src="@/assets/images/medal.png" alt="" class="w-2/6 mx-auto">
                        <div class="mt-5 mb-auto">
                            <h5 class="mb-1 text-white">Congratulation Paula</h5>
                            <p class="text-custom-200">on your outstanding achievement! Your hard work and
                                dedication have truly paid off.</p>
                        </div>
                        <div class="p-3 mt-5 rounded-md bg-custom-600">
                            <h2 class="mb-1 text-white">1054</h2>
                            <p class="text-custom-200">It's very easy to convert your points to cash now.</p>
                        </div>
                    </div>
                </div>
            </div>
            <TCard title="Overview">
                <p class="mb-2 text-slate-500 dark:text-zink-200">A Web Developer creates and designs
                    different websites for clients. They are responsible for their aesthetic as well as
                    their function. Professionals in this field may also need to be able to ensure sites are
                    compatible with multiple types of media. Web Developers need to have a firm
                    understanding of programming and graphical design. Having a strong resume that
                    emphasizes these attributes makes it significantly easier to get hired as a Web
                    Developer.</p>
                <p class="text-slate-500 dark:text-zink-200">As a web designer, my objective is to make a
                    positive impact on clients, co-workers, and the Internet using my skills and experience
                    to design compelling and attractive websites. Solving code problems. Editing & Design
                    with designing team in the company to build perfect web designs.</p>
            </TCard>
        </div>
        <div class="2xl:col-span-3">
            <TCard title="Personal Information">
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <tbody>
                            <tr v-for="(item, index) in personalInfoData" :key="index">
                                <th class="py-2 font-semibold ps-0" scope="row">{{ item.label }}</th>
                                <td class="py-2 text-right text-slate-500 dark:text-zink-200">
                                    <span v-if="typeof item.value === 'string'">{{ item.value }}</span>
                                    <a v-else-if="item.value.link" :href="item.value.link" target="_blank"
                                        class="text-custom-500">{{ item.value.text }}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TCard>
            <TCard title="Earning Reports">
                <div class="divide-y divide-slate-200 dark:divide-zink-500">
                    <div v-for="(earningsItem, index) in earningsData" :key="index"
                        :class="`flex items-center gap-3 ${earningsItem.class}`">
                        <div class="flex items-center justify-center size-12 rounded-full bg-slate-100 dark:bg-zink-600">
                            <component :is="earningsItem.icon" class="size-5 text-slate-500 dark:text-zink-200">
                            </component>
                        </div>
                        <div>
                            <h6 class="text-lg">{{ earningsItem.amount }}</h6>
                            <p class="text-slate-500 dark:text-zink-200">{{ earningsItem.description }}</p>
                        </div>
                    </div>
                </div>
            </TCard>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-x-5 lg:grid-cols-2 2xl:grid-cols-3">
        <TCard>
            <h6 class="mb-3 text-15">Payment History</h6>
            <div class="overflow-x-auto">
                <TBasicTable :headerItems="tableHeader" :items="tableData" theadClass="ltr:text-left rtl:text-right"
                    tdClass="border-y border-slate-200 dark:border-zink-500">
                    <template #status="{ value }">
                        <div :class="value.status === 'Paid' ? 'text-green-500' : 'text-yellow-500'">
                            {{ value.status }}
                        </div>
                    </template>
                    <template #pdf>
                        <a href="#!"
                            class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i
                                class="ri-download-2-line"></i>
                        </a>
                    </template>
                </TBasicTable>
            </div>
        </TCard>
        <TCard title="Card Overview">
            <div class="flex flex-col gap-3">
                <a v-for="(card, index) in paymentCards" :key="index" :href="`#!`"
                    class="flex items-center gap-3 p-2 border rounded-md border-slate-200 dark:border-zink-500">
                    <div class="flex items-center justify-center size-12 rounded-md shrink-0">
                        <img :src="card.imageSrc" alt="" class="h-10">
                    </div>
                    <div class="grow">
                        <h5 class="mb-1 text-15">{{ card.name }}</h5>
                        <p class="text-sm text-slate-500 dark:text-zink-200">{{ card.cardNumber }}</p>
                    </div>
                    <div v-if="card.status">
                        <span
                            class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-sky-100 border-transparent text-sky-500 dark:bg-sky-500/20 dark:border-transparent">{{
                                card.status }}</span>
                    </div>
                </a>
            </div>
            <div class="mt-3 text-center">
                <a href="#!" class="inline-block underline text-custom-500">Add New Card
                    <MoveRight class="inline-block size-4 ml-2 rtl:-rotate-180" />
                </a>
            </div>
        </TCard>
        <TCard title="Plan Details">
            <template #titleAction>
                <a href="#!" class="underline text-custom-500">Change Plan</a>
            </template>
            <div class="grid grid-cols-1 gap-5 mb-3 md:grid-cols-3">
                <div>
                    <p class="mb-1 text-slate-500 dark:text-zink-200">Plan Type</p>
                    <h6>Regular Plan</h6>
                </div>
                <div>
                    <p class="mb-1 text-slate-500 dark:text-zink-200">Monthly Limit</p>
                    <h6>2 Download</h6>
                </div>
                <div>
                    <p class="mb-1 text-slate-500 dark:text-zink-200">Cost</p>
                    <h6>$26/Monthly</h6>
                </div>
            </div>
            <div class="px-4 py-3 mb-2 text-sm rounded-md text-slate-500 dark:text-zink-200 bg-slate-50 dark:bg-zink-600">
                <h6 class="mb-1">Our discounted pricing is available until August 16, 2023.</h6>
                <p>After this date, our pricing will transition to $22. For more details, click <a href="#!"
                        class="font-semibold text-slate-700 dark:text-zink-50">Learn More</a></p>
            </div>
            <p class="mb-2 text-slate-500 dark:text-zink-200">Plan Benefits</p>
            <ul class="flex flex-col gap-1 list-disc list-inside">
                <li>Build with TailwindCSS & Vite</li>
                <li>Multiple Layouts</li>
                <li>Easy to Customize</li>
            </ul>
        </TCard>
    </div>
</template>