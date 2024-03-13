<script lang="ts" setup>
import { deliveryOptions } from "@/components/eCommerce/checkout/utils";
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h6 class="mb-4 text-15">Delivery</h6>

      <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div
          v-for="(item, index) in deliveryOptions"
          class="flex items-center gap-3"
        >
          <input
            :id="'deliveryOption' + index"
            class="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400 peer"
            type="radio"
            name="deliveryChoose"
            value="express-delivery"
            :checked="index === 0"
          />
          <label
            :for="'deliveryOption' + index"
            class="flex flex-col gap-4 p-5 border rounded-md cursor-pointer md:flex-row border-slate-200 dark:border-zink-500 peer-checked:border-purple-500 dark:peer-checked:border-purple-700 grow"
          >
            <span class="shrink-0">
              <img :src="item.src" alt="" class="h-12" />
            </span>
            <span class="grow">
              <span class="block mb-1 font-semibold text-15">
                {{ item.name }}
              </span>
              <span class="text-slate-500 dark:text-zink-200">
                Expected delivery: {{ item.expected }}
              </span>
            </span>
            <span class="shrink-0">
              <span class="block text-lg font-semibold">{{ item.price }}</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
