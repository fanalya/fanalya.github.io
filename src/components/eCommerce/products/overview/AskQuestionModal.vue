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
      <div class="bg-white shadow rounded-md dark:bg-zink-600">
        <div
          class="flex items-center justify-between py-3 px-5 border-b dark:border-zink-500"
        >
          <h5 class="text-16">Ask a Question</h5>
          <TButton
            icon
            class="p-0"
            variant="ghost"
            color="slate"
            @click="showModal = false"
          >
            <X class="size-5"></X>
          </TButton>
        </div>
        <div
          class="max-h-[calc(theme('height.screen')_-_180px)] px-5 py-3 overflow-y-auto"
        >
          <form action="#!">
            <TInputField
              type="url"
              placeholder="Your name"
              required
              label="Name"
            />
            <TInputField
              type="email"
              placeholder="Your email"
              required
              label="Email"
            />
            <TTextarea
              id="messageInput"
              placeholder="Enter Description"
              label="Message"
              required
            />
            <div class="flex justify-end gap-2 mt-4">
              <TButton color="red" variant="link" @click="showModal = false">
                Cancel
              </TButton>
              <TButton type="submit"> Send Question </TButton>
            </div>
          </form>
        </div>
      </div>
    </template>
  </TModal>
</template>
