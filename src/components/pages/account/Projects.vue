<script lang="ts" setup>
import { MoreHorizontal, Eye, FileEdit, Trash2, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { projectsData } from "@/components/pages/account/utils.ts"
const dropdownData = [
    { title: "Overview", icon: Eye },
    { title: "Edit", icon: FileEdit },
    { title: "Delete", icon: Trash2 },
];
</script>

<template>
    <div class="flex items-center gap-3 mb-4">
        <h5 class="underline grow">Projects</h5>
        <div class="shrink-0">
            <TButton>
                Add Project
            </TButton>
        </div>
    </div>
    <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 2xl:grid-cols-4">
        <TCard v-for="(card, index) in projectsData" :key="index">
            <div class="flex">
                <div class="grow">
                    <img :src="card.imageSrc" alt="" class="h-11">
                </div>
                <div class="shrink-0">
                    <TList :items="dropdownData" placement="bottom-start">
                        <template #title>
                            <TButton color="slate" variant="soft" classes="flex px-2.5 py-2.5">
                                <MoreHorizontal class="size-4" />
                            </TButton>
                        </template>
                        <template #default="{ data }">
                            <div class="flex">
                                <component :is="data.icon" class="mt-1 inline-block size-3 mr-1" />
                                <span class="align-middle ms-1 "> {{ data.title }}</span>
                            </div>
                        </template>
                    </TList>
                </div>
            </div>
            <div class="mt-4">
                <h6 class="mb-1 text-16"><a href="#!">{{ card.title }}</a></h6>
                <p class="text-slate-500 dark:text-zink-200">{{ card.description }}</p>
            </div>
            <div
                class="flex w-full gap-3 mt-6 text-center divide-x divide-slate-200 dark:divide-zink-500 rtl:divide-x-reverse">
                <div class="px-3 grow">
                    <h6 class="mb-1">{{ card.date }}</h6>
                    <p class="text-slate-500 dark:text-zink-200">Due Date</p>
                </div>
                <div class="px-3 grow">
                    <h6 class="mb-1">{{ card.budget }}</h6>
                    <p class="text-slate-500 dark:text-zink-200">Budget</p>
                </div>
            </div>
            <div class="w-full h-1.5 mt-6 rounded-full bg-slate-100 dark:bg-zink-600">
                <TProgressBar :color="card.color" :width="card.progress" :height="1.5" class="rounded-full" />
            </div>
        </TCard>
    </div>
    <div class="flex flex-col items-center gap-4 mt-2 mb-4 md:flex-row">
        <div class="grow">
            <p class="text-slate-500 dark:text-zink-200">Showing <b>8</b> of <b>30</b> Results</p>
        </div>
        <TPagination :totalPages="6" fastPagination
            pageClass="size-8 border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto "
            actionClass="size-8 border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">
            <template #prev>
                <ChevronLeft class="size-4 rtl:rotate-180" />
            </template>
            <template #next>
                <ChevronRight class="size-4 rtl:rotate-180" />
            </template>
        </TPagination>
    </div>
</template>