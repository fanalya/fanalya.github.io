import { getChartColorsArray } from "@/app/utils.ts";
import logo from "@/assets/images/logo-sm.png";
import Img2 from "@/assets/images/small/img-2.jpg";

//Simple Radialbar Chart
const simpleRadialbarChart = {
  series: [80],
  chartOptions: {
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%"
        }
      }
    },
    colors: getChartColorsArray('["bg-custom-500"]'),
    labels: ["Themesdesign"],
    legend: {}
  }
};

//Multiple Radialbar
const multipleRadialbarChart = {
  series: [44, 55, 67, 83],
  chartOptions: {
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            }
          }
        }
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500"]'
    ),
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
  }
};

//Custom Angle Circle
const customAngleCircleChart = {
  series: [76, 67, 61, 90],
  chartOptions: {
    chart: {
      height: 390,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-sky-500", "bg-green-500", "bg-purple-500"]'
    ),
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  }
};

//Gradient
const gradientRadialbarChart = {
  series: [75],
  chartOptions: {
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: true
      }
    },
    colors: getChartColorsArray('["bg-custom-500", "bg-green-400"]'),
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front"
        },
        track: {
          strokeWidth: "67%",
          margin: 0 // margin is in pixels
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            fontSize: "17px"
          },
          value: {
            formatter: function (val: any) {
              return parseInt(val);
            },
            fontSize: "36px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [
          getChartColorsArray('["bg-custom-500", "bg-green-400"]')[1]
        ],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Percent"]
  }
};

//Radialbars with Image
const radialbarsWithImageChart = {
  series: [67],
  chartOptions: {
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
          image: logo,
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false
        },
        dataLabels: {
          name: {
            show: false,
            color: "#fff"
          },
          value: {
            show: true,
            color: "#333",
            offsetY: 70,
            fontSize: "22px"
          }
        }
      }
    },
    fill: {
      type: "image",
      image: {
        src: Img2
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Volatility"]
  }
};

//Stroked Gauge
const strokedRadialbarChart = {
  series: [67],
  chartOptions: {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function (val: any) {
              return val + "%";
            }
          }
        }
      }
    },
    colors: getChartColorsArray('["bg-purple-500"]'),
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    labels: ["Median Ratio"]
  }
};

//Semi Circle Gauge
const semiRadialbarChart = {
  series: [76],
  chartOptions: {
    chart: {
      type: "radialBar",
      height: 350,
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          strokeWidth: "97%",
          margin: 5 // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: "22px"
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    colors: getChartColorsArray('["bg-custom-500"]'),
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      }
    },
    labels: ["Average Results"]
  }
};
export {
  simpleRadialbarChart,
  multipleRadialbarChart,
  customAngleCircleChart,
  gradientRadialbarChart,
  radialbarsWithImageChart,
  strokedRadialbarChart,
  semiRadialbarChart
};
