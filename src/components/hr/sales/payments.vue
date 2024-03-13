<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Search } from "lucide-vue-next";
import {
  PaymentsData,
  PaymentsDataHeader
} from "@/components/hr/hrmanagement.ts";
import Choices from "choices.js";

const tableConfig = {
  page: 1,
  itemsPerPage: 10
};

const formInputClass =
  "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const config = {
  altFormat: "M j, Y",
  dateFormat: "d M, Y"
};

const paymentList = ref(PaymentsData);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return paymentList.value;
});

const getStatusClass = (status: any) => {
  switch (status) {
    case "Pending":
      return "yellow";
    case "Paid":
      return "green";
    case "Failed":
      return "red";
    default:
      break;
  }
};

const status = ref<any>(null);

onMounted(() => {
  const statusFilter: any = document.querySelector("#statusFilterSelect");
  if (statusFilter) {
    status.value = new Choices(statusFilter, {
      searchEnabled: false,
      allowHTML: true
    });
  }
});

onBeforeUnmount(() => {
  status.value.destroy();
});
</script>

<template>
  <TCard id="ordersTable">
    <div class="grid grid-cols-1 gap-4 mb-2 lg:grid-cols-2 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <div class="relative">
          <input type="text" :class="formInputClass" class="ltr:pl-8 rtl:pr-8 search" placeholder="Search for ..."
            autocomplete="off" />
          <Search
            class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
        </div>
      </div>
      <div class="xl:col-span-2">
        <TFlatPicker :config="config" />
      </div>
      <div class="xl:col-span-2 xl:col-start-11">
        <select class="form-input border-slate-200 focus:outline-none focus:border-custom-500" name="statusFilterSelect"
          id="statusFilterSelect">
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
    </div>
    <div class="-mx-5 overflow-x-auto">
      <TBasicTable is-pagination :config="tableConfig" :headerItems="PaymentsDataHeader" :items="displayedLists"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200"
        tdClass="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
        paginationClass="px-3"
        >
        <template #paymentId="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{{
            value.paymentId }}</a>
        </template>
        <template #status="{ value }">
          <span :class="`px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-${getStatusClass(
            value.status
          )}-100 border-transparent text-${getStatusClass(
            value.status
          )}-500 dark:bg-${getStatusClass(
            value.status
          )}-500/20 dark:border-transparent`">
            <span :class="`w-1.5 h-1.5 ltr:mr-1 rtl:ml-1 rounded-full bg-${getStatusClass(
              value.status
            )}-500 inline-block`"></span>
            {{ value.status }}
          </span>
        </template>
      </TBasicTable>
    </div>
  </TCard>
</template>
