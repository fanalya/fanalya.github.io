<script lang="ts" setup>
import {
  sellersData,
  cardAction,
} from "@/components/eCommerce/sellers/utils.ts";
import {
  Heart,
  MoreHorizontal,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";
import CreateEditDialog from "@/components/eCommerce/sellers/CreateEditDialog.vue";
import { ref } from "vue";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const data = ref(sellersData);
const createEditDialog = ref(false);
const deleteDialog = ref(false);

const onSelect = (data: any) => {
  if (data.value === "edit") {
    createEditDialog.value = true;
  } else if (data.value === "delete") {
    deleteDialog.value = true;
  }
};
</script>
<template>
  <form action="#!" class="mb-5">
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
      <div class="relative lg:col-span-3">
        <TInputField
          placeholder="Search for ..."
          hide-details
          inputClass="ltr:pl-8 rtl:pr-8"
        >
          <template #prefix>
            <Search class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
          </template>
        </TInputField>
      </div>

      <div
        class="ltr:lg:text-right rtl:lg:text-left lg:col-span-3 lg:col-start-12 flex ltr:justify-end rtl:justify-start"
      >
        <TButton @click="createEditDialog = true">
          <Plus class="inline-block size-4" />
          <span class="align-middle ms-1">Add Seller</span>
        </TButton>
      </div>
    </div>
  </form>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-12 gap-x-5"
  >
    <div v-for="item in data" class="2xl:col-span-3">
      <TCard>
        <div class="flex items-center gap-2 mb-4">
          <div class="grow">
            <a
              href="#!"
              class="group/item toggle-button"
              :class="{ active: item.isChecked }"
              @click="item.isChecked = !item.isChecked"
            >
              <Heart
                class="size-5 text-slate-500 dark:text-zink-200 fill-slate-200 dark:fill-zink-500 transition-all duration-150 ease-linear group-[.active]/item:text-yellow-500 dark:group-[.active]/item:text-yellow-500 group-[.active]/item:fill-yellow-200 dark:group-[.active]/item:fill-yellow-500/20 group-hover/item:text-yellow-500 dark:group-hover/item:text-yellow-500 group-hover/item:fill-yellow-200 dark:group-hover/item:fill-yellow-500/20"
              />
            </a>
          </div>
          <TList :items="cardAction" @onSelect="onSelect" placement="bottom-start">
            <template #title>
              <TButton
                icon
                class="p-0 !w-[30px] !h-[30px]"
                color="slate"
                variant="soft"
              >
                <MoreHorizontal class="size-3" />
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
        <div
          class="flex items-center justify-center size-16 mx-auto rounded-full bg-slate-100 outline outline-slate-100 outline-offset-1 dark:bg-zink-600 dark:outline-zink-600"
        >
          <img :src="item.src" alt="" class="h-10 rounded-full" />
        </div>

        <div class="mt-4 mb-6 text-center">
          <h6 class="text-16">
            <a href="#!">{{ item.name }}</a>
          </h6>
          <p class="text-slate-500 dark:text-zink-200">{{ item.owner }}</p>
        </div>
        <div
          class="grid grid-cols-1 gap-5 text-center divide-y md:divide-y-0 md:divide-x sm:grid-cols-3 2xl:grid-cols-12 divide-slate-200 divide-dashed dark:divide-zink-500 rtl:divide-x-reverse"
        >
          <div class="p-2 2xl:col-span-4">
            <h6 class="mb-1">{{ item.sales }}</h6>
            <p class="text-slate-500 dark:text-zink-200">Sales</p>
          </div>

          <div class="p-2 2xl:col-span-4">
            <h6 class="mb-1">{{ item.product }}</h6>
            <p class="text-slate-500 dark:text-zink-200">Product</p>
          </div>

          <div class="p-2 2xl:col-span-4">
            <h6 class="mb-1">{{ item.revenue }}</h6>
            <p class="text-slate-500 dark:text-zink-200">Revenue</p>
          </div>
        </div>
      </TCard>
    </div>
  </div>

  <div class="flex flex-col items-center mb-5 md:flex-row">
    <div class="mb-4 grow md:mb-0">
      <p class="text-slate-500 dark:text-zink-200">
        Showing <b>12</b> of <b>44</b> Results
      </p>
    </div>
    <TPagination
      :modelValue="2"
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
  <CreateEditDialog v-model="createEditDialog" />
  <DeleteDialog v-model="deleteDialog" />
</template>
