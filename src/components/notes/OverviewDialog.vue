<script lang="ts" setup>
import { computed } from "vue";
import { X, User2, Calendar } from "lucide-vue-next";
const emit = defineEmits(["update:modelValue", "onEdit"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const dropdownData = ["Personal", "Business", "Social", "Home"];

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
  <TModal v-model="showModal" size="large">
    <template #content>
      <div
        class="flex items-center justify-between px-5 py-3 border-b dark:border-zink-500"
      >
        <div class="flex items-center gap-2">
          <TList
            :items="dropdownData"
            placement="bottom-start"
            class="relative"
          >
            <template #title>
              <div
                class="size-4 mt-1 border border-dashed rounded-full dropdown-toggle shrink-0 bg-sky-100 border-sky-500 dark:bg-sky-500/20"
              />
            </template>
          </TList>
          <h5 class="text-16 mt-1">Weekend Plan</h5>
        </div>
        <TButton
          color="red"
          icon
          class="p-0"
          variant="link"
          @click="showModal = false"
        >
          <X class="size-5" />
        </TButton>
      </div>

      <div
        class="max-h-[calc(theme('height.screen')_-_180px)] overflow-y-auto p-5"
      >
        <div class="flex items-center gap-2 mb-4">
          <h6 class="text-sm font-normal grow">
            <User2
              class="inline-block size-4 mr-1 align-middle text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"
            /><span class="align-middle">Admin</span>
          </h6>

          <h6 class="text-sm font-normal shrink-0">
            <Calendar
              class="inline-block size-4 mr-1 align-middle text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"
            />
            <span class="align-middle">21 Sept, 2023</span>
          </h6>
        </div>
        <p class="mb-2 text-slate-500 dark:text-zink-200">
          Every vacation has its own special vibe and it all starts with where
          you stay.
        </p>
        <p class="mb-2 text-slate-500 dark:text-zink-200">
          We present you with an ever growing exclusive collection of private
          residences, meticulously hand picked and personally inspected to the
          tee to fit almost every interest in popular travel destinations. These
          residences are aided with a Pre Rental Advisor with first hand
          knowledge of these properties and their surrounding.
        </p>
        <p class="text-slate-500 dark:text-zink-200">
          Local people define a holiday, are principally warm, caring, ethical
          and well-intentioned. All this a mere phone call or click away, backed
          by the expertise of a decade old reputed company, inspiring you to
          live life's best moments more easily and often than you ever thought
          possible.
        </p>
        <div class="flex justify-end gap-2 mt-4">
          <TButton color="red" variant="ghost" @click="showModal = false">
            Cancel
          </TButton>
          <TButton
            data-modal-target="addNotesModal"
            data-modal-close="overviewNotesModal"
            @click="
              showModal = false;
              emit('onEdit');
            "
            >Edit Note</TButton
          >
        </div>
      </div>
    </template>
  </TModal>
</template>
