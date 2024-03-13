<script lang="ts" setup>
import { tableHeader, tableData } from "@/components/tables/basic/utils";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Default Table">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass="border-y border-slate-200 dark:border-zink-500">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Without Borders">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass="border-b border-transparent">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Striped Even Rows">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass="border-y border-slate-200 dark:border-zink-500" trClass="odd:bg-white even:bg-slate-50 dark:odd:bg-zink-700 dark:even:bg-zink-600">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Striped Odd Rows">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass=" border-y border-slate-200 dark:border-zink-500" trClass="odd:bg-slate-50 even:bg-white dark:odd:bg-zink-600 dark:even:bg-zink-700">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Hoverable Rows">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass=" border-y border-slate-200 dark:border-zink-500" trClass="transition-all duration-300 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Hoverable Striped Rows">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass=" border-y border-slate-200 dark:border-zink-500" trClass="even:bg-slate-50 hover:bg-slate-50 even:hover:bg-slate-100 dark:even:bg-zink-600/50 dark:hover:bg-zink-600 dark:even:hover:bg-zink-600">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Border Colors">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass=" border border-custom-500 dark:border-custom-800" thClass="border border-custom-500 dark:border-custom-800">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Bordered Table">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tdClass=" border border-slate-200 dark:border-zink-500" thClass="border border-slate-200 dark:border-zink-500">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Primary Colors Table">
      <TBasicTable :headerItems="tableHeader" :items="tableData" theadClass="bg-custom-100 dark:bg-custom-500/10" thClass="border-b border-custom-200 dark:border-custom-900" tdClass=" border-y border-custom-200 dark:border-custom-900" tableClass="bg-custom-50 dark:bg-custom-500/10">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Dark Table">
      <TBasicTable :headerItems="tableHeader" :items="tableData" thClass="border-b border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200" tdClass=" border-y border-slate-700 dark:border-zink-500 text-slate-400 dark:text-zink-200" tableClass="bg-slate-800 dark:zink-600">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Custom Table">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tableClass="border-separate table-custom border-spacing-y-1" :trClass="`relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500`" headTrClass="relative rounded-md bg-slate-50 after:absolute after:border-l-2 after:left-0 after:top-0 after:bottom-0 after:border-transparent dark:bg-zink-600 [&.active]:after:border-custom-500">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>

    <TCard title="Card Table" class="relative">
      <TBasicTable :headerItems="tableHeader" :items="tableData" tableClass="whitespace-nowrap" tdClass="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500" class="absolute left-0">
        <template #action>
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            <i class="ri-download-2-line" /></a>
        </template>
        <template #id="{ value }">
          <a href="#!" class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
            {{ value.id }}
          </a>
        </template>
      </TBasicTable>
    </TCard>
      </div>
</template>
