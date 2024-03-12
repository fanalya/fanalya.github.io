import { TableHeaderType } from "@/app/components/tables/types";
import {
  img02,
  img03,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11
} from "@/assets/images/product/utils";
import { Eye, FileEdit, Trash2 } from "lucide-vue-next";

export const tableHeaderItems: TableHeaderType[] = [
  { title: "Product Code", value: "product_code" },
  { title: "Product Name", value: "product_name" },
  { title: "Category", value: "category" },
  { title: "Price", value: "price" },
  { title: "Stock", value: "stock" },
  { title: "Revenue", value: "revenue" },
  { title: "Status", value: "status" },
  { title: "Actions", value: "action" }
];

export const productList = [
  {
    product_code: "#TAD-232100071",
    img: img02,
    product_name: "Smartest Printed T-shirt",
    category: "Fashion",
    price: "$79.99",
    stock: 500,
    revenue: "$24,365",
    status: "Scheduled"
  },
  {
    product_code: "#TAD-232100072",
    img: img03,
    product_name: "Mesh Ergonomic Black Chair",
    category: "Furniture",
    price: "$214.47",
    stock: 400,
    revenue: "$1,24,365",
    status: "Publish"
  },
  {
    product_code: "#TAD-232100073",
    img: img05,
    product_name: "Fastcolors Typography Men",
    category: "Fashion",
    price: "$119.12",
    stock: 600,
    revenue: "$80,321",
    status: "Inactive"
  },
  {
    product_code: "#TAD-232100074",
    img: img06,
    product_name: "Techel Black Bluetooth Soundbar",
    category: "Electronics",
    price: "$452.99",
    stock: 300,
    revenue: "$49,234",
    status: "Publish"
  },
  {
    product_code: "#TAD-232100075",
    img: img07,
    product_name: "Bovet Fleurier AIFSQ029",
    category: "Home Decor",
    price: "$119.99",
    stock: 240,
    revenue: "$20,784",
    status: "Publish"
  },
  {
    product_code: "#TAD-232100076",
    img: img08,
    product_name: "Iron 1000 W Dry",
    category: "Electronics",
    price: "$84.99",
    stock: 110,
    revenue: "$15,493",
    status: "Scheduled"
  },
  {
    product_code: "#TAD-232100077",
    img: img09,
    product_name: "Roar Twill Blue Baseball Cap",
    category: "Fashion",
    price: "$49.99",
    stock: 470,
    revenue: "$19,321",
    status: "Publish"
  },
  {
    product_code: "#TAD-232100078",
    img: img10,
    product_name: "Crop tops for Women western wear",
    category: "Fashion",
    price: "$129.99",
    stock: 206,
    revenue: "$21,307",
    status: "Inactive"
  },
  {
    product_code: "#TAD-232100079",
    img: img11,
    product_name: "Smartees Printed Men Round Neck White",
    category: "Fashion",
    price: "$410.43",
    stock: 230,
    revenue: "$22,012",
    status: "Scheduled"
  },
  {
    product_code: "#TAD-232100080",
    img: img08,
    product_name: "Aahwan Solid Women Beige Baggy Shorts",
    category: "Fashion",
    price: "$64.70",
    stock: 150,
    revenue: "$13,987",
    status: "Publish"
  }
];

export const tableAction = [
  { value: "overview", icon: Eye, title: "Overview" },
  { value: "edit", icon: FileEdit, title: "Edit" },
  { value: "delete", icon: Trash2, title: "Delete" }
];
