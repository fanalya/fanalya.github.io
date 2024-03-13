import { chat, email, orderOverview } from "@/assets/images/landing/utils.ts";
import {
  CheckCheck,
  X,
  Goal,
  GraduationCap,
  Crown,
  Luggage,
} from "lucide-vue-next";

export const featuresData = [
  {
    image: chat,
    category: "Popular Apps",
    labelClass: "sky",
    title: "Chat with Client & Employee",
  },
  {
    image: email,
    category: "Email Apps",
    labelClass: "purple",
    title: "Exciting New Features Await You",
  },
  {
    image: orderOverview,
    category: "HR Management",
    labelClass: "red",
    title: "Unleash Your Creativity with Our Latest Tools",
  },
];

export const counterData = [
  {
    endVal: 4,
    text: "Multiple Layouts",
  },
  {
    endVal: 12,
    text: "Multi Languages",
  },
  {
    endVal: 7,
    text: "Apps & Dashboard",
  },
  {
    endVal: 4,
    text: "Multiple Modes",
  },
  {
    endVal: 36500,
    text: "Happy Customers",
  },
];

export const pricingData = [
  {
    title: "Lite",
    icon: Goal,
    color: "text-green-500",
    description: "Perfect plan for Lite",
    price: 9.99,
    buttonText: "Purchase Now",
    features: [
      { icon: CheckCheck, text: "<b>3</b> Projects", strikethrough: true },
      { icon: CheckCheck, text: "<b>299</b> Customers", strikethrough: true },
      { icon: CheckCheck, text: "Scalable Bandwidth", strikethrough: true },
      {
        icon: CheckCheck,
        text: "<b>0</b> No Team Account",
        strikethrough: true,
      },
      {
        icon: X,
        text: "In app messaging",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "<b>5</b> FTP Login",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Detailed Analytics",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Custom Domain",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Smart Workflow",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "IQ test",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
    ],
  },
  {
    title: "Professional",
    icon: GraduationCap,
    color: "text-purple-500",
    description: "For users who want to do more.",
    price: 29.99,
    buttonText: "Purchase Now",
    features: [
      { icon: CheckCheck, text: "<b>3</b> Projects", strikethrough: true },
      { icon: CheckCheck, text: "<b>299</b> Customers", strikethrough: true },
      { icon: CheckCheck, text: "Scalable Bandwidth", strikethrough: true },
      {
        icon: CheckCheck,
        text: "<b>3</b> No Team Account",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "In app messaging",
        strikethrough: true,
      },
      {
        icon: X,
        text: "<b>5</b> FTP Login",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Detailed Analytics",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Custom Domain",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Smart Workflow",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "IQ test",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
    ],
  },
  {
    title: "Enterprise",
    badge: "true",
    badgeClass: "relative overflow-hidden",
    icon: Crown,
    color: "text-sky-500",
    description: "Run your company on your teams",
    price: 39.99,
    buttonText: "Purchase Now",
    features: [
      { icon: CheckCheck, text: "<b>3</b> Projects", strikethrough: true },
      { icon: CheckCheck, text: "<b>299</b> Customers", strikethrough: true },
      { icon: CheckCheck, text: "Scalable Bandwidth", strikethrough: true },
      {
        icon: CheckCheck,
        text: "<b>3</b> No Team Account",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "In app messaging",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "<b>5</b> FTP Login",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "Detailed Analytics",
        strikethrough: true,
      },
      {
        icon: X,
        text: "Custom Domain",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "Smart Workflow",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
      {
        icon: X,
        text: "IQ test",
        class: "line-through text-slate-500 dark:text-zink-200",
      },
    ],
  },
  {
    title: "Unlimited",
    icon: Luggage,
    color: "text-orange-500",
    description: "Your entire team in one place",
    price: 49.99,
    buttonText: "Purchase Now",
    features: [
      { icon: CheckCheck, text: "<b>3</b> Projects", strikethrough: true },
      { icon: CheckCheck, text: "<b>299</b> Customers", strikethrough: true },
      { icon: CheckCheck, text: "Scalable Bandwidth", strikethrough: true },
      {
        icon: CheckCheck,
        text: "<b>3</b> No Team Account",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "In app messaging",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "<b>5</b> FTP Login",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "Detailed Analytics",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "Custom Domain",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "Smart Workflow",
        strikethrough: true,
      },
      {
        icon: CheckCheck,
        text: "IQ test",
        strikethrough: true,
      },
    ],
  },
];

export const contactData = [
  {
    title: "Dashboards",
    class: "xl:col-span-3",
    items: [
      { name: "Analytics", link: "#" },
      { name: "CRM", link: "#" },
      { name: "Ecommerce", link: "#" },
      { name: "Email", link: "#" },
      { name: "HR", link: "#" },
      { name: "Social Media", link: "#" },
    ],
  },
  {
    title: "Apps Pages",
    class: "xl:col-span-3",
    items: [
      { name: "Ecommerce Apps", link: "#" },
      { name: "Invoices", link: "#" },
      { name: "Email App", link: "#" },
      { name: "Chat App", link: "#" },
      { name: "Users Apps", link: "#" },
      { name: "HR Management", link: "#" },
      { name: "Social Media", link: "#" },
    ],
  },
  {
    title: "Resources",
    class: "xl:col-span-2",
    items: [
      { name: "All Resources", link: "#" },
      { name: "Blog", link: "#" },
      { name: "FAQ's", link: "#" },
      { name: "Help Center", link: "#" },
    ],
  },
];
