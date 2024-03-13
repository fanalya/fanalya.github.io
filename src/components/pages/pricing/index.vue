<script lang="ts" setup>
import Pricing from "@/components/landing/onePage/Pricing.vue";
import { CheckSquare } from "lucide-vue-next";
</script>

<template>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
    <Pricing />
  </div>
  <h5 class="mt-2 mb-4 underline">Horizontal Pricing</h5>

  <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <TCard>
      <h5 class="mb-2"><span class="align-middle">Personal Plan</span></h5>

      <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div class="xl:col-span-8">
          <p
            class="relative before:absolute before:border-b before:border-slate-200 dark:before:border-zink-500 before:bottom-2 before:right-0 before:left-0"
          >
            <span
              class="relative pr-2 bg-white dark:bg-zink-700 dark:text-zink-200 text-slate-500"
              >Everything Includes</span
            >
          </p>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <ul class="flex flex-col gap-3 mt-5">
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>3</b> Projects</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>299</b> Customers</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span>Scalable Bandwidth</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>0</b> No Team Account</span>
                </li>
              </ul>
            </div>
            <div>
              <ul class="flex flex-col gap-3 md:mt-5">
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>3</b> Projects</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>299</b> Customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xl:col-span-4 card bg-custom-500 !mb-0 dark:bg-custom-500">
          <div class="flex flex-col h-full card-body">
            <p class="mb-3 text-custom-100">Per Month</p>
            <div class="mt-auto">
              <h3 class="mb-2 text-white">$29.99</h3>
              <TButton classes="w-full bg-custom-600"> Buy Now </TButton>
            </div>
          </div>
        </div>
      </div>
    </TCard>
    <TCard>
      <h5 class="mb-2"><span class="align-middle">Enterprise Plan</span></h5>

      <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div class="xl:col-span-8">
          <p
            class="relative before:absolute before:border-b before:border-slate-200 dark:before:border-zink-500 before:bottom-2 before:right-0 before:left-0"
          >
            <span
              class="relative pr-2 bg-white dark:bg-zink-700 dark:text-zink-200 text-slate-500"
              >Everything Includes</span
            >
          </p>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <ul class="flex flex-col gap-3 mt-5">
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>3</b> Projects</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>299</b> Customers</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span>Scalable Bandwidth</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>0</b> No Team Account</span>
                </li>
              </ul>
            </div>
            <div>
              <ul class="flex flex-col gap-3 md:mt-5">
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>3</b> Projects</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>299</b> Customers</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span>Scalable Bandwidth</span>
                </li>
                <li class="flex items-center gap-2">
                  <CheckSquare class="inline-block size-4 text-green-500" />
                  <span><b>5</b> No Team Account</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="xl:col-span-4 card bg-purple-100 !mb-0 shadow-none dark:bg-purple-500/20"
        >
          <div class="flex flex-col h-full card-body">
            <p class="mb-3 text-purple-500">Per Month</p>
            <div class="mt-auto">
              <h3 class="mb-2 text-slate-800 dark:text-white">$49.99</h3>
              <TButton classes="w-full" color="purple"> Buy Now </TButton>
            </div>
          </div>
        </div>
      </div>
    </TCard>
  </div>
</template>
