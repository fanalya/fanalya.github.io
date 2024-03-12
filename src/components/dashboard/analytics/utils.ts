import { getChartColorsArray } from "@/app/utils.ts";
import Logo from "@/assets/images/logo-sm.png";
import { Mail, User2, UserX2, Eye, PackageOpen } from "lucide-vue-next";
import { TableHeaderType } from "@/app/components/tables/types";

//Platform Perspective
const platformPerspectiveChart = {
  series: [
    {
      data: [
        {
          x: "React",
          y: 218
        },
        {
          x: "TailwindCSS",
          y: 187
        },
        {
          x: "Angular",
          y: 134
        },
        {
          x: "Vue Js",
          y: 55
        },
        {
          x: "Laravel",
          y: 99
        },
        {
          x: "PHP",
          y: 34
        },
        {
          x: "ASP.Net",
          y: 86
        },
        {
          x: "Django",
          y: 30
        },
        {
          x: "CI",
          y: 44
        }
      ]
    }
  ],
  chartOptions: {
    legend: {
      show: false
    },
    chart: {
      height: 270,
      type: "treemap",
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        top: -15,
        bottom: 0,
        right: -20
      }
    },
    colors: getChartColorsArray('["bg-custom-500"]')
  }
};

//Response Times
const responseTimesChart = {
  series: [
    {
      name: "Response Times",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      },
      margin: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      width: 2,
      dashArray: 0
    },
    dataLabels: {
      enabled: false
    },
    colors: getChartColorsArray('["bg-red-500"]'),
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
    }
  }
};

//Pages Interaction
const pagesInteractionChart = {
  series: [
    {
      name: "Viewers",
      data: [20, 13, 19, 23, 29, 42, 33, 29, 37, 46, 40, 49]
    }
    // {
    //     name: 'Followers',
    //     data: [10, 18, 13, 23, 33, 39, 30, 21, 36, 42, 39, 46]
    // }
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
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
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      position: "bottom",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"]
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -10
      }
    },
    colors: getChartColorsArray('["bg-custom-500", "bg-purple-500"]')
  }
};

//User Devices
const userDeviceCharts = {
  series: [
    {
      name: "Desktop",
      data: [80, 50, 30, 40, 100, 20]
    },
    {
      name: "Mobile",
      data: [20, 30, 40, 80, 20, 80]
    },
    {
      name: "Others",
      data: [44, 76, 78, 13, 43, 10]
    }
  ],
  chartOptions: {
    chart: {
      height: 240,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
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
    ],
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-green-500", "bg-orange-500"]'
    ),
    legend: {
      position: "right",
      offsetY: 0,
      height: 230
    },
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"]
    }
  }
};

//Satisfaction Rate
const satisfactionRateChart = {
  series: [95.33],
  chartOptions: {
    chart: {
      type: "radialBar",
      height: 450,
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
        hollow: {
          size: "60%",
          margin: 0,
          image: Logo,
          imageWidth: 36,
          imageHeight: 36,
          imageClipped: false,
          imageOffsetY: -60
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -5,
            fontSize: "22px",
            fontWeight: "600"
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
    stroke: {
      dashArray: 4
    },
    labels: ["Average Results"]
  }
};

//Daily Visit Insights
const dailyVisitInsightsChart = {
  series: [
    {
      name: "Male",
      data: [55, 41, 67, 22, 43, 21, 33, 45]
    },
    {
      name: "Female",
      data: [55, 41, 67, 22, 43, 21, 33, 45]
    }
  ],
  chartOptions: {
    annotations: {
      points: [
        {
          x: "Bananas",
          seriesIndex: 0,
          label: {
            borderColor: getChartColorsArray(
              '["bg-green-500", "bg-purple-500"]'
            )[1],
            offsetY: 0,
            style: {
              color: "#fff",
              background: getChartColorsArray(
                '["bg-green-500", "bg-purple-500"]'
              )[1]
            },
            text: "Bananas are good"
          }
        }
      ]
    },
    colors: getChartColorsArray('["bg-green-500", "bg-purple-500"]'),
    chart: {
      height: 238,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "70%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      tickPlacement: "on"
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
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
          show: true
        }
      },
      padding: {
        top: -10,
        right: -10,
        left: -10
      }
    },
    yaxis: {
      show: false
    }
  }
};

// Line with Data Labels
const lineWithDataLabelChart = {
  series: [
    {
      name: "Income - 2023",
      data: [28, 29, 33, 36, 32]
    },
    {
      name: "Expense - 2023",
      data: [20, 17, 21, 29, 23]
    }
  ],
  chartOptions: {
    chart: {
      height: 235,
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
    colors: getChartColorsArray('["bg-custom-500", "bg-green-500"]'),
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: "smooth",
      size: 2
    },
    markers: {
      size: 1
    },
    yaxis: {
      show: false
    },
    xaxis: {
      categories: ["Mar", "Apr", "May", "Jun", "Jul"]
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -25
      }
    }
  }
};

//Subscription Distribution
const subscriptionDistribution = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    labels: ["Beginner", "Intermediate", "Enterprise", "VIP", "Professional"],
    chart: {
      height: 270,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        donut: {
          size: "75%"
        }
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

const items = [
  {
    iconColor: "text-red-500",
    bgColor: "bg-red-100",
    icon: Mail,
    title: "Clicked",
    value: "9,745",
    percentageColor: "text-green-500",
    percentageValue: "2.5%"
  },
  {
    iconColor: "text-sky-500",
    bgColor: "bg-sky-100",
    icon: User2,
    title: "Subscribe",
    value: "3,352",
    percentageColor: "text-green-500",
    percentageValue: "18.9%"
  },
  {
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
    icon: UserX2,
    title: "Unsubscribe",
    value: "85,745",
    percentageColor: "text-red-500",
    percentageValue: "1.2%"
  },
  {
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    icon: Eye,
    title: "Viewers",
    value: "85,745",
    percentageColor: "text-green-500",
    percentageValue: "11.6%"
  },
  {
    iconColor: "text-slate-500",
    bgColor: "bg-slate-100",
    icon: PackageOpen,
    title: "Opened",
    value: "85,745",
    percentageColor: "text-red-500",
    percentageValue: "3.1%"
  }
];

const trafficSourceData = [
  {
    category: "Google",
    progressBar: {
      color: "bg-custom-500",
      width: 89,
      height: 3.5
    }
  },
  {
    category: "Social Media",
    progressBar: {
      color: "yellow",
      width: 81,
      height: 3.5
    }
  },
  {
    category: "Direct Message",
    progressBar: {
      color: "green",
      width: 63,
      height: 3.5
    }
  },
  {
    category: "Others",
    progressBar: {
      color: "slate",
      width: 25,
      height: 3.5
    }
  }
];

// Table
export const tableHeader: TableHeaderType[] = [
  { type: "check", value: "checked", justifyCenter: true },
  { title: "Products", value: "id" },
  { title: "Price", value: "price" },
  { title: "Income", value: "revenue" },
  { title: "Sales", value: "quantity_sold" },
  { title: "View", value: "total_sold" },
  { title: "Click", value: "total_remaining" },
  { title: "Click (%)", value: "percentage" },
  { title: "Status", value: "status" }
];

export const tableData = [
  {
    id: "SmartTech Pro-4K Ultra HD TV",
    price: "$1,542.99",
    revenue: "$12.36k",
    quantity_sold: 3217,
    total_sold: 21451,
    total_remaining: 16287,
    percentage: "39.56%",
    status: "Active",
    checked: false
  },
  {
    id: "LuxeLeather Vintage Messenger Bag",
    price: "$699.99",
    revenue: "$22.88k",
    quantity_sold: 7321,
    total_sold: 32151,
    total_remaining: 27485,
    percentage: "87.33%",
    status: "Active",
    checked: false
  },
  {
    id: "InfinityGlow LED Desk Lamp",
    price: "$324.77",
    revenue: "$21.10k",
    quantity_sold: 8245,
    total_sold: 33415,
    total_remaining: 25430,
    percentage: "91.43%",
    status: "Unactive",
    checked: false
  },
  {
    id: "PowerPulse Wireless Earbuds",
    price: "$99.00",
    revenue: "$374",
    quantity_sold: 2987,
    total_sold: 41123,
    total_remaining: 46963,
    percentage: "79.21%",
    status: "Active",
    checked: false
  },
  {
    id: "AdventureQuest Outdoor Backpack",
    price: "$107.00",
    revenue: "$8.22",
    quantity_sold: 2541,
    total_sold: 14789,
    total_remaining: 12584,
    percentage: "39.04%",
    status: "Unactive",
    checked: false
  },
  {
    id: "FitLifePro Fitness Tracker",
    price: "$111.99",
    revenue: "$42.2k",
    quantity_sold: 44201,
    total_sold: 40888,
    total_remaining: 14520,
    percentage: "68.41%",
    status: "Active",
    checked: false
  },
  {
    id: "ChefMaster Pro Cookware Set",
    price: "$107.00",
    revenue: "$8.22",
    quantity_sold: 2541,
    total_sold: 14789,
    total_remaining: 12584,
    percentage: "39.04%",
    status: "Unactive",
    checked: false
  },
  {
    id: "PetPalace Pet Accessories",
    price: "$1,542.99",
    revenue: "$12.36k",
    quantity_sold: 3217,
    total_sold: 21451,
    total_remaining: 16287,
    percentage: "39.56%",
    status: "Active",
    checked: false
  },
  {
    id: "MusicMuse Premium Headphones",
    price: "$99.00",
    revenue: "$374",
    quantity_sold: 2987,
    total_sold: 41123,
    total_remaining: 46963,
    percentage: "79.21%",
    status: "Active",
    checked: false
  },
  {
    id: "WellnessWonders Yoga Mat",
    price: "$324.77",
    revenue: "$21.10k",
    quantity_sold: 8245,
    total_sold: 33415,
    total_remaining: 25430,
    percentage: "91.43%",
    status: "Unactive",
    checked: false
  }
];
export {
  platformPerspectiveChart,
  responseTimesChart,
  pagesInteractionChart,
  userDeviceCharts,
  satisfactionRateChart,
  dailyVisitInsightsChart,
  lineWithDataLabelChart,
  subscriptionDistribution,
  items,
  trafficSourceData
};
