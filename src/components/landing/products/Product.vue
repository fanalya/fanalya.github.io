<script lang="ts" setup>
import { Star } from "lucide-vue-next";
import { productData } from "@/components/landing/products/utils.ts";
</script>

<template>
  <section class="relative py-24 xl:py-32" id="product">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="mx-auto text-center xl:max-w-3xl">
        <h1 class="mb-0 leading-normal capitalize">Our Latest Product</h1>
      </div>
      <div class="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="product in productData"
          :key="product.id"
          class="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <img :src="product.image" alt="" class="mx-auto h-52" />
          <div class="mt-3">
            <p class="mb-3">
              <Star
                class="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1 me-1"
              />
              ({{ product.rating }})
            </p>
            <h5>
              <a href="#">{{ product.name }}</a>
            </h5>
            <div class="flex items-center gap-3 mt-3">
              <h6 class="text-16 grow">{{ product.price }}</h6>
              <div class="shrink-0">
                <TButton classes="px-2 py-1.5 text-xs"> Add to Cart </TButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
