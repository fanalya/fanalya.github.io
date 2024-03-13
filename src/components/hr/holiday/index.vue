<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { Plus, Pencil, Trash2, X } from "lucide-vue-next";
import {
  HolidaysData,
  HolidaysDataHeader
} from "@/components/hr/hrmanagement.ts";
import Choices from "choices.js";

const typeSelect = ref<any>(null);

const formInputClass =
  "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const config = {
  altFormat: "M j, Y",
  dateFormat: "d M, Y"
};

const page = ref<number>(1);
const perPage = ref<number>(10);
const pages = ref<number[]>([]);
const holidaysList = ref(HolidaysData);
const deleteModal = ref(false);
const addHolidayModal = ref(false);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return paginate(holidaysList.value);
});

// Watcher for holidaysList
watch(holidaysList, () => {
  setPages();
});

// Function to set pages
const setPages = () => {
  let numberOfPages = Math.ceil(holidaysList.value.length / perPage.value);

  pages.value = [];
  for (let index = 1; index <= numberOfPages; index++) {
    pages.value.push(index);
  }

  if (pages.value.length < page.value) {
    page.value = pages.value.length;
  }
};

// Initial setPages call
setPages();

// Function to paginate holidaysList
const paginate = (holidaysList: any) => {
  let from = page.value * perPage.value - perPage.value;
  let to = page.value * perPage.value;
  return holidaysList.slice(from, to);
};

const tableConfig = {
  page: 1,
  itemsPerPage: 7
};

watch(addHolidayModal, (newVal: boolean) => {
  if (newVal) {
    setTimeout(() => {
      const TypeSelectEle: any = document.querySelector("#typeSelect");
      if (TypeSelectEle) {
        typeSelect.value = new Choices(TypeSelectEle, {
          allowHTML: true,
          searchEnabled: false
        });
      }
    }, 200);
  } else {
    typeSelect.value.destroy();
  }
});
</script>

<template>
  <TCard id="ordersTable">
    <div class="flex items-center gap-3 mb-4">
      <h6 class="text-15 grow">Holidays 2024</h6>
      <div class="shrink-0">
        <TButton
          @click="addHolidayModal = !addHolidayModal"
          type="button"
          color="custom"
        >
          <Plus class="inline-block size-4" /><span class="align-middle"
            >Add Holiday</span
          >
        </TButton>
      </div>
    </div>

    <TBasicTable
      is-pagination
      :config="tableConfig"
      :headerItems="HolidaysDataHeader"
      :items="displayedLists"
      thClass="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500"
      tdClass="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"
    >
      <template #action="{}">
        <div class="flex gap-2">
          <a
            href="#!"
            @click="addHolidayModal = !addHolidayModal"
            class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500"
          >
            <Pencil class="size-4" />
          </a>
          <a
            href="#!"
            @click="deleteModal = !deleteModal"
            class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 text-slate-500 hover:text-red-500 hover:bg-red-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:text-red-500 dark:hover:bg-red-500/20"
          >
            <Trash2 class="size-4" />
          </a>
        </div>
      </template>
    </TBasicTable>
  </TCard>

  <TModal
    v-model="addHolidayModal"
    id="addHolidayModal"
    location="modal-center"
  >
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Holiday</h5>
        <button
          @click="addHolidayModal = false"
          class="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <X class="size-5" />
        </button>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form action="#!">
          <div class="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <div class="xl:col-span-12">
              <label
                for="typeSelect"
                class="inline-block mb-2 text-base font-medium"
                >Type</label
              >
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                name="typeSelect"
                id="typeSelect"
              >
                <option value="Restricted Holiday">Restricted Holiday</option>
                <option value="Gazetted Holiday">Gazetted Holiday</option>
                <option value="Observance">Observance</option>
                <option value="Season">Season</option>
              </select>
              <!-- <Multiselect :options="holidaysOptions" /> -->
            </div>
            <div class="xl:col-span-12">
              <label
                for="holidayInput"
                class="inline-block mb-2 text-base font-medium"
                >Holiday Name</label
              >
              <input
                type="text"
                id="holidayInput"
                :class="formInputClass"
                placeholder="Holiday name"
              />
            </div>
            <div class="xl:col-span-12">
              <TFlatPicker label="Date" :config="config" />
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              type="button"
              variant="ghost"
              color="red"
              @click="addHolidayModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="custom">Add Holiday</TButton>
          </div>
        </form>
      </div>
    </template>
  </TModal>

  <TModal v-model="deleteModal" size="x-small">
    <template #content>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] overflow-y-auto px-6 py-8"
      >
        <div class="float-right">
          <button
            id="deleteRecord-close"
            @click="deleteModal = false"
            class="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"
          >
            <X class="size-5" />
          </button>
        </div>
        <img
          src="@/assets/images/delete.png"
          alt=""
          class="block h-12 mx-auto"
        />
        <div class="mt-5 text-center">
          <h5 class="mb-1">Are you sure?</h5>
          <p class="text-slate-500 dark:text-zink-200">
            Are you certain you want to delete this record?
          </p>
          <div class="flex justify-center gap-2 mt-6">
            <TButton
              type="button"
              variant="ghost"
              color="slate"
              @click="deleteModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="red" id="delete-record"
              >Yes, Delete It!</TButton
            >
          </div>
        </div>
      </div>
    </template>
  </TModal>
</template>
