import { getChartColorsArray } from "@/app/utils.ts";

// Bubble Charts Generate Data
function generateData(baseval: any, count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

//simple charts
const simpleBubbleChart = {
  series: [
    {
      name: "Bubble1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-green-500", "bg-orange-500", "bg-yellow-500"]'
    ),
    fill: {
      opacity: 0.8,
    },
    xaxis: {
      tickAmount: 12,
      type: "category",
    },
    yaxis: {
      max: 70,
    },
  },
};

//3D Bubble
const bubble3DChart = {
  series: [
    {
      name: "Product1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    colors: getChartColorsArray(
      '["bg-sky-500", "bg-yellow-500", "bg-red-500", "bg-purple-500"]'
    ),
    xaxis: {
      tickAmount: 12,
      type: "datetime",
      labels: {
        rotate: 0,
      },
    },
    yaxis: {
      max: 70,
    },
    theme: {
      palette: "palette2",
    },
  },
};

export { simpleBubbleChart, bubble3DChart };
