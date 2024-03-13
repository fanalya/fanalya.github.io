<script lang="ts" setup>
import {
  overviewDashboard,
  orderSummery
} from "@/components/eCommerce/orderOverview/utils.ts";
import { Download } from "lucide-vue-next";
</script>
<template>
  <div class="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">
    <div v-for="item in overviewDashboard" class="2xl:col-span-3">
      <TCard>
        <TAvatar
          :height="12"
          :width="12"
          :color="item.color"
          class="ltr:float-right rtl:float-left"
          :src="item.src"
        >
          <component :is="item.icon" />
        </TAvatar>

        <h6 class="mb-4 text-15">{{ item.title }}</h6>

        <h6 class="mb-1">{{ item.caption }}</h6>
        <p class="mb-1 text-slate-500 dark:text-zink-200" v-html="item.add1" />
        <p class="text-slate-500 dark:text-zink-200" v-html="item.add2" />
      </TCard>
    </div>
  </div>

  <div class="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">
    <div class="2xl:col-span-9">
      <div class="grid grid-cols-1 2xl:grid-cols-5 gap-x-5">
        <TCard class="text-center">
          <h6 class="mb-1 underline">#TWT5015100366</h6>
          <p class="uppercase text-slate-500 dark:text-zink-200">Order ID</p>
        </TCard>

        <TCard class="text-center">
          <h6 class="mb-1">02 Nov, 2023</h6>
          <p class="uppercase text-slate-500 dark:text-zink-200">Order Date</p>
        </TCard>

        <TCard class="text-center">
          <h6 class="mb-1">09 Nov, 2023</h6>
          <p class="uppercase text-slate-500 dark:text-zink-200">
            Delivery Date
          </p>
        </TCard>

        <TCard class="text-center">
          <h6 class="mb-1">$843.49</h6>
          <p class="uppercase text-slate-500 dark:text-zink-200">
            Order Amount
          </p>
        </TCard>

        <TCard class="text-center">
          <TLabel color="purple" variant="bordered">Shipping</TLabel>
          <p class="uppercase text-slate-500 dark:text-zink-200">
            Order Status
          </p>
        </TCard>
      </div>
      <!--end grid-->
      <TCard title="Order Summary">
        <template #titleAction>
          <a href="#!" class="text-red-500 underline shrink-0">
            Cancelled Order
          </a>
        </template>

        <div class="overflow-x-auto">
          <table class="w-full">
            <tbody>
              <tr v-for="item in orderSummery">
                <td
                  class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0"
                    >
                      <img :src="item.src" alt="" class="h-8" />
                    </div>
                    <div class="grow">
                      <h6 class="mb-1 text-15">
                        <router-link
                          to="/ecommerce/product-overview"
                          class="transition-all duration-300 ease-linear hover:text-custom-500"
                        >
                          {{ item.title }}
                        </router-link>
                      </h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        {{ item.count }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left"
                >
                  {{ item.total }}
                </td>
              </tr>
              <tr>
                <td
                  class="px-3.5 pt-4 pb-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200"
                >
                  Sub Total
                </td>
                <td
                  class="px-3.5 pt-4 pb-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left"
                >
                  $932.16
                </td>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200"
                >
                  Estimated Tax (18%)
                </td>
                <td
                  class="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left"
                >
                  $167.79
                </td>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200"
                >
                  Item Discounts (12%)
                </td>
                <td
                  class="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left"
                >
                  -$111.86
                </td>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200"
                >
                  Shipping Charge
                </td>
                <td
                  class="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left"
                >
                  $0
                </td>
              </tr>
              <tr class="font-semibold">
                <td
                  class="px-3.5 pt-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200"
                >
                  Total Amount (USD)
                </td>
                <td
                  class="px-3.5 pt-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left"
                >
                  $988.09
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </TCard>
      <!--end card-->
      <TCard>
        <div class="flex items-center gap-3 mb-4">
          <h6 class="text-15 grow">Order Status</h6>
          <div class="shrink-0">
            <a
              href="#!"
              class="inline-block text-red-500 underline ltr:mr-2 rtl:ml-2"
            >
              Cancelled Order
            </a>
            <router-link
              to="/invoice/overview"
              class="py-1 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            >
              <Download
                class="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1"
              />
              <span class="align-middle">Invoice</span>
            </router-link>
          </div>
        </div>
        <div>
          <div
            class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 [&.done]:before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-custom-500 [&.done]:after:border-custom-500 done"
          >
            <div class="flex gap-4">
              <div class="grow">
                <h6 class="mb-2 text-gray-800 text-15 dark:text-zink-50">
                  Order Placed
                </h6>
                <p class="text-gray-400 dark:text-zink-200">
                  Your order has been successfully submitted.
                </p>
              </div>
              <p class="text-sm text-gray-400 dark:text-zink-200 shrink-0">
                02 Nov, 2023
              </p>
            </div>
          </div>
          <div
            class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 [&.done]:before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-custom-500 [&.done]:after:border-custom-500 done"
          >
            <div class="flex gap-4">
              <div class="grow">
                <h6 class="mb-2 text-gray-800 text-15 dark:text-zink-50">
                  Order Processing
                </h6>
                <p class="text-gray-400 dark:text-zink-200">
                  Once the order is received, it goes through the processing
                  stage. During this time, the items are gathered, and the order
                  is prepared for shipment.
                </p>
              </div>
              <p class="text-sm text-gray-400 dark:text-zink-200 shrink-0">
                02 Nov, 2023
              </p>
            </div>
          </div>
          <div
            class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 [&.done]:before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-custom-500 [&.done]:after:border-custom-500 done"
          >
            <div class="flex gap-4">
              <div class="grow">
                <h6 class="mb-2 text-gray-800 text-15 dark:text-zink-50">
                  Shipped Order
                </h6>
                <p class="text-gray-400 dark:text-zink-200">
                  The order is shipped out to the customer's designated delivery
                  address.
                </p>
              </div>
              <p class="text-sm text-gray-400 dark:text-zink-200 shrink-0">
                04 Nov, 2023
              </p>
            </div>
          </div>
          <div
            class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 [&.done]:before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-custom-500 [&.done]:after:border-custom-500 done"
          >
            <div class="flex gap-4">
              <div class="grow">
                <h6 class="mb-2 text-gray-800 text-15 dark:text-zink-50">
                  Out for Delivery
                </h6>
                <p class="text-gray-400 dark:text-zink-200">
                  This status indicates that the order is currently out for
                  delivery by the shipping or courier company.
                </p>
              </div>
              <p class="text-sm text-gray-400 dark:text-zink-200 shrink-0">
                06 Nov, 2023
              </p>
            </div>
          </div>
          <div
            class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 [&.done]:before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-custom-500 [&.done]:after:border-custom-500 done"
          >
            <div class="flex gap-4">
              <div class="grow">
                <h6 class="mb-2 text-gray-800 text-15 dark:text-zink-50">
                  Delivered
                </h6>
                <p class="text-gray-400 dark:text-zink-200">
                  Finally, when the order successfully reaches the customer's
                  address and is handed over, the status changes to "Delivered."
                </p>
              </div>
              <p class="text-sm text-gray-400 dark:text-zink-200 shrink-0">
                09 Nov, 2023
              </p>
            </div>
          </div>
        </div>
      </TCard>
    </div>
    <div class="2xl:col-span-3">
      <TCard title="Documents">
        <div class="overflow-x-auto">
          <table class="w-full">
            <tbody>
              <tr>
                <td
                  class="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent"
                >
                  Invoice No.
                </td>
                <td
                  class="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent"
                >
                  <router-link to="/invoice/overview" class="text-custom-500">
                    #TWI154203
                  </router-link>
                </td>
              </tr>
              <tr>
                <td
                  class="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent"
                >
                  Shipping No
                </td>
                <td
                  class="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent"
                >
                  <a href="#!" class="text-custom-500">#TWS987102301</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </TCard>
      <TCard>
        <div class="flex items-center gap-3 mb-4">
          <h6 class="text-15 grow">Logistics Details</h6>
          <a href="#!" class="underline text-custom-500 shrink-0"
            >Track Order</a
          >
        </div>
        <div class="flex gap-4">
          <div class="shrink-0">
            <img
              src="@/assets/images/brand/delivery-1.png"
              alt=""
              class="h-10"
            />
          </div>
          <div class="grow">
            <h6 class="mb-1 text-15">Express Delivery</h6>
            <p class="text-slate-500 dark:text-zink-200">ID: EDTW1400457854</p>
          </div>
        </div>
      </TCard>
    </div>
  </div>
</template>
