<script lang="ts" setup>
import { MoreVertical, Calendar, Clock4 } from "lucide-vue-next";
import {
  totalProjectChart,
  interviews,
  recentData
} from "@/components/dashboard/hr/utils.ts";
import { avatar6 } from "@/assets/images/users/utils";
import Birthday from "@/assets/images/birthday.png";
const dropdownData = [
  "1 Weekly",
  "1 Monthly",
  "3 Monthly",
  "6 Monthly",
  "This Yearly"
];
const dropdownData1 = ["Overview", "Edit", "Delete"];
const dropdownData2 = ["Today", "Yesterday", "Thursday"];
</script>

<template>
  <TCard
    title="Total Projects (247)"
    class="col-span-12 md:order-10 lg:col-span-6 xl:col-span-4 2xl:col-span-3"
  >
    <template #titleAction>
      <TList :items="dropdownData" placement="bottom-start">
        <template #title>
          <TButton color="slate" variant="link" classes="px-2 py-1.5 text-xs">
            <MoreVertical class="inline-block size-4" />
          </TButton>
        </template>
      </TList>
    </template>
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="totalProjectChart.series"
      :options="totalProjectChart.chartOptions"
    />
  </TCard>
  <TCard
    title="Upcoming Interview"
    class="col-span-12 md:order-11 lg:col-span-6 xl:col-span-4 2xl:col-span-3"
  >
    <simplebar class="flex flex-col h-[355px] gap-4 !overflow-x-hidden">
      <div class="flex flex-col gap-3">
        <div
          v-for="(interview, index) in interviews"
          :key="index"
          class="border rounded-md border-slate-200 dark:border-zink-500"
        >
          <div class="flex flex-wrap items-center gap-3 p-2">
            <div class="size-10 rounded-full shrink-0">
              <img
                :src="interview.user.avatar"
                alt=""
                class="h-10 rounded-full"
              />
            </div>
            <div class="grow">
              <h6 class="mb-1">
                <a :href="interview.user.profileLink">{{
                  interview.user.name
                }}</a>
              </h6>
              <p class="text-slate-500 dark:text-zink-200">
                {{ interview.user.email }}
              </p>
            </div>
            <div class="relative dropdown shrink-0">
              <TList :items="dropdownData1" placement="bottom-end">
                <template #title>
                  <TButton
                    color="slate"
                    variant="link"
                    classes="px-2 py-1.5 text-xs"
                  >
                    <MoreVertical class="inline-block size-4" />
                  </TButton>
                </template>
              </TList>
            </div>
          </div>
          <div class="p-2 border-t border-slate-200 dark:border-zink-500">
            <div class="flex flex-col gap-3 md:items-center md:flex-row">
              <p class="text-slate-500 dark:text-zink-200 shrink-0">
                <Calendar class="inline-block size-4 ltr:mr-1 rtl::ml-1" />
                <span class="align-middle">{{ interview.date }}</span>
              </p>
              <p class="text-slate-500 dark:text-zink-200 grow">
                <Clock4 class="inline-block size-4 ltr:mr-1 rtl::ml-1" />
                <span class="align-middle">{{ interview.time }}</span>
              </p>
              <TLabel variant="outlined" :color="interview.label.color">
                {{ interview.label.text }}
              </TLabel>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </TCard>
  <div
    class="col-span-12 md:order-12 lg:col-span-12 xl:col-span-8 2xl:col-span-3"
  >
    <div class="grid grid-cols-12 gap-x-5">
      <div
        class="relative col-span-12 card bg-gradient-to-r to-custom-100 dark:to-custom-500/20 from-transparent"
      >
        <div
          class="bg-[url('../images/hr-dashboard.png')] absolute inset-0 bg-cover opacity-30"
        ></div>
        <div class="relative card-body">
          <div class="flex gap-3 mb-4">
            <div
              class="size-10 bg-purple-100 rounded-full dark:bg-purple-500/20 shrink-0"
            >
              <img :src="avatar6" alt="" class="h-10 rounded-full" />
            </div>
            <div class="grow">
              <h6 class="mb-1">Nakisha Short</h6>
              <p class="text-slate-500 dark:text-zink-200">
                Her Birthday Today
              </p>
            </div>
          </div>
          <button
            type="button"
            class="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            Wish Her
          </button>
        </div>
        <img :src="Birthday" alt="" class="absolute bottom-0 right-0" />
      </div>
      <TCard class="col-span-12" no-body>
        <div class="!pb-0 card-body">
          <div class="flex items-center gap-2 mb-3">
            <h6 class="text-15 grow">Recent Payroll</h6>
            <div class="relative dropdown shrink-0">
              <TList :items="dropdownData2" placement="bottom-start">
                <template #title>
                  <TButton
                    color="slate"
                    variant="link"
                    classes="px-2 py-1.5 text-xs"
                  >
                    <MoreVertical class="inline-block size-4" />
                  </TButton>
                </template>
              </TList>
            </div>
          </div>
        </div>
        <div class="pb-5">
          <simplebar class="flex flex-col h-[240px] gap-4 px-5">
            <div class="flex flex-col gap-3">
              <div
                v-for="(item, index) in recentData"
                :key="index"
                class="flex flex-wrap items-center gap-3"
              >
                <div
                  class="flex items-center justify-center size-6"
                  :class="item.iconColor"
                >
                  <component :is="item.icon" class="size-4" />
                </div>
                <div class="grow">
                  <h6 class="mb-0">{{ item.name }}</h6>
                </div>
                <div class="shrink-0">
                  <h6>{{ item.amount }}</h6>
                </div>
                <div class="w-20 ltr:text-right rtl:text-left shrink-0">
                  <TLabel :color="item.status.color">
                    {{ item.status.text }}
                  </TLabel>
                </div>
              </div>
            </div>
          </simplebar>
        </div>
      </TCard>
    </div>
  </div>
</template>
