<script lang="ts" setup>
import {
  simpleBubbleChart,
  bubble3DChart,
} from "@/components/apexcharts/bubble/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Simple">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="simpleBubbleChart.series"
        :options="simpleBubbleChart.chartOptions"
      />
    </TCard>
    <TCard title="3D Bubble">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="bubble3DChart.series"
        :options="bubble3DChart.chartOptions"
      />
    </TCard>
  </div>
</template>
