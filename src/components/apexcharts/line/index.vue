<script lang="ts" setup>
import {
  basicLineChart,
  lineWithDataLabel,
  zoomableChart,
  lineAnnotation,
  brushLineChart,
  brushAreaChart,
  steplineChart,
  gradientLineChart,
  missingDataChart,
  dashedLineChart,
  realtimeCharts
} from "@/components/apexcharts/line/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicLineChart.series"
        :options="basicLineChart.chartOptions"
      />
    </TCard>
    <TCard title="Line with Data Labels">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="lineWithDataLabel.series"
        :options="lineWithDataLabel.chartOptions"
      />
    </TCard>
    <TCard title="Zoomable Timeseries">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="zoomableChart.series"
        :options="zoomableChart.chartOptions"
      />
    </TCard>
    <TCard title="Line Chart with Annotations">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="lineAnnotation.series"
        :options="lineAnnotation.chartOptions"
      />
    </TCard>
    <TCard title="Brush Chart">
      <div>
        <apexchart
          class="apex-charts"
          height="230"
          dir="ltr"
          :series="brushLineChart.series"
          :options="brushLineChart.chartOptions"
        />

        <apexchart
          class="apex-charts"
          height="130"
          dir="ltr"
          :series="brushAreaChart.series"
          :options="brushAreaChart.chartOptions"
        />
      </div>
    </TCard>
    <TCard title="Stepline">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="steplineChart.series"
        :options="steplineChart.chartOptions"
      />
    </TCard>
    <TCard title="Gradient Charts">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="gradientLineChart.series"
        :options="gradientLineChart.chartOptions"
      />
    </TCard>
    <TCard title="Missing / Null Values">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="missingDataChart.series"
        :options="missingDataChart.chartOptions"
      />
    </TCard>
    <TCard title="Dashed Charts">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="dashedLineChart.series"
        :options="dashedLineChart.chartOptions"
      />
    </TCard>
    <TCard title="Realtime Charts">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="realtimeCharts.series"
        :options="realtimeCharts.chartOptions"
      />
    </TCard>
  </div>
</template>
