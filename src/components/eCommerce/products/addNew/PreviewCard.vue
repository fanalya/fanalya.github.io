<script lang="ts" setup>
import {
  previewSizes,
  previewColors
} from "@/components/eCommerce/products/addNew/utils.ts";
</script>
<template>
  <TCard
    title="Product Card Preview"
    class="sticky top-[calc(theme('spacing.header')_*_1.3)]"
  >
    <div class="px-5 py-8 rounded-md bg-sky-50 dark:bg-zink-600">
      <img
        src="@/assets/images/product/img-03.png"
        alt=""
        class="block mx-auto h-44"
      />
    </div>

    <div class="mt-3">
      <h5 class="mb-2">
        $145.99 <small class="font-normal line-through">299.99</small>
      </h5>
      <h6 class="mb-1 text-15">Fastcolors Typography Men</h6>
      <p class="text-slate-500 dark:text-zink-200">Men's Fashion</p>
    </div>
    <h6 class="mt-3 mb-2 text-15">Colors</h6>
    <div class="flex flex-wrap items-center gap-2">
      <div v-for="(item, index) in previewColors">
        <input
          :id="'selectColorPre' + index"
          class="inline-block border appearance-none cursor-pointer rounded-full size-5 align-middle disabled:opacity-75 disabled:cursor-default"
          :class="item"
          type="checkbox"
          :value="'color' + index"
          :checked="index === 1"
          name="selectColorPre"
        />
      </div>
    </div>

    <h6 class="mt-3 mb-2 text-15">Sizes</h6>
    <div class="flex flex-wrap items-center gap-2">
      <div v-for="item in previewSizes">
        <input
          :id="'previewSize' + item"
          class="hidden peer"
          type="checkbox"
          :value="item"
          name="previewSize"
        />
        <label
          :for="'previewSize' + item"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200"
        >
          {{ item }}
        </label>
      </div>
    </div>
    <div class="flex gap-2 mt-4">
      <TButton class="w-full" variant="dashed"> Create Products </TButton>
      <TButton color="purple" class="w-full" classes="!h-auto"> Draft </TButton>
    </div>
  </TCard>
</template>
