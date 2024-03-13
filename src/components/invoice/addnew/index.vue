<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Eye, Save, RefreshCcw, Download, Trash2, Plus } from "lucide-vue-next";
import Choices from "choices.js";

const items = ref<any>([]);
const preparedData = {
  name: "",
  value: 0,
  price: 0,
  discount: "",
  text: "",
  total: "",
  discountInput: "",
  description: "",
  quantity: 0
};
for (let index = 0; index < 2; index++) {
  items.value.push({ ...preparedData });
}

const addItem = () => {
  items.value.push({ ...preparedData });
};

const deleteItem = (index: number) => {
  items.value.splice(index, 1);
};

const paymentStatus = ref<any>(null);
const paymentMethodVal = ref<any>(null);

onMounted(() => {
  const paymentStatusEle: any = document.querySelector("#paymentStatus");
  if (paymentStatusEle) {
    paymentStatus.value = new Choices(paymentStatusEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const paymentMethodEle: any = document.querySelector("#paymentMethod");
  if (paymentMethodEle) {
    paymentMethodVal.value = new Choices(paymentMethodEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }
});

onBeforeUnmount(() => {
  paymentStatus.value.destroy();
  paymentMethodVal.value.destroy();
});
</script>

<template>
  <div
    class="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative"
  >
    <div class="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">
      <div
        class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto"
      >
        <div class="grid items-center grid-cols-1 gap-5 mb-5 xl:grid-cols-12">
          <div class="xl:col-span-2">
            <h5 class="text-16">New Invoice</h5>
          </div>
          <div class="xl:col-span-3 xl:col-start-10">
            <div class="flex justify-end gap-2">
              <TButton class="!inline-block" variant="ghost" color="light">
                <Eye class="inline-block size-4 mr-1" />
                <span class="align-middle ms-1">Preview</span>
              </TButton>

              <TButton variant="slate" color="purple">Save Draft</TButton>

              <TButton variant="slate">
                <Save class="inline-block size-4 mr-1" /><span
                  class="align-middle ms-1"
                  >Save & Download</span
                >
              </TButton>
            </div>
          </div>
        </div>

        <TCard>
          <form action="#!">
            <h6 class="mb-4 text-gray-800 underline text-16 dark:text-zink-50">
              Generale Info:
            </h6>
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div class="xl:col-span-3">
                <TInputField
                  label="Invoice No."
                  type="text"
                  id="invoiceID"
                  placeholder="#TW15090251"
                  disabled
                  required
                  hide-details
                />
              </div>

              <div class="xl:col-span-3">
                <TFlatPicker
                  label="Invoice Date"
                  placeholder="Invoice Date"
                  hide-details
                />
              </div>

              <div class="xl:col-span-3">
                <TFlatPicker label="Invoice Due" hide-details readonly />
              </div>

              <div class="xl:col-span-3">
                <TInputField
                  label="Legal Registration No."
                  type="number"
                  id="legalRegistrationNo"
                  placeholder="Legal Registration No"
                  hide-details
                />
              </div>

              <div class="xl:col-span-3">
                <TInputField
                  label="Email"
                  type="email"
                  id="emailInvoiceInput"
                  placeholder="tailwick@themesdesign.com"
                  hide-details
                />
              </div>

              <div class="xl:col-span-3">
                <TInputField
                  label="Website"
                  type="text"
                  id="websiteInput"
                  placeholder="www.themesdesign.in"
                  hide-details
                  required
                />
              </div>

              <div class="xl:col-span-3">
                <TInputField
                  label="Contact US"
                  type="number"
                  id="contactInput"
                  placeholder="(241) 1234 567 8900"
                  hide-details
                  required
                />
              </div>

              <div class="xl:col-span-3">
                <label
                  for="paymentStatus"
                  class="inline-block mb-2 text-base font-medium"
                  >Payment Status</label
                >
                <select
                  class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="paymentStatus"
                  id="paymentStatus"
                >
                  <option selected>Select Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Cancel">Cancel</option>
                  <option value="Refund">Refund</option>
                </select>
              </div>
            </div>

            <h6 class="my-5 underline text-16">Shipping Info:</h6>

            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12 changeAddress">
              <div class="xl:col-span-3">
                <TInputField
                  label="Full Name"
                  placeholder="Full Name"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="Phone No."
                  placeholder="(00) 1234 567 8956"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="Alternative No."
                  placeholder="(00) 1234 567 8956"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="TAX No."
                  placeholder="12-34567974"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-12">
                <TTextarea
                  label="Address"
                  placeholder="Address"
                  :rows="3"
                ></TTextarea>
              </div>
            </div>

            <div class="flex items-center mt-5">
              <TSwitch id="customSoftSwitch" variant="soft" />
              <label
                for="customSoftSwitch"
                class="inline-block text-base font-medium"
                >Will your Shipping & Billing address same?</label
              >
            </div>

            <h6 class="my-5 underline text-16">Billing Info:</h6>
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div class="xl:col-span-3">
                <TInputField
                  label="Full Name"
                  placeholder="Full Name"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="Phone No."
                  placeholder="(00) 1234 567 8956"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="Alternative No."
                  placeholder="(00) 1234 567 8956"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="TAX No."
                  placeholder="12-34567974"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-12">
                <TTextarea
                  label="Address"
                  placeholder="Address"
                  id="addressBillingInput"
                  :rows="3"
                >
                </TTextarea>
              </div>
            </div>

            <h6 class="my-5 underline text-16">Products Info:</h6>

            <div class="overflow-x-auto">
              <table class="w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th
                      class="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500"
                    >
                      Item Name
                    </th>
                    <th
                      class="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500"
                    >
                      Quantity
                    </th>
                    <th
                      class="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500"
                    >
                      Price
                    </th>
                    <th
                      class="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500"
                    >
                      Discount
                    </th>
                    <th
                      class="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500"
                    >
                      TAX
                    </th>
                    <th
                      class="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500 w-44"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody
                  v-for="(item, index) in items"
                  :key="index"
                  class="before:block before:h-3 item-list"
                >
                  <tr class="item">
                    <td class="border border-slate-200 dark:border-zink-500">
                      <TInputField
                        v-model="item.name"
                        placeholder="Item Name"
                        required
                        hide-details
                        :border="false"
                      />
                    </td>
                    <td
                      class="w-40 border border-slate-200 dark:border-zink-500"
                    >
                      <div class="flex justify-center text-center input-step">
                        <TNumberInputSpinner
                          group
                          color="custom"
                          v-model="item.quantity"
                          @onAdd="item.quantity++"
                          @onReduce="item.quantity--"
                        />
                      </div>
                    </td>
                    <td
                      class="w-40 border border-slate-200 dark:border-zink-500"
                    >
                      <TInputField
                        :border="false"
                        v-model="item.price"
                        placeholder="$00.00"
                        required
                        hide-details
                      />
                    </td>
                    <td
                      class="w-40 border border-slate-200 dark:border-zink-500"
                    >
                      <TInputField
                        :border="false"
                        v-model="item.discount"
                        placeholder="0%"
                        required
                        hide-details
                      />
                    </td>
                    <td
                      class="w-40 border border-slate-200 dark:border-zink-500"
                    >
                      <TInputField
                        :border="false"
                        v-model="item.text"
                        placeholder="0%"
                        required
                        hide-details
                      />
                    </td>
                    <td
                      class="border border-slate-200 dark:border-zink-500"
                      rowspan="2"
                    >
                      <div>
                        <TInputField
                          :border="false"
                          v-model="item.total"
                          placeholder="$00.00"
                          readonly
                          hide-details
                        />
                      </div>
                      <TInputField
                        :border="false"
                        hide-details
                        v-model="item.discountInput"
                        placeholder="-$00.00"
                        readonly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-200 dark:border-zink-500">
                      <TInputField
                        hide-details
                        :border="false"
                        v-model="item.description"
                        placeholder="Enter Description (Optional)"
                        required
                      />
                    </td>
                    <td
                      class="border border-slate-200 px-3.5 py-1.5 text-center dark:border-zink-500 flex justify-center"
                    >
                      <TButton
                        variant="soft"
                        color="red"
                        classes="px-2 py-1.5 text-xs"
                        @click="deleteItem(index)"
                      >
                        <Trash2
                          class="inline-block size-3 mr-1 align-middle"
                        />
                        Delete
                      </TButton>
                    </td>
                    <td
                      colspan="3"
                      class="border border-slate-200 dark:border-zink-500"
                    ></td>
                  </tr>
                </tbody>

                <tbody class="before:block before:h-4" id="invoiceTable">
                  <tr>
                    <td colspan="6">
                      <a href="javascript:void(0)" id="addBtn">
                        <TButton variant="dashed" @click="addItem">
                          <Plus
                            class="inline-block size-3 mr-1 align-middle"
                          /><span class="align-middle ms-1">Add Item</span>
                        </TButton>
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tbody class="before:block before:h-3" id="totalAmount">
                  <tr>
                    <td colspan="4"></td>
                    <td
                      class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500"
                    >
                      Sub Total
                    </td>
                    <td
                      class="font-medium border-b border-slate-200 dark:border-zink-500"
                    >
                      <input
                        type="text"
                        id="subTotale"
                        class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-subtotal"
                        placeholder="$00.00"
                        readonly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"></td>
                    <td
                      class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500"
                    >
                      Estimated Tax (18%)
                    </td>
                    <td
                      class="font-medium border-b border-slate-200 dark:border-zink-500"
                    >
                      <input
                        type="text"
                        id="estimatedTax"
                        class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-tax"
                        placeholder="$00.00"
                        readonly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"></td>
                    <td
                      class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500"
                    >
                      Item Discounts
                    </td>
                    <td
                      class="font-medium border-b border-slate-200 dark:border-zink-500 text-slate-500"
                    >
                      <input
                        type="text"
                        id="itemDiscounts"
                        class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount"
                        placeholder="-$00.00"
                        readonly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"></td>
                    <td
                      class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500"
                    >
                      Shipping Charge
                    </td>
                    <td
                      class="font-medium border-b border-slate-200 dark:border-zink-500"
                    >
                      <input
                        type="text"
                        id="shippingCharge"
                        class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-shipping"
                        placeholder="$00.00"
                        readonly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4"></td>
                    <td
                      class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500"
                    >
                      Total Amount
                    </td>
                    <td
                      class="font-medium border-b border-slate-200 dark:border-zink-500"
                    >
                      <input
                        type="text"
                        id="totalAmount"
                        class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-total"
                        placeholder="$00.00"
                        readonly
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h6 class="my-5 underline text-16">Payments Details:</h6>
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div class="xl:col-span-3">
                <label
                  for="paymentMethod"
                  class="inline-block mb-2 text-base font-medium"
                  >Full Name</label
                >
                <select
                  class="form-input border-slate-300 focus:outline-none focus:border-custom-500"
                  data-choices
                  data-choices-search-false
                  name="paymentMethod"
                  id="paymentMethod"
                >
                  <option value="">Select Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Paypal">Paypal</option>
                  <option value="Paypal">Paypal</option>
                  <option value="American Express">American Express</option>
                </select>
                <!-- <Multiselect
                  placeholder="Select Method"
                  :options="paymentMethod"
                /> -->
              </div>

              <div class="xl:col-span-3">
                <TInputField
                  label="Card Holder Name"
                  id="cardHolderName"
                  inputmode="numeric"
                  pattern="[0-9\s]{13,19}"
                  autocomplete="cc-number"
                  maxlength="19"
                  placeholder="Full Name"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="Card Number"
                  type="text"
                  id="cardNumber"
                  placeholder="xxxx xxxx xxxx xxxx"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-3">
                <TInputField
                  label="Total Payment"
                  id="totalPayment"
                  placeholder="$00.00"
                  required
                  hide-details
                />
              </div>
              <div class="xl:col-span-12">
                <TTextarea
                  label="Notes"
                  placeholder="Enter notes pertaining to the customer or payment"
                  id="taxBillingInput"
                  :rows="3"
                ></TTextarea>
              </div>
            </div>

            <div class="flex justify-end gap-2 mt-5">
              <TButton variant="ghost" color="light">
                <RefreshCcw class="inline-block size-4 mr-1" />
                <span class="align-middle ms-1">Reset</span>
              </TButton>

              <TButton color="white">
                <Save class="inline-block size-4 mr-1" />
                <span class="align-middle ms-1">Save</span>
              </TButton>

              <TButton color="green">
                <Download class="inline-block size-4 mr-1" /><span
                  class="align-middle ms-1"
                  >Download</span
                >
              </TButton>
            </div>
          </form>
        </TCard>
      </div>
    </div>
  </div>
</template>
