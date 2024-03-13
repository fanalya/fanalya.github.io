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
        <h5 class="text-16">Add Seller</h5>
        <TButton
          color="slate"
          variant="link"
          icon
          class="p-0"
          @click="showModal = false"
        >
          <X class="size-5" />
        </TButton>
      </div>
      <simplebar
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form action="#!">
          <div class="mb-3">
            <label
              for="companyLogo"
              class="inline-block mb-2 text-base font-medium"
            >
              Company Logo
            </label>
            <TFileUploader dashed multiple />
          </div>
          <div class="mb-3">
            <TInputField
              label="Company Name"
              placeholder="Seller name"
              required
            />
          </div>
          <div class="mb-3">
            <TInputField label="Owner Name" placeholder="Owner Name" required />
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
            <TButton type="submit"> Add Seller </TButton>
          </div>
        </form>
      </simplebar>
    </template>
  </TModal>
</template>
