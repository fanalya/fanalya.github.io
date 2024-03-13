<script lang="ts" setup>
import {
  boxChart,
  boxplotScatterChart,
  horizontalBoxplotChart
} from "@/components/apexcharts/boxplot/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="boxChart.series"
        :options="boxChart.chartOptions"
      />
    </TCard>
    <TCard title="Boxplot-Scatter">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="boxplotScatterChart.series"
        :options="boxplotScatterChart.chartOptions"
      />
    </TCard>
    <TCard title="Horizontal BoxPlot">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="horizontalBoxplotChart.series"
        :options="horizontalBoxplotChart.chartOptions"
      />
    </TCard>
  </div>
</template>
