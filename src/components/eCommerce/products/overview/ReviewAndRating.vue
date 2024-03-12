<script lang="ts" setup>
import {
  ratings,
  reviews,
  cardAction
} from "@/components/eCommerce/products/overview/utils.ts";

import { MoreHorizontal, ThumbsUp, ThumbsDown } from "lucide-vue-next";
const emit = defineEmits(["onCreateEdit", "onDelete"]);
const onSelect = (data: any) => {
  if (data.title === "Edit") {
    emit("onCreateEdit");
  } else if (data.title === "Delete") {
    emit("onDelete");
  }
};
</script>
<template>
  <h6 class="mt-5 mb-3 text-15">Ratings & Reviews</h6>
  <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
    <div class="xl:col-span-4">
      <div
        class="border border-dashed rounded-md border-slate-200 dark:border-zink-500"
      >
        <div class="p-5">
          <div class="text-center">
            <h5 class="mb-2 text-16">Customer Ratings</h5>
            <span
              class="px-3.5 py-1.5 inline-flex gap-3 text-xs font-medium rounded-full border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-600"
            >
              <span class="flex items-center gap-2 text-yellow-500">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-half-line"></i>
              </span>
              (4.8 out of 5)
            </span>
            <p class="mt-2 text-sm text-slate-500 dark:text-zink-200">
              4,213 total ratings
            </p>
          </div>
          <div class="flex flex-col gap-3 mt-4">
            <div v-for="item in ratings" class="flex items-center gap-3">
              <div class="text-sm shrink-0">
                {{ item.star }}
                <i class="ml-1 text-yellow-500 align-middle ri-star-fill"></i>
              </div>
              <TProgressBar
                :color="item.color"
                :height="1.5"
                :width="item.width"
              />
              <div class="text-sm text-right w-9 shrink-0">
                {{ item.total }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:col-span-8">
      <div class="flex items-center gap-3 mb-4">
        <h5 class="text-16 grow">Reviews</h5>
        <TButton
          class="px-2 shrink-0 py-1.5 text-xs"
          @click="emit('onCreateEdit')"
        >
          Add Review
        </TButton>
      </div>
      <div
        v-for="(item, index) in reviews"
        class="mt-3"
        :class="
          index > 0 ? 'border-t border-slate-200 dark:border-zink-500 pt-3' : ''
        "
      >
        <div class="relative ltr:float-right rtl:float-left dropdown">
          <TList :items="cardAction" @onSelect="onSelect">
            <template #title>
              <TButton
                icon
                class="p-0 !w-[30px] !h-[30px] dropdown-toggle"
                color="slate"
                variant="soft"
              >
                <MoreHorizontal class="size-3" />
              </TButton>
            </template>
            <template #default="{ data }">
              <span class="flex gap-1 items-center">
                <component
                  :is="data.icon"
                  class="inline-block size-3 ltr:mr-1 rtl:ml-1"
                />
                <span class="align-middle">{{ data.title }}</span>
              </span>
            </template>
          </TList>
        </div>
        <div class="flex items-center gap-3">
          <TAvatar :src="item.user" :color="item.color" rounded :height="10" />

          <div class="grow">
            <h6 class="text-15">
              <a href="#!">{{ item.name }}</a>
            </h6>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              on {{ item.onDate }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-4 mb-2 text-yellow-500">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
        </div>
        <p class="text-slate-500 dark:text-zink-200">"{{ item.review }}"</p>
        <div class="flex items-center gap-3 mt-3">
          <a
            href="#!"
            class="text-slate-500 shrink-0 count-button [&.active]:text-green-500 active"
          >
            <ThumbsUp class="inline-block size-3 ltr:mr-2 rtl:ml-2" />
            <span class="align-middle count-number">{{ item.like }}</span>
          </a>
          <a
            href="#!"
            class="text-slate-500 shrink-0 count-button [&.active]:text-red-500 active"
          >
            <ThumbsDown class="inline-block size-3 ltr:mr-2 rtl:ml-2" />
            <span class="align-middle count-number">{{ item.dislike }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
