<script lang="ts" setup>
import { avatar1 } from '@/assets/images/users/utils';
import { BadgeCheck } from "lucide-vue-next";
import { useRoute } from 'vue-router';
import { menuData, suggestionData, friendsData } from "@/components/dashboard/social-media/utils.ts"

const route = useRoute();

const isActive = (path: any) => {
    return route.path === path;
};
</script>

<template>
    <TCard>
        <div class="flex items-center gap-3 mb-5">
            <div class="rounded-full bg-slate-100 shrink-0 dark:bg-zink-600">
                <img :src="avatar1" alt="" class="rounded-full h-14">
            </div>
            <div class="grow">
                <h6 class="mb-1 text-15">Paula Keenan
                    <BadgeCheck class="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                </h6>
                <p class="text-slate-500 dark:text-zink-200">@paulak145</p>
            </div>
        </div>
        <div
            class="grid grid-cols-1 text-center divide-y sm:divide-y-0 sm:divide-x sm:grid-cols-3 divide-slate-200 dark:divide-zink-500 divide-dashed rtl:divide-x-reverse">
            <div class="py-3 sm:py-0 sm:px-3">
                <h6>489</h6>
                <p class="text-slate-500 dark:text-zink-200">Posts</p>
            </div>
            <div class="py-3 sm:py-0 sm:px-3">
                <h6>4.6k</h6>
                <p class="text-slate-500 dark:text-zink-200">Follower</p>
            </div>
            <div class="py-3 sm:py-0 sm:px-3">
                <h6>159</h6>
                <p class="text-slate-500 dark:text-zink-200">Following</p>
            </div>
        </div>
    </TCard>
    <TCard>
        <ul class="flex flex-col w-full gap-2 mb-4 text-sm font-medium shrink-0 nav-tabs">
            <li v-for="(item, index) in menuData" :key="index" class="group grow"
                :class="{ 'active': isActive(item.link.href) }">
                <router-link :to="item.link.href"
                    class="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">
                    <component :is="item.link.icon" class="inline-block size-4 align-middle mr-1" />
                    <span class="align-middle ms-1">{{ item.link.text }}</span>
                </router-link>
            </li>
        </ul>
        <p class="mb-4 text-slate-500 dark:text-zink-200">Suggestion Pages</p>
        <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in suggestionData" :key="index">
                <a href="#!" class="flex gap-3">
                    <img :src="item.src" alt="" class="h-5">
                    <h6>{{ item.text }}</h6>
                </a>
            </li>
        </ul>
    </TCard>
    <TCard>
        <h6 class="mb-4 text-15">Active Friends</h6>
        <div class="flex flex-wrap items-center gap-3">
            <a v-for="(user, index) in friendsData" :key="index" :href="user.placeholder ? '#!' : '#'" class="relative">
                <img v-if="!user.placeholder" :src="user.imageSrc" alt=""
                    class="h-10 border rounded-full border-slate-200 dark:border-zink-500">
                <span v-if="!user.placeholder"
                    class="top-0 ltr:right-0 rtl:left-0 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                <div v-if="user.placeholder"
                    class="relative flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                    5+
                </div>
            </a>
        </div>
    </TCard>
</template>