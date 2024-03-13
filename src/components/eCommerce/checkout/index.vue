<script lang="ts" setup>
import { ShoppingBag, ChevronLeft, MoveRight } from "lucide-vue-next";
import ShippingInfo from "@/components/eCommerce/checkout/ShippingInfo.vue";
import Delivery from "@/components/eCommerce/checkout/Delivery.vue";
import PaymentInfo from "@/components/eCommerce/checkout/PaymentInfo.vue";
import OrderSummary from "@/components/eCommerce/checkout/OrderSummary.vue";
</script>
<template>
  <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
    <div class="xl:col-span-12">
      <div
        class="flex gap-1 px-4 py-3 mb-5 text-sm text-green-500 border border-green-200 rounded-md md:items-center bg-green-50 dark:bg-green-400/20 dark:border-green-500/50"
      >
        <ShoppingBag class="h-4 shrink-0" />
        <p>
          The minimum order requirement is <b>$1,800</b>. To meet this
          threshold, please add additional products with a combined value of
          <b>$300</b>.
        </p>
      </div>
    </div>
    <div class="xl:col-span-8">
      <div class="flex items-center gap-3 mb-5">
        <div class="grow">
          <a
            href="#!"
            class="transition-all duration-300 ease-linear text-custom-500 hover:text-custom-600"
          >
            <ChevronLeft
              class="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1 rtl:rotate-180"
            />
            <span class="align-middle">Back to Cart</span>
          </a>
        </div>
        <div class="shrink-0">
          <TButton>
            <span class="align-middle">Place Order</span>
            <MoveRight
              class="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"
            />
          </TButton>
        </div>
      </div>
      <ShippingInfo />
      <Delivery />
      <PaymentInfo />
    </div>
    <div class="xl:col-span-4">
      <OrderSummary />
      <h6 class="mb-4 underline text-16">Additional Service</h6>
      <div class="card">
        <div class="flex flex-col gap-3 md:items-center card-body md:flex-row">
          <div class="grow">
            <h6 class="mb-1 text-15">Care + Package</h6>
            <p class="text-slate-500 dark:text-zink-200">
              2 year of additional care
            </p>
          </div>
          <div class="shrink-0">
            <b>$24.99</b>
          </div>
          <div class="shrink-0">
            <TSwitch id="carePackage" variant="soft" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="flex flex-col gap-3 md:items-center card-body md:flex-row">
          <div class="grow">
            <h6 class="mb-1 text-15">Environment Friendly</h6>
            <p class="text-slate-500 dark:text-zink-200">
              The primary goal of eco-warriors is creating
            </p>
          </div>
          <div class="shrink-0">
            <b>$19.99</b>
          </div>
          <div class="shrink-0">
            <TSwitch id="friendlyCheckbox" variant="soft" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
