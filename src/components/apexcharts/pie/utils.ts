import { getChartColorsArray } from "@/app/utils.ts";
import Img1 from "@/assets/images/small/img-1.jpg";
import Img2 from "@/assets/images/small/img-2.jpg";
import Img6 from "@/assets/images/small/img-6.jpg";
import Img4 from "@/assets/images/small/img-4.jpg";
//simple pie
const simplePieChart = {
  series: [44, 55, 13, 43, 22],
  chartOptions: {
    chart: {
      height: 350,
      type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]'
    ),
    legend: {
      position: "bottom"
    }
  }
};

//Simple Donut
const donutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 350,
      type: "donut"
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-sky-500", "bg-yellow-500"]'
    ),
    legend: {
      position: "bottom"
    }
  }
};

//Donut Update
const updatingDonutChart = {
  series: [44, 55, 13, 33],
  chartOptions: {
    chart: {
      width: 380,
      type: "donut"
    },
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }
    ],
    colors: getChartColorsArray(
      '["bg-custom-400", "bg-orange-400", "bg-green-400", "bg-yellow-400"]'
    ),
    legend: {
      position: "right",
      offsetY: 0,
      height: 230
    }
  }
};

//Monochrome Pie
const monochromePieChart = {
  series: [25, 15, 44, 55, 41, 17],
  chartOptions: {
    chart: {
      height: 300,
      width: "100%",
      type: "pie"
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    theme: {
      monochrome: {
        enabled: true,
        color: getChartColorsArray('["bg-custom-500"]')[0],
        shadeTo: "light",
        shadeIntensity: 0.6
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    dataLabels: {
      formatter(val: any, opts: any) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      }
    },
    legend: {
      show: false
    }
  }
};

//Gradient Donut
const gradientDonutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 280,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient"
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]'
    ),
    legend: {
      formatter: function (val: any, opts: any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      position: "bottom"
    }
  }
};

//Semi Donut
const semiDonut = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 280,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 5
      }
    },
    grid: {
      padding: {
        bottom: -80
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]'
    ),
    legend: {
      position: "bottom"
    }
  }
};

//Donut with Pattern
const donutWithPattern = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 350,
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2
      }
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true
            }
          }
        }
      }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8
      }
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines"
        ]
      }
    },
    states: {
      hover: {
        filter: "none"
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]'
    ),
    theme: {
      palette: "palette2"
    },
    legend: {
      position: "bottom"
    }
  }
};

//Pie with Image
const pieWithImage = {
  series: [44, 33, 54, 45],
  chartOptions: {
    chart: {
      height: 350,
      type: "pie"
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]'
    ),
    fill: {
      type: "image",
      opacity: 0.85,
      image: {
        src: [Img1, Img2, Img6, Img4],
        width: 25,
        imagedHeight: 25
      }
    },
    stroke: {
      width: 4
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#111"]
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        borderWidth: 0
      }
    },
    legend: {
      position: "bottom"
    }
  }
};
export {
  simplePieChart,
  donutChart,
  updatingDonutChart,
  monochromePieChart,
  gradientDonutChart,
  semiDonut,
  donutWithPattern,
  pieWithImage
};
