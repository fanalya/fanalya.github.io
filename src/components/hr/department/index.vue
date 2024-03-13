<script lang="ts" setup>
import { ref, computed } from "vue";
import { Plus, Pencil, Trash2, X } from "lucide-vue-next";
import {
  DepartmentsListData,
  DepartmentsListDataHeader
} from "@/components/hr/hrmanagement.ts";

const formInputClass =
  "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const departmentList = ref(DepartmentsListData);
const deleteModal = ref(false);
const addDepartmentModal = ref(false);

// Computed property for displayedLists
const displayedLists = computed(() => {
  return departmentList.value;
});

const tableConfig = {
  page: 1,
  itemsPerPage: 7
};
</script>

<template>
  <TCard>
    <div class="flex items-center gap-3 mb-4">
      <h6 class="text-15 grow">Departments</h6>
      <div class="shrink-0">
        <TButton
          @click="addDepartmentModal = !addDepartmentModal"
          type="button"
          color="custom"
        >
          <Plus class="inline-block size-4" /><span class="align-middle ms-1">
            Add Department</span
          >
        </TButton>
      </div>
    </div>
    <div class="overflow-x-auto">
      <TBasicTable
        is-pagination
        :config="tableConfig"
        :headerItems="DepartmentsListDataHeader"
        :items="displayedLists"
        thClass="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500"
        theadClass="w-full whitespace-nowrap"
        tdClass="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"
      >
        <template #action="{}">
          <div class="flex gap-2">
            <a
              href="#!"
              @click="addDepartmentModal = !addDepartmentModal"
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
    </div>
  </TCard>

  <TModal v-model="addDepartmentModal">
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Department</h5>
        <button
          @click="addDepartmentModal = false"
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
                for="departmentInput"
                class="inline-block mb-2 text-base font-medium"
                >Department Name</label
              >
              <input
                type="text"
                id="departmentInput"
                :class="formInputClass"
                placeholder="Department name"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="headOfInput"
                class="inline-block mb-2 text-base font-medium"
                >Head of Dep. Name</label
              >
              <input
                type="text"
                id="headOfInput"
                :class="formInputClass"
                placeholder="Head name"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="phoneNumberInput"
                class="inline-block mb-2 text-base font-medium"
                >Phone Number</label
              >
              <input
                type="number"
                id="phoneNumberInput"
                :class="formInputClass"
                placeholder="(012) 1234 562 3145"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="emailInput"
                class="inline-block mb-2 text-base font-medium"
                >Email</label
              >
              <input
                type="text"
                id="emailInput"
                :class="formInputClass"
                placeholder="Enter email"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="employeeNumberInput"
                class="inline-block mb-2 text-base font-medium"
                >Total Employee</label
              >
              <input
                type="number"
                id="employeeNumberInput"
                :class="formInputClass"
                placeholder="0"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              variant="ghost"
              color="red"
              @click="addDepartmentModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" color="custom">Add Department</TButton>
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
