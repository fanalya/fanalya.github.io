<script lang="ts" setup>
import {
  mixedLineChart,
  multipleYaxisChart,
  lineAreaChart,
  lineColumnAreaChart,
  lineScatterChart
} from "@/components/apexcharts/mixed/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Line Column">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="mixedLineChart.series"
        :options="mixedLineChart.chartOptions"
      />
    </TCard>
    <TCard title="Multiple Y-Axis">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="multipleYaxisChart.series"
        :options="multipleYaxisChart.chartOptions"
      />
    </TCard>
    <TCard title="Line & Area">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="lineAreaChart.series"
        :options="lineAreaChart.chartOptions"
      />
    </TCard>
    <TCard title="Line Column Area">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="lineColumnAreaChart.series"
        :options="lineColumnAreaChart.chartOptions"
      />
    </TCard>
    <TCard title="Line Scatter">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="lineScatterChart.series"
        :options="lineScatterChart.chartOptions"
      />
    </TCard>
  </div>
</template>
