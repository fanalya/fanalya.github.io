<script lang="ts" setup>
import {
  totalEmployeeChart,
  totalApplicationChart,
  hiredCandidatesChart,
  rejectedCandidatesChart,
  applicationReceivedChart
} from "@/components/dashboard/hr/utils.ts";
</script>

<template>
  <div class="col-span-12 md:order-1 xl:col-span-8 2xl:col-span-6">
    <h5 class="mb-2">Welcome Paula Keenan 🎉</h5>
    <p class="mb-5 text-slate-500 dark:text-zink-200">
      The salary of
      <a href="#!" class="underline text-slate-800 dark:text-zink-50"
        >Glennie Langosh</a
      >
      is pending since 05 Dec, 2023. the documentation of the tasks, workflows,
      and activities that make up a process managed by the HR or People Ops
      team. <a href="#!" class="text-red-500">Learn More</a>
    </p>
  </div>
  <TCard class="col-span-12 md:order-2 xl:col-span-4 2xl:col-start-9" no-body>
    <div class="p-4">
      <div class="grid grid-cols-3">
        <div
          class="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0"
        >
          <h6 class="mb-1 font-bold">
            <TCountTo :endVal="36" />
          </h6>
          <p class="text-slate-500 dark:text-zink-200">Absent</p>
        </div>
        <div
          class="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0"
        >
          <h6 class="mb-1 font-bold">
            <TCountTo :endVal="465" />
          </h6>
          <p class="text-slate-500 dark:text-zink-200">Attendance</p>
        </div>
        <div
          class="px-4 text-center ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500 ltr:last:border-r-0 rtl:last:border-l-0"
        >
          <h6 class="mb-1 font-bold">
            <TCountTo :endVal="50" />
          </h6>
          <p class="text-slate-500 dark:text-zink-200">Late</p>
        </div>
      </div>
    </div>
  </TCard>
  <TCard class="col-span-12 md:order-3 lg:col-span-6 2xl:col-span-3">
    <div class="grid grid-cols-12">
      <div class="col-span-8 md:col-span-9">
        <p class="text-slate-500 dark:text-slate-200">Total Employee</p>
        <h5 class="mt-3 mb-4">
          <TCountTo :endVal="615" />
        </h5>
      </div>
      <div class="col-span-4 md:col-span-3">
        <apexchart
          class="apex-charts"
          height="110"
          dir="ltr"
          :series="totalEmployeeChart.series"
          :options="totalEmployeeChart.chartOptions"
        />
      </div>
    </div>
    <div class="flex items-center gap-3 mt-3">
      <p class="text-slate-500 dark:text-slate-200 grow">
        <span class="font-medium text-green-500">15%</span> Increase
      </p>
      <p class="text-slate-500 dark:text-slate-200">This Month</p>
    </div>
  </TCard>
  <TCard class="col-span-12 md:order-4 lg:col-span-6 2xl:col-span-3 card">
    <div class="grid grid-cols-12">
      <div class="col-span-8 md:col-span-9">
        <p class="text-slate-500 dark:text-slate-200">Total Application</p>
        <h5 class="mt-3 mb-4">
          <TCountTo :endVal="174" />
        </h5>
      </div>
      <div class="col-span-4 md:col-span-3">
        <apexchart
          class="apex-charts"
          height="110"
          dir="ltr"
          :series="totalApplicationChart.series"
          :options="totalApplicationChart.chartOptions"
        />
      </div>
    </div>
    <div class="flex items-center gap-3 mt-3">
      <p class="text-slate-500 dark:text-slate-200 grow">
        <span class="font-medium text-green-500">26%</span> Increase
      </p>
      <p class="text-slate-500 dark:text-slate-200">This Month</p>
    </div>
  </TCard>
  <TCard
    title="Application Received"
    class="col-span-12 md:order-7 2xl:order-5 lg:col-span-12 2xl:col-span-6 2xl:row-span-2"
  >
    <template #titleAction>
      <div class="relative flex items-center gap-2 dropdown shrink-0">
        <TButton classes="px-2 py-1.5 text-xs"> All </TButton>
        <TButton variant="soft" classes="px-2 py-1.5 text-xs"> 1M </TButton>
        <TButton variant="soft" classes="px-2 py-1.5 text-xs"> 6M </TButton>
        <TButton variant="soft" classes="px-2 py-1.5 text-xs"> 1Y </TButton>
      </div>
    </template>
    <apexchart
      class="apex-charts"
      height="260"
      dir="ltr"
      :series="applicationReceivedChart.series"
      :options="applicationReceivedChart.chartOptions"
    />
  </TCard>
  <TCard
    class="col-span-12 md:order-5 2xl:order-6 lg:col-span-6 2xl:col-span-3"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-8 md:col-span-9">
        <p class="text-slate-500 dark:text-slate-200">Hired Candidates</p>
        <h5 class="mt-3 mb-4">
          <TCountTo :endVal="64" />
        </h5>
      </div>
      <div class="col-span-4 md:col-span-3">
        <apexchart
          class="apex-charts"
          height="110"
          dir="ltr"
          :series="hiredCandidatesChart.series"
          :options="hiredCandidatesChart.chartOptions"
        />
      </div>
    </div>
    <div class="flex items-center gap-3 mt-3">
      <p class="text-slate-500 dark:text-slate-200 grow">
        <span class="font-medium text-red-500">05%</span> Increase
      </p>
      <p class="text-slate-500 dark:text-slate-200">This Month</p>
    </div>
  </TCard>
  <TCard
    class="col-span-12 md:order-6 2xl:order-7 lg:col-span-6 2xl:col-span-3"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-8 md:col-span-9">
        <p class="text-slate-500 dark:text-slate-200">Rejected Candidates</p>
        <h5 class="mt-3 mb-4">
          <TCountTo :endVal="110" />
        </h5>
      </div>
      <div class="col-span-4 md:col-span-3">
        <apexchart
          class="apex-charts"
          height="110"
          dir="ltr"
          :series="rejectedCandidatesChart.series"
          :options="rejectedCandidatesChart.chartOptions"
        />
      </div>
    </div>
    <div class="flex items-center gap-3 mt-3">
      <p class="text-slate-500 dark:text-slate-200 grow">
        <span class="font-medium text-red-500">16%</span> Increase
      </p>
      <p class="text-slate-500 dark:text-slate-200">This Month</p>
    </div>
  </TCard>
</template>
