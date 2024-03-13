<script lang="ts" setup>
import {
  basicCandlestickChart,
  comboCandlestickBrushChart,
  comboCandlestickChart,
  categoryXaxisChart,
  candlestickWithLine
} from "@/components/apexcharts/candlstick/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Simple">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicCandlestickChart.series"
        :options="basicCandlestickChart.chartOptions"
      />
    </TCard>
    <TCard title="Candlestick Synced with Brush Chart (Combo)">
      <div>
        <apexchart
          class="apex-charts"
          height="200"
          dir="ltr"
          :series="comboCandlestickBrushChart.series"
          :options="comboCandlestickBrushChart.chartOptions"
        />
        <apexchart
          class="apex-charts"
          height="150"
          dir="ltr"
          :series="comboCandlestickChart.series"
          :options="comboCandlestickChart.chartOptions"
        />
      </div>
    </TCard>
    <TCard title="Category x-axis">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="categoryXaxisChart.series"
        :options="categoryXaxisChart.chartOptions"
      />
    </TCard>
    <TCard title="Candlestick with Line">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="candlestickWithLine.series"
        :options="candlestickWithLine.chartOptions"
      />
    </TCard>
  </div>
</template>
