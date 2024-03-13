import { getChartColorsArray } from "@/app/utils.ts";

//basic chart
const boxChart = {
  series: [
    {
      type: "boxPlot",
      data: [
        {
          x: "Jan 2015",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "Jan 2016",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "Jan 2017",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "Jan 2018",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "Jan 2019",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "Jan 2020",
          y: [41, 49, 58, 61, 67],
        },
        {
          x: "Jan 2021",
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "boxPlot",
      height: 350,
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: getChartColorsArray('["bg-custom-500", "bg-slate-100"]')[0],
          lower: getChartColorsArray('["bg-custom-500", "bg-slate-100"]')[1],
        },
      },
    },
  },
};

//Boxplot-Scatter
const boxplotScatterChart = {
  series: [
    {
      name: "box",
      type: "boxPlot",
      data: [
        {
          x: new Date("2017-01-01").getTime(),
          y: [54, 66, 69, 75, 88],
        },
        {
          x: new Date("2018-01-01").getTime(),
          y: [43, 65, 69, 76, 81],
        },
        {
          x: new Date("2019-01-01").getTime(),
          y: [31, 39, 45, 51, 59],
        },
        {
          x: new Date("2020-01-01").getTime(),
          y: [39, 46, 55, 65, 71],
        },
        {
          x: new Date("2021-01-01").getTime(),
          y: [29, 31, 35, 39, 44],
        },
      ],
    },
    {
      name: "outliers",
      type: "scatter",
      data: [
        {
          x: new Date("2017-01-01").getTime(),
          y: 32,
        },
        {
          x: new Date("2018-01-01").getTime(),
          y: 25,
        },
        {
          x: new Date("2019-01-01").getTime(),
          y: 64,
        },
        {
          x: new Date("2020-01-01").getTime(),
          y: 27,
        },
        {
          x: new Date("2020-01-01").getTime(),
          y: 78,
        },
        {
          x: new Date("2021-01-01").getTime(),
          y: 15,
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "boxPlot",
      height: 350,
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: getChartColorsArray('["bg-custom-500", "bg-green-500"]')[0],
          lower: getChartColorsArray('["bg-custom-500", "bg-green-500"]')[1],
        },
      },
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        formatter: function (val: any) {
          return new Date(val).getFullYear();
        },
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
  },
};

//Horizontal BoxPlot
const horizontalBoxplotChart = {
  series: [
    {
      data: [
        {
          x: "Category A",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "Category B",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "Category C",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "Category D",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "Category E",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "Category F",
          y: [41, 49, 58, 61, 67],
        },
        {
          x: "Category G",
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "boxPlot",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
      boxPlot: {
        colors: {
          upper: getChartColorsArray('["bg-slate-50", "bg-slate-200"]')[0],
          lower: getChartColorsArray('["bg-slate-50", "bg-slate-200"]')[1],
        },
      },
    },
  },
};

export { boxChart, boxplotScatterChart, horizontalBoxplotChart };
