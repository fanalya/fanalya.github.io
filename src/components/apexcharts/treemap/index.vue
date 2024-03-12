<script lang="ts" setup>
import {
  basicTreemapChart,
  multiSeriesChart,
  colorRangeChart,
  distributedChart
} from "@/components/apexcharts/treemap/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicTreemapChart.series"
        :options="basicTreemapChart.chartOptions"
      />
    </TCard>
    <TCard title="Treemap Multiple Series">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="multiSeriesChart.series"
        :options="multiSeriesChart.chartOptions"
      />
    </TCard>
    <TCard title="Color Range">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="colorRangeChart.series"
        :options="colorRangeChart.chartOptions"
      />
    </TCard>
    <TCard title="Distributed Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="distributedChart.series"
        :options="distributedChart.chartOptions"
      />
    </TCard>
  </div>
</template>
