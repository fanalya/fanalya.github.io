<script lang="ts" setup>
import { ref, computed } from "vue";
import { MoveRight, MoveLeft } from "lucide-vue-next";

const emit = defineEmits(["onStepChange"]);

const isSubmitted = ref(false);
const form = ref({
  fname: { value: "", isValid: false },
  lname: { value: "", isValid: false },
  position: { value: "", isValid: false },
  joiningDate: { value: "", isValid: false },
  dob: { value: "", isValid: false },
  phone: { value: "", isValid: false },
  email: { value: "", isValid: false },
  description: ""
});

const isValidForm = computed(() => {
  const { fname, lname, position, joiningDate, dob, phone, email } = form.value;
  return (
    fname.isValid &&
    lname.isValid &&
    position.isValid &&
    joiningDate.isValid &&
    dob.isValid &&
    phone.isValid &&
    email.isValid
  );
});

const onNext = () => {
  isSubmitted.value = true;

  if (!isValidForm.value) {
    return;
  }

  emit("onStepChange", "address");
};

const onPrev = () => {
  emit("onStepChange", "account");
};
</script>
<template>
  <h5 class="mb-3">Personal Info</h5>
  <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
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
      v-model="form.lname"
      label="Last Name"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Last name"
    />
    <TValidationInputField
      v-model="form.position"
      label="Position"
      required
      hideDetails
      :submit="isSubmitted"
      :rules="['required']"
      placeholder="Position"
    />
    <TValidationFlatPicker
      v-model="form.joiningDate"
      :submit="isSubmitted"
      label="Joining Date"
      required
    />
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-4">
    <TValidationFlatPicker
      v-model="form.dob"
      label="Date of Birth"
      :submit="isSubmitted"
      required
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
  </div>
  <TTextarea label="Description" />
  <div class="mt-4 flex justify-between">
    <TButton @click="onPrev" color="light">
      <MoveLeft class="h-4 mr-1 rtl:rotate-180" /> Previous
    </TButton>
    <TButton @click="onNext">
      Next <MoveRight class="h-4 ml-1 rtl:rotate-180" />
    </TButton>
  </div>
</template>
