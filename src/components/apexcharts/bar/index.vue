<script lang="ts" setup>
import {
  basicBarChart,
  customDatalabelsChart,
  stackedBarChart,
  stackedBar100Chart,
  groupStackedBarChart,
  barNegativeChart,
  barMarkersChart,
  reversedBarChart,
  dataLabelsBarChart,
  patternedBarChart,
  barWithImagesChart
} from "@/components/apexcharts/bar/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicBarChart.series"
        :options="basicBarChart.chartOptions"
      />
    </TCard>

    <TCard title="Grouped Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="customDatalabelsChart.series"
        :options="customDatalabelsChart.chartOptions"
      />
    </TCard>
    <TCard title="Stacked Bar">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="stackedBarChart.series"
        :options="stackedBarChart.chartOptions"
      />
    </TCard>
    <TCard title="Stacked Bars 100">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="stackedBar100Chart.series"
        :options="stackedBar100Chart.chartOptions"
      />
    </TCard>
    <TCard title="Grouped Stacked Bars">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="groupStackedBarChart.series"
        :options="groupStackedBarChart.chartOptions"
      />
    </TCard>
    <TCard title="Bar with Negative Values">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="barNegativeChart.series"
        :options="barNegativeChart.chartOptions"
      />
    </TCard>
    <TCard title="Bar with Markers">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="barMarkersChart.series"
        :options="barMarkersChart.chartOptions"
      />
    </TCard>
    <TCard title="Reversed Bar Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="reversedBarChart.series"
        :options="reversedBarChart.chartOptions"
      />
    </TCard>
    <TCard title="Custom DataLabels Bar">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="dataLabelsBarChart.series"
        :options="dataLabelsBarChart.chartOptions"
      />
    </TCard>
    <TCard title="Patterned Bar">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="patternedBarChart.series"
        :options="patternedBarChart.chartOptions"
      />
    </TCard>
    <TCard title="Bar with Images">
      <div id="barWithImagesChart" class="apex-charts" dir="ltr"></div>
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="barWithImagesChart.series"
        :options="barWithImagesChart.chartOptions"
      />
    </TCard>
  </div>
</template>
