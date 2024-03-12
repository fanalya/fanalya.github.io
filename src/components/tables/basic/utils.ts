import { TableHeaderType } from "@/app/components/tables/types";

export const tableHeader: TableHeaderType[] = [
  { title: "Order ID", value: "id" },
  { title: "Shop", value: "shop" },
  { title: "Customer", value: "customer" },
  { title: "Price", value: "price" },
  { title: "Action", value: "action" }
];

export const tableData = [
  {
    id: "#541254265",
    shop: "Amezon",
    customer: "Cleo Carson",
    price: "$4,521"
  },
  {
    id: "#744145235",
    shop: "Shoppers",
    customer: "Juston Eichmann",
    price: "$7,546",
    isActive: true
  },
  {
    id: "#9855126598",
    shop: "Flipkart",
    customer: "Bettie Johson",
    price: "$1,350"
  },
  {
    id: "#847512653",
    shop: "Tailwick",
    customer: "Maritza Blanda",
    price: "$4,521"
  }
];
