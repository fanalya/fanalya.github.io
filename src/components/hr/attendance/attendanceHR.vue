<script lang="ts" setup>
import { ref, computed } from "vue";
import { Clock, XOctagon, RefreshCw, Search, Check, X } from "lucide-vue-next";
import Widget from "@/components/hr/leave/widget.vue";
import RightBar from "@/components/hr/attendance/right-part.vue";
import {
  AttendanceData,
  AttendanceDataHeader
} from "@/components/hr/hrmanagement.ts";

const config = {
  altFormat: "M j, Y",
  dateFormat: "d M, Y"
};

const tableConfig = {
  page: 1,
  itemsPerPage: 10
};

const attendanceList = ref(AttendanceData);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return attendanceList.value;
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-x-5">
    <RightBar />
    <div class="lg:col-span-4 xl:col-span-3">
      <Widget :icon="Clock" :count="187" iconBg="sky" text="Approved Hours" />
    </div>
    <div class="lg:col-span-4 xl:col-span-3">
      <Widget :icon="XOctagon" :count="19" iconBg="red" text="Rejected Hours" />
    </div>
    <div class="lg:col-span-4 xl:col-span-3">
      <Widget
        :icon="RefreshCw"
        :count="32"
        iconBg="yellow"
        text="Pending Hours"
      />
    </div>
    <div class="xl:col-span-9 lg:col-span-12">
      <TCard>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
          <div class="xl:col-span-3">
            <div class="relative">
              <TInputField
                inputClass="ltr:pl-8 rtl:pr-8"
                type="text"
                placeholder="Search for ..."
                autocomplete="off"
              />
              <Search
                class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
              />
            </div>
          </div>
          <div class="xl:col-span-3">
            <div>
              <TFlatPicker :config="config" />
            </div>
          </div>
          <div
            class="flex justify-end gap-2 text-right lg:col-span-2 xl:col-span-4 xl:col-start-10"
          >
            <TButton type="button" variant="dashed" color="red">
              Rejecte All
            </TButton>
            <TButton type="button" color="custom">Approve All</TButton>
          </div>
        </div>

        <div class="overflow-x-auto">
          <TBasicTable
            is-pagination
            :config="tableConfig"
            :headerItems="AttendanceDataHeader"
            :items="displayedLists"
            theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
            tdClass="border-y border-slate-200 dark:border-zink-500"
          >
            <template #date="{ value }">
              {{ value.date }}
              <span
                class="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-slate-400 text-slate-500 dark:bg-zink-700 dark:border-zink-400 dark:text-zink-200 ltr:ml-1 rtl:mr-1 align-middle"
              >
                {{ value.day }}
              </span>
            </template>
            <template #action>
              <div class="flex gap-2">
                <a
                  href="#!"
                  class="flex items-center justify-center size-8 text-green-500 transition-all duration-200 ease-linear bg-green-100 rounded-md hover:text-white hover:bg-green-500 dark:bg-green-500/20 dark:hover:bg-green-500"
                >
                  <Check class="size-4" />
                </a>
                <a
                  href="#!"
                  class="flex items-center justify-center size-8 text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded-md hover:text-white hover:bg-red-500 dark:bg-red-500/20 dark:hover:bg-red-500"
                >
                  <X class="size-4" />
                </a>
              </div>
            </template>
          </TBasicTable>
        </div>
      </TCard>
    </div>
  </div>
</template>
