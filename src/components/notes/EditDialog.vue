<script lang="ts" setup>
import { computed } from "vue";
import { X } from "lucide-vue-next";
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
        <h5 class="text-16">Add Note</h5>
        <TButton
          icon
          class="p-0"
          @click="showModal = false"
          color="red"
          variant="ghost"
        >
          <X class="size-5" />
        </TButton>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] overflow-y-auto p-5"
      >
        <form novalidate class="create-form">
          <div
            id="alert-error-msg"
            class="hidden px-4 py-3 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20"
          ></div>
          <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div class="xl:col-span-4">
              <TFlatPicker
                id="createDateInput"
                label="Create Date"
                placeholder="Select date"
              />
            </div>
            <div class="xl:col-span-4">
              <TInputField
                type="text"
                id="notesTitleInput"
                placeholder="Title"
                required
                label="Note Title"
              />
            </div>
            <div class="xl:col-span-4">
              <div>
                <label
                  for="categorySelect"
                  class="inline-block mb-2 text-base font-medium"
                  >Category</label
                >
                <select
                  class="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  data-choices
                  data-choices-search-false
                  name="categorySelect"
                  id="statusSelect"
                >
                  <option value="">Select Category</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="home">Home</option>
                  <option value="social">Social</option>
                </select>
              </div>
            </div>
            <div class="xl:col-span-12">
              <div>
                <TTextarea :rows="6" label="Description" />
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <TButton
              type="reset"
              color="red"
              variant="link"
              @click="showModal = false"
              >Cancel</TButton
            >
            <TButton type="submit" id="addNew" @click="showModal = false"
              >Add Note</TButton
            >
          </div>
        </form>
      </div>
      <!-- </div> -->
    </template>
  </TModal>
</template>
