<script lang="ts" setup>
import {
  basicRangeAreaChart,
  comboChart,
} from "@/components/apexcharts/range-area/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic Range Area">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicRangeAreaChart.series"
        :options="basicRangeAreaChart.chartOptions"
      />
    </TCard>
    <TCard title="Combo Range Area">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="comboChart.series"
        :options="comboChart.chartOptions"
      />
    </TCard>
  </div>
</template>
