<script lang="ts" setup>
import { ref } from "vue";
import { Search, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { tableHeader, tableData } from "@/components/dashboard/email/utils.ts";

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
  <TCard title="Email Performance" class="col-span-12 card 2xl:col-span-12">
    <template #titleAction>
      <div class="xl:col-span-3 xl:col-start-10">
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
          <button
            type="button"
            class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            <i class="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line"></i>
            Export
          </button>
        </div>
      </div>
    </template>

    <div class="-mx-5">
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
