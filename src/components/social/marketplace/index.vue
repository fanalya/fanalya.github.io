<script lang="ts" setup>
import LeftSidebar from "@/components/dashboard/social-media/LeftSidebar.vue";
import { Search, Plus, ShoppingCart, Bookmark } from "lucide-vue-next";
import { marketplaceData } from "@/components/social/marketplace/utils.ts"
</script>

<template>
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
        <div class="xl:col-span-3">
            <LeftSidebar />
        </div>
        <div class="xl:col-span-9" id="eventList">
            <div class="grid items-center grid-cols-1 gap-4 mb-4 xl:grid-cols-12">
                <div class="xl:col-span-3">
                    <h6 class="mb-0 text-15">Marketplace (+115)</h6>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row xl:col-span-4 xl:col-start-9">
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
                        <span class="align-middle ms-1">Add Products</span>
                    </TButton>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-12">
                <TCard
                    class="mb-0 bg-bottom bg-no-repeat card md:col-span-12 lg:col-span-8 xl:row-span-2 xl:col-span-6 bg-[url('../images/product/bg.png')]">
                    <h1 class="mb-3 font-normal xl:w-80">Secure Discounts of up to 50% on any item</h1>
                    <TButton color="green">
                        Shopping Now
                    </TButton>
                </TCard>
                <TCard v-for="(card, index) in marketplaceData" :key="index"
                    class="relative mb-0 overflow-hidden md:col-span-6 lg:col-span-4 xl:col-span-3 group/item" no-body>
                    <div class="!p-10 card-body">
                        <img :src="card.imageUrl" alt="Card Image" class="h-40 mx-auto" />
                        <div
                            class="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                            <div
                                class="absolute flex gap-2 transition-all duration-200 ease-linear -translate-x-1/2 translate-y-1/2 opacity-0 bottom-1/3 group-hover/item:opacity-100 group-hover/item:bottom-1/2 left-1/2">
                                <button type="button"
                                    class="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-red-500 btn bg-white border-white shadow-md hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 active:text-white active:bg-red-600 active:border-red-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-red-600">
                                    <ShoppingCart class=" h-4 " />
                                </button>
                                <button type="button"
                                    class="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 rounded-full text-sky-500 btn bg-white border-white shadow-md hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600 dark:bg-zink-600 dark:border-zink-500 dark:hover:bg-sky-600">
                                    <Bookmark class=" h-4 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </TCard>
            </div>
            <div class="flex justify-center mt-5 mb-5">
                <TButton>
                    <svg class="size-4 ltr:mr-2 rtl:ml-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Load More
                </TButton>
            </div>
        </div>
    </div>
</template>