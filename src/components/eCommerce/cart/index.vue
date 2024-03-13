<script lang="ts" setup>
import { Trash2, Truck, Container } from "lucide-vue-next";
import { ref } from "vue";
import { cartData } from "@/components/eCommerce/cart/utils.ts";
import DeleteDialog from "@/app/common/DeleteDialog.vue";

const data = ref(cartData);
const deleteDialog = ref(false);
const deleteId = ref(null);
const getSubTotal = (): any => {
  let count = 0;
  data.value.forEach((item) => {
    count += item.quantity * item.price;
  });
  return count.toFixed(2);
};

const getEstimateTaxTotal = () => {
  return ((getSubTotal() * 18) / 100).toFixed(2);
};

const getFinalTotal = () => {
  const subTotal = getSubTotal();
  if (subTotal > 0) {
    let count: number =
      Number(getSubTotal()) - 111.86 + Number(getEstimateTaxTotal());
    return count.toFixed(2);
  }
  return 0;
};

const onDelete = (id: any) => {
  deleteId.value = id;
  deleteDialog.value = true;
};

const handleSubmit = () => {
  data.value = data.value.filter((item) => item.id !== deleteId.value);
  (deleteDialog.value = false), (deleteId.value = null);
};
</script>
<template>
  <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
    <div class="xl:col-span-9 products-list">
      <div class="flex items-center gap-3 mb-5">
        <h5 class="underline text-16 grow">
          Shopping Cart ({{ data.length }})
        </h5>
        <div v-if="data.length">
          <a
            href="#!"
            class="text-red-500 transition-all duration-300 ease-linear hover:text-red-600"
          >
            <Trash2 class="inline-block size-4 mr-1 align-middle" />
            <span class="align-middle">Delete All</span>
          </a>
        </div>
      </div>
      <div
        v-for="(item, index) in data"
        class="card products"
        :id="'product' + index"
      >
        <div class="card-body">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div
              class="p-4 rounded-md lg:col-span-2 bg-slate-100 dark:bg-zink-600"
            >
              <img :src="item.src" alt="" />
            </div>
            <div class="flex flex-col lg:col-span-4">
              <div>
                <h5 class="mb-1 text-16">
                  <router-link to="/ecommerce/product-overview">
                    {{ item.name }}
                  </router-link>
                </h5>
                <p class="mb-2 text-slate-500 dark:text-zink-200">
                  <a href="#!">{{ item.detail }}</a>
                </p>
                <p class="mb-1 text-slate-500 dark:text-zink-200">
                  Color:
                  <span class="text-slate-800 dark:text-zink-50">
                    {{ item.color }}
                  </span>
                </p>
                <p class="mb-3 text-slate-500 dark:text-zink-200">
                  Size:
                  <span class="text-slate-800 dark:text-zink-50">
                    {{ item.size }}
                  </span>
                </p>
              </div>
              <div class="flex items-center gap-2 mt-auto">
                <TNumberInputSpinner
                  v-model="item.quantity"
                  @onAdd="item.quantity++"
                  @onReduce="item.quantity--"
                />

                <TButton
                  color="red"
                  variant="soft"
                  icon
                  class="p-0"
                  @click="onDelete(item.id)"
                >
                  <Trash2 class="size-4" />
                </TButton>
              </div>
            </div>
            <div
              class="flex justify-between w-full lg:flex-col lg:col-end-13 lg:col-span-2"
            >
              <div class="mb-auto ltr:lg:text-right rtl:lg:text-left">
                <h6 class="text-16 products-price">
                  $<span>{{ item.price }}</span>
                  <small
                    v-if="item.mainPrice"
                    class="font-normal line-through text-slate-500 dark:text-zink-200"
                  >
                    ${{ item.mainPrice }}
                  </small>
                </h6>
              </div>
              <h6 class="mt-auto text-16 ltr:lg:text-right rtl:lg:text-left">
                $<span class="products-line-price">
                  {{ (item.price * item.quantity).toFixed(2) }}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:col-span-3">
      <div class="sticky top-[calc(theme('spacing.header')_*_1.3)] mb-5">
        <TCard title="Order Summary">
          <div class="overflow-x-auto">
            <table class="w-full">
              <tbody class="table-total">
                <tr>
                  <td class="py-2 text-slate-500 dark:text-zink-200">
                    Sub Total
                  </td>
                  <td
                    class="py-2 text-slate-500 dark:text-zink-200 cart-subtotal"
                  >
                    ${{ getSubTotal() }}
                  </td>
                </tr>
                <tr>
                  <td class="py-2 text-slate-500 dark:text-zink-200">
                    Estimated Tax (18%)
                  </td>
                  <td class="py-2 text-slate-500 dark:text-zink-200 cart-tax">
                    ${{ getEstimateTaxTotal() }}
                  </td>
                </tr>
                <tr>
                  <td class="py-2 text-slate-500 dark:text-zink-200">
                    Item Discounts (12%)
                  </td>
                  <td
                    class="py-2 text-slate-500 dark:text-zink-200 cart-discount"
                  >
                    -$111.86
                  </td>
                </tr>
                <tr>
                  <td class="py-2 text-slate-500 dark:text-zink-200">
                    Shipping Charge
                  </td>
                  <td
                    class="py-2 text-slate-500 dark:text-zink-200 cart-shipping"
                  >
                    $0
                  </td>
                </tr>
                <tr class="font-semibold">
                  <td class="pt-2">Total Amount (USD)</td>
                  <td class="pt-2 cart-total">${{ getFinalTotal() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TCard>
        <div class="flex gap-2 mt-5 shrink-0">
          <router-link
            to="/ecommerce/product-list"
            class="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20"
          >
            Continue to Shopping
          </router-link>
          <router-link
            to="/ecommerce/checkout"
            class="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          >
            Checkout
          </router-link>
        </div>

        <div class="flex items-center gap-5 p-4 mt-5 card">
          <div
            class="flex items-center justify-center size-12 rounded-md bg-slate-100 dark:bg-zink-600"
          >
            <Truck
              class="size-6 text-slate-500 fill-slate-300 dark:text-zink-200 dark:fill-zink-500"
            />
          </div>
          <div>
            <h6 class="mb-1">Estimated Delivery</h6>
            <p class="text-slate-500">01 - 07 Dec, 2023</p>
          </div>
        </div>
        <div class="flex items-center gap-5 p-4 card">
          <div
            class="flex items-center justify-center size-12 rounded-md bg-slate-100 dark:bg-zink-600"
          >
            <Container
              class="size-6 text-slate-500 fill-slate-300 dark:text-zink-200 dark:fill-zink-500"
            />
          </div>
          <div>
            <h6 class="mb-1">Free Shipping & Returns</h6>
            <p class="text-slate-500 dark:text-zink-200">
              On all orders over $200.00
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteDialog
    v-if="deleteId"
    v-model="deleteDialog"
    @handleSubmit="handleSubmit"
  />
</template>
