<script lang="ts" setup>
import { ref } from "vue";
import { tableHeader1, tableData1 } from "@/components/pages/account/utils.ts";
import {
  ArrowDownToLine,
  Trash2,
  FileEdit,
  Eye,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";

const isAllSelect = ref(false);
const mapData = tableData1.map((item) => {
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
  <div class="flex items-center gap-3 mb-4">
    <h5 class="underline grow">Documents</h5>
    <div class="shrink-0">
      <TButton> Add Document </TButton>
    </div>
  </div>
  <div class="overflow-x-auto">
    <TBasicTable
      :headerItems="tableHeader1"
      tableClass="w-full align-middle border-separate whitespace-nowrap border-spacing-y-1"
      :items="tableData1"
      theadClass="text-left bg-white dark:bg-zink-700"
      tdClass="bg-white dark:bg-zink-700"
      @onSelectAll="onSelectAll"
    >
      <template #checked>
        <TCheckbox
          variant="outlined"
          type="checkbox"
          value="option"
          :checked="isAllSelect"
        />
      </template>
      <template #tagsName="{ value }">
        <span
          class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent"
          >{{ value.tagsName }}</span
        >
      </template>
      <template #status="{ value }">
        <TLabel :color="value.statusColor">
          {{ value.status }}
        </TLabel>
      </template>
      <template #action>
        <div class="flex items-center justify-end gap-2">
          <a
            href="#!"
            class="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500"
          >
            <Eye class="size-3" />
          </a>
          <a
            href="#!"
            class="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500"
          >
            <FileEdit class="size-3" />
          </a>
          <a
            href="#!"
            class="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500"
          >
            <ArrowDownToLine class="size-3" />
          </a>
          <a
            href="#!"
            class="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500"
          >
            <Trash2 class="size-3" />
          </a>
        </div>
      </template>
    </TBasicTable>
  </div>
  <div class="flex flex-col items-center gap-4 mt-4 mb-4 md:flex-row">
    <div class="grow">
      <p class="text-slate-500 dark:text-zink-200">
        Showing <b>6</b> of <b>18</b> Results
      </p>
    </div>
    <TPagination
      :totalPages="6"
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
</template>
