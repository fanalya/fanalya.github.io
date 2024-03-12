<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  Plus,
  Trash2,
  X,
  MoreHorizontal,
  Search,
  FileEdit,
  Eye
} from "lucide-vue-next";
import {
  EmployeeSalaryData,
  EmployeeSalaryDataHeader
} from "@/components/hr/hrmanagement.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const dropdownData = [
  { title: "Overview", icon: Eye },
  { title: "Edit", icon: FileEdit },
  { title: "Delete", icon: Trash2 }
];

const formInputClass =
  "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const config = {
  altFormat: "M j, Y",
  dateFormat: "d M, Y"
};
const tableConfig = {
  page: 1,
  itemsPerPage: 10
};

const page = ref<number>(1);
const perPage = ref<number>(10);
const pages = ref<number[]>([]);
const salaryList = ref(EmployeeSalaryData);
const deleteModal = ref(false);
const addExpensesModal = ref(false);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return paginate(salaryList.value);
});

// Watcher for salaryList
watch(salaryList, () => {
  setPages();
});

// Function to set pages
const setPages = () => {
  let numberOfPages = Math.ceil(salaryList.value.length / perPage.value);

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

// Function to paginate salaryList
const paginate = (salaryList: any) => {
  let from = page.value * perPage.value - perPage.value;
  let to = page.value * perPage.value;
  return salaryList.slice(from, to);
};

const payData = [
  { label: "Base Salary", value: "$45,932" },
  { label: "Bonus", value: "$16,000" },
  { label: "Profit Sharing", value: "$2.5k to 4.5k" },
  { label: "Total Pay", value: "$78,564.00" }
];

const onSelect = (data: any) => {
  if (data.title === "Overview") {
    router.push("/pages/account");
  } else if (data.title == "Edit") {
    router.push("/hr/payroll/create-payslip");
  } else if (data.title == "Delete") {
    deleteModal.value = true;
  }
};
</script>

<template>
  <TCard>
    <div class="grid grid-cols-1 gap-5 2xl:grid-cols-12">
      <div class="2xl:col-span-5">
        <h5 class="mb-1">
          $78,564.00
          <small class="font-normal text-slate-500 dark:text-zink-200"
            >/ year</small
          >
        </h5>
        <p class="text-slate-500 dark:text-zink-200">
          Average Base Salary (USD)
        </p>
        <div class="mt-6 mb-4">
          <div
            class="flex w-full h-10 rounded-md bg-slate-200 dark:bg-zink-600"
          >
            <div
              class="flex items-center justify-center h-10 text-white bg-custom-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md"
              style="width: 20%"
            >
              20%
            </div>
            <div
              class="flex items-center justify-center h-10 text-white bg-green-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md"
              style="width: 15%"
            >
              15%
            </div>
            <div
              class="flex items-center justify-center h-10 text-white bg-purple-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md"
              style="width: 35%"
            >
              35%
            </div>
            <div
              class="flex items-center justify-center h-10 text-white bg-orange-500 ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md"
              style="width: 30%"
            >
              30%
            </div>
          </div>
        </div>
        <p>The average salary for all employees is $78,564.</p>
      </div>
      <div class="2xl:col-span-5 2xl:col-start-8">
        <div class="overflow-x-auto">
          <table class="w-full">
            <tbody>
              <tr v-for="item in payData" :key="item.label">
                <td
                  class="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent"
                >
                  {{ item.label }}
                </td>
                <td
                  class="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold"
                >
                  {{ item.value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </TCard>

  <TCard id="ordersTable">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <TInputField
          input-class="ltr:pl-8 rtl:pr-8 search"
          placeholder="Search for ..."
          autocomplete="off"
        >
          <template #prefix>
            <Search
              class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
            />
          </template>
        </TInputField>
      </div>
      <div class="xl:col-span-2">
        <TFlatPicker :config="config" />
      </div>
      <div class="xl:col-span-2 xl:col-start-11">
        <div class="lg:ltr:text-right lg:rtl:text-left">
          <router-link
            to="/hr/payroll/create-payslip"
            type="button"
            class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            <Plus class="inline-block size-4" />
            <span class="align-middle">Create Salary</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="-mx-5 overflow-x-auto">
      <TBasicTable
        is-pagination
        :config="tableConfig"
        :headerItems="EmployeeSalaryDataHeader"
        :items="displayedLists"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200"
        tdClass="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
        paginationClass="px-5"
      >
        <template #employeeId="{ value }">
          <a
            href="#!"
            class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"
            >{{ value.employeeId }}</a
          >
        </template>
        <template #name="{ value }">
          <a href="#!" class="flex items-center gap-3">
            <div class="size-6 rounded-full shrink-0 bg-slate-100">
              <img :src="value.img" alt="" class="h-6 rounded-full" />
            </div>
            <h6 class="grow">{{ value.name }}</h6>
          </a>
        </template>
        <template #action class="flex items-center gap-2">
          <div class="flex gap-2">
            <router-link
              to="/hr/payroll/payslip"
              class="px-2 py-1.5 text-xs text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:border-sky-600 active:ring active:ring-sky-100 dark:ring-sky-400/20"
              >Generate Slip</router-link
            >

            <TList
              :items="dropdownData"
              @onSelect="onSelect"
              placement="bottom-start"
            >
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
        </template>
      </TBasicTable>
    </div>
  </TCard>

  <TModal v-model="addExpensesModal" location="modal-center">
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
