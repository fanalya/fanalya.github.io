import { getChartColorsArray } from "@/app/utils.ts";
import { Wallet2, Package, Truck, PackageX } from "lucide-vue-next";
import { TableHeaderType } from "@/app/components/tables/types";
import {
  avatar2,
  avatar3,
  avatar4,
  avatar5
} from "@/assets/images/users/utils";
import {
  img02,
  img03,
  img04,
  img05,
  img06
} from "@/assets/images/product/utils";

const cards = [
  {
    iconColorClass: "bg-custom-100 text-custom-500 dark:bg-custom-500/20",
    iconComponent: Wallet2,
    value: 236.18,
    prefix: "$",
    suffix: "k",
    decimals: 2,
    title: "Total Revenue"
  },
  {
    iconColorClass: "text-purple-500 bg-purple-100 dark:bg-purple-500/20",
    iconComponent: Package,
    value: 13461,
    title: "Total Orders"
  },
  {
    iconColorClass: "text-green-500 bg-green-100 dark:bg-green-500/20",
    iconComponent: Truck,
    value: 17150,
    title: "Delivered"
  },
  {
    iconColorClass: "text-red-500 bg-red-100 dark:bg-red-500/20",
    iconComponent: PackageX,
    value: 3519,
    title: "Cancelled"
  }
];
//Order Statistics
const orderStatisticsChart = {
  series: [
    {
      name: "Pending",
      data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35]
    },
    {
      name: "New Orders",
      data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
    }
  ],
  chartOptions: {
    chart: {
      type: "line",
      height: 310,
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    colors: getChartColorsArray('["bg-purple-500", "bg-sky-500"]'),
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true,
      padding: {
        top: -20,
        right: 0
      }
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    }
  }
};

const salesRevenueChart = {
  series: [
    {
      name: "Total Sales",
      data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22]
    },
    {
      name: "Total Profit",
      data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21]
    }
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 300,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false
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
      ]
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$" + val + "k";
        }
      }
    },
    grid: {
      show: true,
      padding: {
        top: -20,
        right: -10
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%"
      }
    },
    colors: getChartColorsArray(
      '["bg-custom-500", "bg-custom-400", "bg-custom-300"]'
    ),
    fill: {
      opacity: 1
    },
    legend: {
      position: "bottom"
    }
  }
};

//Traffic Resources Chart
const trafficResourcesChart = {
  series: [44, 34, 22],
  chartOptions: {
    chart: {
      height: 222,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 875;
            }
          }
        }
      }
    },
    grid: {
      show: true,
      padding: {
        top: -8,
        bottom: -15,
        left: 0,
        right: 0
      }
    },
    colors: getChartColorsArray(
      '["bg-sky-500", "bg-purple-500", "bg-green-500", "bg-yellow-500"]'
    ),
    labels: ["Direct", "Referrals", "Search Engine"]
  }
};

const users = [
  {
    name: "Urrie Arthur",
    email: "arthur@tailwick.com",
    avatar: avatar2,
    amount: "$2,452"
  },
  {
    name: "Natalie Christy",
    email: "natalie@tailwick.com",
    avatar: avatar3,
    amount: "$1,893"
  },
  {
    name: "Laurie Jackson",
    email: "jackson@tailwick.com",
    avatar: avatar4,
    amount: "$1,196"
  },
  {
    name: "Michael Torres",
    email: "torres@tailwick.com",
    avatar: avatar5,
    amount: "$976"
  }
];

//Sales This Month Chart
const salesThisMonthChart = {
  series: [
    {
      type: "rangeArea",
      name: "Profit Range",

      data: [
        {
          x: "Mar",
          y: [900, 2900]
        },
        {
          x: "Apr",
          y: [1400, 2700]
        },
        {
          x: "May",
          y: [2600, 3900]
        },
        {
          x: "Jun",
          y: [500, 1700]
        },
        {
          x: "Jul",
          y: [1900, 2300]
        },
        {
          x: "Aug",
          y: [1000, 1500]
        }
      ]
    },

    {
      type: "rangeArea",
      name: "Expense Range",
      data: [
        {
          x: "Mar",
          y: [3900, 4900]
        },
        {
          x: "Apr",
          y: [3400, 3900]
        },
        {
          x: "May",
          y: [5100, 5900]
        },
        {
          x: "Jun",
          y: [5400, 6700]
        },
        {
          x: "Jul",
          y: [4300, 4600]
        },
        {
          x: "Aug",
          y: [2100, 2900]
        }
      ]
    },

    {
      type: "line",
      name: "Profit Median",
      data: [
        {
          x: "Mar",
          y: 1900
        },
        {
          x: "Apr",
          y: 2200
        },
        {
          x: "May",
          y: 3000
        },
        {
          x: "Jun",
          y: 1000
        },
        {
          x: "Jul",
          y: 2100
        },
        {
          x: "Aug",
          y: 1200
        },
        {
          x: "Sep",
          y: 2250
        },
        {
          x: "Oct",
          y: 2900
        }
      ]
    },
    {
      type: "line",
      name: "Expense Median",
      data: [
        {
          x: "Mar",
          y: 4300
        },
        {
          x: "Apr",
          y: 3700
        },
        {
          x: "May",
          y: 5500
        },
        {
          x: "Jun",
          y: 5900
        },
        {
          x: "Jul",
          y: 4500
        },
        {
          x: "Aug",
          y: 3500
        },
        {
          x: "Sep",
          y: 2000
        },
        {
          x: "Oct",
          y: 1800
        }
      ]
    }
  ],
  chartOptions: {
    chart: {
      height: 285,
      type: "rangeArea",
      animations: {
        speed: 500
      },
      toolbar: {
        show: false
      }
    },
    colors: getChartColorsArray(
      '["bg-sky-100", "bg-orange-100", "bg-sky-500", "bg-orange-500"]'
    ),
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: [0.24, 0.24, 1, 1]
    },
    forecastDataPoints: {
      count: 2
    },
    yaxis: {
      show: false
    },
    stroke: {
      curve: "straight",
      width: [0, 0, 2, 2]
    },
    grid: {
      show: true,
      padding: {
        top: -8,
        left: 10,
        right: 0
      }
    },
    legend: {
      show: true,
      customLegendItems: ["Team B", "Team A"],
      inverseOrder: true
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    }
  }
};

const products = [
  {
    name: "Mesh Ergonomic Black Chair",
    image: img02,
    rating: 4.5,
    cartCount: 798
  },
  {
    name: "Fastcolors Typography Men",
    image: img03,
    rating: 4.5,
    cartCount: 695
  },
  {
    name: "Mesh Ergonomic Green Chair",
    image: img04,
    rating: 4.5,
    cartCount: 985
  },
  {
    name: "Techel Black Bluetooth Soundbar",
    image: img05,
    rating: 4.5,
    cartCount: 813
  },
  {
    name: "Bovet Fleurier AIFSQ029",
    image: img06,
    rating: 4.5,
    cartCount: 915
  },
  {
    name: "Fastcolors Typography Men",
    image: img03,
    rating: 4.5,
    cartCount: 785
  }
];

//Audience Chart
const audienceChart = {
  series: [
    {
      name: "Male",
      data: [44, 55, 41, 67, 22, 43, 26]
    },
    {
      name: "Female",
      data: [13, 23, 20, 8, 13, 27, 41]
    }
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 390,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        columnWidth: "44%",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 600
            }
          }
        }
      }
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2023 GMT",
        "01/02/2023 GMT",
        "01/03/2023 GMT",
        "01/04/2023 GMT",
        "01/05/2023 GMT",
        "01/06/2023 GMT",
        "01/07/2023 GMT"
      ]
    },
    colors: getChartColorsArray(
      '["bg-sky-500", "bg-orange-400", "bg-green-500", "bg-yellow-500"]'
    ),
    legend: {
      position: "top",
      horizontalAlign: "right"
    },
    fill: {
      opacity: 1
    }
  }
};

export const tableHeader: TableHeaderType[] = [
  { title: "#", value: "id" },
  { title: "Order ID", value: "orderNumber" },
  { title: "Customer Name", value: "customerName" },
  { title: "Location", value: "country" },
  { title: "Order Date", value: "orderDate" },
  { title: "Payments", value: "paymentMethod" },
  { title: "Quantity", value: "quantity" },
  { title: "Price", value: "unitPrice" },
  { title: "Total Amount", value: "totalPrice" },
  { title: "Status", value: "deliveryStatus" },
  { title: "Action", value: "action" }
];

export const tableData = [
  {
    id: "01",
    orderNumber: "#TWT5015100365",
    customerName: "Marie Prohaska",
    country: "Germany",
    orderDate: "08 Jun, 2023",
    paymentMethod: "Credit Card",
    quantity: 5,
    unitPrice: "$146.99",
    totalPrice: "$749.95",
    deliveryStatus: "Delivered",
    statusColor: "green"
  },
  {
    id: "02",
    orderNumber: "#TWT5015100366",
    customerName: "Jaqueline Hammes",
    country: "France",
    orderDate: "11 July, 2023",
    paymentMethod: "Paypal",
    quantity: 2,
    unitPrice: "$450.00",
    totalPrice: "$900.00",
    deliveryStatus: "Shipping",
    statusColor: "purple"
  },
  {
    id: "03",
    orderNumber: "#TWT5015100367",
    customerName: "Marlene Hirthe",
    country: "Argentina",
    orderDate: "21 Aug, 2023",
    paymentMethod: "Visa Card",
    quantity: 3,
    unitPrice: "$147.23",
    totalPrice: "$294.46",
    deliveryStatus: "New",
    statusColor: "sky"
  },
  {
    id: "04",
    orderNumber: "#TWT5015100368",
    customerName: "Reagan Larson",
    country: "Belgium",
    orderDate: "28 Nov, 2023",
    paymentMethod: "American Express",
    quantity: "01",
    unitPrice: "$579.12",
    totalPrice: "$579.12",
    deliveryStatus: "Delivered",
    statusColor: "green"
  },
  {
    id: "05",
    orderNumber: "#TWT5015100369",
    customerName: "Glennie Langosh",
    country: "Australia",
    orderDate: "11 Oct, 2023",
    paymentMethod: "American Express",
    quantity: "01",
    unitPrice: "$349.00",
    totalPrice: "$349.00",
    deliveryStatus: "Pending",
    statusColor: "yellow"
  },
  {
    id: "06",
    orderNumber: "#TWT5015100370",
    customerName: "Rickie Cremin",
    country: "United States",
    orderDate: "16 Feb, 2023",
    paymentMethod: "COD",
    quantity: "03",
    unitPrice: "$89.49",
    totalPrice: "$268.47",
    deliveryStatus: "Delivered",
    statusColor: "green"
  },
  {
    id: "07",
    orderNumber: "#TWT5015100371",
    customerName: "Domenic Tromp",
    country: "Afghanistan",
    orderDate: "21 Jan, 2024",
    paymentMethod: "PayPal",
    quantity: "02",
    unitPrice: "$739.79",
    totalPrice: "$1,479.58",
    deliveryStatus: "New",
    statusColor: "sky"
  }
];
export {
  cards,
  orderStatisticsChart,
  salesRevenueChart,
  trafficResourcesChart,
  users,
  salesThisMonthChart,
  products,
  audienceChart
};
