import {
  Facebook,
  Instagram,
  Globe,
  Dribbble,
  Github,
  Linkedin,
  Wallet,
  Goal,
  Package,
} from "lucide-vue-next";
import { getChartColorsArray } from "@/app/utils.ts";
import { TableHeaderType } from "@/app/components/tables/types";
import { img1, img2, img3 } from "@/assets/images/payment/utils.ts";
import {
  adwords,
  appStore,
  android,
  figma,
  gmail,
  meta,
  search,
  twitter,
} from "@/assets/images/brand/utils.ts";
import {
  avatar2,
  avatar3,
  avatar4,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar5,
} from "@/assets/images/users/utils";

// Icon
export const socialMediaButtons = [
  {
    class:
      "flex items-center justify-center transition-all duration-200 ease-linear rounded w-9 h-9 text-sky-500 bg-sky-100 hover:bg-sky-200 dark:bg-sky-500/20 dark:hover:bg-sky-500/30",
    icon: Facebook,
  },
  {
    class:
      "flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded w-9 h-9 hover:bg-pink-200 dark:bg-pink-500/20 dark:hover:bg-pink-500/30",
    icon: Instagram,
  },
  {
    class:
      "flex items-center justify-center text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded w-9 h-9 hover:bg-red-200 dark:bg-red-500/20 dark:hover:bg-red-500/30",
    icon: Globe,
  },
  {
    class:
      "flex items-center justify-center transition-all duration-200 ease-linear rounded text-custom-500 bg-custom-100 w-9 h-9 hover:bg-custom-200 dark:bg-custom-500/20 dark:hover:bg-custom-500/30",
    icon: Linkedin,
  },
  {
    class:
      "flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded w-9 h-9 hover:bg-pink-200 dark:bg-pink-500/20 dark:hover:bg-pink-500/30",
    icon: Dribbble,
  },
  {
    class:
      "flex items-center justify-center transition-all duration-200 ease-linear rounded w-9 h-9 text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500",
    icon: Github,
  },
];

// Personal Information
export const recentStatisticsChart = {
  series: [
    {
      name: "Following",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 87, 72],
    },
    {
      name: "Followers",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 105, 91],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: getChartColorsArray('["bg-custom-500", "bg-purple-500"]'),
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
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
        "Dec",
      ],
    },
    fill: {
      opacity: 1,
    },
  },
};

// Personal Information
export const personalInfoData = [
  {
    label: "Designation",
    value: "CEO & Founder",
  },
  {
    label: "Phone No",
    value: "617 219 6245",
  },
  {
    label: "Birth of Date",
    value: "15 Dec, 1998",
  },
  {
    label: "Website",
    value: {
      text: "www.themesdesign.in",
      link: "http://themesdesign.in/",
    },
  },
  {
    label: "Email",
    value: "paula@themesdesign.com",
  },
  {
    label: "Location",
    value: "Los Angeles, California",
  },
  {
    label: "Joining Date",
    value: "01 July 2023",
  },
];

// Earning Reports
export const earningsData = [
  {
    class: "pb-3",
    icon: Wallet,
    amount: "$245.98",
    description: "Total Earning",
  },
  {
    class: "py-3",
    icon: Goal,
    amount: "$125.23",
    description: "Items Earning",
  },
  {
    class: "pt-3",
    icon: Package,
    amount: "$21.49",
    description: "Contributor Bonus",
  },
];

// Payment History Table
export const tableHeader: TableHeaderType[] = [
  { title: "Date", value: "date" },
  { title: "Amount", value: "amount" },
  { title: "Status", value: "status" },
  { title: "Description", value: "description" },
  { title: "PDF", value: "pdf" },
];

export const tableData = [
  {
    date: "2 April, 2023",
    amount: "$321.00",
    status: "Paid",
    description: "Subscription",
  },
  {
    date: "8 June, 2023",
    amount: "$184.00",
    status: "Pending",
    description: "April Autofile",
  },
  {
    date: "15 July, 2023",
    amount: "$325.00",
    status: "Pending",
    description: "Subscription",
  },
  {
    date: "29 July, 2023",
    amount: "$321.00",
    status: "Paid",
    description: "Prepaid Bill",
  },
  {
    date: "12 Aug, 2023",
    amount: "$189.99",
    status: "Paid",
    description: "Subscription",
  },
];

// Card Overview
export const paymentCards = [
  {
    name: "Mastercard",
    imageSrc: img1,
    cardNumber: "XXXX XXXX XXXX 1501",
    status: "Primary",
  },
  {
    name: "Visa Card",
    imageSrc: img2,
    cardNumber: "XXXX XXXX XXXX 9871",
  },
  {
    name: "Discover Network",
    imageSrc: img3,
    cardNumber: "XXXX XXXX XXXX 7435",
  },
];

// Documents Table
export const tableHeader1: TableHeaderType[] = [
  { type: "check", value: "checked" },
  { title: "Documents Type", value: "tagsName" },
  { title: "Documents Name", value: "fileName" },
  { title: "File Size", value: "fileSize" },
  { title: "Modify Date", value: "date" },
  { title: "Uploaded", value: "uploadedBy" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action", align: "end" },
];

export const tableData1 = [
  {
    tagsName: "Docs",
    fileName: "Tailwick Docs File",
    fileSize: "2.5MB",
    date: "15 Feb, 2023",
    uploadedBy: "Admin",
    status: "Successful",
    statusColor: "green",
  },
  {
    tagsName: "PSD",
    fileName: "Tailwick Design Kit.psd",
    fileSize: "234.87 MB",
    date: "29 Jan, 2023",
    uploadedBy: "Themesdesign",
    status: "Successful",
    statusColor: "green",
  },
  {
    tagsName: "SVG",
    fileName: "home Pattern Wave.svg",
    fileSize: "3.87 MB",
    date: "24 Sept, 2023",
    uploadedBy: "Admin",
    status: "Error",
    statusColor: "red",
  },
  {
    tagsName: "SCSS",
    fileName: "tailwind.scss",
    fileSize: "0.100 KB",
    date: "03 April, 2023",
    uploadedBy: "Paula",
    status: "Successful",
    statusColor: "green",
  },
  {
    tagsName: "MP4",
    fileName: "Tailwick Guide Video.mp4",
    fileSize: "149.33 MB",
    date: "12 Nov, 2023",
    uploadedBy: "Themesdesign",
    status: "Pending",
    statusColor: "yellow",
  },
];

// Projects Data
export const projectsData = [
  {
    imageSrc: adwords,
    title: "Chat App",
    description:
      "Allows you to communicate with your customers in web chat rooms.",
    date: "16 July, 2023",
    budget: "$8,740.00",
    progress: 25,
    color: "custom",
  },
  {
    imageSrc: appStore,
    title: "Business Template - UI/UX design",
    description:
      "UX design process is iterative and non-linear, includes a lot of research.",
    date: "28 Nov, 2023",
    budget: "$10,254.00",
    progress: 61,
    color: "sky",
  },
  {
    imageSrc: android,
    title: "ABC Project Customization",
    description:
      "The process of tailoring the overall project delivery process to meet the requirements.",
    date: "20 Oct, 2023",
    budget: "$9,832.00",
    progress: 87,
    color: "green",
  },
  {
    imageSrc: figma,
    title: "Tailwick Design",
    description:
      "Drawing created with Microsoft Expression Design, a drawing and design program for Windows.",
    date: "07 Dec, 2023",
    budget: "$11,971.00",
    progress: 65,
    color: "purple",
  },
  {
    imageSrc: gmail,
    title: "HR Management",
    description:
      "The strategic approach to nurturing and supporting employees and ensuring a positive.",
    date: "02 Jan, 2024",
    budget: "$7,546.00",
    progress: 65,
    color: "purple",
  },
  {
    imageSrc: meta,
    title: "Finance Apps",
    description:
      "A personal budget app is a technology solution that is connected.",
    date: "10 Feb, 2024",
    budget: "$13,745.00",
    progress: 65,
    color: "purple",
  },
  {
    imageSrc: search,
    title: "Mailbox Design",
    description:
      "An email template is an HTML preformatted email that you can use to create your own.",
    date: "19 Feb, 2024",
    budget: "$9,120.00",
    progress: 65,
    color: "purple",
  },
  {
    imageSrc: twitter,
    title: "Banking Management",
    description:
      "Bank management refers to the process of managing the Bank's statutory activity.",
    date: "01 March, 2024",
    budget: "$24,863.00",
    progress: 65,
    color: "purple",
  },
];

// Follower Data
export const employeeData = [
  {
    title: "Executive Operations",
    doj: "15 Jan, 2023",
    image: avatar3,
    name: "Ralaphe Flores",
    email: "floral12@tailwick.com",
    phone: "+213 617 219 6245",
    experience: "1.5 years",
    salary: "$463.42",
    color: "custom",
  },
  {
    title: "Project Manager",
    doj: "29 Feb, 2023",
    image: avatar2,
    name: "James Lash",
    email: "jameslash@tailwick.com",
    phone: "+210 85 383 2388",
    experience: "0.5 years",
    salary: "$701.77",
    color: "green",
  },
  {
    title: "React Developer",
    doj: "04 March, 2023",
    image: avatar4,
    name: "Angus Garnsey",
    email: "angusgarnsey@tailwick.com",
    phone: "+210 41521 1325",
    experience: "0.7 years",
    salary: "$478.32",
    color: "sky",
  },
  {
    title: "Shopify Developer",
    doj: "11 March, 2023",
    image: avatar5,
    name: "Matilda Marston",
    email: "matildamarston@tailwick.com",
    phone: "+210 082 288 1065",
    experience: "1 years",
    salary: "$120.37",
    color: "yellow",
  },
  {
    title: "Angular Developer",
    doj: "22 March, 2023",
    image: avatar6,
    name: "Zachary Benjamin",
    email: "zacharybenjamin@tailwick.com",
    phone: "+120 348 9730 237",
    experience: "0 years",
    salary: "$89.99",
    color: "red",
  },
  {
    title: "Graphic Designer",
    doj: "09 June, 2023",
    image: avatar7,
    name: "Ruby Chomley",
    email: "rubychomley@tailwick.com",
    phone: "+120 1234 56789",
    experience: "0.2 years",
    salary: "$214.82",
    color: "purple",
  },
  {
    title: "Shopify Developer",
    doj: "27 June, 2023",
    image: avatar8,
    name: "Jesse Edouardy",
    email: "jessedouard@tailwick.com",
    phone: "+87 044 017 3869",
    experience: "1.7 years",
    salary: "$278.96",
    color: "yellow",
  },
  {
    title: "Team Leader",
    doj: "15 July, 2023",
    image: avatar9,
    name: "Xavier Bower",
    email: "xavierbower@tailwick.com",
    phone: "+159 98765 32451",
    experience: "6.7 years",
    salary: "$901.94",
    color: "orange",
  },
];
