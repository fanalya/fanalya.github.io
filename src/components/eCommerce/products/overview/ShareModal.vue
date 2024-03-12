<script lang="ts" setup>
import { computed } from "vue";
import { X, Facebook, Instagram, Mail, Dribbble } from "lucide-vue-next";
const emit = defineEmits(["update:modelValue", "handleSubmit"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const shareOptions = [Facebook, Instagram, Mail, Dribbble];

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
  <TModal v-model="showModal" size="x-small">
    <template #content>
      <div
        class="flex items-center justify-between px-5 py-3 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Share</h5>
        <TButton
          icon
          class="p-0"
          variant="ghost"
          color="slate"
          @click="showModal = false"
        >
          <X class="size-5" />
        </TButton>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <TInputField
          :modelValue="'https://themesdesign.in/tailwick'"
          type="url"
          placeholder="Copy link"
          required
          label="Copy link"
          readonly
        />
        <h6 class="mb-3 text-15">Share More</h6>
        <ul class="flex gap-2 item-center">
          <li v-for="item in shareOptions">
            <a
              href="#!"
              class="flex items-center justify-center transition-all duration-200 ease-linear rounded-md size-9 text-slate-500 bg-slate-100 hover:bg-custom-100 hover:text-custom-500 dark:text-zink-200 dark:bg-zink-500 dark:hover:bg-zink-500 dark:hover:text-custom-500"
            >
              <component :is="item" class="size-4" />
            </a>
          </li>
        </ul>
      </div>
    </template>
  </TModal>
</template>
