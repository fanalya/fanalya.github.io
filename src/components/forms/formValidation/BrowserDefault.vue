<script lang="ts" setup>
import { ref } from "vue";
import { X } from "lucide-vue-next";
const form = ref({
  fname: "Sophia",
  lname: "Bethany",
  username: "",
  city: "",
  state: "",
  zip: ""
});
</script>
<template>
  <TCard title="Browser Default">
    <form>
      <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
        <TInputField
          v-model="form.fname"
          label="First Name"
          required
          placeholder="Enter First Name"
        />
        <TInputField
          v-model="form.lname"
          label="Last Name"
          required
          placeholder="Enter Last Name"
        />
        <TInputField
          v-model="form.username"
          label="Username"
          required
          placeholder="Username"
        />
        <TInputField
          v-model="form.city"
          label="City"
          required
          placeholder="Enter City"
        />
        <div class="mb-4">
          <label class="inline-block mb-2 text-base font-medium"> State </label>
          <span class="text-red-500">*</span>
          <select
            v-model="form.state"
            class="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
            id="stateInput"
            required
          >
            <option selected disabled value="">Choose...</option>
            <option>Name</option>
          </select>
        </div>
        <TInputField
          v-model="form.zip"
          label="Zip"
          required
          placeholder="Enter Zip code"
        />
      </div>
      <div class="flex justify-end gap-2">
        <TButton color="red" variant="ghost">
          <X :size="15" class="ltr:mr-2 rtl:ml-2" /> Cancel
        </TButton>
        <TButton type="submit"> Submit </TButton>
      </div>
    </form>
  </TCard>
</template>
