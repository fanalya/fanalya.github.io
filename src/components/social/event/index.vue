<script lang="ts" setup>
import { ref } from "vue";
import LeftSidebar from "@/components/dashboard/social-media/LeftSidebar.vue";
import {
  Search,
  Plus,
  Eye,
  FileEdit,
  Trash2,
  MoreHorizontal
} from "lucide-vue-next";
import { tableHeader, tableData } from "@/components/social/event/utils.ts";
import EventDialog from "@/components/social/event/EventDailog.vue";
import DeleteDialog from "@/app/common/DeleteDialog.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const dropdownData = [
  { title: "Overview", icon: Eye },
  { title: "Edit", icon: FileEdit },
  { title: "Delete", icon: Trash2 }
];

const eventDialog = ref(false);
const deleteDialog = ref(false);

const onSelect = (data: any) => {
  if (data.title == "Edit") {
    eventDialog.value = true;
  } else if (data.title == "Delete") {
    deleteDialog.value = true;
  } else if (data.title == "Overview") {
    router.push("/invoice/add-new");
  }
};
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
    <div class="xl:col-span-3">
      <LeftSidebar />
    </div>
    <div class="xl:col-span-9" id="eventList">
      <div class="grid items-center grid-cols-1 gap-4 mb-4 xl:grid-cols-12">
        <div class="xl:col-span-3">
          <h6 class="mb-0 text-15">Upcoming Events</h6>
        </div>
        <div class="flex gap-2 xl:col-span-4 xl:col-start-9">
          <div class="relative grow">
            <TInputField
              required
              hide-details
              placeholder="Search for ..."
              inputClass="ltr:pl-8 rtl:pr-8"
            >
              <template #prefix>
                <Search
                  class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
                />
              </template>
            </TInputField>
          </div>
          <TButton @click="eventDialog = true">
            <Plus class="inline-block size-4" />
            <span class="align-middle ms-1">Add Event</span>
          </TButton>
        </div>
      </div>
      <div
        class="px-4 py-3 mb-4 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50"
      >
        <span class="font-bold">Join us for the upcoming event:</span> Community
        Clean-Up Day on October 15, 2023
        <a
          href="#!"
          class="px-2.5 py-0.5 text-xs font-medium inline-block rounded border transition-all duration-200 ease-linear bg-green-100 border-transparent text-green-500 hover:bg-green-200 dark:bg-green-400/20 dark:hover:bg-green-400/30 dark:border-transparent ltr:ml-1 rtl:mr-1"
          >Register Now</a
        >
      </div>
      <div class="overflow-x-auto">
        <TBasicTable
          :headerItems="tableHeader"
          :items="tableData"
          tableClass="w-full border-separate table-custom border-spacing-y-2 whitespace-nowrap"
          theadClass="relative bg-white rounded-md dark:bg-zink-700 text-left"
          tdClass="relative bg-white rounded-md dark:bg-zink-700"
        >
          <template #status="{ value }">
            <TLabel variant="bordered" :color="value.statusColor">
              {{ value.status }}
            </TLabel>
          </template>
          <template #action>
            <TList
              :items="dropdownData"
              placement="bottom-end"
              @onSelect="onSelect"
            >
              <template #title>
                <TButton
                  color="slate"
                  variant="soft"
                  classes="flex px-2 py-2 text-xs"
                >
                  <MoreHorizontal class="size-3" />
                </TButton>
              </template>
              <template #default="{ data }">
                <div class="flex">
                  <component
                    :is="data.icon"
                    class="mt-1 inline-block size-3 mr-1"
                  />
                  <span class="align-middle ms-1"> {{ data.title }}</span>
                </div>
              </template>
            </TList>
          </template>
        </TBasicTable>
      </div>
      <div class="flex justify-center mt-3 mb-5">
        <TButton>
          <svg
            class="size-4 ltr:mr-2 rtl:ml-2 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Load More
        </TButton>
      </div>
    </div>
  </div>

  <EventDialog v-model="eventDialog" />

  <DeleteDialog v-if="deleteDialog" v-model="deleteDialog" />
</template>
