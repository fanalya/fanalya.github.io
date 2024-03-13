<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  FileBarChart2,
  Anchor,
  Stethoscope,
  CalendarDays,
  Search,
  Plus,
  Pencil,
  Info,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";
import {
  LeaveManageEmployeeData,
  leaveManagementHeader
} from "@/components/hr/hrmanagement.ts";
import Widget from "@/components/hr/leave/widget.vue";

const page = ref<number>(1);
const perPage = ref<number>(10);
const pages = ref<number[]>([]);
const leaveList = ref(LeaveManageEmployeeData);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return paginate(leaveList.value);
});

// Watcher for leaveList
watch(leaveList, () => {
  setPages();
});

// Function to set pages
const setPages = () => {
  let numberOfPages = Math.ceil(leaveList.value.length / perPage.value);

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

// Function to paginate leaveList
const paginate = (leaveList: any) => {
  let from = page.value * perPage.value - perPage.value;
  let to = page.value * perPage.value;
  return leaveList.slice(from, to);
};

const getStatusClass = (status: any) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/20";
      break;
    case "Approved":
      return "bg-green-100 text-green-500 dark:bg-green-500/20";
      break;
    case "Declined":
      return "bg-red-100 text-red-500 dark:bg-red-500/20";
      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-12">
    <div class="xl:col-span-3">
      <Widget
        :icon="FileBarChart2"
        :count="23"
        iconBg="red"
        text="Total Leave Balance"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="CalendarDays"
        :count="12"
        iconBg="green"
        text="Annual Leave"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="Stethoscope"
        :count="4"
        iconBg="purple"
        text="Medical Leave"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget :icon="Anchor" :count="11" iconBg="sky" text="Remaining Leave" />
    </div>
  </div>

  <TCard id="ordersTable">
    <div class="grid grid-cols-1 gap-4 mb-5 lg:grid-cols-2 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <div class="relative">
          <input
            type="text"
            class="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
            placeholder="Search for ..."
            autocomplete="off"
          />
          <Search
            class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
          />
        </div>
      </div>
      <div class="xl:col-span-2 xl:col-start-11">
        <div class="ltr:lg:text-right rtl:lg:text-left">
          <router-link
            to="/hr/create-leave-employee"
            type="button"
            class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            <Plus class="inline-block size-4" /><span class="align-middle"
              >Add Leave</span
            >
          </router-link>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <div class="overflow-x-auto">
        <TBasicTable
          :headerItems="leaveManagementHeader"
          :items="displayedLists"
          theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200"
          tdClass="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
        >
          <template #status="{ value }">
            <span
              class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border border-transparent dark:border-transparent"
              :class="getStatusClass(value.status)"
              >{{ value.status }}</span
            >
          </template>

          <template #action="{ value }">
            <div class="flex justify-end gap-2">
              <a
                href="#!"
                v-if="value.status == 'Pending'"
                class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md text-slate-500 bg-slate-100 hover:text-white hover:bg-slate-500 dark:text-zink-200 dark:bg-zink-600 dark:hover:text-white dark:hover:bg-zink-400"
              >
                <Pencil class="size-4" />
              </a>
              <a
                href="#!"
                class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md text-custom-500 bg-custom-100 hover:text-white hover:bg-custom-500 dark:bg-custom-500/20 dark:hover:bg-custom-500"
              >
                <Info class="size-4" />
              </a>
            </div>
          </template>
        </TBasicTable>
      </div>
    </div>
    <div
      class="flex flex-col items-center gap-4 mt-4 md:flex-row"
      id="pagination-element"
    >
      <div class="grow">
        <p class="text-slate-500 dark:text-zink-200">
          Showing <b class="showing">{{ displayedLists.length }}</b> of
          <b class="total-records">{{ leaveList.length }}</b> Results
        </p>
      </div>

      <div class="col-sm-auto mt-sm-0">
        <TPagination
          v-model="page"
          :totalPages="pages"
          pageClass="size-8 border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
          actionClass="h-8 px-3 border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
        >
          <template #prev>
            <ChevronLeft class="size-4 mr-1 rtl:rotate-180" />
            Prev
          </template>
          <template #next>
            Next
            <ChevronRight class="size-4 ml-1 rtl:rotate-180" />
          </template>
        </TPagination>
      </div>
    </div>
  </TCard>
</template>
