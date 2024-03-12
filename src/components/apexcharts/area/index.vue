<script lang="ts" setup>
import {
  basicAreaChart,
  splineAreaChart,
  datetimeAreaChart,
  areaNegativeChart,
  areaMonthsChart,
  areaYearsChart,
  areaStackedChart,
  areaIrregularChart,
  areaNullValueChart
} from "@/components/apexcharts/area/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicAreaChart.series"
        :options="basicAreaChart.chartOptions"
      />
    </TCard>
    <TCard title="Spline Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="splineAreaChart.series"
        :options="splineAreaChart.chartOptions"
      />
    </TCard>
    <TCard title="Datetime X-Axis">
      <div
        class="flex flex-wrap gap-2 toolbar align-items-start justify-content-center"
      >
        <TButton class="px-2 py-1.5 text-xs" variant="soft" id="one_month"> 1M </TButton>
        <TButton class="px-2 py-1.5 text-xs" variant="soft" id="six_months"> 6M </TButton>
        <TButton class="px-2 py-1.5 text-xs" id="one_year"> 1Y </TButton>
        <TButton class="px-2 py-1.5 text-xs" variant="soft" id="ytd"> YTD </TButton>
        <TButton class="px-2 py-1.5 text-xs" variant="soft" id="all"> ALL </TButton>
      </div>
      <apexchart
        ref="chart"
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="datetimeAreaChart.series"
        :options="datetimeAreaChart.chartOptions"
      />
    </TCard>
    <TCard title="Area with Negative Values Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="areaNegativeChart.series"
        :options="areaNegativeChart.chartOptions"
      />
    </TCard>
    <TCard title="Github Style">
      <div>
        <div class="bg-slate-100 dark:bg-zink-600">
          <apexchart
            class="apex-charts"
            height="130"
            dir="ltr"
            :series="areaMonthsChart.series"
            :options="areaMonthsChart.chartOptions"
          />
        </div>

        <div class="flex items-center my-3 github-style">
          <div class="mr-2 shrink-0">
            <img
              class="size-10 rounded"
              src="@/assets/images/users/user-2.jpg"
              data-hovercard-user-id="634573"
              alt=""
            />
          </div>
          <div class="grow">
            <a class="font-medium text-15 text-slate-800 dark:text-zink-50"
              >Themesdesign</a
            >
            <div class="text-sm cmeta text-slate-500 dark:text-zink-200">
              <span
                class="font-medium commits text-slate-800 dark:text-zink-50"
              >95</span>
              commits
            </div>
          </div>
        </div>

        <div class="bg-slate-100 dark:bg-zink-600">
          <apexchart
            class="apex-charts"
            height="170"
            dir="ltr"
            :series="areaYearsChart.series"
            :options="areaYearsChart.chartOptions"
          />
        </div>
      </div>
    </TCard>
    <TCard title="Stacked Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="areaStackedChart.series"
        :options="areaStackedChart.chartOptions"
      />
    </TCard>
    <TCard title="Irregular Timeseries Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="areaIrregularChart.series"
        :options="areaIrregularChart.chartOptions"
      />
    </TCard>
    <TCard title="Missing / Null Values">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="areaNullValueChart.series"
        :options="areaNullValueChart.chartOptions"
      />
    </TCard>
  </div>
</template>
