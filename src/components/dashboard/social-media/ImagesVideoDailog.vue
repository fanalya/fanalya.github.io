<script lang="ts" setup>
import { computed, onMounted, ref, onBeforeUnmount, watch } from "vue";
import Choices from "choices.js";
import { X } from "lucide-vue-next";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});
const uniqueText = ref<any>(null);

onMounted(() => {});

onBeforeUnmount(() => {});
const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emit("update:modelValue", newVal);
  }
});

watch(showModal, (newVal: boolean) => {
  if (newVal) {
    setTimeout(() => {
      const uniqueTextEle: any = document.querySelector("#mentionTag");
      if (uniqueTextEle) {
        uniqueText.value = new Choices(uniqueTextEle, {
          uniqueItemText: "",
          allowHTML: true
        });
      }
    }, 200);
  } else {
    uniqueText.value.destroy();
  }
});
</script>

<template>
  <TModal v-model="showModal">
    <template #content>
      <div
        class="flex items-center justify-between px-3 py-2 border-b dark:border-zink-500"
      >
        <h5 class="text-16">Add Post Image / Video</h5>
        <TButton variant="link" color="slate" @click="showModal = false">
          <X />
        </TButton>
      </div>
      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto"
      >
        <form action="#!">
          <div class="mb-4">
            <TInputField
              required
              placeholder="Enter title"
              label="Post Title"
            />
          </div>
          <div class="mb-4">
            <TTextarea label="Description" />
          </div>
          <div class="mb-4">
            <label
              for="mentionTag"
              class="inline-block mb-2 text-base font-medium"
              >@Mention</label
            >
            <input
              class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
              id="mentionTag"
              placeholder="@Mention"
              type="text"
              value="Fashion, Clothes, Headphones"
            />
            <!-- <TInputField required placeholder="@Mention" label="@Mention" /> -->
          </div>
          <div class="mb-4">
            <label class="inline-block mb-2 text-base font-medium"
              >Images / Video</label
            >
            <TFileUploader dashed />
          </div>
          <div class="text-right flex justify-end">
            <TButton color="custom" classes="px-4 py-2"> Share Post </TButton>
          </div>
        </form>
      </div>
    </template>
  </TModal>
</template>
