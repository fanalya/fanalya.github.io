import { getChartColorsArray } from "@/app/utils.ts";

function generateData(count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

//Basic
const basicHeatmapChat = {
  series: [
    {
      name: "Metric1",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric9",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: getChartColorsArray('["bg-custom-500"]'),
  },
};

//Multiple Colors
let data = [
  {
    name: "W1",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W2",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W3",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W4",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W5",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W6",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W7",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W8",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W9",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W10",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W11",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W12",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W13",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W14",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W15",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
];

data.reverse();

const multipleSeriesHeatmapChart = {
  series: data,
  chartOptions: {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-purple-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"]'
    ),
    _xaxis: {
      type: "category",
      categories: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30",
      ],
    },
    get xaxis() {
      return this._xaxis;
    },
    set xaxis(value) {
      this._xaxis = value;
    },
    grid: {
      padding: {
        right: 20,
      },
    },
  },
};

//Color Range
const colorHeatmapChart = {
  series: [
    {
      name: "Jan",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Feb",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Mar",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Apr",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "May",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Jun",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Jul",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Aug",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Sep",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
      },
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-purple-500", "bg-orange-500", "bg-yellow-500"]'
    ),
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    title: {
      text: "HeatMap Chart with Color Range",
    },
  },
};

//Rounded (Range without Shades)
const RoundedRangeHeatmap = {
  series: [
    {
      name: "Metric1",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "heatmap",
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
      },
    },
    colors: getChartColorsArray('["bg-sky-500", "bg-green-500"]'),
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    xaxis: {
      type: "category",
    },
  },
};
export {
  basicHeatmapChat,
  multipleSeriesHeatmapChart,
  colorHeatmapChart,
  RoundedRangeHeatmap,
};
