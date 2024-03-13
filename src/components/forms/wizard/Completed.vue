<script lang="ts" setup>
import { CheckCircle, LogIn, MoveLeft } from "lucide-vue-next";

const emit = defineEmits(["onStepChange"]);
</script>
<template>
  <div class="px-4 py-6 mx-auto text-center lg:w-2/3">
    <CheckCircle
      class="block size-10 mx-auto mb-4 text-green-500 fill-green-100 dark:fill-green-500/20 animate-icons"
    />
    <h5 class="mb-2">Registration Successfully 🎉</h5>
    <p class="mb-5 text-slate-500 text-15">
      We are thrilled to inform you that your registration has been successfully
      processed! Welcome to our community. Thank you for choosing us, and we
      look forward to serving you. Stay connected and enjoy your journey with
      us!
    </p>
    <div class="flex justify-center">
      <TButton>
        <span class="align-middle">Try Login</span>
        <LogIn class="inline-block h-4 ltr:ml-1 rtl:mr-1" />
      </TButton>
    </div>
  </div>
  <div class="mt-4">
    <TButton @click="emit('onStepChange', 'address')" color="light">
      <MoveLeft class="h-4 mr-1 rtl:rotate-180" /> Previous
    </TButton>
  </div>
</template>
