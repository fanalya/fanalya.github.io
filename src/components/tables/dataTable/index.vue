<script lang="ts" setup>
import { tableHeader, tableData } from "@/components/tables/dataTable/utils";
</script>
<template>
  <TCard title="Basic">
    <TDataTable
      :data="tableData"
      :headerItems="tableHeader"
      thClass="!px-3 !py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 group-[.bordered]:border !group-[.bordered]:border-slate-200 dark:group-[.bordered]:border-zink-500 !border-b-0"
      trClass="even:bg-slate-50 dark:even:bg-zink-600 transition-all duration-150 ease-linear group-[.hover]:hover:bg-slate-50 dark:group-[.hover]:hover:bg-zink-600 [&.selected]:bg-custom-500 dark:[&.selected]:bg-custom-500 [&.selected]:text-custom-50 dark:[&.selected]:text-custom-50"
      tdClass="!p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting_1"
    />
  </TCard>
  <TCard title="Row Borders">
    <TDataTable
      :data="tableData"
      :headerItems="tableHeader"
      theadClass="border-b border-slate-200 dark:border-zink-500"
      thClass="!p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500 sorting_asc"
      tdClass="!p-3 border-b border-slate-200 dark:border-zink-500 sorting_1"
    />
  </TCard>
  <TCard title="Hoverable">
    <TDataTable
      :data="tableData"
      :headerItems="tableHeader"
      theadClass="border-b border-slate-200 dark:border-zink-500"
      thClass="!p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500 sorting_asc"
      trClass="!p-3 transition-all duration-150 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600 [&.selected]:bg-custom-500 dark:[&.selected]:bg-custom-500 [&.selected]:text-custom-50 dark:[&.selected]:text-custom-50"
    />
  </TCard>
  <TCard title="Bordered Table">
    <TDataTable
      :data="tableData"
      :headerItems="tableHeader"
      theadClass="border-b !border-slate-200 !dark:border-zink-500"
      thClass="!p-3 border border-slate-200 dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:border-zink-500 sorting_asc"
      tdClass="!p-3 border border-slate-200 dark:border-zink-500 sorting_1"
    />
  </TCard>
</template>
