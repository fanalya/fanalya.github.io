<script lang="ts" setup>
import { ref } from "vue";
import {
  Search,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";
import { tableHeader, tableData } from "@/components/dashboard/hr/utils.ts";

const isAllSelect = ref(false);
const mapData = tableData.map((item) => {
  return {
    ...item,
    checked: false
  };
});
const finalData = ref(mapData);
const onSelectAll = () => {
  isAllSelect.value = !isAllSelect.value;
  finalData.value = finalData.value.map((item) => {
    return {
      ...item,
      checked: isAllSelect.value
    };
  });
};
</script>

<template>
  <TCard
    title="Employee Performance"
    class="col-span-12 md:order-8 2xl:col-span-9"
  >
    <template #titleAction>
      <div class="xl:col-span-4 xl:col-start-10">
        <div class="flex gap-3">
          <div class="relative grow">
            <TInputField
              required
              hide-details
              placeholder="Search for ..."
              inputClass="ltr:pl-8 rtl:pr-8"
            >
              <template #prefix>
                <Search
                  class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
                />
              </template>
            </TInputField>
          </div>
          <TButton variant="dashed">
            <i
              class="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line me-1"
            ></i>
            Export
          </TButton>
        </div>
      </div>
    </template>
    <div class="-mx-5 overflow-x-auto">
      <TBasicTable
        :headerItems="tableHeader"
        :items="tableData"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
        tdClass="border-y border-slate-200 dark:border-zink-500"
        @onSelectAll="onSelectAll"
      >
        <template #checked>
          <div class="flex justify-center">
            <TCheckbox
              variant="outlined"
              value="option"
              :checked="isAllSelect"
            />
          </div>
        </template>
        <template #user="{ value }">
          <div class="flex gap-2">
            <div
              class="size-10 bg-green-100 rounded-full dark:bg-green-500/20 shrink-0"
            >
              <img :src="value.user.avatar" alt="" class="h-10 rounded-full" />
            </div>
            <div class="grow">
              <h6>{{ value.user.name }}</h6>
              <p class="text-slate-500 dark:text-zink-200">
                {{ value.user.email }}
              </p>
            </div>
          </div>
        </template>
        <template #status="{ value }">
          <div :class="value.statusColor">
            {{ value.status }}
          </div>
        </template>
        <template #isActive="{ value }">
          <TLabel
            variant="bordered"
            :color="value.isActive === 'Active' ? 'green' : 'slate'"
          >
            {{ value.isActive }}
          </TLabel>
        </template>
        <template #action>
          <div class="flex gap-2">
            <a
              href="#!"
              class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/20"
            >
              <Pencil class="size-4" />
            </a>
            <a
              href="#!"
              class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-red-500 dark:hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20"
            >
              <Trash2 class="size-4" />
            </a>
          </div>
        </template>
      </TBasicTable>
    </div>
    <div class="flex flex-col items-center mt-5 md:flex-row">
      <div class="mb-4 grow md:mb-0">
        <p class="text-slate-500 dark:text-zink-200">
          Showing <b>10</b> of <b>19</b> Results
        </p>
      </div>
      <TPagination
        :totalPages="3"
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
  </TCard>
</template>
