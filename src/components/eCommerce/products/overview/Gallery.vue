<script lang="ts" setup>
import { ShoppingCart, Repeat, HelpCircle, Share2 } from "lucide-vue-next";
const emit = defineEmits(["openQuestionModal", "openShareModal"]);
</script>
<template>
  <TCard>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-12">
      <div
        class="rounded-md md:col-span-8 md:row-span-2 bg-slate-100 dark:bg-zink-600"
      >
        <img src="@/assets/images/product/overview-01.png" alt="" />
      </div>
      <div class="rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
        <img src="@/assets/images/product/overview-02.png" alt="" />
      </div>
      <div class="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
        <img src="@/assets/images/product/img-01.png" alt="" />
      </div>
      <div class="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
        <img src="@/assets/images/product/img-09.png" alt="" />
      </div>
      <div class="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
        <img src="@/assets/images/product/img-12.png" alt="" />
      </div>
      <div class="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
        <img src="@/assets/images/product/img-13.png" alt="" />
      </div>
    </div>

    <div class="flex gap-2 mt-4 shrink-0">
      <TButton to="/ecommerce/cart" class="w-full" variant="dashed">
        <ShoppingCart
          class="inline-block size-3 align-middle ltr:mr-2 rtl:ml-2"
        />
        <router-link to="/ecommerce/cart"
          ><span class="align-middle">Add to Cart</span></router-link
        >
      </TButton>
      <TButton class="w-full" color="red"> Buy Now </TButton>
    </div>

    <div class="flex items-center gap-3 mt-3 justify-evenly">
      <span
        class="cursor-pointer transition-all duration-300 ease-linear hover:text-custom-500"
      >
        <Repeat class="inline-block size-3 align-middle ltr:mr-2 rtl:ml-2" />
        <span class="align-middle">Compare</span>
      </span>
      <span
        class="cursor-pointer transition-all duration-300 ease-linear hover:text-custom-500"
        @click="emit('openQuestionModal')"
      >
        <HelpCircle
          class="inline-block size-3 align-middle ltr:mr-2 rtl:ml-2"
        />
        <span class="align-middle">Ask a Question</span>
      </span>
      <span
        class="cursor-pointer transition-all duration-300 ease-linear hover:text-custom-500"
        @click="emit('openShareModal')"
      >
        <Share2 class="inline-block size-3 align-middle ltr:mr-2 rtl:ml-2" />
        <span class="align-middle">Share</span>
      </span>
    </div>
  </TCard>
</template>
