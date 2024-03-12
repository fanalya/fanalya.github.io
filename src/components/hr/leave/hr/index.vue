<script lang="ts" setup>
import { ref } from "vue";
import {
  FileBarChart2,
  CalendarCheck,
  Codepen,
  Loader,
  Search,
  Plus,
  Pencil,
  Check,
  Trash2,
  X
} from "lucide-vue-next";
import {
  LeaveManageHRData,
  LeaveManageHRDataHeader
} from "@/components/hr/hrmanagement.ts";
import Widget from "@/components/hr/leave/widget.vue";

const leaveList = ref(LeaveManageHRData);
const deleteModal = ref(false);
const tableConfig = {
  page: 1,
  itemsPerPage: 7
};

const getStatusClass = (status: any) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/20";
    case "Approved":
      return "bg-green-100 text-green-500 dark:bg-green-500/20";
    case "Declined":
      return "bg-red-100 text-red-500 dark:bg-red-500/20";
    case "New":
      return "bg-purple-100 text-purple-500 dark:bg-purple-500/20";
    default:
      break;
  }
};
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-12">
    <div class="xl:col-span-3">
      <TCard>
        <div class="flex items-center gap-3">
          <div
            :class="`flex items-center justify-center size-12 text-custom-500 bg-custom-100 rounded-md text-15 dark:bg-custom-500/20 shrink-0`"
          >
            <FileBarChart2 />
          </div>
          <div class="grow">
            <h5 class="mb-1 text-16">
              <TCountTo :endVal="18" />/
              <TCountTo :endVal="60" />
            </h5>
            <p class="text-slate-500 dark:text-zink-200">
              Today/Presents Leave
            </p>
          </div>
        </div>
      </TCard>
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="CalendarCheck"
        :count="5"
        iconBg="green"
        text="Today Leaves"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="Codepen"
        :count="0"
        iconBg="purple"
        text="Unplanned Leaves"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget :icon="Loader" :count="6" iconBg="yellow" text="Pending Leaves" />
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
            to="/hr/leave"
            type="button"
            class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            <Plus class="inline-block size-4" />
            <span class="align-middle">Add Leave</span>
          </router-link>
        </div>
      </div>
    </div>

    <TBasicTable
      is-pagination
      :config="tableConfig"
      :headerItems="LeaveManageHRDataHeader"
      :items="leaveList"
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
      <template #action="{}">
        <div class="flex gap-2">
          <a
            href="#!"
            class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md text-slate-500 bg-slate-100 hover:text-white hover:bg-slate-500 dark:bg-zink-600 dark:text-zink-200 dark:hover:text-white dark:hover:bg-zink-500"
          >
            <Pencil class="size-4" />
          </a>
          <a
            href="#!"
            class="flex items-center justify-center size-8 text-green-500 transition-all duration-200 ease-linear bg-green-100 rounded-md hover:text-white hover:bg-green-500 dark:bg-green-500/20 dark:hover:bg-green-500"
          >
            <Check class="size-4" />
          </a>
          <a
            href="#!"
            @click="deleteModal = !deleteModal"
            class="flex items-center justify-center size-8 text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded-md hover:text-white hover:bg-red-500 dark:bg-red-500/20 dark:hover:bg-red-500"
          >
            <Trash2 class="size-4" />
          </a>
        </div>
      </template>
    </TBasicTable>
  </TCard>

  <TModal v-model="deleteModal" size="x-small">
    <template #content>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] overflow-y-auto px-6 py-8"
      >
        <div class="float-right">
          <button
            id="deleteRecord-close"
            @click="deleteModal = false"
            class="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"
          >
            <X class="size-5" />
          </button>
        </div>
        <img
          src="@/assets/images/delete.png"
          alt=""
          class="block h-12 mx-auto"
        />
        <div class="mt-5 text-center">
          <h5 class="mb-1">Are you sure?</h5>
          <p class="text-slate-500 dark:text-zink-200">
            Are you certain you want to delete this record?
          </p>
          <div class="flex justify-center gap-2 mt-6">
            <TButton
              type="button"
              variant="ghost"
              color="slate"
              @click="deleteModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="red" id="delete-record"
              >Yes, Delete It!</TButton
            >
          </div>
        </div>
      </div>
    </template>
  </TModal>
</template>
