import { Truck, CreditCard, CircleDollarSign } from "lucide-vue-next";
import { avatar4 } from "@/assets/images/users/utils";
import { img08, img04, img01 } from "@/assets/images/product/utils";

export const overviewDashboard = [
  {
    title: "Shipping Details",
    icon: Truck,
    color: "purple",
    caption: "Pauline Hylton",
    add1: "1235 Crossing Meadows Dr, Onalaska",
    add2: "West Virginia, USA"
  },
  {
    title: "Billing Details",
    icon: CreditCard,
    color: "orange",
    caption: "Pauline Hylton",
    add1: "1235 Crossing Meadows Dr, Onalaska",
    add2: "West Virginia, USA"
  },
  {
    title: "Payment Details",
    icon: CircleDollarSign,
    color: "sky",
    caption: "ID: #TSD456DF41SD5",
    add1: "Payment Method: <b>Credit Card</b>",
    add2: "Card Number: <b>xxxx xxxx xxxx 1501</b>"
  },
  {
    title: "Customer Info",
    src: avatar4,
    color: "yellow",
    caption: "Pauline Hylton",
    add1: "pauline@tailwick.com",
    add2: "+(78) 120 4843 4714"
  }
];

export const orderSummery = [
  {
    src: img08,
    title: "Roar Twill Blue Baseball Cap",
    count: "$149.99 x 02",
    total: "$299.98"
  },
  {
    src: img04,
    title: "Mesh Ergonomic Green Chair",
    count: "$362.21 x 1",
    total: "$362.21"
  },
  {
    src: img01,
    title: "Smartest Printed T-shirt",
    count: "$89.99 x 03",
    total: "$269.97"
  }
];
