<script lang="ts" setup>
import { Search } from "lucide-vue-next";
import { colors } from "@/app/utils";
import {
  priceFilterData,
  productCategoryData,
  ratingData,
  genderData
} from "@/components/eCommerce/products/gridView/utils";
import { ChevronUp, ChevronDown } from "lucide-vue-next";
</script>
<template>
  <TCard title="Filter">
    <template #titleAction>
      <a
        href="#!"
        class="underline transition-all duration-200 ease-linear hover:text-custom-500"
      >
        Clear All
      </a>
    </template>

    <div class="relative mt-4">
      <TInputField placeholder="Search for ..." inputClass="ltr:pl-8 rtl:pr-8">
        <template #prefix>
          <Search class="size-4" />
        </template>
      </TInputField>
    </div>

    <TCollapse hideCard visible>
      <template #actionBtn="{ onClick, isCollapsed }">
        <div
          @click="onClick"
          class="flex gap-3 justify-between cursor-pointer select-none"
        >
          <h6 class="underline grow">Color</h6>
          <span>
            <ChevronUp v-if="!isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </span>
        </div>
      </template>
      <template #content>
        <div class="flex gap-auto flex-wrap mt-4">
          <TCheckbox
            v-for="item in colors"
            :key="item.value"
            checked
            :color="item.value"
            inputClass="size-5"
          />
        </div>
      </template>
    </TCollapse>

    <TCollapse hideCard class="mt-4" visible>
      <template #actionBtn="{ onClick, isCollapsed }">
        <div
          @click="onClick"
          class="flex gap-3 justify-between cursor-pointer select-none"
        >
          <h6 class="underline grow">Price</h6>
          <span>
            <ChevronUp v-if="!isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </span>
        </div>
      </template>
      <template #content>
        <div class="mt-4 flex flex-col gap-y-2">
          <TCheckbox
            v-for="(item, index) in priceFilterData"
            :key="item"
            :color="item"
            :id="'grid-product-price-' + index"
            variant="outlined"
          >
            {{ item }}
          </TCheckbox>
        </div>
      </template>
    </TCollapse>

    <TCollapse hideCard class="mt-4" visible>
      <template #actionBtn="{ onClick, isCollapsed }">
        <div
          @click="onClick"
          class="flex gap-3 justify-between cursor-pointer select-none"
        >
          <h6 class="underline grow">Product Category</h6>
          <span>
            <ChevronUp v-if="!isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </span>
        </div>
      </template>
      <template #content>
        <div class="mt-4 flex flex-col gap-y-2">
          <TCheckbox
            v-for="(item, index) in productCategoryData"
            :key="item"
            :color="item"
            :id="'grid-product-category-' + index"
            variant="outlined"
          >
            {{ item }}
          </TCheckbox>
        </div>
      </template>
    </TCollapse>

    <TCollapse hideCard class="mt-4" visible>
      <template #actionBtn="{ onClick, isCollapsed }">
        <div
          @click="onClick"
          class="flex gap-3 justify-between cursor-pointer select-none"
        >
          <h6 class="underline grow">Rating</h6>
          <span>
            <ChevronUp v-if="!isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </span>
        </div>
      </template>
      <template #content>
        <div class="mt-4 flex flex-col gap-y-2">
          <TCheckbox
            v-for="(item, index) in ratingData"
            :key="item"
            :color="item"
            :id="'grid-product-rating-' + index"
            variant="outlined"
          >
            {{ item }}
          </TCheckbox>
        </div>
      </template>
    </TCollapse>

    <TCollapse hideCard class="mt-4">
      <template #actionBtn="{ onClick, isCollapsed }">
        <div
          @click="onClick"
          class="flex gap-3 justify-between cursor-pointer select-none"
        >
          <h6 class="underline grow">Gender</h6>
          <span>
            <ChevronUp v-if="!isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </span>
        </div>
      </template>
      <template #content>
        <div class="mt-4 flex flex-col gap-y-2">
          <TCheckbox
            v-for="(item, index) in genderData"
            :key="item"
            :color="item"
            :id="'grid-product-gender-' + index"
            variant="outlined"
          >
            {{ item }}
          </TCheckbox>
        </div>
      </template>
    </TCollapse>
  </TCard>
</template>
