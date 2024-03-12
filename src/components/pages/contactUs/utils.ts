import {
  MapPin,
  ShoppingBag,
  Compass,
  UserSquare,
  Facebook,
  Twitter,
  Mail,
  Globe,
  Instagram,
  Youtube
} from "lucide-vue-next";

export const widgets = [
  {
    title: "Our Main Office",
    caption: `501, Powell Ave, Clarks Summit, Pennsylvania, United States - 18411`,
    link: "Visit Website",
    icon: MapPin,
    iconClass: "text-sky-500 fill-sky-100 dark:fill-sky-500/20"
  },
  {
    title: "Sales Team Support",
    caption: `tailwick@sales.com`,
    link: "Sales Support",
    icon: ShoppingBag,
    iconClass: "text-purple-500 fill-purple-100 dark:fill-purple-500/20"
  },
  {
    title: "Help & Support",
    caption: `tailwick@support.com<p class="mb-5 mt-1 text-slate-500 dark:text-zink-200">www.tailwick.com</p>`,
    link: "Contact Support",
    icon: Compass,
    iconClass: "text-orange-500 fill-orange-100 dark:fill-orange-500/20"
  },
  {
    title: "Email & Phone",
    caption: `tailwick@email.com<p class="mb-5 mt-1 text-slate-500 dark:text-zink-200">(570) 586 2588</p>`,
    link: "Visit Portfolio",
    icon: UserSquare,
    iconClass: "text-custom-500 fill-custom-100 dark:fill-custom-500/20"
  }
];

export const socialMedia = [Facebook, Twitter, Mail, Globe, Instagram, Youtube];
