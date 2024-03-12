import { img16, img17, img18, img19 } from "@/assets/images/product/utils";
import {
  avatar2,
  avatar4,
  avatar7,
  avatar9
} from "@/assets/images/users/utils";

export const productData = [
  {
    id: 1,
    name: "Green Sneakers Skate",
    image: img16,
    rating: 4.8,
    price: "$299.99",
    link: "#!"
  },
  {
    id: 2,
    name: "Nike Running Shoes",
    image: img17,
    rating: 4.4,
    price: "$129.49",
    link: "#!"
  },
  {
    id: 3,
    name: "Nike Air Max Sneakers Shoe",
    image: img18,
    rating: 4.9,
    price: "$149.99",
    link: "#!"
  },
  {
    id: 4,
    name: "Dunk Sneakers Skate shoe",
    image: img19,
    rating: 4.6,
    price: "$174.65",
    link: "#!"
  }
];

export const testimonials = [
  {
    id: 1,
    avatar: avatar2,
    avatarColor: "custom",
    message:
      "The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template.",
    username: "Angela Ulligan",
    stars: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    avatar: avatar4,
    avatarColor: "yellow",
    message:
      "I encountered a few errors in the design of the product detail page in Angular. I contacted the support team and they established.",
    username: "muratoztrkk01",
    usernameLink: "#!",
    stars: [1, 2, 3, 4, 5]
  },
  {
    id: 3,
    avatar: avatar7,
    avatarColor: "red",
    message:
      "This theme is very good. I really recommend it. It's very good optimized, elegant, well documented, etc.",
    username: "Christine Marbury",
    stars: [1, 2, 3, 4, 5]
  },
  {
    id: 4,
    avatar: avatar9,
    avatarColor: "purple",
    message:
      "ThemesDesign used Anydesk to fix the bug in Flask and django version. I highly recommend this product!",
    username: "Anthony Hobbs",
    stars: [1, 2, 3, 4, 5]
  }
];

export const contactData = [
  {
    title: "Dashboards",
    class: "xl:col-span-3",
    links: [
      { text: "Analytics", url: "#!" },
      { text: "CRM", url: "#!" },
      { text: "Ecommerce", url: "#!" },
      { text: "Email", url: "#!" },
      { text: "HR", url: "#!" },
      { text: "Social Media", url: "#!" }
    ]
  },
  {
    title: "About Us",
    class: "xl:col-span-3",
    links: [
      { text: "News", url: "#!" },
      { text: "Service", url: "#!" },
      { text: "Our Policy", url: "#!" },
      { text: "Support 24/7", url: "#!" },
      { text: "FAQ's", url: "#!" }
    ]
  },
  {
    title: "Get Help",
    class: "xl:col-span-2",
    links: [
      { text: "About Us", url: "#!" },
      { text: "Contact Us", url: "#!" },
      { text: "Payment Policy", url: "#!" },
      { text: "Return Policy", url: "#!" }
    ]
  }
];
