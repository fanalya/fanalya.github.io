<script lang="ts" setup>
import {
  funnelChart,
  pyramidChart
} from "@/components/apexcharts/funnel/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="funnelChart.series"
        :options="funnelChart.chartOptions"
      />
    </TCard>
    <TCard title="Pyramid">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="pyramidChart.series"
        :options="pyramidChart.chartOptions"
      />
    </TCard>
  </div>
</template>
