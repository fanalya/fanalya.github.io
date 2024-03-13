<script lang="ts" setup>
import {
  basicPolarareaChart,
  polarAreaMonochromeChart
} from "@/components/apexcharts/polar/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicPolarareaChart.series"
        :options="basicPolarareaChart.chartOptions"
      />
    </TCard>
    <TCard title="Monochrome">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="polarAreaMonochromeChart.series"
        :options="polarAreaMonochromeChart.chartOptions"
      />
    </TCard>
  </div>
</template>
