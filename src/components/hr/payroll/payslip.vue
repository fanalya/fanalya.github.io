<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

import { paySlipData, paySlipDataHeader } from "@/components/hr/hrmanagement.ts";

const page = ref<number>(1);
const perPage = ref<number>(10);
const pages = ref<number[]>([]);
const paySlipList = ref(paySlipData);

// Computed property for displayedLists
const displayedLists = computed(() => {
    return paginate(paySlipList.value);
});

// Watcher for paySlipList
watch(paySlipList, () => {
    setPages();
});

// Function to set pages
const setPages = () => {
    let numberOfPages = Math.ceil(paySlipList.value.length / perPage.value);

    pages.value = [];
    for (let index = 1; index <= numberOfPages; index++) {
        pages.value.push(index);
    }

    if (pages.value.length < page.value) {
        page.value = pages.value.length;
    }
};

// Initial setPages call
setPages();

// Function to paginate paySlipList
const paginate = (paySlipList: any) => {
    let from = page.value * perPage.value - perPage.value;
    let to = page.value * perPage.value;
    return paySlipList.slice(from, to);
};

const getStatusClass = (status: any) => {
    switch (status) {
        case "Pending":
            return "yellow";
            break;
        case "Paid":
            return "green";
            break;
        case "Failed":
            return "red";
            break;
        default:
            break;
    }
};

</script>

<template>
    <div class="grid grid-cols-1 2xl:grid-cols-12">
        <TCard class="relative 2xl:col-span-8 2xl:col-start-3">
            <div class="p-4">
                <div class="absolute top-0 ltr:right-0 rtl:left-0 opacity-30">
                    <img src="@/assets/images/logo-sm.png" alt="">
                </div>
                <div class="text-center">
                    <h5 class="relative before:absolute before:h-[1px] before:inset-x-0 before:-bottom-2.5 inline-block before:bg-gradient-to-r before:from-white dark:before:from-zink-700 before:via-custom-500 before:to-white dark:before:to-zink-700 dark:before:via-custom-500">Salary Slip</h5>
                </div>

                <div class="mt-16">
                    <p class="mb-2 text-slate-500 dark:text-zink-200">Employee ID: <span class="font-semibold text-slate-800 dark:text-zink-50">#TWE1001524</span></p>
                    <p class="mb-2 text-slate-500 dark:text-zink-200">Employee Name: <span class="font-semibold text-slate-800 dark:text-zink-50">Patricia Garcia</span></p>
                    <p class="mb-2 text-slate-500 dark:text-zink-200">Experience: <span class="font-semibold text-slate-800 dark:text-zink-50">2 Year</span></p>
                    <p class="text-slate-500 dark:text-zink-200">Create Date: <span class="font-semibold text-slate-800 dark:text-zink-50">08 Oct 2023</span></p>
                </div>
                <div class="mt-10 overflow-x-auto">
                    <TBasicTable :headerItems="paySlipDataHeader" :items="displayedLists" theadClass="bg-slate-100 dark:bg-zink-600" thClass="px-3.5 py-2.5 font-semibold border border-transparent" tdClass="px-3.5 py-2.5 border border-transparent">
                        <template #status="{ value }">
                            <span :class="`px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-${getStatusClass(value.status)}-100 border-transparent text-${getStatusClass(value.status)}-500 dark:bg-${getStatusClass(value.status)}-500/20 dark:border-transparent`">
                                {{ value.status }}
                            </span>
                        </template>
                    </TBasicTable>
                </div>

                <div class="grid grid-cols-1 mt-10 2xl:grid-cols-12">
                    <div class="2xl:col-span-5">
                        <p class="mb-2 text-slate-500 dark:text-zink-200">For any inquiries, please contact us at +(252) 0123 456 7890 or reach out via email at tailwick@themesdesign.com.</p>
                        <p class="mb-2 text-slate-500 dark:text-zink-200">Best Regards,</p>
                        <p class="mb-2 text-slate-500 dark:text-zink-200">Themesdesign</p>
                        <p class="text-slate-500 dark:text-zink-200">Founder & CEO: <span class="font-semibold text-slate-800 dark:text-zink-50">Paula Keenan</span></p>
                    </div>
                    <div class="self-end text-center 2xl:col-span-2 2xl:col-start-11">
                        <img src="@/assets/images/signature.png" alt="" class="h-12 mx-auto">
                        <h6>Authorized Sign</h6>
                    </div>
                </div>
            </div>
        </TCard>
    </div>
</template>