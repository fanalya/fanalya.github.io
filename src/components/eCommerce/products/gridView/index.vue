<script lang="ts" setup>
import { ref } from "vue";
import Filters from "@/components/eCommerce/products/gridView/Filters.vue";
import GridCard from "@/components/eCommerce/products/gridView/GridCard.vue";
import { productGridData } from "@/components/eCommerce/products/gridView/utils.ts";
import {
  List,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-vue-next";

const listingType = ref("grid");
const page = ref(2);
</script>
<template>
  <div class="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">
    <div class="hidden 2xl:col-span-3 2xl:block">
      <Filters />
    </div>
    <div class="2xl:col-span-9">
      <div class="flex flex-wrap items-center gap-2">
        <p class="grow">Showing all <b>7,410</b> items results</p>
        <div class="flex gap-2 shrink-0 items-cente">
          <div class="relative dropdown">
            <TList
              :items="[
                'Lowest Price',
                'Highest Price',
                'High to Low',
                'Low to High'
              ]"
            >
              <template #title>
                <TButton variant="outlined">
                  Sort by:
                  <b class="font-medium">Highest Price</b>
                  <ChevronDown
                    class="lucide lucide-chevron-down inline-block size-4 ltr:ml-1 rtl:mr-1"
                  />
                </TButton>
              </template>
            </TList>
          </div>
          <TButton
            icon
            class="p-0"
            :variant="listingType !== 'list' ? 'soft' : ''"
            color="sky"
            @click="listingType = 'list'"
          >
            <List class="size-4" />
          </TButton>
          <TButton
            icon
            class="p-0"
            color="sky"
            :variant="listingType !== 'grid' ? 'soft' : ''"
            @click="listingType = 'grid'"
          >
            <LayoutGrid class="size-4" />
          </TButton>
        </div>
      </div>

      <div class="flex items-center gap-4 mt-3">
        <TLabel variant="pill-outlined" color="slate">High to Low</TLabel>
        <TLabel variant="pill-outlined" color="slate" dismissible>New</TLabel>
        <TButton
          variant="ghost"
          color="light"
          class="px-2.5 py-0.5 text-sm font-medium"
        >
          All Clear
        </TButton>
      </div>

      <div
        class="grid grid-cols-1 mt-5 md:grid-cols-2 [&.gridView]:grid-cols-1 xl:grid-cols-4 group [&.gridView]:xl:grid-cols-1 gap-x-5"
        :class="listingType === 'list' ? 'gridView' : ''"
        id="cardGridView"
      >
        <GridCard
          v-for="(item, index) in productGridData"
          :key="'grid-product' + index"
          :data="item"
        />
      </div>
      <div class="flex flex-col items-center mb-5 md:flex-row">
        <div class="mb-4 grow md:mb-0">
          <p class="text-slate-500 dark:text-zink-200">
            Showing <b>12</b> of <b>44</b> Results
          </p>
        </div>
        <TPagination
          v-model="page"
          :totalPages="5"
          pageClass="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
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
  </div>
</template>
