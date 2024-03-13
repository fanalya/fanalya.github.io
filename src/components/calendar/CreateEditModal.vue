<script lang="ts" setup>
import { computed, ref } from "vue";
import { categories } from "@/components/calendar/utils";
import { X } from "lucide-vue-next";

const emit = defineEmits(["update:modelValue", "handleSubmit"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  dataEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {}
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

const event = ref(props.data);

const handleSubmit = () => {
  emit("handleSubmit", event.value);
};
</script>

<template>
  <TModal v-model="showModal" location="modal-center">
    <template #content>
      <div
        class="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <div
          class="flex items-center justify-between p-4 border-b dark:border-zink-500"
        >
          <h5 class="text-16" id="modal-title">
            {{ dataEdit ? "Edit Event" : "Add Event" }}
          </h5>
          <button
            id="eventModal-close"
            @click="showModal = false"
            class="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
          >
            <X class="size-5" />
          </button>
        </div>
        <div
          class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
        >
          <form
            @submit.prevent="handleSubmit"
            class="needs-validation"
            name="event-form"
            id="form-event"
            autocomplete="off"
          >
            <div class="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div class="xl:col-span-12">
                <label
                  for="event-title"
                  class="inline-block mb-2 text-base font-medium"
                  >Event Name</label
                >
                <input
                  type="text"
                  id="event-title"
                  v-model="event.title"
                  class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Event name"
                  required
                />
              </div>
              <div class="xl:col-span-12">
                <label
                  for="event-category"
                  class="inline-block mb-2 text-base font-medium"
                  >Category</label
                >
                <select
                  required
                  v-model="event.category"
                  class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="event-category"
                  id="event-category"
                >
                  <option
                    v-for="option in categories"
                    :key="option.value"
                    :value="`${option.value}`"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-end gap-2 mt-4">
              <TButton
                variant="ghost"
                color="red"
                type="button"
                @click="showModal = false"
                >Cancel</TButton
              >
              <TButton color="custom" type="submit" id="btn-save-event">{{
                dataEdit ? "Update Event" : "Add Event"
              }}</TButton>
            </div>
          </form>
        </div>
      </div>
    </template>
  </TModal>
</template>
