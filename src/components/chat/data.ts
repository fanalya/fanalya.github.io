import {
  avatar1,
  avatar5,
  avatar7,
  avatar8,
  avatar10,
  user1,
  user2,
  user3,
  user4,
} from "@/assets/images/users/utils.ts";

import { img2, img3, img5, img6 } from "@/assets/images/small/utils";
import { logoSm } from "@/assets/images/utils.ts";

const recentChat = [
  {
    id: 1,
    roomId: 1,
    status: "online",
    name: "Marie Prohaska",
    image: avatar5,
    msg: "I will purchase it for support",
    last_seen: "2 min ago",
  },
  {
    id: 2,
    roomId: 1,
    status: "offline",
    name: "Kara Miller",
    image: user1,
    msg: "Hey, how's it going?",
    last_seen: "02:57 PM",
  },
  {
    id: 3,
    roomId: 1,
    status: "online",
    name: "Mark Walton",
    image: avatar5,
    msg: "Hey, how's it going?",
    last_seen: "Yesterday",
  },
];

const allConversation = [
  {
    id: 1,
    status: "offline",
    name: "Aurore Maggio",
    image: user2,
    role: "React Developer",
  },
  {
    id: 2,
    status: "online",
    name: "Mark Walton",
    text: "LP",
    role: "UI / UX Designer",
  },
  {
    id: 3,
    status: "offline",
    name: "Daniel Miller",
    image: avatar5,
    role: "ASP.Net Developer",
  },
  {
    id: 4,
    status: "offline",
    name: "Jaqueline Hammes",
    image: user3,
    role: "Angular Developer",
  },
  {
    id: 5,
    status: "offline",
    name: "Andrea Pesina",
    image: avatar8,
    role: "Laravel Developer",
  },
  {
    id: 6,
    status: "online",
    name: "Bernard Pereira",
    image: avatar10,
    role: "Web Designer",
  },
  {
    id: 7,
    status: "offline",
    name: "William Jones",
    image: user4,
    role: "Project Manager",
  },
];

const contactList = [
  {
    id: 1,
    status: "offline",
    name: "Aurore Maggio",
    image: user2,
    role: "React Developer",
  },
  {
    id: 2,
    status: "offline",
    name: "Mark Walton",
    image: avatar5,
    role: "UI / UX Designer",
  },
  {
    id: 3,
    status: "offline",
    name: "Daniel Miller",
    image: avatar5,
    role: "ASP.Net Developer",
  },
  {
    id: 4,
    status: "offline",
    name: "Jaqueline Hammes",
    image: user3,
    role: "Angular Developer",
  },
  {
    id: 5,
    status: "offline",
    name: "Andrea Pesina",
    image: avatar8,
    role: "Laravel Developer",
  },
  {
    id: 6,
    status: "offline",
    name: "Bernard Pereira",
    image: avatar10,
    role: "Web Designer",
  },
  {
    id: 7,
    name: "William Jones",
    image: user4,
    status: "offline",
    role: "Project Manager",
  },
  {
    id: 8,
    name: "Andrea Pesina",
    image: avatar8,
    status: "offline",
    role: "Laravel Developer",
  },
  {
    id: 9,
    name: "Bernard Pereira",
    image: avatar10,
    status: "offline",
    role: "Web Designer",
  },
  {
    id: 10,
    name: "Mary Segura",
    image: user4,
    status: "offline",
    role: "NodeJS Developer",
  },
  {
    id: 11,
    name: "Pearl Johnson",
    image: user4,
    status: "offline",
    role: "Team Leader",
  },
];

import { MessagesSquare } from "lucide-vue-next";

const botData = [
  {
    title: "What is Tailwind CSS, and what is Utility-First CSS?",
    active: true,
  },
  {
    title: "How to install and set up Tailwind CSS in a project?",
    icon: MessagesSquare,
    active: false,
  },
  {
    title: "How to customize the configuration file in Tailwind CSS?",
    icon: MessagesSquare,
    active: false,
  },
  {
    title: "How to use responsive variants in Tailwind CSS?",
    icon: MessagesSquare,
    active: false,
  },
  {
    title: "Why is Tailwind faster?",
    icon: MessagesSquare,
    active: false,
  },
  {
    title: "What problem does Tailwind CSS solve?",
    icon: MessagesSquare,
    active: false,
  },
  {
    title:
      "How to apply a background image with a linear gradient using Tailwind CSS?",
    icon: MessagesSquare,
    active: false,
  },
];

const files = [
  {
    type: "image",
    name: "Preview-01.jpg",
    size: "1.2 MB",
    icon: {
      imageSrc: img2,
    },
  },
  {
    type: "text",
    name: "changelog.txt",
    size: "140.62 KB",
    icon: {
      text: "TXT",
    },
  },
  {
    type: "psd",
    name: "tailwick-design.psd",
    size: "97.59 MB",
    icon: {
      text: "PSD",
    },
  },
  {
    type: "image",
    name: "logo-design.png",
    size: "0.123 KB",
    icon: {
      imageSrc: logoSm,
    },
  },
  {
    type: "svg",
    name: "pattern.svg",
    size: "0.802 MB",
    icon: {
      text: "SVG",
    },
  },
  {
    type: "image",
    name: "profile-bg.jpg",
    size: "33.49 MB",
    icon: {
      imageSrc: img6,
    },
  },
  {
    type: "psd",
    name: "tailwick-design.psd",
    size: "97.59 MB",
    icon: {
      text: "PSD",
    },
  },
  {
    type: "zip",
    name: "tailwick.zip",
    size: "35.89 MB",
    icon: {
      text: "ZIP",
    },
  },
  {
    type: "psd",
    name: "tailwick-design.psd",
    size: "97.59 MB",
    icon: {
      text: "PSD",
    },
  },
];

const messageData: any = [
  {
    id: 1,
    avatar: avatar7,
    message: [
      {
        id: 1,
        text: "Sure, I have my pen and paper ready.",
      },
    ],
    align: "left",
  },
  {
    id: 2,
    avatar: avatar1,
    message: [
      {
        id: 1,
        text: "Great. Please read the notes of our last meeting for us.",
      },
    ],
    align: "right",
  },
  {
    id: 3,
    avatar: avatar7,
    message: [
      {
        id: 1,
        text: "Okay. First, we talked about the budget for next year.",
        images: [img3, img5],
      },
      {
        id: 2,
        text: "I will budget is getting smaller every year.",
      },
      {
        id: 3,
        text: "Second, we talked about the new products we are going to selling.",
      },
      {
        id: 4,
        text: "O.K. Third, we talked about the profits that we had last month. And fourth, we talked about the bills we had to pay.",
      },
    ],
    align: "left",
  },
  {
    id: 4,
    avatar: avatar1,
    message: [
      {
        id: 1,
        text: "Sorry, William. O.K. We have a few things to talk about today. would you like to give your report.",
      },
    ],
    align: "right",
  },
  {
    id: 5,
    avatar: avatar7,
    message: [
      {
        id: 1,
        text: "Yes, thank you 🤩. I have a sales graph I would like to show everyone. This shows how well we are selling our products this year",
      },
    ],
    align: "left",
  },
  {
    id: 6,
    avatar: avatar1,
    message: [
      {
        id: 1,
        text: "Thank you 🤩, William. Very good. Tom, do you have anything to tell everyone.",
      },
    ],
    align: "right",
  },
];

export {
  recentChat,
  allConversation,
  contactList,
  botData,
  files,
  messageData,
};
