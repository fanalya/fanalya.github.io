<script lang="ts" setup>
import { Check, X } from "lucide-vue-next"
import { ref } from "vue";

defineProps({
    isX: {
        type: Boolean,
        default: false,
    },
    isChecked: {
        type: Boolean,
        default: true,
    }
});

const addOrderModal = ref(false);
</script>

<template>
    <X class="size-4 text-red-500" v-if="isX == false" />
    <a href="#!" v-else-if="isChecked == true" @click="addOrderModal = !addOrderModal" class="text-green-500 transition-all duration-200 ease-linear hover:text-green-600">
        <Check class="size-4" />
    </a>
    <template v-else>-</template>

    <TModal v-model="addOrderModal" id="addOrderModal" location="modal-center">
        <template #content>
            <div class="flex items-center justify-between p-4 border-b dark:border-zink-300/20">
                <h5 class="text-16">Attendance Info (05 June, 2023)</h5>
                <button @click="addOrderModal = false" class="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <X class="size-5" />
                </button>
            </div>
            <div class="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                <div class="rounded-md bg-slate-100 dark:bg-zink-500/50">
                    <div class="p-3">
                        <p class="mb-1 text-slate-500 dark:text-zink-200">Check In Date & Time</p>
                        <h6>Monday, 05 June, 2023 <b>08:29 AM</b></h6>
                    </div>
                    <div class="p-5">
                        <div class="flex items-center justify-center size-24 mx-auto bg-white rounded-full dark:bg-zink-600 text-16 outline outline-white dark:outline-zink-600 outline-offset-4">
                            <b>08:15</b> <small class="ltr:ml-1 rtl:mr-1">Hrs</small>
                        </div>
                    </div>
                    <div class="p-3">
                        <p class="mb-1 text-slate-500 dark:text-zink-200">Check Out Date & Time</p>
                        <h6>Monday, 05 June, 2023 <b>06:11 AM</b></h6>
                    </div>
                </div>
            </div>
        </template>
    </TModal>
</template>