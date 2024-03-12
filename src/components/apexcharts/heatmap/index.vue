<script lang="ts" setup>
import {
  basicHeatmapChat,
  multipleSeriesHeatmapChart,
  colorHeatmapChart,
  RoundedRangeHeatmap
} from "@/components/apexcharts/heatmap/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicHeatmapChat.series"
        :options="basicHeatmapChat.chartOptions"
      />
    </TCard>
    <TCard title="Multiple Colors">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="multipleSeriesHeatmapChart.series"
        :options="multipleSeriesHeatmapChart.chartOptions"
      />
    </TCard>
    <TCard title="Color Range">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="colorHeatmapChart.series"
        :options="colorHeatmapChart.chartOptions"
      />
    </TCard>
    <TCard title="Rounded (Range without Shades)">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="RoundedRangeHeatmap.series"
        :options="RoundedRangeHeatmap.chartOptions"
      />
    </TCard>
  </div>
</template>
