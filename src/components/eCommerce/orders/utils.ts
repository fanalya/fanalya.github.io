import { getChartColorsArray } from "@/app/utils.ts";
import { TableHeaderType } from "@/app/components/tables/types";
import { Eye, FileEdit, Trash2 } from "lucide-vue-next";

export const orderOverviewOption = {
  series: [
    {
      name: "Orders",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8]
    }
  ],
  chartOptions: {
    chart: {
      height: 238,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + "%";
      },
      style: {
        fontSize: "12px"
      }
    },
    grid: {
      padding: {
        bottom: -10
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
      position: "top",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
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
        show: false,
        formatter: function (val: any) {
          return val + "%";
        }
      }
    },
    colors: getChartColorsArray('["bg-custom-500"]')
  }
};

export const tableAction = [
  { value: "overview", icon: Eye, title: "Overview" },
  { value: "edit", icon: FileEdit, title: "Edit" },
  { value: "delete", icon: Trash2, title: "Delete" }
];

export const tableHeader: TableHeaderType[] = [
  { value: "checked", type: "check" },
  { title: "Order ID", value: "order_id" },
  { title: "Order Date", value: "order_date" },
  { title: "Delivery Date", value: "delivery_date" },
  { title: "Customer Name", value: "customer_name" },
  { title: "Payment Method", value: "payment_method" },
  { title: "Amount", value: "amount" },
  { title: "Delivery Status", value: "delivery_status" },
  { title: "Action", value: "action" }
];
export const tableData: any[] = [
  {
    order_id: "#TWT5015100365",
    order_date: "08 Jun, 2023",
    delivery_date: "15 Jun, 2023",
    customer_name: "Marie Prohaska",
    payment_method: "Credit Card",
    amount: "$541.32",
    delivery_status: "Delivered"
  },
  {
    order_id: "#TWT5015100366",
    order_date: "11 July, 2023",
    delivery_date: "20 July, 2023",
    customer_name: "Jaqueline Hammes",
    payment_method: "Paypal",
    amount: "$1,876.33",
    delivery_status: "Shipping"
  },
  {
    order_id: "#TWT5015100367",
    order_date: "21 Aug, 2023",
    delivery_date: "24 Aug, 2023",
    customer_name: "Marlene Hirthe",
    payment_method: "Visa Card",
    amount: "$15,023.99",
    delivery_status: "New"
  },
  {
    order_id: "#TWT5015100368",
    order_date: "28 Nov, 2023",
    delivery_date: "02 Dec, 2023",
    customer_name: "Reagan Larson",
    payment_method: "American Express",
    amount: "$783.56",
    delivery_status: "Delivered"
  },
  {
    order_id: "#TWT5015100369",
    order_date: "11 Oct, 2023",
    delivery_date: "16 Oct, 2023",
    customer_name: "Glennie Langosh",
    payment_method: "American Express",
    amount: "$986.49",
    delivery_status: "Pending"
  },
  {
    order_id: "#TWT5015100370",
    order_date: "16 Feb, 2023",
    delivery_date: "22 Feb, 2023",
    customer_name: "Rickie Cremin",
    payment_method: "COD",
    amount: "$741.32",
    delivery_status: "Delivered"
  },
  {
    order_id: "#TWT5015100371",
    order_date: "18 April, 2023",
    delivery_date: "29 April, 2023",
    customer_name: "Domenic Tromp",
    payment_method: "Credit Card",
    amount: "$1,386.49",
    delivery_status: "Shipping"
  },
  {
    order_id: "#TWT5015100372",
    order_date: "21 Jan, 2024",
    delivery_date: "24 Jan, 2023",
    customer_name: "Akeem Paucek",
    payment_method: "PayPal",
    amount: "$3,487.21",
    delivery_status: "New"
  },
  {
    order_id: "#TWT5015100373",
    order_date: "05 Oct, 2024",
    delivery_date: "11 Oct, 2023",
    customer_name: "David Gaby",
    payment_method: "COD",
    amount: "$5,986.11",
    delivery_status: "Return"
  },
  {
    order_id: "#TWT5015100374",
    order_date: "07 Oct, 2024",
    delivery_date: "13 Oct, 2023",
    customer_name: "Joel Freeleagus",
    payment_method: "American Express",
    amount: "$9,451.75",
    delivery_status: "Cancelled"
  }
];
