<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Save, MoreHorizontal } from "lucide-vue-next";
import {
  tableAction,
  addresses,
  table_dataHeader,
  table_data,
  subtotal
} from "@/components/invoice/listView/utils.ts";

import DeleteDialog from "@/app/common/DeleteDialog.vue";

const deleteDialog = ref(false);
const router = useRouter();

const onSelect = (data: any) => {
  if (data.title === "Edit") {
    router.push("/invoice/add-new");
  } else if (data.title == "Delete") {
    deleteDialog.value = true;
  }
};
</script>

<template>
  <div
    class="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative"
  >
    <div class="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">
      <div
        class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto"
      >
        <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div class="xl:col-span-12">
            <div class="card print:shadow-none print:border-none">
              <div class="card-body print:hidden">
                <div class="flex flex-col gap-5 md:items-center md:flex-row">
                  <div class="grow">
                    <h6 class="mb-1 text-16">#TW15090257</h6>
                    <ul class="flex items-center gap-3">
                      <li class="text-slate-500 dark:text-zink-200">
                        Create: 10 July, 2023
                      </li>
                      <li class="text-slate-500 dark:text-zink-200">
                        Due: 10 July, 2023
                      </li>
                    </ul>
                  </div>

                  <div class="flex items-center gap-2 shrink-0">
                    <TButton color="purple">Download</TButton>

                    <TButton onclick="window.print()">
                      <Save
                        class="inline-block size-4 ltr:mr-1 rtl:ml-1"
                      /><span class="align-middle">Save & Print</span>
                    </TButton>

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
                  </div>
                </div>
              </div>

              <div class="card-body !pt-0">
                <div
                  class="p-5 border rounded-md md:p-8 border-slate-200 dark:border-zink-500 print:p-0"
                >
                  <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
                    <div
                      class="text-center xl:col-span-2 ltr:xl:text-left rtl:xl:text-right"
                    >
                      <div
                        class="flex items-center justify-center size-16 mx-auto rounded-md bg-slate-100 dark:bg-zink-600 xl:mx-0"
                      >
                        <img
                          src="@/assets/images/logo-sm.png"
                          alt=""
                          class="h-8"
                        />
                      </div>
                      <h5 class="mt-4 mb-1">Themesdesign</h5>
                      <p class="text-slate-500 dark:text-zink-200">
                        IT Software Company
                      </p>
                    </div>
                    <div
                      class="ltr:xl:text-right rtl:xl:text-left xl:col-start-10 xl:col-span-3"
                    >
                      <p class="mb-1 text-slate-500 dark:text-zink-200">
                        Legal Registration No:
                        <span class="font-semibold">2155420</span>
                      </p>
                      <p
                        class="mb-1 truncate text-slate-500 dark:text-zink-200"
                      >
                        Email:
                        <span class="font-semibold"
                          >tailwick@themesdesign.com</span
                        >
                      </p>
                      <p class="mb-1 text-slate-500 dark:text-zink-200">
                        Website:
                        <a
                          href="https://themesdesign.in"
                          target="_blank"
                          class="font-semibold underline text-custom-500"
                          >www.themesdesign.in</a
                        >
                      </p>
                      <p class="text-slate-500 dark:text-zink-200">
                        Contact No:
                        <span class="font-semibold">+(01) 123 678 9654</span>
                      </p>
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 mt-6 text-center divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-dashed md:grid-cols-4 divide-slate-200 dark:divide-zink-500"
                  >
                    <div class="p-3">
                      <h6 class="mb-1">#TW15090254</h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        Invoice No
                      </p>
                    </div>
                    <div class="p-3">
                      <h6 class="mb-1">10 July, 2023</h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        Create Date
                      </p>
                    </div>
                    <div class="p-3">
                      <h6 class="mb-1">
                        <span
                          class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent"
                          >Paid</span
                        >
                      </h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        Payment Status
                      </p>
                    </div>
                    <div class="p-3">
                      <h6 class="mb-1">$873.96</h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        Total Amount
                      </p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                    <div
                      v-for="(address, index) in addresses"
                      :key="index"
                      class="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2"
                    >
                      <div>
                        <p
                          class="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200"
                        >
                          {{ address.type }}
                        </p>
                        <h6 class="mb-1 text-15">{{ address.name }}</h6>
                        <p class="mb-1 text-slate-500 dark:text-zink-200">
                          {{ address.address }}
                        </p>
                        <p class="mb-1 text-slate-500 dark:text-zink-200">
                          {{ address.phone }}
                        </p>
                        <p
                          v-if="address.taxNumber"
                          class="mb-1 text-slate-500 dark:text-zink-200"
                        >
                          {{ address.taxNumber }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <TBasicTable
                    :headerItems="table_dataHeader"
                    :items="table_data"
                    tdClass="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500"
                    thClass="px-3.5 py-2.5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500"
                  >
                    <template #item_name="{ value }">
                      <h6 class="mb-1">{{ value.item_name }}</h6>
                      <p
                        v-if="value.item_name"
                        class="text-slate-500 dark:text-zink-200"
                      >
                        Build with Bootstrap, React JS, Angular, Vue etc.
                      </p>
                    </template>
                  </TBasicTable>

                  <table class="w-full">
                    <tbody class="before:block before:h-3">
                      <tr v-for="(item, index) in subtotal" :key="index">
                        <td colspan="3" style="width: 500px"></td>
                        <td
                          class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200"
                        >
                          {{ item.label }}
                        </td>
                        <th
                          class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200"
                        >
                          {{ item.value }}
                        </th>
                      </tr>
                    </tbody>
                  </table>

                  <div class="my-5">
                    <p
                      class="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200"
                    >
                      Payments Details
                    </p>
                    <p class="mb-1 text-slate-500 dark:text-zink-200">
                      Payment Method: Credit Card
                    </p>
                    <p class="mb-1 text-slate-500 dark:text-zink-200">
                      Card Holder: Paula Keenan
                    </p>
                    <p class="mb-1 text-slate-500 dark:text-zink-200">
                      Card Number: xxxx xxxx xxxx 1402
                    </p>
                    <p class="mb-0 text-slate-500 dark:text-zink-200">
                      Total Amount: $755.96
                    </p>
                  </div>

                  <div
                    class="px-4 py-3 text-sm border rounded-md border-sky-200 text-sky-500 bg-sky-50 dark:bg-sky-400/20 dark:border-sky-500/50"
                  >
                    <span class="font-bold">NOTES:</span> All accounts are to be
                    paid within 7 days from receipt of invoice. To be paid by
                    cheque or credit card or direct payment online. If account
                    is not paid within 7 days the credits details supplied as
                    confirmation of work undertaken will be charged the agreed
                    quoted fee noted above.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteDialog v-if="deleteDialog" v-model="deleteDialog" />
</template>
