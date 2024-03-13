import { getChartColorsArray } from "@/app/utils.ts";

// basic chart
const funnelChart = {
  series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200]
    }
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: "80%",
        isFunnel: true
      }
    },
    colors: getChartColorsArray('["bg-custom-500"]'),
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      dropShadow: {
        enabled: true
      }
    },
    xaxis: {
      categories: [
        "Sourced",
        "Screened",
        "Assessed",
        "HR Interview",
        "Technical",
        "Verify",
        "Offered",
        "Hired"
      ]
    },
    legend: {
      show: false
    }
  }
};

//Pyramid
const pyramidChart = {
  series: [
    {
      name: "",
      data: [200, 330, 548, 740, 880, 990, 1100, 1380]
    }
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "80%",
        isFunnel: true
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-custom-400", "bg-custom-300", "bg-custom-100", "bg-yellow-500", "bg-red-500", "bg-purple-500", "bg-yellow-100"]'
    ),
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt: any) {
        val;
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true
      }
    },
    title: {
      //   text: "Pyramid Chart",
      align: "middle"
    },
    xaxis: {
      categories: [
        "Sweets",
        "Processed Foods",
        "Healthy Fats",
        "Meat",
        "Beans & Legumes",
        "Dairy",
        "Fruits & Vegetables",
        "Grains"
      ]
    },
    legend: {
      show: false
    }
  }
};

export { funnelChart, pyramidChart };
