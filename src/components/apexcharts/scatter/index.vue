<script lang="ts" setup>
import {
  basicScatterChart,
  dateTimeScatterChart,
  scatterImagesChart
} from "@/components/apexcharts/scatter/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicScatterChart.series"
        :options="basicScatterChart.chartOptions"
      />
    </TCard>
    <TCard title="Scatter – Datetime">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="dateTimeScatterChart.series"
        :options="dateTimeScatterChart.chartOptions"
      />
    </TCard>
    <TCard title="Scatter – Images">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="scatterImagesChart.series"
        :options="scatterImagesChart.chartOptions"
      />
    </TCard>
  </div>
</template>
