import { getChartColorsArray } from "@/app/utils.ts";

//basic polar
const basicPolarareaChart = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chartOptions: {
    chart: {
      height: 350,
      type: "polarArea"
    },
    stroke: {
      colors: ["#fff"]
    },
    colors: getChartColorsArray(
      '["bg-custom-300", "bg-orange-100", "bg-green-300", "bg-yellow-100", "bg-purple-500", "bg-slate-300", "bg-red-500", "bg-emerald-500","bg-pink-100"]'
    ),
    fill: {
      opacity: 0.8
    },
    legend: {
      position: "bottom"
    }
  }
};

//Monochrome
const polarAreaMonochromeChart = {
  series: [42, 47, 52, 58, 65],
  chartOptions: {
    chart: {
      height: 350,
      type: "polarArea"
    },
    labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: "bottom"
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: getChartColorsArray('["bg-custom-500"]')[0],
        shadeTo: "light",
        shadeIntensity: 0.6
      }
    }
  }
};
export { basicPolarareaChart, polarAreaMonochromeChart };
