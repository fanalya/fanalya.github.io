<script lang="ts" setup>
import { Search } from "lucide-vue-next";
import { users, events, popularData } from "@/components/dashboard/social-media/utils.ts"
</script>

<template>
    <div class="col-span-12 lg:hidden xl:col-span-3 2xl:block shrink-0">
        <TCard id="messageList">
            <div class="flex items-center gap-3">
                <h6 class="mb-0 grow text-15">Message <span
                        class="inline-flex items-center justify-center size-6 text-xs font-medium border rounded rtl:mr-1 ltr:ml-1 bg-custom-100 border-custom-100 text-custom-500 dark:bg-custom-400/20 dark:border-transparent">15</span>
                </h6>
                <div class="shrink-0">
                    <a href="#!" class="underline text-custom-500">Requests(2)</a>
                </div>
            </div>
            <div class="relative mt-3">
                <TInputField required placeholder="Search for ..." inputClass="ltr:pl-8 rtl:pr-8">
                    <template #prefix>
                        <Search
                            class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                    </template>
                </TInputField>
            </div>
            <div class="js-read-smore" data-read-smore-words="15">
                <ul class="flex flex-col gap-3 mt-5 list">
                    <li v-for="(user, index) in users" :key="index">
                        <a href="#" class="flex items-center gap-3 transition-all duration-150 ease-linear group/items">
                            <div class="relative rounded-full size-7 bg-slate-100 dark:bg-zink-600">
                                <img :src="user.avatar" :alt="user.name" class="rounded-full h-7" />
                                <span
                                    class="bottom-0 ltr:right-0 rtl:left-0 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-zink-500 rounded-full"></span>
                            </div>
                            <h6 class="transition-all duration-150 ease-linear group-hover/items:text-custom-500 user-name">
                                {{ user.name }}
                            </h6>
                        </a>
                    </li>
                </ul>
            </div>
        </TCard>
        <TCard>
            <h6 class="mb-4 text-15">Popular Events</h6>
            <ul class="flex flex-col gap-4 mt-5">
                <li v-for="(item, index) in events" :key="index">
                    <a href="#" class="flex items-center gap-3 transition-all duration-150 ease-linear group/items">
                        <div>
                            <img :src="item.imageSrc" :alt="item.altText" class="h-6 rounded-full" />
                        </div>
                        <h6 class="transition-all duration-150 ease-linear group-hover/items:text-custom-500">{{ item.title
                        }}</h6>
                    </a>
                </li>
            </ul>
        </TCard>
        <TCard>
            <h6 class="mb-4 text-15">Upcoming Birthday</h6>
            <ul class="flex flex-col gap-3 mt-5">
                <li v-for="(item, index) in popularData" :key="index">
                    <a href="#" class="flex items-center gap-3 transition-all duration-150 ease-linear group/items">
                        <div class="relative rounded-full size-9 bg-slate-100 dark:bg-zink-600">
                            <img :src="item.avatar" :alt="item.name" class="rounded-full h-9" />
                            <span
                                class="bottom-0 ltr:right-0 rtl:left-0 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-zink-500 rounded-full"></span>
                        </div>
                        <div class="grow">
                            <h6 class="mb-1 transition-all duration-150 ease-linear group-hover/items:text-custom-500">{{
                                item.name }}</h6>
                            <p class="text-slate-500">{{ item.date }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </TCard>
    </div>
</template>