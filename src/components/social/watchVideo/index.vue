<script lang="ts" setup>
import LeftSidebar from "@/components/dashboard/social-media/LeftSidebar.vue";
import { Search, Plus, PlaySquare } from "lucide-vue-next";
import { videosData } from "@/components/social/watchVideo/utils.ts"
</script>

<template>
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
        <div class="xl:col-span-3">
            <LeftSidebar />
        </div>
        <div class="xl:col-span-9">
            <div class="grid items-center grid-cols-1 gap-4 mb-4 xl:grid-cols-12">
                <div class="xl:col-span-3">
                    <h6 class="mb-0 text-15">Watch Video</h6>
                </div>
                <div class="flex gap-2 xl:col-span-4 xl:col-start-9">
                    <div class="relative grow">
                        <TInputField required hide-details placeholder="Search for ..." inputClass="ltr:pl-8 rtl:pr-8">
                            <template #prefix>
                                <Search
                                    class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </template>
                        </TInputField>
                    </div>
                    <TButton>
                        <Plus class="inline-block size-4" />
                        <span class="align-middle ms-1">Add Video</span>
                    </TButton>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-5 mb-5 md:grid-cols-12">
                <div class="md:col-span-12 xl:row-span-6 xl:col-span-8">
                    <div class="relative h-full bg-white rounded-md dark:bg-zink-600">
                        <h3 class="absolute inset-0 flex items-center justify-center">Welcome to <span
                                class="text-sky-500">Tailwick</span> 🤩</h3>
                        <iframe name="iframe_a" class="relative w-full h-full rounded-md aspect-video"
                            title="Iframe Example"></iframe>
                    </div>
                </div>
                <div v-for="(video, index) in videosData" :key="index"
                    :class="`md:col-span-6 ${video.col_span} xl:col-span-4`">
                    <a :href="video.url" target="iframe_a" class="block !mb-0 card relative">
                        <div class="card-body">
                            <div
                                class="absolute flex items-center justify-center size-12 -translate-x-1/2 rounded-full bg-white/70 top-1/2 left-1/2">
                                <PlaySquare class="text-red-500" />
                            </div>
                            <h6 class="mb-3 truncate text-15">{{ video.title }}</h6>
                            <img :src="video.image_url" alt="" class="object-cover w-full rounded-md h-44">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>