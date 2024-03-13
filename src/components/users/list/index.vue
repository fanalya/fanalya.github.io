<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import Choices from "choices.js";
import { UserListViewData } from "@/components/users/utils.ts";
import {
  Plus,
  Search,
  Download,
  SlidersHorizontal,
  Eye,
  Trash2,
  FileEdit,
  MoreHorizontal,
  Loader,
  CheckCircle,
  X
} from "lucide-vue-next";
import DeleteDialog from "@/app/common/DeleteDialog.vue";
import CreateEditDialog from "@/components/users/CreateEditDialog.vue";

const router = useRouter();

const cardAction = [
  { icon: Eye, title: "Overview" },
  { icon: FileEdit, title: "Edit" },
  { icon: Trash2, title: "Delete" }
];
const tableConfig = {
  page: 1,
  itemsPerPage: 10
};

const isAllChecked = ref(false);
const defaultChoices = ref<any>(null);

const usersListDataHeader = [
  { value: "isActive", type: "check", align: "center", justifyCenter: true },
  { title: "User ID", value: "userId" },
  { title: "Name", value: "name" },
  { title: "Location of Dep.", value: "location" },
  { title: "Email", value: "email" },
  { title: "Phone", value: "phoneNumber" },
  { title: "Joining", value: "joiningDate" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action" }
];

const mappedData = UserListViewData.map((data) => {
  return {
    ...data,
    isActive: false
  };
});

const displayedLists = ref(mappedData);
const deleteDialog = ref(false);
const createEditDialog = ref(false);

onMounted(() => {
  const defaultElement: any = document.querySelector("#choices-single-default");
  defaultChoices.value = new Choices(defaultElement, {
    allowHTML: true,
    searchEnabled: false
  });
});

onBeforeUnmount(() => {
  defaultChoices.value.destroy();
});

const onSelectAll = () => {
  isAllChecked.value = !isAllChecked.value;
  displayedLists.value = displayedLists.value.map((data) => {
    return {
      ...data,
      isActive: isAllChecked.value
    };
  });
};

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
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
    <div class="xl:col-span-12">
      <div class="card" title="Users List">
        <div class="card-body">
          <div class="flex items-center">
            <h6 class="text-15 grow">Users List</h6>
            <div class="shrink-0">
              <TButton @click="createEditDialog = true">
                <Plus class="inline-block size-4 me-1" />
                Add User
              </TButton>
            </div>
          </div>
        </div>

        <div
          class="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500"
        >
          <form action="#!">
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div class="relative xl:col-span-2">
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

              <div class="xl:col-span-2">
                <select
                  class="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  data-choices
                  id="choices-single-default"
                >
                  <option value="">Select Status</option>
                  <option value="Verified">Verified</option>
                  <option value="Waiting">Waiting</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Hidden">Hidden</option>
                </select>
              </div>
              <div class="xl:col-span-3 xl:col-start-10">
                <div class="flex gap-2 xl:justify-end">
                  <div>
                    <TButton variant="dashed">
                      <Download class="inline-block size-4 me-1" />
                      Import
                    </TButton>
                  </div>
                  <TButton color="slate" variant="soft" class="px-2.5 py-2.5">
                    <SlidersHorizontal class="size-4"></SlidersHorizontal>
                  </TButton>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="-mx-5 overflow-x-auto">
            <TBasicTable
              is-pagination
              :config="tableConfig"
              :headerItems="usersListDataHeader"
              :items="displayedLists"
              :trClass="`relative rounded-md after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600`"
              theadClass="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
              paginationClass="px-5"
              @onSelectAll="onSelectAll"
            >
              <template #isActive="{ value }">
                <TCheckbox
                  v-model="value.isActive"
                  variant="outlined"
                  class="justify-center !gap-0"
                />
              </template>
              <template #userId="{ value }">
                <a
                  href="#!"
                  class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600 user-id"
                >
                  {{ value.userId }}
                </a>
              </template>

              <template #name="{ value }">
                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center justify-center size-10 font-medium rounded-full shrink-0 bg-slate-200 text-slate-800 dark:text-zink-50 dark:bg-zink-600"
                  >
                    <img
                      v-if="value.img"
                      :src="value.img"
                      alt=""
                      class="h-10 rounded-full"
                    />
                    <div
                      v-else-if="value.div"
                      class="flex items-center justify-center size-10 font-medium rounded-full shrink-0 bg-slate-200 text-slate-800 dark:text-zink-50 dark:bg-zink-600"
                    >
                      {{ value.div }}
                    </div>
                  </div>
                  <div class="grow">
                    <h6 class="mb-1">
                      <a href="#!" class="name">{{ value.name }}</a>
                    </h6>
                    <p class="text-slate-500 dark:text-zink-200">
                      {{ value.designation }}
                    </p>
                  </div>
                </div>
              </template>

              <template #status="{ value }">
                <TLabel
                  v-if="value.status === 'Waiting'"
                  class="px-2.5 py-0.5 inline-flex items-center text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent status"
                >
                  <Loader class="size-3 mr-1.5" />
                  {{ value.status }}
                </TLabel>
                <TLabel
                  v-else-if="value.status === 'Verified'"
                  class="px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent inline-flex items-center status"
                >
                  <CheckCircle class="size-3 mr-1.5" />
                  {{ value.status }}
                </TLabel>
                <TLabel
                  v-else-if="value.status === 'Rejected'"
                  class="px-2.5 py-0.5 inline-flex items-center text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent status"
                >
                  <X class="size-3 mr-1.5" />
                  {{ value.status }}
                </TLabel>
              </template>

              <template #action="{}">
                <TList :items="cardAction" @onSelect="onSelect">
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
              </template>
            </TBasicTable>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteDialog v-model="deleteDialog" />
  <CreateEditDialog v-model="createEditDialog" />
</template>
