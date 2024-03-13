<script lang="ts" setup>
import { Rocket, ShoppingCart } from "lucide-vue-next";
</script>

<template>
  <section class="relative pb-36 pt-44" id="home">
    <!-- ltr:right-40 rtl:left-40 
         ltr:right-16 rtl:left-16-->
    <div class="overflow-hidden">
      <div
        class="absolute rotate-45 border border-dashed size-[500px] border-t-slate-300 dark:border-t-zink-500 border-l-slate-300 dark:border-l-zink-500 border-r-slate-700 dark:border-r-zink-400 border-b-slate-700 dark:border-b-zink-400 -bottom-[250px] rounded-full ltr:right-40 rtl:left-40 z-10 hidden lg:block"
      ></div>
      <div
        class="absolute rotate-45 border border-dashed size-[700px] border-t-slate-300 dark:border-t-zink-500 border-l-slate-300 dark:border-l-zink-500 border-r-slate-700 dark:border-r-zink-400 border-b-slate-700 dark:border-b-zink-400 -bottom-[350px] rounded-full ltr:right-16 rtl:left-16 z-10 hidden 2xl:block"
      ></div>
    </div>
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="grid grid-cols-12 2xl:grid-cols-2">
        <div class="col-span-12 lg:col-span-7 2xl:col-span-1">
          <h1 class="mb-8 !leading-relaxed md:text-5xl">
            Effective Management of Large Projects at
            <span
              class="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-sky-50 dark:before:bg-sky-500/20 before:rounded-md before:backdrop-blur-xl"
              ><span class="relative text-sky-500">Tailwick</span></span
            >
          </h1>
          <p class="mb-6 text-lg text-slate-500 dark:text-zink-200">
            Effective professional services project management means having a
            firm grasp on the scope, budget, resources, personnel, and timeline
            dedicated to a project. An effective project manager is able to
            manage unplanned issues while keeping the ball rolling on company
            goals and tasks in progress.
          </p>
          <div class="flex items-center gap-2">
            <TButton classes="py-2.5 px-6 text-white">
              <Rocket class="inline-block size-4 align-middle me-2" /> Get
              Started
            </TButton>
            <TButton variant="dashed" color="red" classes="py-2.5 px-6">
              <ShoppingCart class="inline-block size-4 align-middle me-2" />
              <span class="align-middle">Buy Now</span>
            </TButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
