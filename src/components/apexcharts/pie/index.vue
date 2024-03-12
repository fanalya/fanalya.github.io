<script lang="ts" setup>
import {
  simplePieChart,
  donutChart,
  updatingDonutChart,
  monochromePieChart,
  gradientDonutChart,
  semiDonut,
  donutWithPattern,
  pieWithImage
} from "@/components/apexcharts/pie/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Simple Pie">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="simplePieChart.series"
        :options="simplePieChart.chartOptions"
      />
    </TCard>
    <TCard title="Simple Donut">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="donutChart.series"
        :options="donutChart.chartOptions"
      />
    </TCard>
    <TCard title="Donut Update">
      <div>
        <apexchart
          class="apex-charts"
          height="235"
          dir="ltr"
          :series="updatingDonutChart.series"
          :options="updatingDonutChart.chartOptions"
        />
      </div>

      <div class="flex flex-wrap items-start justify-center gap-2 mt-4">
        <TButton
          variant="dashed"
          color="white"
          id="add"
          class="px-2 py-1.5 text-xs"
        >
          + ADD
        </TButton>

        <TButton
          id="remove"
          variant="dashed"
          color="white"
          class="px-2 py-1.5 text-xs"
        >
          - REMOVE
        </TButton>

        <TButton
          id="randomize"
          variant="dashed"
          color="white"
          class="px-2 py-1.5 text-xs"
        >
          RANDOMIZE
        </TButton>

        <TButton
          id="reset"
          variant="dashed"
          color="white"
          class="px-2 py-1.5 text-xs"
        >
          RESET
        </TButton>
      </div>
    </TCard>
    <TCard title="Monochrome Pie">
      <apexchart
        class="apex-charts"
        height="300"
        dir="ltr"
        :series="monochromePieChart.series"
        :options="monochromePieChart.chartOptions"
      />
    </TCard>
    <TCard title="Gradient Donut">
      <apexchart
        class="apex-charts"
        height="280"
        dir="ltr"
        :series="gradientDonutChart.series"
        :options="gradientDonutChart.chartOptions"
      />
    </TCard>
    <TCard title="Semi Donut">
      <apexchart
        class="apex-charts"
        height="280"
        dir="ltr"
        :series="semiDonut.series"
        :options="semiDonut.chartOptions"
      />
    </TCard>
    <TCard title="Donut with Pattern">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="donutWithPattern.series"
        :options="donutWithPattern.chartOptions"
      />
    </TCard>
    <TCard title="Pie with Image">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="pieWithImage.series"
        :options="pieWithImage.chartOptions"
      />
    </TCard>
  </div>
</template>
