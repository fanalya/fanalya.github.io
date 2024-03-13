<script lang="ts" setup>
import { ref } from "vue";

import {
  Search,
  Plus,
  SlidersHorizontal,
  Eye,
  FileEdit,
  Trash2,
  MoreHorizontal,
  MessagesSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";
import DeleteDialog from "@/app/common/DeleteDialog.vue";
import { GridViewData } from "@/components/users/utils.ts";
import { useRouter } from "vue-router";
import CreateEditDialog from "@/components/users/CreateEditDialog.vue";

const router = useRouter();
const createEditDialog = ref(false);

const deleteDialog = ref(false);
const cardAction = [
  { icon: Eye, title: "Overview" },
  { icon: FileEdit, title: "Edit" },
  { icon: Trash2, title: "Delete" }
];

const onSelect = (data: any) => {
  if (data.title === "Overview") {
    router.push("/pages/account");
  } else if (data.title == "Edit") {
    createEditDialog.value = true;
  } else if (data.title == "Delete") {
    deleteDialog.value = true;
  }
};
</script>
<template>
  <form action="#!" class="mb-5">
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
      <div class="relative lg:col-span-4 xl:col-span-3">
        <TInputField
          inputClass="ltr:pl-8 rtl:pr-8"
          placeholder="Search for name, email, phone number etc..."
          hide-details
        >
          <template #prefix>
            <Search class="inline-block size-4" />
          </template>
        </TInputField>
      </div>

      <div class="lg:col-span-3 lg:col-start-10">
        <div class="flex gap-2 lg:justify-end">
          <TButton @click="createEditDialog = true">
            <Plus class="inline-block size-4 ltr:mr-2 rtl:ml-2" />
            Add User
          </TButton>
          <TButton class="!w-[37.5px] !h-[37.5px] p-0" color="slate">
            <SlidersHorizontal class="inline-block size-4" />
          </TButton>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end grid-->
  </form>

  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    <TCard v-for="user in GridViewData" :key="user.id">
      <div class="flex justify-center">
        <TAvatar
          :src="user.img"
          :height="16"
          :width="16"
          rounded
          badge
          color="slate"
          :redBadge="!user.isActive"
          badgeClass="!bottom-1 !top-auto"
        >
          <span class="text-lg"> {{ user.div }}</span>
        </TAvatar>
      </div>
      <div class="mt-4 text-center">
        <h5 class="mb-1 text-16">
          <a :href="'/pages/account?id=' + user.id">{{ user.name }}</a>
        </h5>
        <p class="mb-3 text-slate-500 dark:text-zink-200">
          {{ user.username }}
        </p>
        <p class="text-slate-500 dark:text-zink-200">{{ user.address }}</p>
      </div>
      <div class="flex gap-2 mt-5">
        <!-- Add your other components and actions here -->
        <router-link
          to="/chat"
          class="bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500 grow"
        >
          <MessagesSquare class="inline-block size-4 ltr:mr-2 rtl:ml-2" />
          <span class="align-middle">Send Message</span>
        </router-link>
        <TList :items="cardAction" @onSelect="onSelect">
          <template #title>
            <TButton
              icon
              class="p-0"
              classes="dropdown-toggle flex items-center justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            >
              <MoreHorizontal class="size-4" />
            </TButton>
          </template>
          <template #default="{ data }">
            <span class="flex gap-1 items-center">
              <component
                :is="data.icon"
                class="inline-block size-3 ltr:mr-1 rtl:ml-1"
              />
              <span class="align-middle">{{ data.title }}</span>
            </span>
          </template>
        </TList>
      </div>
    </TCard>
  </div>
  <!--end col & card-->
  <div class="flex flex-col items-center mb-5 md:flex-row">
    <div class="mb-4 grow md:mb-0">
      <p class="text-slate-500 dark:text-zink-200">
        Showing <b>12</b> of <b>44</b> Results
      </p>
    </div>
    <TPagination
      :modelValue="2"
      pageClass="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto "
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

  <DeleteDialog v-model="deleteDialog" />
  <CreateEditDialog v-model="createEditDialog" />
</template>
