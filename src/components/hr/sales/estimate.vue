<script lang="ts" setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import {
  Plus,
  Trash2,
  X,
  MoreHorizontal,
  FileEdit,
  Search
} from "lucide-vue-next";
import {
  EstimatesData,
  EstimatesDataHeader
} from "@/components/hr/hrmanagement.ts";
import Choices from "choices.js";
const dropdownData = [
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
  itemsPerPage: 7
};
const page = ref<number>(1);
const perPage = ref<number>(10);
const pages = ref<number[]>([]);
const estimateList = ref(EstimatesData);
const deleteModal = ref(false);
const addEstimateModal = ref(false);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return paginate(estimateList.value);
});

// Watcher for estimateList
watch(estimateList, () => {
  setPages();
});

// Function to set pages
const setPages = () => {
  let numberOfPages = Math.ceil(estimateList.value.length / perPage.value);

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

// Function to paginate estimateList
const paginate = (estimateList: any) => {
  let from = page.value * perPage.value - perPage.value;
  let to = page.value * perPage.value;
  return estimateList.slice(from, to);
};

const getStatusClass = (status: any) => {
  switch (status) {
    case "Expired":
      return "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/20";
      break;
    case "Accepted":
      return "bg-green-100 text-green-500 dark:bg-green-500/20";
      break;
    case "Declined":
      return "bg-red-100 text-red-500 dark:bg-red-500/20";
      break;
    default:
      break;
  }
};

const status = ref<any>(null);

onMounted(() => {
  const categoryEle: any = document.querySelector("#statusFilterSelect");
  if (categoryEle) {
    status.value = new Choices(categoryEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }
});

onBeforeUnmount(() => {
  status.value.destroy();
});

watch(addEstimateModal, (newVal: boolean) => {
  const estimateBy = ref<any>(null);
  const statusSelect = ref<any>(null);
  if (newVal) {
    setTimeout(() => {
      const estimateByEle: any = document.querySelector("#estimateBySelect");
      if (estimateByEle) {
        estimateBy.value = new Choices(estimateByEle, {
          searchEnabled: false,
          allowHTML: true
        });
      }

      const statusSelectEle: any = document.querySelector("#statusSelect");
      if (statusSelectEle) {
        statusSelect.value = new Choices(statusSelectEle, {
          searchEnabled: false,
          allowHTML: true
        });
      }
    }, 200);
  } else {
    estimateBy.value?.destroy();
    statusSelect.value?.destroy();
  }
});
</script>

<template>
  <TCard id="ordersTable">
    <div class="grid grid-cols-1 gap-4 mb-2 lg:grid-cols-2 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <div class="relative">
          <TInputField
            placeholder="Search for..."
            hide-details
            inputClass="ltr:pl-10 rtl:pr-10"
          >
            <template #prefix>
              <Search class="size-4" />
            </template>
          </TInputField>
        </div>
      </div>
      <div class="xl:col-span-2">
        <select
          class="form-input border-slate-200 focus:outline-none focus:border-custom-500"
          name="statusFilterSelect"
          id="statusFilterSelect"
        >
          <option value="Accepted">Accepted</option>
          <option value="Declined">Declined</option>
          <option value="Expired">Expired</option>
        </select>
      </div>
      <div class="xl:col-span-2">
        <TFlatPicker :config="config" />
      </div>
      <div class="xl:col-span-2 xl:col-start-11">
        <div class="lg:ltr:text-right lg:rtl:text-left">
          <a
            href="#!"
            @click="addEstimateModal = !addEstimateModal"
            type="buton"
            class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            <Plus class="inline-block size-4" /><span class="align-middle ms-1"
              >Add Estimate</span
            >
          </a>
        </div>
      </div>
    </div>
    <div class="-mx-5 overflow-x-auto">
      <TBasicTable
        is-pagination
        :config="tableConfig"
        :headerItems="EstimatesDataHeader"
        :items="displayedLists"
        paginationClass="px-4"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
        thClass="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500"
        tdClass="border-y px-3.5 py-2.5 border-slate-200 dark:border-zink-500"
      >
        <template #estimateNumber="{ value }">
          <a
            href="#!"
            class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"
            >{{ value.estimateNumber }}</a
          >
        </template>
        <template #status="{ value }">
          <span
            class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border border-transparent dark:border-transparent"
            :class="getStatusClass(value.status)"
            >{{ value.status }}</span
          >
        </template>
        <template #action>
          <TList :items="dropdownData">
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

  <TModal
    v-model="addEstimateModal"
    id="addEstimateModal"
    location="modal-center"
  >
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Estimate</h5>
        <button
          @click="addEstimateModal = false"
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
                >Estimate Number</label
              >
              <input
                type="text"
                id="estimateInput"
                :class="formInputClass"
                placeholder="Estimate Number"
                value="#TWE20015420"
                disabled
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="clientNameInput"
                class="inline-block mb-2 text-base font-medium"
                >Client Name</label
              >
              <input
                type="text"
                id="clientNameInput"
                :class="formInputClass"
                placeholder="Client name"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="estimateBySelect"
                class="inline-block mb-2 text-base font-medium"
                >Estimate By</label
              >
              <select
                class="form-input border-slate-200 focus:outline-none focus:border-custom-500"
                name="estimateBySelect"
                id="estimateBySelect"
              >
                <option value="HR">HR</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div class="xl:col-span-6">
              <label
                for="estimateDateInput"
                class="inline-block mb-2 text-base font-medium"
                >Estimate Date</label
              >
              <TFlatPicker :config="config" hideDetails />
            </div>
            <div class="xl:col-span-6">
              <label
                for="expiryDateInput"
                class="inline-block mb-2 text-base font-medium"
                >Expiry Date</label
              >
              <TFlatPicker :config="config" hideDetails />
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
            <div class="xl:col-span-12">
              <label
                for="statusSelect"
                class="inline-block mb-2 text-base font-medium"
                >Status</label
              >
              <select
                class="form-input border-slate-200 focus:outline-none focus:border-custom-500"
                name="statusSelect"
                id="statusSelect"
              >
                <option value="Accepted">Accepted</option>
                <option value="Declined">Declined</option>
                <option value="Expired">Expired</option>
              </select>
              <!-- <Multiselect :options="statusOptions" /> -->
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              type="button"
              variant="ghost"
              color="red"
              @click="addEstimateModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="custom">Add Estimate</TButton>
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
