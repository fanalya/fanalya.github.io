<script lang="ts" setup>
import { ImagePlus, BadgeCheck, UserCircle, MapPin, Mail, MoreHorizontal } from "lucide-vue-next";
import { socialMediaButtons } from "@/components/pages/account/utils.ts";

const dropdownData = [
    "payments",
    "Create Invoice",
    "Pending Billing",
    "Genrate Bill",
    "Subscription"
];
</script>

<template>
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-12">
        <div class="lg:col-span-2 2xl:col-span-1">
            <div class="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                <img src="@/assets/images/users/avatar-1.png" alt=""
                    class="object-cover border-0 rounded-full img-thumbnail user-profile-image">
                <div
                    class="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                    <input id="profile-img-file-input" type="file" class="hidden profile-img-file-input">
                    <label for="profile-img-file-input"
                        class="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                        <ImagePlus class="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500" />
                    </label>
                </div>
            </div>
        </div>
        <div class="lg:col-span-10 2xl:col-span-9">
            <h5 class="mb-1">Paula Keenan
                <BadgeCheck class="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20" />
            </h5>
            <div class="flex gap-3 mb-4">
                <p class="text-slate-500 dark:text-zink-200">
                    <UserCircle
                        class="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500" />
                    CEO & Founder
                </p>
                <p class="text-slate-500 dark:text-zink-200">
                    <MapPin
                        class="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500" />
                    Los Angeles, California
                </p>
            </div>
            <ul
                class="flex flex-wrap gap-3 mt-4 text-center divide-x divide-slate-200 dark:divide-zink-500 rtl:divide-x-reverse">
                <li class="px-5">
                    <h5>1542</h5>
                    <p class="text-slate-500 dark:text-zink-200">Following</p>
                </li>
                <li class="px-5">
                    <h5>10.65k</h5>
                    <p class="text-slate-500 dark:text-zink-200">Followers</p>
                </li>
                <li class="px-5">
                    <h5>115+</h5>
                    <p class="text-slate-500 dark:text-zink-200">Products</p>
                </li>
            </ul>
            <p class="mt-4 text-slate-500 dark:text-zink-200">Strong leader and negotiator adept at driving
                collaboration and innovation. Highly accomplished CEO & Founder with 10+ years of experience
                creating, launching and leading successful business ventures. Proven ability to build
                relationships, drive customer loyalty and increase profitability.</p>
            <div class="flex gap-2 mt-4">
                <a v-for="(socialMedia, index) in socialMediaButtons" :key="index" href="#!" :class="socialMedia.class">
                    <component :is="socialMedia.icon" class="size-4" />
                </a>
            </div>
        </div>
        <div class="lg:col-span-12 2xl:col-span-2">
            <div class="flex gap-2 2xl:justify-end">
                <a href="mailto:themesdesign@gmail.com"
                    class="flex items-center justify-center size-[37.5px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                    <Mail class="size-4" />
                </a>
                <TButton>
                    Hire Us
                </TButton>
                <TList :items="dropdownData" placement="bottom-end">
                    <template #title>
                        <TButton variant="soft" color="slate" classes="px-2.5 py-2.5 text-xs">

                            <MoreHorizontal class="size-4" />
                        </TButton>
                    </template>
                </TList>
            </div>
        </div>
    </div>
</template>