<script lang="ts" setup>
import { ref } from "vue";
import {
  Plus,
  Trash2,
  X,
  MoreHorizontal,
  Search,
  FileEdit
} from "lucide-vue-next";
import {
  ExpensesData,
  ExpensesDataHeader
} from "@/components/hr/hrmanagement.ts";

const formInputClass =
  "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const config = {
  altFormat: "M j, Y",
  dateFormat: "d M, Y"
};
const tableConfig = {
  page: 1,
  itemsPerPage: 7
};
const expenceList = ref(ExpensesData);
const deleteModal = ref(false);
const addExpensesModal = ref(false);

const dropdownData = [
  { title: "Edit", icon: FileEdit },
  { title: "Delete", icon: Trash2 }
];

const onSelect = (data: any) => {
  if (data.title === "Edit") {
    addExpensesModal.value = !addExpensesModal.value;
  } else if (data.title == "Delete") {
    deleteModal.value = !deleteModal.value;
  }
};
</script>

<template>
  <TCard id="ordersTable">
    <div class="grid grid-cols-1 gap-4 mb-5 lg:grid-cols-3 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <div class="relative">
          <input
            type="text"
            :class="formInputClass"
            class="ltr:pl-8 rtl:pr-8 search"
            placeholder="Search for ..."
            autocomplete="off"
          />
          <Search
            class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
          />
        </div>
      </div>
      <div class="xl:col-span-2">
        <TFlatPicker hide-details :config="{ dateFormat: 'd M, Y' }" />
      </div>
      <div class="xl:col-span-2 xl:col-start-11">
        <div class="lg:ltr:text-right lg:rtl:text-left">
          <a
            href="#!"
            @click="addExpensesModal = !addExpensesModal"
            type="buton"
            class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            <Plus class="inline-block size-4" /><span class="align-middle"
              >Add Expense</span
            >
          </a>
        </div>
      </div>
    </div>
    <div class="-mx-5">
      <TBasicTable
        is-pagination
        :config="tableConfig"
        :headerItems="ExpensesDataHeader"
        :items="expenceList"
        tableClass="whitespace-nowrap"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
        tdClass="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y dark:border-zink-500"
        paginationClass="px-5"
      >
        <template #action>
          <TList :items="dropdownData" @onSelect="onSelect">
            <template #title>
              <button
                id="emailMainAction"
                class="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
              >
                <MoreHorizontal class="size-3" />
              </button>
            </template>
            <template #default="{ data }">
              <div class="flex">
                <component :is="data.icon" class="me-2 size-4" />
                {{ data.title }}
              </div>
            </template>
          </TList>
        </template>
      </TBasicTable>
    </div>
  </TCard>

  <TModal v-model="addExpensesModal">
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Expense</h5>
        <button
          @click="addExpensesModal = false"
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
                for="estimateInput"
                class="inline-block mb-2 text-base font-medium"
                >Purchase Date</label
              >
              <TFlatPicker :config="config" />
            </div>
            <div class="xl:col-span-12">
              <label
                for="purchasedByInput"
                class="inline-block mb-2 text-base font-medium"
                >Purchased By</label
              >
              <input
                type="text"
                id="purchasedByInput"
                :class="formInputClass"
                placeholder="Purchased by"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="paidByInput"
                class="inline-block mb-2 text-base font-medium"
                >Paid By</label
              >
              <input
                type="text"
                id="paidByInput"
                :class="formInputClass"
                placeholder="Paid by"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="itemInput"
                class="inline-block mb-2 text-base font-medium"
                >Item</label
              >
              <input
                type="text"
                id="itemInput"
                :class="formInputClass"
                placeholder="Item title"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="amountInput"
                class="inline-block mb-2 text-base font-medium"
                >Amount</label
              >
              <input
                type="number"
                id="amountInput"
                :class="formInputClass"
                placeholder="$00.00"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              type="button"
              variant="ghost"
              color="red"
              @click="addExpensesModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="custom">Add Expense</TButton>
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
