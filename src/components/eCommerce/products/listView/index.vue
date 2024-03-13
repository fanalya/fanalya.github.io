<script lang="ts" setup>
import { ref, watch } from "vue";
import { Plus, Search } from "lucide-vue-next";
import {
  productList,
  tableHeaderItems,
  tableAction
} from "@/components/eCommerce/products/listView/utils";
import { MoreHorizontal } from "lucide-vue-next";
import { useRouter } from "vue-router";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const deleteDialog = ref(false);
const router = useRouter();

const finalData = ref(productList);
const filterData = ref(productList);
const tableConfig = {
  page: 1,
  itemsPerPage: 7
};
const search = ref("");

watch(search, (newVal: string) => {
  if (newVal !== "") {
    filterData.value = finalData.value.filter((data: any) => {
      const val = newVal.toLowerCase();
      if (
        data.product_name.toLowerCase().includes(val) ||
        data.category.toLowerCase().includes(val)
      ) {
        return data;
      }
    });
  } else {
    filterData.value = finalData.value;
  }
});
const getLabelColor = (status: string) => {
  if (status === "Scheduled") {
    return "orange";
  } else if (status === "Publish") {
    return "green";
  } else if (status === "Inactive") {
    return "red";
  }
};

const onSelect = (data: any) => {
  if (data.value === "overview") {
    router.push("/ecommerce/product-overview");
  } else if (data.value == "edit") {
    router.push("/ecommerce/product-create");
  } else if (data.value == "delete") {
    deleteDialog.value = true;
  }
};

const onAdd = () => {
  router.push("/ecommerce/product-create");
};
</script>
<template>
  <TCard>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
      <div class="xl:col-span-3">
        <TInputField
          v-model="search"
          placeholder="Search for..."
          hide-details
          inputClass="ltr:pl-10 rtl:pr-10"
        >
          <template #prefix>
            <Search class="size-4" />
          </template>
        </TInputField>
      </div>
      <div class="xl:col-span-2">
        <TFlatPicker hide-details :config="{ mode: 'range' }" />
      </div>
      <div
        class="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-12"
      >
        <TButton @click="onAdd">
          <Plus class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
          <span class="align-middle">Add Product</span>
        </TButton>
      </div>
    </div>
    <div class="overflow-x-auto mt-5">
      <TBasicTable
        theadClass="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
        tdClass="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
        :headerItems="tableHeaderItems"
        :items="filterData"
        is-pagination
        :config="tableConfig"
      >
        <template #product_code="{ value }">
          <a
            href="#!"
            class="transition-all duration-150 ease-linear product_code text-custom-500 hover:text-custom-600"
          >
            {{ value.product_code }}
          </a>
        </template>
        <template #product_name="{ value }">
          <router-link
            to="/ecommerce/product-overview"
            class="flex items-center gap-2"
          >
            <img :src="value.img" alt="Product images" class="h-6" />
            <h6 class="product_name">{{ value.product_name }}</h6>
          </router-link>
        </template>
        <template #category="{ value }">
          <span
            class="category px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200"
          >
            {{ value.category }}
          </span>
        </template>
        <template #status="{ value }">
          <TLabel :color="getLabelColor(value.status)">
            {{ value.status }}
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
    </div>
  </TCard>
  <DeleteDialog v-if="deleteDialog" v-model="deleteDialog" />
</template>
