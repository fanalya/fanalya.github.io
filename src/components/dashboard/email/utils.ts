import {
  Rocket,
  MousePointerClick,
  MousePointerSquare,
  Goal
} from "lucide-vue-next";
import { getChartColorsArray } from "@/app/utils.ts";
import { TableHeaderType } from "@/app/components/tables/types";

const sections = [
  {
    icon: Rocket,
    title: "Sent",
    countTo: 1452,
    description: "238 Emails (Monthly)",
    chartData: {
      series: [
        {
          name: "Sent",
          data: [14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "line",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-custom-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  {
    icon: MousePointerClick,
    title: "Open Rate",
    countTo: 92.74,
    suffix: "%",
    decimals: 2,
    description: "60 Opened (Monthly)",
    chartData: {
      series: [
        {
          name: "Open Rate",
          data: [38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "line",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-green-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  {
    icon: MousePointerSquare,
    title: "Clicks Rate",
    countTo: 3.79,
    suffix: "%",
    decimals: 2,
    description: "29 Clicks (Monthly)",
    chartData: {
      series: [
        {
          name: "Click Rate",
          data: [30, 24, 14, 20, 10, 5, 11, 26, 33, 38, 34, 27, 22]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "line",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-red-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  {
    icon: Goal,
    title: "Click Through",
    countTo: 4.06,
    suffix: "%",
    decimals: 2,
    description: "29 Click Through (Monthly)",
    chartData: {
      series: [
        {
          name: "Click Through",
          data: [11, 30, 24, 26, 33, 38, 14, 20, 10, 5, 34, 27, 22]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "line",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-sky-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  }
];

const cards = [
  {
    title: "Delivered Rate",
    countTo: 100,
    suffix: "%",
    chartData: {
      series: [
        {
          name: "Delivered Rate",
          data: [11, 30, 24, 26, 33, 38, 14, 20, 10, 9, 34, 27, 22]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "bar",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-sky-500"]'),
        stroke: {
          width: 1,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  {
    title: "Hard Bounce Rate",
    countTo: 89,
    suffix: "%",
    chartData: {
      series: [
        {
          name: "Hard Bounce Rate",
          data: [14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "bar",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-green-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  {
    title: "Unsubscribed Rate",
    countTo: 33,
    suffix: "%",
    chartData: {
      series: [
        {
          name: "Unsubscribed Rate",
          data: [38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "bar",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-yellow-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  {
    title: "Spam Report Rate",
    countTo: 11.8,
    decimals: 1,
    suffix: "%",
    chartData: {
      series: [
        {
          name: "Spam Report Rate",
          data: [30, 24, 14, 20, 10, 13, 11, 26, 33, 38, 34, 27, 22]
        }
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "bar",
          height: 80,
          sparkline: {
            enabled: true
          },
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: getChartColorsArray('["bg-purple-500"]'),
        stroke: {
          width: 2,
          curve: "smooth"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  }
];

// email data Charts
const emailDataChart = {
  series: [
    {
      name: "Open Rate",
      data: [28, 29, 31, 36, 32, 32, 33, 40, 37]
    },
    {
      name: "Click Rate",
      data: [26, 41, 40, 51, 49, 62, 69, 52, 58]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: getChartColorsArray('["bg-custom-500", "bg-purple-500"]'),
    stroke: {
      curve: "smooth",
      width: 3
    },
    markers: {
      size: 5,
      hover: {
        sizeOffset: 1
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
      show: true
    }
  }
};

//email marketing chart
const emailMarketingChart = {
  series: [44, 55, 67],
  chartOptions: {
    chart: {
      height: 410,
      type: "radialBar"
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center"
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
              return 249;
            }
          }
        },
        track: {
          margin: 14
        }
      }
    },
    colors: getChartColorsArray('["bg-sky-500", "bg-green-500", "bg-red-500"]'),
    labels: ["Sent", "Opened", "Not Opened"]
  }
};

export const tableHeader: TableHeaderType[] = [
  { type: "check", value: "checked", justifyCenter: true },
  { title: "Email", value: "category" },
  { title: "Create Date", value: "date" },
  { title: "Open Rate (%)", value: "percentage1" },
  { title: "Click Through (%)", value: "percentage2" },
  { title: "Click Rate (%)", value: "percentage3" },
  { title: "Unsubscribed (%)", value: "percentage4" },
  { title: "Bounce (%)", value: "percentage5" },
  { title: "Spam(%)", value: "percentage6" }
];

export const tableData = [
  {
    id: "emailPerfomanceCheck1",
    category: "Adverting & Marketing Agencies",
    date: "05 Aug, 2023",
    percentage1: "18.65%",
    percentage2: "2.66%",
    percentage3: "14.14%",
    percentage4: "0.19%",
    percentage5: "1.29%",
    percentage6: "0.03%"
  },
  {
    id: "emailPerfomanceCheck2",
    category: "Automotive & Aerospace",
    date: "20 Sep, 2023",
    percentage1: "20.13%",
    percentage2: "3.44%",
    percentage3: "18.03%",
    percentage4: "0.18%",
    percentage5: "1.18%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck3",
    category: "Education",
    date: "04 Jun, 2023",
    percentage1: "18.74%",
    percentage2: "2.80%",
    percentage3: "14.94%",
    percentage4: "0.17%",
    percentage5: "1.35%",
    percentage6: "0.02%"
  },
  {
    id: "emailPerfomanceCheck4",
    category: "Financial Services",
    date: "11 Feb, 2023",
    percentage1: "18.23%",
    percentage2: "2.72%",
    percentage3: "14.79%",
    percentage4: "0.16%",
    percentage5: "1.30%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck5",
    category: "Food & Beverage",
    date: "26 Nov, 2023",
    percentage1: "15.48%",
    percentage2: "1.69%",
    percentage3: "10.69%",
    percentage4: "0.11%",
    percentage5: "0.63%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck6",
    category: "Healthcare Services",
    date: "19 July, 2023",
    percentage1: "19.12%",
    percentage2: "2.98%",
    percentage3: "15.11%",
    percentage4: "0.17%",
    percentage5: "1.08%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck7",
    category: "Professional Services",
    date: "14 Jun, 2023",
    percentage1: "18.14%",
    percentage2: "2.39%",
    percentage3: "12.92%",
    percentage4: "0.17%",
    percentage5: "1.10%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck8",
    category: "Logistics & Wholesale",
    date: "03 Dec, 2023",
    percentage1: "18.50%",
    percentage2: "0.20%",
    percentage3: "14.84%",
    percentage4: "0.15%",
    percentage5: "1.40%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck8",
    category: "Real Estate Agents & Brokers",
    date: "03 Dec, 2023",
    percentage1: "18.06%",
    percentage2: "2.02%",
    percentage3: "11.51%",
    percentage4: "0.22%",
    percentage5: "1.18%",
    percentage6: "0.00%"
  },
  {
    id: "emailPerfomanceCheck9",
    category: "Nonprofit",
    date: "03 Dec, 2023",
    percentage1: "20.39%",
    percentage2: "2.66%",
    percentage3: "12.99%",
    percentage4: "0.17%",
    percentage5: "1.09%",
    percentage6: "0.01%"
  },
  {
    id: "emailPerfomanceCheck9",
    category: "Retail",
    date: "03 Dec, 2023",
    percentage1: "14.98%",
    percentage2: "2.25%",
    percentage3: "14.82%",
    percentage4: "0.12%",
    percentage5: "0.69%",
    percentage6: "0.01%"
  }
];
export { sections, cards, emailDataChart, emailMarketingChart };
