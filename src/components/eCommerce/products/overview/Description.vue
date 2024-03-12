<script lang="ts" setup>
import { MoreHorizontal, Tag } from "lucide-vue-next";
import { ref } from "vue";
import {
  cardAction,
  colorsClass,
  offers,
  eminities,
  featureTable
} from "@/components/eCommerce/products/overview/utils.ts";
import ReviewAndRating from "@/components/eCommerce/products/overview/ReviewAndRating.vue";
import DeleteDialog from "@/app/common/DeleteDialog.vue";
import CreateEditDialog from "@/components/eCommerce/products/overview/CreateEditDialog.vue";
import { useRouter } from "vue-router";
const createEditDialog = ref(false);
const deleteDialog = ref(false);
const emit = defineEmits(["onDelete"]);
const router = useRouter();

const onSelect = (data: any) => {
  if (data.title == "Edit") {
    router.push("/ecommerce/product-create");
  } else if (data.title === "Delete") {
    emit("onDelete");
  }
}
</script>
<template>
  <TCard class="card">
    <div class="relative ltr:float-right rtl:float-left dropdown">
      <TList :items="cardAction" @onSelect="onSelect">
        <template #title>
          <TButton icon class="p-0 !w-[30px] !h-[30px]" color="slate" variant="soft">
            <MoreHorizontal class="size-3" />
          </TButton>
        </template>
        <template #default="{ data }">
          <span class="flex gap-1 items-center">
            <component :is="data.icon" class="inline-block size-3 ltr:mr-1 rtl:ml-1" />
            <span class="align-middle">{{ data.title }}</span>
          </span>
        </template>
      </TList>
    </div>
    <TLabel color="sky"> New Arrivals </TLabel>

    <h5 class="mt-3 mb-1">Smartees Printed Men Round Neck Pink</h5>
    <ul class="flex flex-wrap items-center gap-4 mb-5 text-slate-500 dark:text-zink-200">
      <li>
        <a href="#!" class="font-medium underline text-custom-500">Rossie Fadel</a>
      </li>
      <li>Seller: <a href="#!" class="font-medium">Themesdesign</a></li>
      <li>Published: <span class="font-medium">20 Oct, 2023</span></li>
    </ul>

    <div class="flex flex-wrap items-center gap-3 mb-4">
      <div class="flex items-center gap-2 text-yellow-500">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>

        <div class="text-slate-800 dark:text-zink-50 shrink-0">
          <h6>(4.8)</h6>
        </div>
      </div>
      <div class="shrink-0">
        <h6>973 Reviews</h6>
      </div>
      <div class="shrink-0">
        <h6>1,231 Sold</h6>
      </div>
    </div>

    <div class="mb-4">
      <p class="mb-1 text-green-500">Special Price</p>
      <h4>
        $487.32
        <small class="font-normal line-through align-middle text-slate-500 dark:text-zink-200">
          $599.99
        </small>
        <small class="text-green-500 align-middle ltr:ml-1 rtl:mr-1">20% Off</small>
      </h4>
    </div>

    <h6 class="mb-3 text-15">Select Color</h6>
    <div class="flex flex-wrap items-center gap-2">
      <input v-for="(item, index) in colorsClass" :id="'color' + index"
        class="size-5 border rounded-sm appearance-none cursor-pointer disabled:opacity-75 disabled:cursor-default"
        :class="item.class" type="radio" name="SelectColor" value="" :disabled="item.disabled" />
    </div>
    <h6 class="mt-5 mb-3 text-15">Select Size</h6>
    <div class="flex flex-wrap items-center gap-2">
      <div>
        <input id="selectSizeXS" class="hidden peer" type="radio" value="XS" name="selectSize" />
        <label for="selectSizeXS"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">XS</label>
      </div>
      <div>
        <input id="selectSizeS" class="hidden peer" type="radio" value="S" name="selectSize" checked />
        <label for="selectSizeS"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">S</label>
      </div>
      <div>
        <input id="selectSizeM" class="hidden peer" type="radio" value="M" name="selectSize" disabled />
        <label for="selectSizeM"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">M</label>
      </div>
      <div>
        <input id="selectSizeL" class="hidden peer" type="radio" value="L" name="selectSize" />
        <label for="selectSizeL"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">L</label>
      </div>
      <div>
        <input id="selectSizeXL" class="hidden peer" type="radio" value="XL" name="selectSize" />
        <label for="selectSizeXL"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">XL</label>
      </div>
      <div>
        <input id="selectSize2XL" class="hidden peer" type="radio" value="2XL" name="selectSize" />
        <label for="selectSize2XL"
          class="flex items-center justify-center size-8 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/20 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">2XL</label>
      </div>
    </div>

    <h6 class="mt-5 mb-3 text-15">Available Offers (4)</h6>
    <ul class="flex flex-col gap-2">
      <li v-for="item in offers">
        <Tag class="inline-block size-4 text-green-500 ltr:mr-2 rtl:ml-2 fill-green-200 dark:fill-green-500/20" />
        <span v-html="item"></span>
        <a href="#!" class="underline text-custom-500 ltr:ml-1 rtl:mr-1">T&C</a>
      </li>
    </ul>

    <div class="grid grid-cols-1 gap-5 my-5 xl:grid-cols-3">
      <div v-for="item in eminities"
        class="flex items-center gap-5 p-4 border rounded-md border-slate-200 dark:border-zink-500">
        <div class="flex items-center justify-center">
          <component :is="item.icon"
            class="size-6 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
        </div>
        <div>
          <h6 class="mb-1">{{ item.title }}</h6>
          <p class="text-slate-500 dark:text-zink-200">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h6 class="mb-3 text-15">Product Description:</h6>
      <p class="mb-2 text-slate-500 dark:text-zink-200">
        Latest <b>Trends</b> in Fashion Clothing. Currently, the latest clothing
        trends for women on FabAlley include playful check print, breezy floral
        motif, bold red hue, cool denim fabric, quirky polka dot and romantic
        ruffles.
      </p>
      <p class="text-slate-500 dark:text-zink-200">
        <b>Avoid shapeless and baggy clothing</b>. Stay away from pieces with
        extra fabric at the hips or bust to keep your look proportionate. Avoid
        wearing ruffles or pleats around your waist or hips. Be sure to wear
        supportive undergarments that fit you well!
      </p>
    </div>

    <div class="mt-5">
      <h6 class="mb-3 text-15">Features:</h6>
      <div class="overflow-x-auto">
        <table class="w-full">
          <tbody>
            <tr v-for="item in featureTable">
              <th
                class="px-3.5 py-2.5 font-semibold border-b border-transparent w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">
                {{ item.title }}
              </th>
              <td class="px-3.5 py-2.5 border-b border-transparent">
                {{ item.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ReviewAndRating @onCreateEdit="createEditDialog = true" @onDelete="deleteDialog = true" />
  </TCard>
  <DeleteDialog v-model="deleteDialog" />
  <CreateEditDialog v-model="createEditDialog" />
</template>
