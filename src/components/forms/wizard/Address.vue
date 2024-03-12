<script lang="ts" setup>
import { ref, computed } from "vue";
import { MoveRight, MoveLeft } from "lucide-vue-next";

const emit = defineEmits(["onStepChange"]);

const isSubmitted = ref(false);
const form = ref({
  fname: { value: "", isValid: false },
  mname: { value: "", isValid: false },
  lname: { value: "", isValid: false },
  phone: { value: "", isValid: false },
  email: { value: "", isValid: false },
  add1: { value: "", isValid: false },
  add2: { value: "", isValid: false },
  city: { value: "", isValid: false },
  state: { value: "", isValid: false },
  country: { value: "", isValid: false },
  zip: { value: "", isValid: false },
  vat: { value: "", isValid: false },
  prefix: { value: "", isValid: false }
});

const isValidForm = computed(() => {
  const {
    fname,
    mname,
    lname,
    phone,
    email,
    add1,
    add2,
    city,
    state,
    country,
    zip,
    vat,
    prefix
  } = form.value;
  return (
    fname.isValid &&
    mname.isValid &&
    lname.isValid &&
    phone.isValid &&
    email.isValid &&
    add1.isValid &&
    add2.isValid &&
    city.isValid &&
    state.isValid &&
    country.isValid &&
    zip.isValid &&
    vat.isValid &&
    prefix.isValid
  );
});

const onNext = () => {
  isSubmitted.value = true;

  if (!isValidForm.value) {
    return;
  }

  emit("onStepChange", "completed");
};

const onPrev = () => {
  emit("onStepChange", "personal");
};
</script>
<template>
  <h5 class="mb-3">Address</h5>
  <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
    <TValidationInputField
      v-model="form.fname"
      label="First Name"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="First name"
    />
    <TValidationInputField
      v-model="form.mname"
      label="Middle Name"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Middle name"
    />
    <TValidationInputField
      v-model="form.lname"
      label="Last Name"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Last name"
    />
  </div>
  <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
    <TValidationInputField
      v-model="form.phone"
      label="Phone Number"
      required
      type="number"
      hideDetails
      :submit="isSubmitted"
      :rules="['required', 'integer']"
      placeholder="Phone Number"
    />
    <TValidationInputField
      v-model="form.email"
      label="Email Address"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required', 'email']"
      placeholder="Email Address"
    />
    <TValidationInputField
      v-model="form.add1"
      label="Address Line 1"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Address Line 1"
    />
    <TValidationInputField
      v-model="form.add2"
      label="Address Line 2"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Address Line 2"
    />
  </div>
  <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
    <TValidationInputField
      v-model="form.city"
      label="City"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="City"
    />
    <TValidationInputField
      v-model="form.state"
      label="State"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="State"
    />
    <TValidationInputField
      v-model="form.country"
      label="Country"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Country"
    />
    <TValidationInputField
      v-model="form.zip"
      label="Zip Code"
      required
      hideDetails
      type="number"
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="000000"
    />
    <TValidationInputField
      v-model="form.vat"
      label="VAT Number"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="VAT Number"
    />
    <TValidationInputField
      v-model="form.prefix"
      label="Prefix"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Prefix"
    />
  </div>

  <div class="mt-4 flex justify-between">
    <TButton @click="onPrev" color="light">
      <MoveLeft class="h-4 mr-1 rtl:rotate-180" /> Previous
    </TButton>
    <TButton @click="onNext">
      Next <MoveRight class="h-4 ml-1 rtl:rotate-180" />
    </TButton>
  </div>
</template>
