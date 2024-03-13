<script lang="ts" setup>
import { employeeData } from "@/components/pages/account/utils.ts";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
</script>

<template>
  <h5 class="mb-4 underline">Followers</h5>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5">
    <TCard
      v-for="(employee, index) in employeeData"
      :key="index"
      class="relative"
    >
      <TLabel
        class="absolute inline-block px-5 py-1 text-xs ltr:left-0 rtl:right-0"
        :color="employee.color"
      >
        {{ employee.title }}
      </TLabel>
      <div class="flex items-center justify-end">
        <p class="text-slate-500 dark:text-zink-200">
          Doj : {{ employee.doj }}
        </p>
      </div>
      <div class="mt-4 text-center">
        <div class="flex justify-center">
          <div class="size-20 overflow-hidden rounded-full bg-slate-100">
            <img :src="employee.image" alt="" class="" />
          </div>
        </div>
        <a href="#!">
          <h4 class="mt-4 mb-2 font-semibold text-16">{{ employee.name }}</h4>
        </a>
        <div class="text-slate-500 dark:text-zink-200">
          <p class="mb-1">{{ employee.email }}</p>
          <p>{{ employee.phone }}</p>
          <p
            class="inline-block px-3 py-1 my-4 font-semibold rounded-md text-slate-600 bg-slate-100 dark:bg-zink-600 dark:text-zink-200"
          >
            Exp. : {{ employee.experience }}
          </p>
          <h4 class="text-15 text-custom-500">
            Salary : {{ employee.salary }}
            <span class="text-xs font-normal text-slate-500 dark:text-zink-200"
              >/ Month</span
            >
          </h4>
        </div>
      </div>
    </TCard>
  </div>
  <div class="flex flex-col items-center gap-4 mb-4 md:flex-row">
    <div class="grow">
      <p class="text-slate-500 dark:text-zink-200">
        Showing <b>8</b> of <b>18</b> Results
      </p>
    </div>
    <TPagination
      :totalPages="6"
      pageClass=" size-8 dark:bg-zink-700 border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
      actionClass="size-8 border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
    >
      <template #prev>
        <ChevronLeft class="size-4 rtl:rotate-180" />
      </template>
      <template #next>
        <ChevronRight class="size-4 rtl:rotate-180" />
      </template>
    </TPagination>
  </div>
</template>
