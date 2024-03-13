import {
  Home,
  User2,
  CalendarDays,
  Clapperboard,
  ShoppingCart,
  Settings,
  MessagesSquare,
  Heart,
  Send,
  Bookmark,
} from "lucide-vue-next";
import {
  adwords,
  twitter,
  meta,
  figma,
  appStore,
  telegram,
  android,
  slack,
} from "@/assets/images/brand/utils.ts";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
} from "@/assets/images/users/utils";

export const menuData = [
  {
    class: "group grow",
    link: {
      href: "/dashboards/social-media",
      text: "Feed",
      icon: Home,
    },
  },
  {
    class: "group grow",
    link: {
      href: "/social/friends",
      text: "Friends",
      icon: User2,
    },
  },
  {
    class: "group grow",
    link: {
      href: "/social/event",
      text: "Event",
      icon: CalendarDays,
    },
  },
  {
    class: "group grow",
    link: {
      href: "/social/video",
      text: "Watch Video",
      icon: Clapperboard,
    },
  },
  {
    class: "group grow",
    link: {
      href: "/social/marketplace",
      text: "Marketplace",
      icon: ShoppingCart,
    },
  },
  {
    class: "group grow",
    link: {
      href: "/pages/settings",
      text: "Settings",
      icon: Settings,
    },
  },
];

export const suggestionData = [
  {
    src: adwords,
    text: "Harmonious Team",
  },
  {
    src: twitter,
    text: "Twitter",
  },
  {
    src: meta,
    text: "Design Stack",
  },
  {
    src: figma,
    text: "UI / UX Community",
  },
];

export const friendsData = [
  {
    imageSrc: avatar2,
    status: "online",
  },
  {
    imageSrc: avatar3,
    status: "online",
  },
  {
    imageSrc: avatar4,
    status: "online",
  },
  {
    imageSrc: avatar5,
    status: "online",
  },
  {
    imageSrc: avatar6,
    status: "online",
  },
  {
    imageSrc: avatar7,
    status: "online",
  },
  {
    imageSrc: avatar8,
    status: "online",
  },
  {
    imageSrc: avatar9,
    status: "online",
  },
  {
    imageSrc: avatar10,
    status: "online",
  },
  {
    placeholder: true,
  },
];

export const uersData = [
  {
    class: "active",
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-pink-100 dark:bg-pink-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar1,
      imgClass: "w-16 h-16 rounded-full",
      badge: {
        divClass:
          "absolute flex items-center justify-center w-5 h-5 text-white rounded-full ltr:-right-0.5 rtl:-left-0.5 -bottom-0.5 bg-sky-500",
      },
      h6Class: "mt-2 font-normal truncate",
      h6Text: "Your story",
    },
  },
  {
    class: "active",
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-sky-100 dark:bg-sky-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar2,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@zaria_muller",
    },
  },
  {
    class: "active",
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-slate-100 dark:bg-zink-600 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar3,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@christina",
    },
  },
  {
    class: "active",
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-yellow-100 dark:bg-yellow-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar4,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@blaze_herzog",
    },
  },
  {
    class: "active",
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar5,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@keon_rippin",
    },
  },
  {
    class: "active",
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar6,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@niko_watsica",
    },
  },
  {
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-custom-100 dark:bg-custom-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar7,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@genesis",
    },
  },
  {
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar8,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@brayan_herman",
    },
  },
  {
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar9,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@logan",
    },
  },
  {
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-cyan-100 dark:bg-cyan-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar10,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@gerhold",
    },
  },
  {
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-sky-100 dark:bg-sky-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar2,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@fletcher",
    },
  },
  {
    "data-glightbox": "max-width: 28rem;",
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-sky-100 dark:bg-sky-500/20 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700 relative",
      imgSrc: avatar2,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@fletcher",
    },
  },
  {
    content: {
      divClass:
        "w-16 h-16 mx-auto rounded-full bg-slate-100 dark:bg-zink-600 outline-1 outline outline-slate-200 outline-offset-[3px] dark:outline-zink-500 group-[.active]:outline-custom-500 dark:group-[.active]:outline-custom-700",
      imgSrc: avatar3,
      imgClass: "w-16 h-16 rounded-full",
      h6Class: "mt-2 font-normal truncate",
      h6Text: "@christina",
    },
  },
];

export const listItems = [
  { icon: MessagesSquare, text: "48 Comments" },
  { icon: Heart, text: "257 Likes" },
  { icon: Send, text: "13 Share" },
  { icon: Bookmark, text: "7", class: "ltr:ml-auto rtl:mr-auto" },
];

export const listItems1 = [
  { icon: MessagesSquare, text: "224 Comments" },
  { icon: Heart, text: "746 Likes" },
  { icon: Send, text: "47 Share" },
  { icon: Bookmark, text: "139", class: "ltr:ml-auto rtl:mr-auto" },
];

export const listItems2 = [
  { icon: MessagesSquare, text: "495 Comments" },
  { icon: Heart, text: "1.3k Likes" },
  { icon: Send, text: "203 Share" },
  { icon: Bookmark, text: "159", class: "ltr:ml-auto rtl:mr-auto" },
];

export const listItemsData = [
  { order: 1, title: "React Js", progress: 75, active: true },
  { order: 2, title: "Laravel", progress: 41, active: false },
  {
    order: 3,
    title: "ASP.Net / MVC.Net",
    progress: 63,
    active: false,
  },
];

export const users = [
  {
    name: "Louisa Howe",
    avatar: avatar3,
  },
  {
    name: "Everett Moore",
    avatar: avatar4,
  },
  {
    name: "Omari Welch",
    avatar: avatar5,
  },
  {
    name: "Paul Gerhold",
    avatar: avatar6,
  },
  {
    name: "Green Langworth",
    avatar: avatar7,
  },
  {
    name: "Lucie Beahan",
    avatar: avatar8,
  },
  {
    name: "Susana Dooley",
    avatar: avatar9,
  },
];

export const events = [
  {
    title: "Music Festivals",
    imageSrc: appStore,
    altText: "App Store",
  },
  {
    title: "Conferences and Seminars",
    imageSrc: telegram,
    altText: "Telegram",
  },
  {
    title: "Business Networking Events",
    imageSrc: android,
    altText: "Android",
  },
  {
    title: "Award Ceremonies",
    imageSrc: slack,
    altText: "Slack",
  },
];

export const popularData = [
  {
    name: "Louisa Howe",
    avatar: avatar3,
    date: "Today",
  },
  {
    name: "Everett Moore",
    avatar: avatar4,
    date: "Tomorrow",
  },
  {
    name: "Omari Welch",
    avatar: avatar5,
    date: "13 Nov",
  },
  {
    name: "Paul Gerhold",
    avatar: avatar6,
    date: "14 Nov",
  },
];
