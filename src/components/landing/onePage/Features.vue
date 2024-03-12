<script lang="ts" setup>
import {
  widgets2,
  widgets3,
  widgets,
  home
} from "@/assets/images/landing/utils.ts";
import {
  featuresData,
  counterData
} from "@/components/landing/onePage/utils.ts";
import { MoveRight } from "lucide-vue-next";
</script>

<template>
  <section class="relative py-32 bg-slate-900 dark:bg-zink-700" id="features">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div class="order-2 xl:col-span-5 xl:order-1">
          <div class="relative z-10 grid grid-cols-3 gap-5 xl:grid-cols-12">
            <div class="xl:col-span-12">
              <img :src="widgets" alt="" class="shadow-xl ltr:ml-auto rtl:mr-auto rounded-xl" />
            </div>
            <div class="xl:col-span-6">
              <img
                :src="widgets3"
                alt=""
                class="shadow-xl xl:mt-5 ml-auto rounded-xl"
              />
            </div>
            <div class="xl:col-span-6">
              <img
                :src="widgets2"
                alt=""
                class="shadow-xl xl:mt-5 ml-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        <div
          class="relative z-20 order-1 xl:-mt-72 xl:col-span-7 xl:order-last"
        >
          <img :src="home" alt="" class="shadow-2xl rounded-xl" />
        </div>
      </div>
      <div class="mt-24">
        <h1
          class="mb-16 leading-normal capitalize text-slate-100 dark:text-zink-50"
        >
          Build for anyone who works with Tailwick
        </h1>
      </div>
    </div>
    <div
      class="absolute rotate-45 border border-dashed size-[500px] border-t-slate-700 border-l-slate-700 border-r-slate-700 border-b-slate-700 bottom-48 rounded-full ltr:-left-80 rtl:-right-80 hidden md:block"
    ></div>
    <div
      class="absolute rotate-45 border border-dashed size-[700px] border-t-slate-700 border-l-slate-700 border-r-slate-700 border-b-slate-700 bottom-24 rounded-full ltr:-left-96 rtl:-right-96 hidden md:block"
    ></div>
  </section>

  <section class="relative pb-32 bg-slate-50 dark:bg-zink-700/40">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div
        class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-12 gap-x-5"
      >
        <div
          v-for="item in featuresData"
          :key="item.title"
          class="xl:col-span-4"
        >
          <div
            class="transition-all duration-300 ease-linear -mt-36 card hover:-translate-y-2 dark:bg-zink-600"
          >
            <div class="p-6">
              <img :src="item.image" alt="" class="rounded-md shadow" />
              <div class="mt-6">
                <TLabel variant="bordered" :color="`${item.labelClass}`">
                  {{ item.category }}
                </TLabel>
                <h6 class="mt-3 mb-2 text-lg truncate">
                  <a href="#!">{{ item.title }}</a>
                </h6>
                <p class="mb-3 text-slate-500 dark:text-zink-200 text-16">
                  A chat UI, or user interface, is one of the first things users
                  see when using a web or mobile application to communicate.
                </p>
                <a href="#!" class="text-custom-500 text-16"
                  >Read More
                  <MoveRight
                    class="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180 ms-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-10 mt-20 rounded-md bg-slate-900 dark:bg-zink-700">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="(item, index) in counterData"
            :key="index"
            class="text-center"
          >
            <h3 class="mb-2 text-slate-50 dark:text-zink-50">
              <TCountTo :endVal="item.endVal" suffix=" +" />
            </h3>
            <p class="text-16 text-slate-400 dark:text-zink-200">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
