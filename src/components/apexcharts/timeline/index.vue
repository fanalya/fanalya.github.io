<script lang="ts" setup>
import {
  basicTimeline,
  colorTimelineChart,
  multiSeriesChart,
  advancedMultipleRanges,
  multipleSeriesGroupRows,
  dumbbellChart
} from "@/components/apexcharts/timeline/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicTimeline.series"
        :options="basicTimeline.chartOptions"
      />
    </TCard>
    <TCard title="Different Color For Each Bar">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="colorTimelineChart.series"
        :options="colorTimelineChart.chartOptions"
      />
    </TCard>
    <TCard title="Multi Series">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="multiSeriesChart.series"
        :options="multiSeriesChart.chartOptions"
      />
    </TCard>
    <TCard title="Advanced (Multiple Ranges)">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="advancedMultipleRanges.series"
        :options="advancedMultipleRanges.chartOptions"
      />
    </TCard>
    <TCard title="Multiple Series – Group Rows">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="multipleSeriesGroupRows.series"
        :options="multipleSeriesGroupRows.chartOptions"
      />
    </TCard>
    <TCard title="Dumbbell Chart (Horizontal)">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="dumbbellChart.series"
        :options="dumbbellChart.chartOptions"
      />
    </TCard>
  </div>
</template>
