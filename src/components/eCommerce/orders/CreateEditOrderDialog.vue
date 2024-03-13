<script lang="ts" setup>
import { computed } from "vue";
import { X } from "lucide-vue-next";

const emit = defineEmits(["update:modelValue", "handleSubmit"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: Boolean) {
    emit("update:modelValue", newVal);
  }
});
</script>
<template>
  <TModal v-model="showModal">
    <template #content>
      <div
        class="flex items-center justify-between px-4 py-3 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Order</h5>
        <TButton
          class="p-0"
          color="slate"
          variant="link"
          icon
          @click="showModal = false"
        >
          <X class="size-5"></X>
        </TButton>
      </div>
      <simplebar
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form action="#!">
          <div class="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <div class="xl:col-span-12">
              <TInputField
                label="Order ID"
                required
                disabled
                :modelValue="'#TWT5015100365'"
                hide-details
              />
            </div>
            <div class="xl:col-span-6">
              <label
                for="orderDateInput"
                class="inline-block mb-2 text-base font-medium"
              >
                Order Date
              </label>
              <TFlatPicker hide-details />
            </div>
            <div class="xl:col-span-6">
              <label
                for="deliveryDateInput"
                class="inline-block mb-2 text-base font-medium"
                >Delivery Date
              </label>
              <TFlatPicker hide-details />
            </div>
            <div class="xl:col-span-12">
              <TInputField
                label="Customer Name"
                required
                hide-details
                placeholder="Customer name"
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="paymentMethodSelect"
                class="inline-block mb-2 text-base font-medium"
                >Payment Method
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="paymentMethodSelect"
                id="paymentMethodSelect"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Paypal">Paypal</option>
                <option value="Visa Card">Visa Card</option>
                <option value="COD">COD</option>
                <option value="American Express">American Express</option>
              </select>
            </div>
            <div class="xl:col-span-12">
              <TInputField
                label="Amount"
                required
                placeholder="12345 67890"
                hide-details
              />
            </div>
            <div class="xl:col-span-12">
              <label
                for="deliveryStatusSelect"
                class="inline-block mb-2 text-base font-medium"
              >
                Delivery Status
              </label>
              <select
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                data-choices
                data-choices-search-false
                name="deliveryStatusSelect"
                id="deliveryStatusSelect"
              >
                <option value="Delivered">Delivered</option>
                <option value="Shipping">Shipping</option>
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Return">Return</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              type="reset"
              color="red"
              variant="link"
              @click="showModal = false"
            >
              Cancel
            </TButton>
            <TButton type="submit"> Add Order </TButton>
          </div>
        </form>
      </simplebar>
    </template>
  </TModal>
</template>
