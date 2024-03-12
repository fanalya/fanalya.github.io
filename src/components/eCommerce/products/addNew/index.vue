<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import Choices from "choices.js";
import { Pencil } from "lucide-vue-next";
import {
  colorClasses,
  sizes
} from "@/components/eCommerce/products/addNew/utils.ts";
import PreviewCard from "@/components/eCommerce/products/addNew/PreviewCard.vue";

const category = ref<any>(null);
const productType = ref<any>(null);
const gender = ref<any>(null);
const tax = ref<any>(null);
const status = ref<any>(null);
const visibility = ref<any>(null);
const uniqueText = ref<any>(null);

onMounted(() => {
  const categoryEle: any = document.querySelector("#categorySelect");
  if (categoryEle) {
    category.value = new Choices(categoryEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const productTypeEle: any = document.querySelector("#productTypeSelect");
  if (productTypeEle) {
    productType.value = new Choices(productTypeEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const genderEle: any = document.querySelector("#genderSelect");
  if (genderEle) {
    gender.value = new Choices(genderEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const taxEle: any = document.querySelector("#taxApplicable");
  if (taxEle) {
    tax.value = new Choices(taxEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const statusEle: any = document.querySelector("#productStatus");
  if (statusEle) {
    status.value = new Choices(statusEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const visibilityEle: any = document.querySelector("#productVisibility");
  if (visibilityEle) {
    visibility.value = new Choices(visibilityEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const uniqueTextEle: any = document.querySelector("#productTag");
  if (uniqueTextEle) {
    uniqueText.value = new Choices(uniqueTextEle, {
      uniqueItemText: "",
      allowHTML: true
    });
  }
});

onBeforeUnmount(() => {
  category.value.destroy();
  productType.value.destroy();
  gender.value.destroy();
  tax.value.destroy();
  status.value.destroy();
  visibility.value.destroy();
  uniqueText.value.destroy();
});
</script>
<template>
  <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
    <div class="xl:col-span-9">
      <TCard title="Create Product">
        <form action="#!">
          <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12">
            <div class="xl:col-span-6">
              <TInputField
                label="Product Title"
                placeholder="Product title"
                hideDetails
                tipText="Do not exceed 20 characters when entering the product name."
              />
            </div>
            <div class="xl:col-span-6">
              <TInputField
                label="Product Code"
                placeholder="Product Code"
                tipText="Code will be generated automatically"
                modelValue="TWT145015"
                disabled
                hideDetails
              />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                label="Quantity"
                type="number"
                placeholder="Quantity"
                required
                hideDetails
              />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                label="SKU"
                placeholder="TWT-LP-ALU-08"
                required
                hideDetails
              />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                label="Brand"
                placeholder="Brand"
                required
                hideDetails
              />
            </div>
            <div class="xl:col-span-4">
              <label
                for="categorySelect"
                class="inline-block mb-2 text-base font-medium"
              >
                Category
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="categorySelect"
                id="categorySelect"
              >
                <option value="">Select Category</option>
                <option value="Mobiles, Computers">Mobiles, Computers</option>
                <option value="TV, Appliances, Electronics">
                  TV, Appliances, Electronics
                </option>
                <option value="Men's Fashion">Men's Fashion</option>
                <option value="Women's Fashion">Women's Fashion</option>
                <option value="Home, Kitchen, Pets">Home, Kitchen, Pets</option>
                <option value="Beauty, Health, Grocery">
                  Beauty, Health, Grocery
                </option>
                <option value="Books">Books</option>
              </select>
            </div>
            <div class="xl:col-span-4">
              <label
                for="productTypeSelect"
                class="inline-block mb-2 text-base font-medium"
              >
                Product Type
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="productTypeSelect"
                id="productTypeSelect"
              >
                <option value="">Select Type</option>
                <option value="Single">Single</option>
                <option value="Unit">Unit</option>
                <option value="Boxed">Boxed</option>
              </select>
            </div>
            <div class="xl:col-span-4">
              <label
                for="genderSelect"
                class="inline-block mb-2 text-base font-medium"
              >
                Gender
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="genderSelect"
                id="genderSelect"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
            <div class="xl:col-span-6">
              <label
                for="qualityInput"
                class="inline-block mb-2 text-base font-medium"
                >Colors Variant</label
              >
              <div class="flex flex-wrap items-center gap-2">
                <div v-for="(item, index) in colorClasses">
                  <input
                    id="selectColor1"
                    class="border rounded-sm inline-block size-5 align-middle appearance-none cursor-pointer disabled:opacity-75 disabled:cursor-default"
                    :class="item"
                    type="checkbox"
                    :value="'color' + index"
                    :checked="index === 1"
                    name="selectColor"
                  />
                </div>
                <div>
                  <a
                    href="#!"
                    class="flex items-center justify-center size-5 border rounded-sm border-slate-200 dark:border-zink-500"
                  >
                    <Pencil class="size-3" />
                  </a>
                </div>
              </div>
            </div>
            <div class="xl:col-span-6">
              <div class="inline-block mb-2 text-base font-medium">Size</div>
              <div class="flex flex-wrap items-center gap-2">
                <div v-for="(item, index) in sizes">
                  <input
                    :id="'selectSize' + item"
                    class="hidden peer"
                    type="checkbox"
                    :value="item"
                    :checked="index === 1"
                    name="selectSize"
                  />
                  <label
                    :for="'selectSize' + item"
                    class="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200"
                  >
                    {{ item }}
                  </label>
                </div>
              </div>
            </div>
            <div class="lg:col-span-2 xl:col-span-12">
              <label
                for="genderSelect"
                class="inline-block mb-2 text-base font-medium"
              >
                Product Images
              </label>
              <TFileUploader dashed multiple />
            </div>
            <div class="lg:col-span-2 xl:col-span-12">
              <TTextarea
                placeholder="Enter Description"
                label="Description"
                rows="5"
              />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                placeholder="$0.00"
                label="Price"
                required
                type="number"
              />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                placeholder="0%"
                label="Discounts"
                required
                type="number"
              />
            </div>
            <div class="xl:col-span-4">
              <label
                for="taxApplicable"
                class="inline-block mb-2 text-base font-medium"
              >
                TAX Applicable
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="taxApplicable"
                id="taxApplicable"
              >
                <option value="">Select TAX Applicable</option>
                <option value="none">none</option>
                <option value="Exclusive">Exclusive</option>
                <option value="Professional">Professional</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <div class="xl:col-span-4">
              <label
                for="publishDateTime"
                class="inline-block mb-2 text-base font-medium"
              >
                Publish Date & Time
              </label>

              <TFlatPicker
                :config="{ enableTime: true, dateFormat: 'd M, Y H:i' }"
              />
            </div>
            <div class="xl:col-span-4">
              <label
                for="productStatus"
                class="inline-block mb-2 text-base font-medium"
              >
                Status
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="productStatus"
                id="productStatus"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <div class="xl:col-span-4">
              <label
                for="productVisibility"
                class="inline-block mb-2 text-base font-medium"
                >Visibility</label
              >
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="productVisibility"
                id="productVisibility"
              >
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </div>
            <div class="lg:col-span-2 xl:col-span-12">
              <label
                for="productTag"
                class="inline-block mb-2 text-base font-medium"
                >Product Tag</label
              >
              <input
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                id="productTag"
                type="text"
                value="Fashion, Clothes, Headphones"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4 items-center">
            <TButton type="reset" color="red" variant="link"> Reset </TButton>
            <TButton type="submit"> Create Product </TButton>
            <TButton color="green"> Draft & Preview </TButton>
          </div>
        </form>
      </TCard>
    </div>
    <div class="xl:col-span-3">
      <PreviewCard />
    </div>
  </div>
</template>
