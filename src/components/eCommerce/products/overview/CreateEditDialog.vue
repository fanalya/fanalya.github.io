<script lang="ts" setup>
import { computed } from "vue";
import { X } from "lucide-vue-next";
import { ratingSelect } from "@/components/eCommerce/products/overview/utils";

const emit = defineEmits(["update:modelValue"]);

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
  <TModal v-model="showModal" size="x-large">
    <template #content>
      <div
        class="flex items-center justify-between px-5 py-3 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Review</h5>
        <TButton
          icon
          color="red"
          variant="link"
          class="text-slate-400 hover:text-red-500 p-0"
          @click="showModal = false"
        >
          <X class="size-5" />
        </TButton>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form action="#!">
          <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div class="xl:col-span-4">
              <label class="inline-block mb-2 text-base font-medium">
                Create Date
              </label>
              <TFlatPicker />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                label="Give your review a title"
                required
                placeholder="Title"
              />
            </div>
            <div class="xl:col-span-4">
              <div>
                <label class="inline-block mb-2 text-base font-medium">
                  Rating
                </label>
                <TMultiSelect :options="ratingSelect" />
              </div>
            </div>
            <div class="xl:col-span-12">
              <TTextarea
                label="Your review"
                placeholder="Enter Description"
                :rows="6"
              />
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <TButton color="red" variant="link" @click="showModal = false">
              Cancel
            </TButton>
            <TButton type="submit"> Add Review </TButton>
          </div>
        </form>
      </div>
    </template>
  </TModal>
</template>
