<script lang="ts" setup>
import { MoveRight } from "lucide-vue-next";
</script>
<template>
  <TCard title="Orders Summary">
    <div
      class="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20"
    >
      These products are limited, checkout within
      <span class="font-bold">03m 21s</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full">
        <tbody>
          <tr>
            <td
              class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0"
                >
                  <img
                    src="@/assets/images/product/img-08.png"
                    alt=""
                    class="h-8"
                  />
                </div>
                <div class="grow">
                  <h6 class="mb-1 text-15">
                    <router-link
                      to="/ecommerce/product-overview"
                      class="transition-all duration-300 ease-linear hover:text-custom-500"
                    >
                      Roar Twill Blue Baseball Cap
                    </router-link>
                  </h6>
                  <p class="text-slate-500 dark:text-zink-200">$149.99 x 02</p>
                </div>
              </div>
            </td>
            <td
              class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left"
            >
              $299.98
            </td>
          </tr>
          <tr>
            <td
              class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0"
                >
                  <img
                    src="@/assets/images/product/img-04.png"
                    alt=""
                    class="h-8"
                  />
                </div>
                <div class="grow">
                  <h6 class="mb-1 text-15">
                    <router-link
                      to="/ecommerce/product-overview"
                      class="transition-all duration-300 ease-linear hover:text-custom-500"
                    >
                      Mesh Ergonomic Green Chair
                    </router-link>
                  </h6>
                  <p class="text-slate-500 dark:text-zink-200">$362.21 x 1</p>
                </div>
              </div>
            </td>
            <td
              class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left"
            >
              $362.21
            </td>
          </tr>
          <tr>
            <td
              class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0"
                >
                  <img
                    src="@/assets/images/product/img-01.png"
                    alt=""
                    class="h-8"
                  />
                </div>
                <div class="grow">
                  <h6 class="mb-1 text-15">
                    <router-link
                      to="/ecommerce/product-overview"
                      class="transition-all duration-300 ease-linear hover:text-custom-500"
                      >Smartest Printed T-shirt</router-link
                    >
                  </h6>
                  <p class="text-slate-500 dark:text-zink-200">$89.99 x 03</p>
                </div>
              </div>
            </td>
            <td
              class="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left"
            >
              $269.97
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
    <div class="mt-4">
      <TButton class="w-full">
        <span class="align-middle">Place Order</span>
        <MoveRight
          class="inline-block size-4 align-middle ltr:ml-2 rtl:mr-2 rtl:rotate-180"
        />
      </TButton>
    </div>
  </TCard>
</template>
