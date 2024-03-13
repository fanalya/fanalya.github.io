<script lang="ts" setup>
import {
  basicRadarChart,
  radarMultipleSeries,
  radarWithPolygonfill
} from "@/components/apexcharts/radar/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicRadarChart.series"
        :options="basicRadarChart.chartOptions"
      />
    </TCard>
    <TCard title="Radar – Multiple Series">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="radarMultipleSeries.series"
        :options="radarMultipleSeries.chartOptions"
      />
    </TCard>
    <TCard title="Radar with Polygon-fill">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="radarWithPolygonfill.series"
        :options="radarWithPolygonfill.chartOptions"
      />
    </TCard>
  </div>
</template>
