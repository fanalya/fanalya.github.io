import { getChartColorsArray } from "@/app/utils.ts";
import moment from "moment";
//basic
const basicTimeline = {
  series: [
    {
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-04").getTime()
          ]
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime()
          ]
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime()
          ]
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-18").getTime()
          ]
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar"
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    colors: getChartColorsArray('["bg-custom-500"]'),
    xaxis: {
      type: "datetime"
    }
  }
};

//Different Color For Each Bar
const colorTimelineChart = {
  series: [
    {
      data: [
        {
          x: "Analysis",
          y: [
            new Date("2019-02-27").getTime(),
            new Date("2019-03-04").getTime()
          ]
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime()
          ]
        },
        {
          x: "Coding",
          y: [
            new Date("2019-03-07").getTime(),
            new Date("2019-03-10").getTime()
          ]
        },
        {
          x: "Testing",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime()
          ]
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-17").getTime()
          ]
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar"
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-sky-500", "bg-purple-500"]'
    ),
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        var a = moment(val[0]);
        var b = moment(val[1]);
        var diff = b.diff(a, "days");
        return label + ": " + diff + (diff > 1 ? " days" : " day");
      }
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      show: false
    }
  }
};

//Multi-series
const multiSeriesChart = {
  series: [
    {
      name: "Bob",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime()
          ]
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-11").getTime()
          ]
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime()
          ]
        }
      ]
    },
    {
      name: "Joe",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime()
          ]
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-06").getTime(),
            new Date("2019-03-09").getTime()
          ]
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-19").getTime()
          ]
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar"
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        var a = moment(val[0]);
        var b = moment(val[1]);
        var diff = b.diff(a, "days");
        return diff + (diff > 1 ? " days" : " day");
      }
    },
    colors: getChartColorsArray('["bg-custom-500", "bg-green-500"]'),
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    xaxis: {
      type: "datetime"
    },
    legend: {
      position: "top"
    }
  }
};

//Advanced (Multiple ranges)
const advancedMultipleRanges = {
  series: [
    {
      name: "Bob",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime()
          ]
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime()
          ]
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-07").getTime()
          ]
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-03").getTime(),
            new Date("2019-03-09").getTime()
          ]
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-11").getTime()
          ]
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime()
          ]
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-01").getTime(),
            new Date("2019-03-03").getTime()
          ]
        }
      ]
    },
    {
      name: "Joe",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime()
          ]
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-06").getTime(),
            new Date("2019-03-16").getTime()
          ],
          goals: [
            {
              name: "Break",
              value: new Date("2019-03-10").getTime(),
              strokeColor: "#CD2F2A"
            }
          ]
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-03").getTime(),
            new Date("2019-03-07").getTime()
          ]
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-20").getTime(),
            new Date("2019-03-22").getTime()
          ]
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-16").getTime()
          ]
        }
      ]
    },
    {
      name: "Dan",
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-17").getTime()
          ]
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-09").getTime()
          ],
          goals: [
            {
              name: "Break",
              value: new Date("2019-03-07").getTime(),
              strokeColor: "#CD2F2A"
            }
          ]
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar"
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%"
      }
    },
    xaxis: {
      type: "datetime"
    },
    stroke: {
      width: 1
    },
    fill: {
      type: "solid",
      opacity: 0.6
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-orange-500", "bg-green-500"]'
    ),
    legend: {
      position: "top",
      horizontalAlign: "left"
    }
  }
};

//Multiple series – Group rows
const multipleSeriesGroupRows = {
  series: [
    // George Washington
    {
      name: "George Washington",
      data: [
        {
          x: "President",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()]
        }
      ]
    },
    // John Adams
    {
      name: "John Adams",
      data: [
        {
          x: "President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
        },
        {
          x: "Vice President",
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
        }
      ]
    },
    // Thomas Jefferson
    {
      name: "Thomas Jefferson",
      data: [
        {
          x: "President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()]
        },
        {
          x: "Vice President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
        },
        {
          x: "Secretary of State",
          y: [new Date(1790, 2, 22).getTime(), new Date(1793, 11, 31).getTime()]
        }
      ]
    },
    // Aaron Burr
    {
      name: "Aaron Burr",
      data: [
        {
          x: "Vice President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()]
        }
      ]
    },
    // George Clinton
    {
      name: "George Clinton",
      data: [
        {
          x: "Vice President",
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()]
        }
      ]
    },
    // John Jay
    {
      name: "John Jay",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()]
        }
      ]
    },
    // Edmund Randolph
    {
      name: "Edmund Randolph",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()]
        }
      ]
    },
    // Timothy Pickering
    {
      name: "Timothy Pickering",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()]
        }
      ]
    },
    // Charles Lee
    {
      name: "Charles Lee",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()]
        }
      ]
    },
    // John Marshall
    {
      name: "John Marshall",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()]
        }
      ]
    },
    // Levi Lincoln
    {
      name: "Levi Lincoln",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()]
        }
      ]
    },
    // James Madison
    {
      name: "James Madison",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()]
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar"
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-sky-500", "bg-purple-500", "bg-red-500", "bg-slate-500", "bg-orange-500", "bg-green-100","bg-pink-100", "bg-custom-200", "bg-red-400"]'
    ),
    fill: {
      type: "solid"
    },
    xaxis: {
      type: "datetime"
    },
    legend: {
      position: "right"
    }
    // tooltip: {
    //   custom: function (opts: any) {
    // const fromYear = new Date(opts.y1).getFullYear();
    // const toYear = new Date(opts.y2).getFullYear();
    // const values = opts.ctx.rangeBar.getTooltipValues(opts);

    //   return "";
    // },
    // },
  }
};

//Dumbbell Chart (Horizontal)
const dumbbellChart = {
  series: [
    {
      data: [
        {
          x: "Operations",
          y: [2800, 4500]
        },
        {
          x: "Customer Success",
          y: [3200, 4100]
        },
        {
          x: "Engineering",
          y: [2950, 7800]
        },
        {
          x: "Marketing",
          y: [3000, 4600]
        },
        {
          x: "Product",
          y: [3500, 4100]
        },
        {
          x: "Data Science",
          y: [4500, 6500]
        },
        {
          x: "Sales",
          y: [4100, 5600]
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: [
          [
            getChartColorsArray(
              '["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-sky-500", "bg-purple-500", "bg-red-500", "bg-slate-500", "bg-orange-500", "bg-green-200","bg-pink-500", "bg-custom-200", "bg-red-300"]'
            )[0],
            getChartColorsArray(
              '["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-sky-500", "bg-purple-500", "bg-red-500", "bg-slate-500", "bg-orange-500", "bg-green-200","bg-pink-500", "bg-custom-200", "bg-red-300"]'
            )[1]
          ]
        ]
      }
    },
    title: {
      text: "Paygap Disparity"
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Female", "Male"]
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: [
          getChartColorsArray('["bg-custom-500", "bg-green-500"]')[1]
        ],
        inverseColors: false,
        stops: [0, 100]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  }
};
export {
  basicTimeline,
  colorTimelineChart,
  multiSeriesChart,
  advancedMultipleRanges,
  multipleSeriesGroupRows,
  dumbbellChart
};
