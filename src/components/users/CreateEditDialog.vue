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

const selectItems = [
  { title: "Select Status" },
  { value: "Verified", title: "Verified" },
  { value: "Waiting", title: "Waiting" },
  { value: "Rejected", title: "Rejected" }
];
</script>
<template>
  <TModal v-model="showModal">
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b dark:border-zink-300/20"
      >
        <h5 class="text-16">Add User</h5>
        <button
          class="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
          @click="showModal = false"
        >
          <X class="size-5" />
        </button>
      </div>
      <simplebar
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form action="#!">
          <TInputField
            label="User ID"
            disabled
            required
            modelValue="#TW1500004"
          />
          <div class="mb-3">
            <label class="inline-block mb-2 text-base font-medium">
              Joining Date
            </label>
            <TFlatPicker placeholder="Select date" />
          </div>
          <TInputField label="Name" placeholder="Enter name" required />
          <TInputField
            label="Email"
            type="email"
            placeholder="Enter email"
            required
          />
          <TInputField
            label="Phone Number"
            placeholder="12345 67890"
            required
          />

          <div class="mb-3">
            <label
              for="statusSelect"
              class="inline-block mb-2 text-base font-medium"
            >
              Status
            </label>
            <TSelect id="statusSelect" :items="selectItems" />
          </div>
          <TInputField label="Location" placeholder="Location" required />
          <div class="flex justify-end gap-2 mt-4">
            <TButton
              type="reset"
              color="red"
              variant="ghost"
              @click="showModal = false"
            >
              Cancel
            </TButton>
            <TButton type="submit"> Add User </TButton>
          </div>
        </form>
      </simplebar>
    </template>
  </TModal>
</template>
