<script lang="ts" setup>
import {
  basicColumnChart,
  columnDatalabelChart,
  stackedColumnsChart,
  columnStackedChart,
  groupedStackedChart,
  dumbbellChart,
  columnMarkersChart,
  columnRotatedLabel,
  columnGroupLabelChart,
  columnNegativeChart,
  distributedColumnchart
} from "@/components/apexcharts/column/utils.ts";
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Basic">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="basicColumnChart.series"
        :options="basicColumnChart.chartOptions"
      />
    </TCard>
    <TCard title="Column with Data Labels">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="columnDatalabelChart.series"
        :options="columnDatalabelChart.chartOptions"
      />
    </TCard>
    <TCard title="Stacked Columns">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="stackedColumnsChart.series"
        :options="stackedColumnsChart.chartOptions"
      />
    </TCard>
    <TCard title="Stacked Columns 100">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="columnStackedChart.series"
        :options="columnStackedChart.chartOptions"
      />
    </TCard>
    <TCard title="Grouped Stacked Columns">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="groupedStackedChart.series"
        :options="groupedStackedChart.chartOptions"
      />
    </TCard>
    <TCard title="Dumbbell Chart">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="dumbbellChart.series"
        :options="dumbbellChart.chartOptions"
      />
    </TCard>
    <TCard title="Column with Markers">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="columnMarkersChart.series"
        :options="columnMarkersChart.chartOptions"
      />
    </TCard>
    <TCard title="Column with Group Label">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="columnGroupLabelChart.series"
        :options="columnGroupLabelChart.chartOptions"
      />
    </TCard>
    <TCard title="Column with Rotated Labels">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="columnRotatedLabel.series"
        :options="columnRotatedLabel.chartOptions"
      />
    </TCard>
    <TCard title="Column with Negative Values">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="columnNegativeChart.series"
        :options="columnNegativeChart.chartOptions"
      />
    </TCard>
    <TCard title="Distributed Columns">
      <apexchart
        class="apex-charts"
        height="350"
        dir="ltr"
        :series="distributedColumnchart.series"
        :options="distributedColumnchart.chartOptions"
      />
    </TCard>
  </div>
</template>
