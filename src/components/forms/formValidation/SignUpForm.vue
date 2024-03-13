<script lang="ts" setup>
import { ref } from "vue";
import { X } from "lucide-vue-next";
const form = ref({
  fname: "",
  lname: "",
  email: "",
  phone: "",
  isAgree: false
});
const isSubmitted = ref(false);
</script>
<template>
  <TCard title="Sign Up Form">
    <div class="mx-auto md:max-w-lg">
      <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <TValidationInputField
          v-model="form.fname"
          label="First Name"
          required
          :rules="['required']"
          :submit="isSubmitted"
          placeholder="Enter First Name"
        />
        <TValidationInputField
          v-model="form.lname"
          label="Last Name"
          required
          :rules="['required']"
          :submit="isSubmitted"
          placeholder="Enter Last Name"
        />
      </div>
      <TValidationInputField
        v-model="form.email"
        label="Email Address"
        required
        :rules="['required', 'email']"
        :submit="isSubmitted"
        placeholder="example@gmail.com"
      />
      <TValidationInputField
        v-model="form.phone"
        type="number"
        label="Phone Number"
        required
        :rules="['required', 'integer']"
        :submit="isSubmitted"
        placeholder="+(254) 0123 456 789"
      />
      <div class="mb-4">
        <input
          id="termsCondition"
          class="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
          type="checkbox"
        />
        <label for="termsCondition" class="text-sm align-top text-slate-400">
          By registering you agree to the Tailwick
          <a href="#!" class="underline text-custom-500"> Terms of Use </a>
        </label>
      </div>
      <div class="flex justify-end gap-2 mt-5">
        <TButton color="red" variant="ghost">
          <X :size="15" class="ltr:mr-2 rtl:ml-2" /> Cancel
        </TButton>
        <TButton type="submit" @click="isSubmitted = true"> Submit </TButton>
      </div>
    </div>
  </TCard>
</template>
