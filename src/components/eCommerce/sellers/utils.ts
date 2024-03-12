import {
  adwords,
  appStore,
  gmail,
  android,
  figma,
  meta,
  search,
  telegram
} from "@/assets/images/brand/utils";
import { Eye, FileEdit, Trash2 } from "lucide-vue-next";

export const sellersData = [
  {
    isChecked: false,
    src: adwords,
    name: "Themesdesign",
    owner: "Paula Keenan",
    sales: "4.5k",
    product: "310",
    revenue: "$235.3k"
  },
  {
    isChecked: true,
    src: appStore,
    name: "Nazox Fashion",
    owner: "Kara Miller",
    sales: "2.3k",
    product: "67",
    revenue: "$152.8k"
  },
  {
    isChecked: false,
    src: gmail,
    name: "4xM Infotech",
    owner: "Daniel Miller",
    sales: "7.1k",
    product: "138",
    revenue: "$465.9k"
  },
  {
    isChecked: true,
    src: android,
    name: "Extra Fashion",
    owner: "Mark Walton",
    sales: "1.9k",
    product: "49",
    revenue: "$198.3k"
  },
  {
    isChecked: true,
    src: figma,
    name: "Nesta Technologies",
    owner: "William Heineman",
    sales: "4.8k",
    product: "172",
    revenue: "$746.1k"
  },
  {
    isChecked: false,
    src: meta,
    name: "Digitech Galaxy",
    owner: "David Biggs",
    sales: "9.2k",
    product: "674",
    revenue: "$14.4m"
  },
  {
    isChecked: false,
    src: search,
    name: "Zoetic Fashion",
    owner: "Jaqueline Hammes",
    sales: "1.8k",
    product: "112",
    revenue: "$132.4k"
  },
  {
    isChecked: false,
    src: telegram,
    name: "Force Medicines",
    owner: "Ashley Uilson",
    sales: "4.1k",
    product: "243",
    revenue: "$861.7k"
  }
];

export const cardAction = [
  { value: "overview", icon: Eye, title: "Overview" },
  { value: "edit", icon: FileEdit, title: "Edit" },
  { value: "delete", icon: Trash2, title: "Delete" }
];
