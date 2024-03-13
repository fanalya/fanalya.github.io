<script lang="ts" setup>
import {
  BarChartHorizontalBig,
  Store,
  ShoppingCart,
  Percent
} from "lucide-vue-next";
</script>
<template>
  <div class="grid grid-cols-1 gap-x-4 xl:grid-cols-3">
    <TCard title="Circle Timeline">
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Invitation Sent</h6>
        <p class="mb-2 text-slate-400 dark:text-zink-200">No candidate reply</p>
        <p class="text-sm text-slate-400 dark:text-zink-200">02 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Sent to reminder to candidate</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">
          Preview message sent
        </p>
        <p class="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Scheduled</h6>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5"
      >
        <h6 class="mb-4 text-15">Interview Done</h6>
      </div>
    </TCard>
    <TCard title="Square Timeline">
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Invitation Sent</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">No candidate reply</p>
        <p class="text-sm text-slate-500 dark:text-zink-200">02 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Sent to reminder to candidate</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">
          Preview message sent
        </p>
        <p class="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Scheduled</h6>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-custom-500 after:rounded-sm ltr:after:left-0 rtl:after:right-0 after:top-1.5"
      >
        <h6 class="mb-4 text-15">Interview Done</h6>
      </div>
    </TCard>
    <TCard>
      <h6 class="mb-4 text-15">Progress Timeline</h6>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r rtl:before:right-[.22rem] before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4"
      >
        <h6 class="mb-4 text-15">Invitation Sent</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">No candidate reply</p>
        <p class="text-sm text-slate-500 dark:text-zink-200">02 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r rtl:before:right-[.22rem] before:border-custom-500 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4"
      >
        <h6 class="mb-4 text-15">Sent to reminder to candidate</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">
          Preview message sent
        </p>
        <p class="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-custom-500 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Scheduled</h6>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 dark:after:bg-zink-700 dark:after:border-zink-500"
      >
        <h6 class="mb-4 text-15">Interview Done</h6>
      </div>
    </TCard>
    <TCard title="Outline Timeline">
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:after:bg-zink-700 dark:after:border-zink-500 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Invitation Sent</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">No candidate reply</p>
        <p class="text-sm text-slate-500 dark:text-zink-200">02 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:after:bg-zink-700 dark:after:border-zink-500 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Sent to reminder to candidate</h6>
        <p class="mb-2 text-slate-500 dark:text-zink-200">
          Preview message sent
        </p>
        <p class="text-sm text-slate-500 dark:text-zink-200">15 Aug, 2023</p>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l ltr:before:left-[.22rem] rtl:before:border-r before:border-slate-200 rtl:before:right-[.22rem] before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 dark:after:bg-zink-700 dark:after:border-zink-500 dark:before:border-zink-500"
      >
        <h6 class="mb-4 text-15">Scheduled</h6>
      </div>
      <div
        class="relative ltr:pl-6 rtl:pr-6 after:absolute after:size-2 after:bg-white after:border-slate-200 after:border after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 dark:after:bg-zink-700 dark:after:border-zink-500"
      >
        <h6 class="mb-4 text-15">Interview Done</h6>
      </div>
    </TCard>
  </div>
  <h5 class="mb-5 underline">Timeline With Avatar</h5>

  <div class="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
    <TCard title="Timeline with Avatar">
      <div
        class="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500"
      >
        <div class="relative flex gap-2">
          <img
            src="@/assets/images/users/avatar-1.png"
            alt=""
            class="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          />
          <div>
            <h6 class="mb-1">Purchased by James Price</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              Product noise evolve smartwatch
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              05:57 AM Today
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500"
      >
        <div class="relative flex gap-2">
          <img
            src="@/assets/images/users/avatar-2.png"
            alt=""
            class="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          />
          <div>
            <h6 class="mb-1">Natasha Carey have liked the products</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              Allow users to like products in your WooCommerce store.
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              25 Dec, 2023
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500"
      >
        <div class="relative flex gap-2">
          <img
            src="@/assets/images/users/avatar-3.png"
            alt=""
            class="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          />
          <div>
            <h6 class="mb-1">Today offers by Digitech Galaxy</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              Offer is valid on orders of $230 Or above for selected products
              only.
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              12 Dec, 2023
            </p>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="relative flex gap-2">
          <img
            src="@/assets/images/users/avatar-3.png"
            alt=""
            class="size-8 p-0.5 bg-white border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          />
          <div>
            <h6 class="mb-1">New ticket received</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              User
              <a href="#!" class="text-custom-500">Erica245</a> submitted a
              ticket
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              26 Dec, 2023
            </p>
          </div>
        </div>
      </div>
    </TCard>
    <TCard title="Timeline with Icon">
      <div
        class="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500"
      >
        <div class="relative flex gap-2">
          <div
            class="size-8 p-0.5 bg-white text-custom-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          >
            <BarChartHorizontalBig class="size-4" />
          </div>
          <div>
            <h6 class="mb-1">Purchased by James Price</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              Product noise evolve smartwatch
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              05:57 AM Today
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500"
      >
        <div class="relative flex gap-2">
          <div
            class="size-8 p-0.5 bg-white text-red-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          >
            <Store class="size-4" />
          </div>
          <div>
            <h6 class="mb-1">Natasha Carey have liked the products</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              Allow users to like products in your WooCommerce store.
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              25 Dec, 2023
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative before:absolute ltr:before:border-l-2 rtl:before:border-r-2 ltr:before:left-3.5 rtl:before:right-3.5 before:top-1.5 before:-bottom-1.5 pb-4 dark:before:border-zink-500"
      >
        <div class="relative flex gap-2">
          <div
            class="size-8 p-0.5 bg-white text-green-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          >
            <ShoppingCart class="size-4" />
          </div>
          <div>
            <h6 class="mb-1">Today offers by Digitech Galaxy</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              Offer is valid on orders of $230 Or above for selected products
              only.
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              12 Dec, 2023
            </p>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="relative flex gap-2">
          <div
            class="size-8 p-0.5 bg-white text-purple-500 flex items-center justify-center border rounded-full shrink-0 border-slate-200 dark:border-zink-500 dark:bg-zink-700"
          >
            <Percent class="size-4" />
          </div>
          <div>
            <h6 class="mb-1">New ticket received</h6>
            <p class="mb-2 text-slate-500 dark:text-zink-200">
              User
              <a href="#!" class="text-custom-500">Erica245</a> submitted a
              ticket
            </p>
            <p class="text-sm text-slate-500 dark:text-zink-200">
              26 Dec, 2023
            </p>
          </div>
        </div>
      </div>
    </TCard>
  </div>
</template>
