<script lang="ts" setup>
import { ref, computed } from "vue";
import { Plus, Eye, Pencil, Trash2 } from "lucide-vue-next";
import {
  EmployeeListData,
  EmployeeListDataHeader
} from "@/components/hr/hrmanagement.ts";
import { Employee } from "@/components/hr/employee/types.ts";
import DeleteDialog from "@/app/common/DeleteDialog.vue";
import CreateEditDialog from "@/components/hr/employee/CreateEditDialog.vue";

const employeeList = ref<Employee[]>(EmployeeListData);
const deleteModal = ref(false);
const addEmployeeModal = ref(false);

const tableConfig = {
  page: 1,
  itemsPerPage: 10
};
// Submitted state
const submitted = ref(false);

// Customer modal states
const dataEdit = ref(false);
const event = ref({
  id: "",
  employeeId: "",
  name: "",
  img: "",
  designation: "",
  email: "",
  phone: "",
  location: "",
  experience: "",
  joinDate: ""
});

// Computed property for displayedLists
const displayedLists = computed(() => {
  return employeeList.value;
});

const handleCreateModal = () => {
  event.value.employeeId = `#TW${
    Math.floor(Math.random() * 9000000) + 1000000
  }`;
  addEmployeeModal.value = true;
};

const editEmployee = (data: any) => {
  dataEdit.value = true;
  addEmployeeModal.value = true;
  event.value = { ...data };

  submitted.value = false;
};

const deleteModalToggle = (data: any) => {
  deleteModal.value = true;
  event.value.id = data.id;
};

const deleteData = () => {
  if (event.value.id) {
    employeeList.value = employeeList.value.filter((item: any) => {
      return item.id != event.value.id;
    });
    deleteModal.value = false;
  }
};
</script>

<template>
  <TCard id="employeeTable">
    <div class="flex items-center gap-3 mb-4">
      <h6 class="text-15 grow">
        Employee (<b>{{ employeeList.length }}</b
        >)
      </h6>
      <div class="shrink-0">
        <TButton @click="handleCreateModal">
          <Plus class="inline-block size-4" /> Add Employee
        </TButton>
      </div>
    </div>
    <div class="-mx-5 overflow-x-auto">
      <TBasicTable
        is-pagination
        :config="tableConfig"
        tableClass="whitespace-nowrap"
        :headerItems="EmployeeListDataHeader"
        headTrClass="bg-slate-100 dark:bg-zink-600"
        :items="displayedLists"
        thClass="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-b border-slate-200 dark:border-zink-500"
        theadClass=""
        tdClass="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
        paginationClass="px-4"
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
        <template #action="{ value }">
          <div class="flex gap-3">
            <router-link
              class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500"
              to="/pages/account"
            >
              <Eye class="inline-block size-3" />
            </router-link>
            <a
              href="#!"
              @click="editEmployee(value)"
              class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md edit-item-btn bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500"
            >
              <Pencil class="size-4" />
            </a>
            <a
              href="#!"
              @click="deleteModalToggle(value)"
              class="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md remove-item-btn bg-slate-100 text-slate-500 hover:text-custom-500 hover:bg-custom-100 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-custom-500/20 dark:hover:text-custom-500"
            >
              <Trash2 class="size-4" />
            </a>
          </div>
        </template>
      </TBasicTable>
    </div>
  </TCard>
  <DeleteDialog v-model="deleteModal" @handleSubmit="deleteData" />
  <CreateEditDialog v-model="addEmployeeModal" />
</template>
