<script lang="ts" setup>
import {
  Search,
  Plus,
  Boxes,
  Loader,
  PackageCheck,
  RefreshCcw,
  PackageX,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";
import {
  tableHeader,
  tableData,
  tableAction
} from "@/components/eCommerce/orders/utils";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import CreateEditOrderDialog from "@/components/eCommerce/orders/CreateEditOrderDialog.vue";
import { useRouter } from "vue-router";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const router = useRouter();

const createEditDialog = ref(false);
const deleteDialog = ref(false);
const isSelectAll = ref(false);
const data = ref(
  tableData.map((data) => {
    return {
      ...data,
      id: uuidv4(),
      checked: isSelectAll.value
    };
  })
);
const tabClass = `inline-block px-4 py-1.5 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]`;
const activeTab = "all";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "green";
    case "Shipping":
      return "purple";
    case "New":
      return "sky";
    case "Pending":
      return "yellow";
    case "Return":
      return "slate";
    case "Cancelled":
      return "red";
  }
};

const onCreateEdit = () => {
  createEditDialog.value = true;
};
const onSelect = (data: any) => {
  if (data.value === "overview") {
    router.push({ path: "/ecommerce/order-overview" });
  } else if (data.value === "edit") {
    createEditDialog.value = true;
  } else if (data.value === "delete") {
    deleteDialog.value = true;
  }
};

const onSelectAll = () => {
  isSelectAll.value = !isSelectAll.value;
  data.value = data.value.map((item) => {
    return {
      ...item,
      checked: isSelectAll.value
    };
  });
};
</script>
<template>
  <TCard id="ordersTable">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div class="lg:col-span-3">
        <TInputField
          placeholder="Search for ..."
          inputClass="ltr:pl-8 rtl:pr-8"
        >
          <template #prefix>
            <Search class="size-4" />
          </template>
        </TInputField>
      </div>
      <div class="lg:col-span-2 lg:col-start-12">
        <div class="ltr:lg:text-right rtl:lg:text-left">
          <TButton @click="onCreateEdit">
            <Plus class="inline-block size-4" />
            <span class="align-middle">Add Order</span>
          </TButton>
        </div>
      </div>
    </div>
    <TTabs
      v-model="activeTab"
      class="flex flex-wrap w-full mt-5 text-sm font-medium text-center text-gray-500 nav-tabs"
    >
      <TTab :tabClass="tabClass" value="all">
        <Boxes class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
        <span class="align-middle">All Orders</span>
      </TTab>
      <TTab :tabClass="tabClass" value="pending">
        <Loader class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
        <span class="align-middle">Pending</span>
      </TTab>
      <TTab :tabClass="tabClass" value="delivered">
        <PackageCheck class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
        <span class="align-middle">Delivered</span>
      </TTab>
      <TTab :tabClass="tabClass" value="returns">
        <RefreshCcw class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
        <span class="align-middle">Returns</span>
      </TTab>
      <TTab :tabClass="tabClass" value="cancelled">
        <PackageX class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
        <span class="align-middle">Cancelled</span>
      </TTab>
    </TTabs>
    <simplebar class="mt-5 overflow-x-auto">
      <TBasicTable
        :headerItems="tableHeader"
        :items="data"
        theadClass="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
        thClass="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:border-zink-500 dark:text-zink-200"
        tdClass="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
        @onSelectAll="onSelectAll"
      >
        <template #checked="{ value }">
          <TCheckbox v-model="value.checked" variant="outlined" />
        </template>
        <template #order_id="{ value }">
          <a
            href="#!"
            class="transition-all duration-150 ease-linear order_id text-custom-500 hover:text-custom-600"
          >
            {{ value.order_id }}
          </a>
        </template>
        <template #delivery_status="{ value }">
          <TLabel
            variant="bordered"
            :color="getStatusColor(value.delivery_status)"
          >
            {{ value.delivery_status }}
          </TLabel>
        </template>
        <template #action>
          <TList :items="tableAction" @onSelect="onSelect">
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
    </simplebar>

    <div class="flex flex-col items-center mt-5 md:flex-row">
      <div class="mb-4 grow md:mb-0">
        <p class="text-slate-500 dark:text-zink-200">
          Showing <b>10</b> of <b>18</b> Results
        </p>
      </div>
      <TPagination
        :totalPages="3"
        pageClass="size-8 border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
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
  </TCard>
  <CreateEditOrderDialog v-model="createEditDialog" />
  <DeleteDialog v-model="deleteDialog" />
</template>
