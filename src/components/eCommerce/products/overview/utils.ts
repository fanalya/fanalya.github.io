import { FileEdit, Trash2, Truck, Container } from "lucide-vue-next";
import {
  avatar2,
  userDummyImg,
  avatar5,
  avatar8
} from "@/assets/images/users/utils";
export const cardAction = [
  { icon: FileEdit, title: "Edit" },
  { icon: Trash2, title: "Delete" }
];

export const colorsClass = [
  {
    class: `border-custom-500 bg-custom-500 checked:bg-custom-500 checked:border-custom-500`,
    disabled: true
  },
  {
    class: `bg-red-300 border-red-300 checked:bg-red-300 checked:border-red-300`
  },
  {
    class: `bg-green-300 border-green-300 checked:bg-green-300 checked:border-green-300`
  },
  {
    class: `border-slate-500 bg-slate-500 checked:bg-slate-500 checked:border-slate-500`
  },
  {
    class: `bg-purple-500 border-purple-500 checked:bg-purple-500 checked:border-purple-500`
  },
  {
    class: `bg-sky-500 border-sky-500 checked:bg-sky-500 checked:border-sky-500`
  },
  {
    class: `bg-yellow-500 border-yellow-500 checked:bg-yellow-500 checked:border-yellow-500`
  },
  {
    class: `bg-green-500 border-green-500 checked:bg-green-500 checked:border-green-500`
  },
  {
    class: `bg-slate-800 border-slate-800 checked:bg-slate-800 checked:border-slate-800`
  },
  {
    class: `bg-slate-200 border-slate-200 checked:bg-slate-200 checked:border-slate-200`
  },
  {
    class: `bg-emerald-300 border-embg-emerald-300 checked:bg-emerald-300 checked:border-embg-emerald-300`
  }
];

export const offers = [
  `<span class="font-semibold">Bank Offer</span> 10% Instant Discount on
          Paypal, up to $1250 on orders of $5,000 and above`,
  `<span class="font-semibold">Special Price</span> Get at flat $199`,
  `<span class="font-semibold">Partner Offer</span> Purchase now & get 1
          surprise cashback coupon in Future`,
  `<span class="font-semibold">Bank Offer</span> UPI Offer Men's Clothing`
];

export const eminities = [
  {
    icon: Truck,
    title: "Estimated Delivery",
    description: "01 - 07 Dec, 2023"
  },
  {
    icon: Container,
    title: "Free Shipping & Returns",
    description: "On all orders over $200.00"
  }
];

export const featureTable = [
  { title: "Type", value: "Round Neck" },
  { title: "Sleeve", value: "Half Sleeve" },
  { title: "Fit", value: "Regular" },
  { title: "Fabric", value: "Cotton Blend" },
  { title: "Pack of", value: "1" },
  { title: "Product Code", value: "TWT1542" },
  { title: "Ideal for", value: "Women" }
];

export const ratings = [
  {
    star: 5,
    color: "green",
    total: "1,210",
    width: 79
  },
  {
    star: 4,
    color: "sky",
    total: "1,174",
    width: 66
  },
  {
    star: 3,
    color: "purple",
    total: "762",
    width: 45
  },
  {
    star: 2,
    color: "yellow",
    total: "274",
    width: 22
  },
  {
    star: 1,
    color: "red",
    total: "32",
    width: 5
  }
];

export const reviews = [
  {
    user: avatar2,
    name: "Aubrey Beer",
    onDate: "14 Jan, 2024",
    rating: 5,
    review: "Nice product good quality and looking",
    like: 15,
    dislike: 3,
    color: "custom"
  },
  {
    user: userDummyImg,
    name: "Theodora Jones",
    onDate: "20 July, 2023",
    rating: 4,
    review: `Amazing! Fast, to the point, professional and really amazing to work
    with them!!!`,
    like: 77,
    dislike: 26
  },
  {
    user: avatar5,
    name: "Jordane Dare",
    onDate: "07 Dec, 2023",
    rating: 5,
    review: "Very nice design. Clean Code and easy customizable",
    like: 31,
    dislike: 9,
    color: "yellow"
  },
  {
    user: avatar8,
    name: "avern Ratke",
    onDate: "10 Aug, 2023",
    rating: 5,
    review: `The best templates which is supported multiple programming languages
    with beautiful templates. thank you for the valuable template.`,
    like: 49,
    dislike: 17,
    color: "green"
  }
];

export const ratingSelect: { value: string; label: string }[] = [
  { value: "", label: "Select Rating" },
  { value: "5", label: "5 Star" },
  { value: "4", label: "4 Star" },
  { value: "3", label: "3 Star" },
  { value: "2", label: "2 Star" },
  { value: "1", label: "1 Star" }
];
