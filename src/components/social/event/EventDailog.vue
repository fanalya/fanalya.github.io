<script lang="ts" setup>
import { computed } from "vue";
import { X } from 'lucide-vue-next'
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
})

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
            <div class="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                <div class="flex items-center justify-between p-4 border-b dark:border-zink-500 py-3">
                    <h5 class="text-16">Create a Event</h5>
                    <TButton icon class="p-0" @click="showModal = false" color="slate" variant="ghost">
                        <X class="size-5" />
                    </TButton>
                </div>
                <div class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!">
                        <div class="mb-4">
                            <TInputField type="text" placeholder="Event title" id="eventTitle" label="Title" />
                        </div>
                        <div class="mb-4">
                            <TFlatPicker type="date" id="eventDateInput" label="Create Date" placeholder="Select Date"
                                data-provider="flatpickr" data-date-format="d M, Y" />
                        </div>
                        <div class="mb-4">
                            <TFlatPicker hide-details label="Event Date" placeholder="Select Time" :config="{
                                noCalendar: true,
                                enableTime: true
                            }" />
                        </div>
                        <div class="mb-4">
                            <TInputField type="number" placeholder="0" id="totalSeat" label="Total Seat" />
                        </div>
                        <div class="mb-4">
                            <label for="statusSelect" class="inline-block mb-2 text-base font-medium">Status</label>
                            <select
                                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                id="statusSelect" name="statusSelect" data-choices data-choices-search-false>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Draft">Draft</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                        <div class="text-right flex justify-end">
                            <TButton>
                                Create Event
                            </TButton>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </TModal>
</template>