<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  Users2,
  UserX2,
  UserCheck2,
  Briefcase,
  Search,
  CalendarRange,
  X,
  Check,
} from "lucide-vue-next";
import Widget from "@/components/hr/leave/widget.vue";
import {
  MainAttendanceData,
  MainAttendanceDataHeader,
} from "@/components/hr/hrmanagement.ts";

const attendanceList = ref(MainAttendanceData);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return attendanceList.value;
});
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-12">
    <div class="xl:col-span-3">
      <Widget :icon="Users2" :count="43" iconBg="sky" text="Total Employee" />
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="UserX2"
        :count="6"
        iconBg="red"
        text="Absent Employee (Today)"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="UserCheck2"
        :count="32"
        iconBg="green"
        text="Present Employee (Today)"
      />
    </div>
    <div class="xl:col-span-3">
      <Widget
        :icon="Briefcase"
        :count="22"
        iconBg="custom"
        text="Working Days (Current Month)"
      />
    </div>
  </div>

  <TCard>
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <div class="relative">
          <TInputField
            type="text"
            inputClass="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
            placeholder="Search for ..."
            autocomplete="off"
          />
          <Search
            class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
          />
        </div>
      </div>
      <div class="xl:col-span-2 xl:col-start-11">
        <div class="relative">
          <TFlatPicker
            hide-details
            class="flex items-center"
            :config="{ dateFormat: 'd M, Y' }"
            inputClass="ltr:pl-8 rtl:pr-8"
          >
            <CalendarRange
              class="size-4 text-slate-500 dark:text-zink-200 absolute mx-3"
            />
          </TFlatPicker>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <TBasicTable
        :headerItems="MainAttendanceDataHeader"
        :items="displayedLists"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
        tdClass="border-y"
        headTrClass="*:px-3.5 *:py-2.5 *:font-semibold *:border-b *:border-slate-200 *:dark:border-zink-500"
      >
        <template v-for="day in 30" #[`Day${day}`]="{ value }">
          <Check
            v-if="value[`Day${day}`] === true"
            class="size-4 text-green-500 transition-all duration-200 ease-linear hover:text-green-600"
          />
          <X
            v-else-if="value[`Day${day}`] === false"
            class="size-4 text-red-500"
          />
        </template>
      </TBasicTable>
    </div>
  </TCard>
</template>
