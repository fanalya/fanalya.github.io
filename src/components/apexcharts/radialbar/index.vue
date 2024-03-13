<script lang="ts" setup>
import {
  simpleRadialbarChart,
  multipleRadialbarChart,
  customAngleCircleChart,
  gradientRadialbarChart,
  radialbarsWithImageChart,
  strokedRadialbarChart,
  semiRadialbarChart
} from "@/components/apexcharts/radialbar/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Simple Radialbar Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="simpleRadialbarChart.series"
        :options="simpleRadialbarChart.chartOptions"
      />
    </TCard>
    <TCard title="Multiple Radialbar">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="multipleRadialbarChart.series"
        :options="multipleRadialbarChart.chartOptions"
      />
    </TCard>
    <TCard title="Custom Angle Circle">
      <apexchart
        class="apex-charts"
        height="390"
        dir="ltr"
        :series="customAngleCircleChart.series"
        :options="customAngleCircleChart.chartOptions"
      />
    </TCard>
    <TCard title="Gradient">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="gradientRadialbarChart.series"
        :options="gradientRadialbarChart.chartOptions"
      />
    </TCard>
    <TCard title="Radialbar with Image">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="radialbarsWithImageChart.series"
        :options="radialbarsWithImageChart.chartOptions"
      />
    </TCard>
    <TCard title="Stroked Gauge">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="strokedRadialbarChart.series"
        :options="strokedRadialbarChart.chartOptions"
      />
    </TCard>
    <TCard title="Semi Circle Gauge">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="semiRadialbarChart.series"
        :options="semiRadialbarChart.chartOptions"
      />
    </TCard>
  </div>
</template>
