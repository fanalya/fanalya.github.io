<script lang="ts" setup>
import { brands } from "@/components/forms/wizard/utils.ts";
import { MoveRight } from "lucide-vue-next";
import { computed, ref } from "vue";

const emit = defineEmits(["onStepChange"]);
const isSubmitted = ref(false);
const form = ref({
  name: { value: "", isValid: false },
  username: { value: "", isValid: false },
  phone: { value: "", isValid: false },
  email: { value: "", isValid: false },
  password: { value: "", isValid: false },
  confirmPassword: { value: "", isValid: false }
});

const isValidForm = computed(() => {
  const { name, username, phone, email, password, confirmPassword } =
    form.value;
  return (
    name.isValid &&
    username.isValid &&
    phone.isValid &&
    email.isValid &&
    password.isValid &&
    confirmPassword.isValid
  );
});
const onNext = () => {
  isSubmitted.value = true;

  if (!isValidForm.value) {
    return;
  }

  emit("onStepChange", "personal");
};
</script>
<template>
  <h5 class="mb-3">Account Info</h5>
  <label class="inline-block mb-3 text-base font-medium">
    Select Business Type <span class="text-red-500">*</span>
  </label>
  <div class="grid grid-cols-1 gap-3 mb-4 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="item in brands" :key="item.id">
      <input
        :id="item.id"
        name="businessType"
        class="hidden size-4 border rounded-full appearance-none peer/business bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 dark:checked:bg-custom-500 checked:border-custom-500 dark:checked:border-custom-500"
        type="radio"
        :value="item.id"
        :checked="item.isChecked"
      />
      <label
        :for="item.id"
        class="block px-3 text-center border rounded-md cursor-pointer border-slate-200 py-7 text-slate-500 dark:border-zink-500 dark:text-zink-200 peer-checked/business:border-custom-500 dark:peer-checked/business:border-custom-500 peer-checked/business:text-custom-500 dark:peer-checked/business:text-custom-500"
      >
        <component
          :is="item.icon"
          class="block size-8 mx-auto mb-3 stroke-1 fill-slate-100 dark:fill-zink-600"
        />
        <span class="block font-medium text-15">{{ item.name }}</span>
      </label>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <TValidationInputField
      v-model="form.name"
      label="Name"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Enter your name"
    />
    <TValidationInputField
      v-model="form.username"
      label="Username"
      required
      :submit="isSubmitted"
      hideDetails
      :rules="['required']"
      placeholder="Enter username"
    />
    <TValidationInputField
      v-model="form.phone"
      label="Phone Number"
      required
      :submit="isSubmitted"
      hideDetails
      type="number"
      :rules="['required']"
      placeholder="Phone Number"
    />
    <TValidationInputField
      v-model="form.email"
      label="Email Address"
      required
      :submit="isSubmitted"
      hideDetails
      :rules="['required', 'email']"
      placeholder="Email Address"
    />
    <TValidationInputField
      v-model="form.password"
      :rules="['required']"
      label="Password"
      required
      :submit="isSubmitted"
      hideDetails
      type="password"
      placeholder="Password"
    />
    <TValidationInputField
      v-model="form.confirmPassword"
      label="Password Confirm"
      required
      :submit="isSubmitted"
      hideDetails
      type="password"
      :rules="['required']"
      placeholder="Password Confirm"
    />
  </div>
  <div class="flex justify-end mt-4">
    <TButton @click="onNext">
      Next <MoveRight class="h-4 ml-1 rtl:rotate-180" />
    </TButton>
  </div>
</template>
