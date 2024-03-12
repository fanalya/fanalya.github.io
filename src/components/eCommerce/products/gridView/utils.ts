import {
  img02,
  img03,
  img04,
  img05,
  img06,
  img08,
  img01,
  img10
} from "@/assets/images/product/utils";
import { Eye, FileEdit, Trash2 } from "lucide-vue-next";

export const priceFilterData = [
  "All",
  "$0.00 – $110.00",
  "$110.00 – $220.00",
  "$220 - $330",
  "$330 - $550",
  "$550+",
  "Low to High",
  "High to Low"
];

export const productCategoryData = [
  "All",
  "Mobiles, Computers",
  "TV, Appliances, Electronics",
  "Men's Fashion",
  "Women's Fashion",
  "Home, Kitchen, Pets",
  "Beauty, Health, Grocery",
  "Books"
];

export const ratingData = [
  "All",
  "5 Rating",
  "4 Rating and Up",
  "3 Rating and Up",
  "2 Rating and Up",
  "1 Rating and Up",
  "0 Rating"
];

export const genderData = ["All", "Male", "Female", "Others"];

export const productGridData: {
  isLiked: boolean;
  src: string;
  title: string;
  rating: number;
  ratingCount: string;
  discountPrice: string;
  totalPrice: string;
}[] = [
  {
    isLiked: true,
    src: img02,
    title: "Mesh Ergonomic Black Chair",
    rating: 4.5,
    ratingCount: "198",
    discountPrice: "$674.12",
    totalPrice: "784.99"
  },
  {
    isLiked: false,
    src: img03,
    title: "Fastcolors Typography Men",
    rating: 4.5,
    ratingCount: "1,150",
    discountPrice: "$341.99",
    totalPrice: "784.99"
  },
  {
    isLiked: false,
    src: img04,
    title: "Mesh Ergonomic Green Chair",
    rating: 4.5,
    ratingCount: "29",
    discountPrice: "$362.21",
    totalPrice: "599.99"
  },
  {
    isLiked: true,
    src: img05,
    title: "Techel Black Bluetooth Soundbar",
    rating: 4.5,
    ratingCount: "1,324",
    discountPrice: "$249.99",
    totalPrice: "399.99"
  },
  {
    isLiked: false,
    src: img06,
    title: "Bovet Fleurier AIFSQ029",
    rating: 4.5,
    ratingCount: "2,195",
    discountPrice: "$496.16",
    totalPrice: ""
  },
  {
    isLiked: true,
    src: img08,
    title: "Roar Twill Blue Baseball Cap",
    rating: 2.5,
    ratingCount: "485",
    discountPrice: "$674.12",
    totalPrice: "784.99"
  },
  {
    isLiked: false,
    src: img01,
    title: "Smartest Printed T-shirt",
    rating: 3.5,
    ratingCount: "5,321",
    discountPrice: "$89.99",
    totalPrice: ""
  },
  {
    isLiked: true,
    src: img10,
    title: "Crop tops for Women western wear",
    rating: 4.5,
    ratingCount: "1,551",
    discountPrice: "$145",
    totalPrice: "299.99"
  }
];

export const cardAction = [
  { value: "overview", icon: Eye, title: "Overview" },
  { value: "edit", icon: FileEdit, title: "Edit" },
  { value: "delete", icon: Trash2, title: "Delete" }
];
