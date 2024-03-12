<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Support from "@/assets/images/support.png";
import { scheduled } from "@/components/dashboard/hr/utils.ts";
import VanillaCalendar from "vanilla-calendar-pro";
import { useLayoutStore } from "@/store/layout.ts";

const state = useLayoutStore();
const calendar = ref();
onMounted(() => {
  const options: any = {
    settings: {
      visibility: {
        theme: state.mode
      },
      selected: {
        month: 10,
        year: 2023
      }
    },
    popups: {
      "2023-06-28": {
        modifier: "!bg-red-500 !text-white",
        html: "Meeting with Designer"
      },
      "2023-07-13": {
        modifier: "!bg-red-500 !text-white text-bold",
        html: "Meeting at 6:00 PM"
      },
      "2023-07-08": {
        modifier: "!bg-purple-500 !text-white text-bold",
        html: `<div>
        <div class="font-semibold underline mb-1">09:57 AM</div>
        <p class="text-slate-500 dark:text-zink-200">Developing Line Managers Conference</p>
      </div>`
      },
      "2023-07-17": {
        modifier: "!bg-green-500 !text-white",
        html: `<div>
        <div class="font-semibold underline mb-1">12:00 PM</div>
        <p class="text-slate-500 dark:text-zink-200">Airplane in Las Vegas</p>
      </div>`
      },

      "2023-11-11": {
        modifier: "!bg-orange-500 !text-white text-bold",
        html: `<div>
        <p class="text-slate-500 dark:text-zink-200">Hospitality Project Discuses</p>
      </div>`
      }
    }
  };
  calendar.value = new VanillaCalendar("#calendar", options);
  calendar.value.init();
});

onBeforeUnmount(() => {
  calendar.value.destroy();
});
</script>

<template>
  <TCard
    title="Upcoming Scheduled"
    class="col-span-12 md:order-9 lg:col-span-6 lg:row-span-2 xl:col-span-4 xl:row-span-2 2xl:row-span-2 2xl:col-span-3"
  >
    <div id="calendar" class="!w-[100%]"></div>
    <div class="flex flex-col gap-4 mt-3">
      <div v-for="meeting in scheduled" :key="meeting.title" class="flex gap-3">
        <div
          class="flex flex-col items-center justify-center size-12 border rounded-sm border-slate-200 dark:border-zink-500 shrink-0"
        >
          <h6>{{ meeting.date.day }}</h6>
          <span class="text-sm text-slate-500 dark:text-zink-200">{{
            meeting.date.month
          }}</span>
        </div>
        <div class="grow">
          <h6 class="mb-1">
            {{ meeting.title }}
            <TLabel color="slate">
              {{ meeting.time }}
            </TLabel>
          </h6>
          <p class="text-slate-500 dark:text-zink-200">
            Created by {{ meeting.createdBy }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex gap-3 p-2 mt-3 rounded-md bg-custom-500">
      <div class="shrink-0">
        <img :src="Support" alt="" class="h-24" />
      </div>
      <div>
        <h6 class="mb-1 text-15 text-custom-50">Need Help ?</h6>
        <p class="text-custom-200">
          If you would like to learn more about transferring the license to a
          customer
        </p>
      </div>
    </div>
  </TCard>
</template>
<style lang="scss">
@import "vanilla-calendar-pro/build/vanilla-calendar.layout.min.css";
</style>
