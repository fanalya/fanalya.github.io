<script lang="ts" setup>
import { ref } from "vue";
import LeftSidebar from "@/components/dashboard/social-media/LeftSidebar.vue";
import {
  ChevronDown,
  Plus,
  UserX2,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";
import { tableHeader, tableData } from "@/components/social/friends/utils.ts";
const dropdownData = [
  { title: "Name" },
  { title: "Username" },
  { title: "Date" },
  { title: "Status" }
];

const data = ref(tableData);
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
    <div class="xl:col-span-3">
      <LeftSidebar />
    </div>
    <div class="xl:col-span-9" id="friendList">
      <div class="flex items-center gap-3 py-3">
        <h6 class="text-15 grow">Followers (254)</h6>
        <div class="shrink-0">
          <TList :items="dropdownData" placement="bottom-end">
            <template #title>
              <div class="relative dropdown sortble-dropdown">
                <span class="dropdown-title">Following</span>
                <ChevronDown class="inline-block size-4 ltr:ml-1 rtl:mr-1" />
              </div>
            </template>
          </TList>
        </div>
      </div>

      <div class="overflow-x-auto">
        <TBasicTable
          :headerItems="tableHeader"
          :items="data"
          tableClass="w-full border-separate table-custom border-spacing-y-2 whitespace-nowrap"
          theadClass="relative bg-white rounded-md dark:bg-zink-700 text-left"
          tdClass="relative bg-white rounded-md dark:bg-zink-700"
        >
          <template #status="{ value }">
            <TButton
              variant="dashed"
              color="sky"
              classes="px-2 py-1.5 text-xs"
              @click="value.status = !value.status"
            >
              <span
                v-if="value.status"
                class="group-[.active]/item:hidden block"
              >
                <Plus class="inline-block size-3 mr-1" /> Follow
              </span>
              <span v-else>
                <UserX2 class="inline-block size-3 mr-1" /> Unfollow
              </span>
            </TButton>
          </template>
          <template #username="{ value }">
            <router-link to="#!" class="text-custom-500 username">
              @{{ value.username }}
            </router-link>
          </template>
        </TBasicTable>
      </div>
      <div class="flex flex-col items-center mt-4 mb-5 md:flex-row">
        <div class="mb-4 grow md:mb-0">
          <p class="text-slate-500 dark:text-zink-200">
            Showing <b>12</b> of <b>44</b> Results
          </p>
        </div>
        <TPagination
          :totalPages="5"
          pageClass="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
          actionClass="h-8 px-3 border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
        >
          <template #prev>
            <ChevronLeft class="size-4 mr-1 rtl:rotate-180" />
            Prev
          </template>
          <template #next>
            Next
            <ChevronRight class="size-4 ml-1 rtl:rotate-180" />
          </template>
        </TPagination>
      </div>
    </div>
  </div>
</template>
